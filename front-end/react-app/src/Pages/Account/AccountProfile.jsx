import Header from "../../Components/Header";
import Footing from "../../Components/Footing";
import AccountSidebar from "../../Components/AccountSidebar";
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const AccountProfile = () => {


    const request = {account: localStorage.getItem("username")}

    const [profile, setProfile] = useState({username: "", email_address : "", })   
    useEffect(() => {
        const fetchData = async () => {
            try {       
            const response = await axios.put('http://127.0.0.1:8000/accounts/detail', request, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            console.log(response.data.profile)
            setProfile(response.data.profile)

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
                <span className="text-5xl text-cat-primary font-main">My Profile</span>
                <div className="mt-5 rounded-3xl h-auto p-10 py-14 bg-cat-primary/30 ">
                    <div className="bg-cat-primary p-8 mt-2 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 gap-3 grid-rows-3 rounded-2xl text-lg w-full h-auto items-center">
                    <div className="col-span-1  px-3 text-white text-end"></div>
                    <div className="lg:col-span-3 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Aaron Macias</div>
                    <div className="col-span-1 px-3 text-white text-end">Age</div>
                    <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary  text-cat-details text-sm rounded-lg bg-cat-secondary">21</div>
                    <div className="col-span-1 px-3 text-white text-end">Email</div>
                    <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">{profile.email_address}</div>
                    <div className="col-span-1 px-3 text-white text-end">Facebook</div>
                    <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Aaron Macias</div>
                    <div className="col-span-1  px-3 text-white text-end">Address</div>
                    <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Bangkal, Davao City</div>
                    </div>
                </div>
                </div>

            </div>
        </div>
        <Footing/>


    
    </> );
}
 
export default AccountProfile;