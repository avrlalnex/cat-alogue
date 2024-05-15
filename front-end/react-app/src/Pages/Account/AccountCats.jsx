import Header from "../../Components/Header";
import Footing from "../../Components/Footing";
import CatGallery from "../../Components/CatGallery";
import AccountSidebar from "../../Components/AccountSidebar";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Dropdown } from "flowbite-react";




const AccountCats = () => {

    const request = {account: localStorage.getItem("username")}
    const [accountCats, setAccountCats] = useState([{}])
    const [filter, setFilter] = useState('non-adopted');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const handleFilter = (() => {
        axios.put('http://127.0.0.1:8000/catfilter/', {filter: filter}).then((response) => {
            setAccountCats(response.data)
        })
  })

    useEffect(() => {
        console.log("hello")
        const fetchData = async () => {
            try {       
                const response = await axios.get('http://127.0.0.1:8000/catprofile/', {
                    params: {
                        // Add your query parameters here
                        param1: request.account
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data)
                setAccountCats(response.data)
          } catch (error) {
            // Handle errors
            console.error('Error making PUT request:', error);
          }
        };
        // Call the async function inside useEffect
        fetchData();
    }, [])


    return ( <>
    <Header/>
    <div className="bg-cat-secondary h-auto flex flex-row justify-center font-main">
        <div aria-label="content" className="h-auto xl:w-5/6 sm:max-lg:2/4 flex lg:flex-row sm:flex-col-reverse p-20">
            <AccountSidebar />

            <div aria-label="details" className="w-full h-auto">
            <div className="flex flex-row items-end justify-between gap-8">
            <span className="text-5xl text-cat-primary">My Cats</span> 
            <div>

        <div className = "flex gap-2">
        <select className = "w-fit cursor-pointer text-lg rounded-full border-0 bg-white text-center flex px-5 py-2 text-cat-primary font-main" id="cat-filter" value={filter} onChange={handleFilterChange}>
            <option value="adopted">Adopted</option>
            <option value="non-adopted">Non-Adopted</option>
        </select>
        <button onClick = {handleFilter}className = "bg-white p-2 rounded-md w-7/12"> Filter</button>
        </div>

      <div>
        {filter === 'adopted' ? (
          <p></p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
            <a href="/cat/add"><button className="bg-cat-primary shadow-md px-10 py-2 text-lg w-auto text-white rounded-full font-main">Add Cat</button></a>
            </div>
            <div className="mt-5 rounded-3xl h-auto p-10 py-14 bg-cat-primary/30 ">
                <CatGallery adoption = {true} accountCats = {accountCats} profile="1" />
            </div>
            </div>

        </div>
    </div>
    <Footing/>
    </> );
}
 
export default AccountCats;