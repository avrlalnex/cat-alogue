import Header from "../../Components/Header";
import Footing from "../../Components/Footing";
import CatGallery from "../../Components/CatGallery";
import AccountSidebar from "../../Components/AccountSidebar";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const AccountFave = () => {

    const postForm = {
        user : localStorage.getItem("username")
    }
    

    const request = {account: localStorage.getItem("username")}
    const [accountCats, setAccountCats] = useState([{}])
    const [favorites, setFavorites] = useState([])
    const [catId, setCatId] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            try {       
                const userFavorites = await axios.post('http://127.0.0.1:8000/favorites/', postForm )
                const response = await axios.get('http://127.0.0.1:8000/cats/', {
                    params: {
                        // Add your query parameters here
                        param1: request.account
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                let catsID = []

                setAccountCats(response.data)

                console.log(response.data)
                console.log(userFavorites.data)
                response.data.map((cat) => {
                    if(userFavorites.data.includes(cat.id)){
                        catsID.push(cat)
                    }
                })
                console.log(catsID)
                setCatId(catsID)
                



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
        <div aria-label="content" className=" h-auto xl:w-5/6 sm:max-lg:2/4 flex lg:flex-row sm:flex-col-reverse p-20">
            <AccountSidebar />

            <div aria-label="details" className="w-full h-auto">
            <span className="text-5xl text-cat-primary font-main">Favorites</span>
            <div className="mt-5 rounded-3xl h-auto p-10 py-14 bg-cat-primary/30 ">
                <CatGallery favoritePage = {true} accountCats = {catId} condition = {true} profile="1"/>
            </div>
            </div>

        </div>
    </div>
    <Footing/>


    </> );


}
 
export default AccountFave;