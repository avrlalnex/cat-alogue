import { useState, useEffect} from "react";
import React from 'react';
import axios from 'axios';
import Header from "../../Components/Header";
import Footing from "../../Components/Footing";
import Banner from "../../Components/Banner";
import WeeklyCats from "../../Components/WeeklyCats";
import Filter from "../../Components/Filter";
import Catbox from "../../Components/CatBox";
import CatGallery from "../../Components/CatGallery";




const CatsPage = () => {
    const [images, setImages] = useState([]);
    const [catDetails, setCatDetails] = useState([])
    const [favorites, setFavorites] = useState([])

    const postForm = {
        user : localStorage.getItem("username")
    }
    
    useEffect(() => {
        // Define an async function to fetch data
        const fetchData = async () => {
            try {
                // Make the Axios request inside the function
                const response = await axios.get('http://127.0.0.1:8000/cats/');
                const userFavorites = await axios.post('http://127.0.0.1:8000/favorites/', postForm )
                // Extract image URLs from the response data
                const imageUrls = response.data.map(item => item.CatImage);
                // Update state with the image URLs
                setImages(imageUrls);
                setCatDetails(response.data)
                setFavorites(userFavorites.data)
                console.log(response.data)
            } catch (error) {
                // Handle errors
                console.error('Error fetching images:', error);
            }
        };
        // Call the async function inside useEffect
        fetchData();
    }, [])


    const handleFavorite = (id) => {
        const request = {user: localStorage.getItem("username"), catID: id}
        const userFavorites = axios.put('http://127.0.0.1:8000/favorites/', request)
        console.log(catDetails)
    }

    const handleCat= (id) => {
        //localStorage.setItem("cat", id)
        console.log(id);
    }

    
    return ( <>
    <Header/>
    
    <div>
        <Banner/>
        <WeeklyCats/>
        <div className="flex lg:flex-row sm:flex-col h-auto bg-cat-secondary">
            <div className="lg:w-1/6 sm:w-full p-10 flex flex-col sm:items-center lg:items-start gap-2 ">
            <Filter name="Breed" drop="1"/>
            <Filter name="Color" drop="1"/>
            <Filter name="Liked" drop="1"/>
            </div>
            <div className="w-full h-auto p-10">
            <span className="text-6xl text-cat-primary font-main">The Cats</span>
            <div className="mt-10 rounded-3xl h-auto p-10 py-14 bg-cat-primary/30 ">
                <div className="grid grid-cols-4 gap-7 place-items-center justify-items-center pl-5 auto-cols-max">
                
        
                { //access catdetail by catDetail.key    Look at console.log for JSON keys
                catDetails.map(catDetail => (
                        <Catbox featured = "0" detail = {handleCat(catDetail.id)} click = { () => {handleFavorite(catDetail.id)} } favorite = "true" condition = {favorites.includes(catDetail.id)} name = {catDetail.CatName} image = {`http://127.0.0.1:8000/${catDetail.CatImage}`}/>
                  
                    ))
                }

                </div>
            </div>
            </div>
        </div>
    </div>
    
    
   

    <Footing/>
    </>) }
 
export default CatsPage
;