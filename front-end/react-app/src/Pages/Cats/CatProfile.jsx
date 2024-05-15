import React from 'react';
import Header from "../../Components/Header";
import Footing from "../../Components/Footing";
import empty_logo from '../../assets/empty_paw.svg';
import catpic from '../../assets/mocha_sample.jpeg'
import axios from 'axios';
import { useState, useEffect} from "react";


const CatProfile = (props) => {

    const [cat, setCat] = useState({CatName: "", CatBirthday: "", CatBreed: "", CatColor: "", CatDescription: "", CatDislikes : "", CatGender: "", CatImage: "", CatLikes: "", CatPersonality: ""})
    const [owner, setOwner] = useState({username: "", email_address:""})
    const request = { id: localStorage.getItem('cat')};
    

    useEffect(() => {
    const fetchData = async () => {
        try {
            // Make the Axios request inside the function
        
        const response = await axios.put('http://127.0.0.1:8000/catprofile/', request, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response.data);
        setCat(response.data.cat)
        setOwner(response.data.owner)
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
    <div aria-label="content" className="h-auto py-10 font-main flex lg:flex-row md:flex-col sm:flex-col lg:gap-10 md:gap-3 sm:gap-3 justify-center bg-cat-secondary w-full">
        <div className="p-10 flex flex-col gap-2 lg:w-2/4 md:w-full sm:w-full">
            
            {/* CAT PROFILE */}
            <div className="flex flex-row items-end justify-between">
            <span className="text-5xl text-cat-primary">Cat Profile</span>
            <div className="flex flex-row gap-2">

            </div>
            </div>


            <div className="bg-cat-primary p-8 mt-4 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 gap-3 grid-rows-6 rounded-2xl text-lg w-full h-auto items-center">
                <div className="col-span-1  px-3 text-white text-end">Name</div>
                <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary"> {cat.CatName}</div>
                <div className="col-span-1 px-3  text-white text-end">Birthdate</div>
                <div className="lg:col-span-1 w-fit md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary  text-cat-details text-sm rounded-lg bg-cat-secondary">{cat.CatBirthday}</div>
                <div className="col-span-1 px-3 text-white text-end">Age</div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">{cat.CatAge}</div>
                <div className="col-span-1 px-3 text-white text-end">Gender</div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">{cat.CatGender}</div>
                <div className="col-span-1 px-3 text-white text-end">Breed</div>
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">{cat.CatBreed}</div>
                <div className="col-span-1 px-3 text-white text-end">Color</div>
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">{cat.CatColor}</div>
                <div className="col-span-1  px-3 text-white text-end">Address</div>
                <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">address </div>
                <div className="col-span-1  px-3 text-white text-end">Personality</div>
                <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">{cat.CatPersonality}</div>
                <div className="col-span-1  px-3 text-white text-end">Likes</div>
                <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">{cat.CatLikes}</div>
                <div className="col-span-1  px-3 text-white text-end">Dislikes</div>
                <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">{cat.CatDislikes}</div>
                
            </div>

            {/* OWNER PROFILE */}
            <div className="flex flex-row items-end justify-between mt-10">
            <span className="text-4xl text-cat-primary">Owner Profile</span>
            </div>


            <div className="bg-cat-primary p-8 mt-2 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 gap-3 grid-rows-3 rounded-2xl text-lg w-full h-auto items-center">
                <div className="col-span-1  px-3 text-white text-end">Name</div>
                <div className="lg:col-span-3 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">{owner.username}</div>
                <div className="col-span-1 px-3 text-white text-end">Age</div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary  text-cat-details text-sm rounded-lg bg-cat-secondary">21</div>
                <div className="col-span-1 px-3 text-white text-end">Email</div>
                <div className="lg:col-span-2  w-fit md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">{owner.email_address}</div>
                <div className="col-span-1 px-3 text-white text-end">Facebook</div>
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Aaron Macias</div>
                <div className="col-span-1  px-3 text-white text-end">Address</div>
                <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Bangkal, Davao City</div>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-full bg-cat-secondary lg:p-10 md:px-20 sm:px-20 flex flex-col gap-6">
        <div className = "lg:w-full lg:scale-100 md:scale-75 sm:scale-75 aspect-square overflow-hidden rounded-full lg:mb-5 md:mb-2"> 
            <img aria-label='cat-pic' src={`http://127.0.0.1:8000/${cat.CatImage}`} alt="sample cat" className="w-full"/>
        </div>
        
        <span className="text-5xl text-cat-primary w-full text-center">{cat.CatName}</span>
        <div className="w-full font-secondary text-cat-details text-justify font-bold">
        {cat.CatPersonality}
        </div>
        </div>
    </div>

    <Footing/>
    
    </> );
}
 
export default CatProfile;