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
    
    useEffect(() => {
        // Define an async function to fetch data
        const fetchData = async () => {
            try {
                // Make the Axios request inside the function
                const response = await axios.get('http://127.0.0.1:8000/cats/');
                // Extract image URLs from the response data
                const imageUrls = response.data.map(item => item.CatImage);
                // Update state with the image URLs
                setImages(imageUrls);
                setCatDetails(response.data)
                console.log(imageUrls);
                console.log(response.data)
            } catch (error) {
                // Handle errors
                console.error('Error fetching images:', error);
            }
        };
        // Call the async function inside useEffect
        fetchData();
    }, []);
    return ( <>
    <Header/>
    
    <div>
        <Banner/>
        <WeeklyCats/>
        <div aria-label="content" className="flex lg:flex-row sm:flex-col h-auto bg-cat-secondary w-full xl:min-w-[1530px] lg:min-w-[1200px] md:min-w-[768px]">
            <div className="lg:w-1/6 sm:w-full p-10 xl:px-10 sm:max-xl:px-5 flex flex-col sm:items-center lg:items-start gap-2 ">
            <Filter name="Breed" drop="1"/>
            <Filter name="Color" drop="1"/>
            <Filter name="Liked" drop="1"/>
            </div>
            <div className="w-full h-auto p-10">
            <span className="text-6xl text-cat-primary font-main">The Cats</span>
            <div className="mt-10 rounded-3xl h-auto p-10 py-14 bg-cat-primary/30">

                <CatGallery/>

            </div>
            </div>
        </div>
    </div>
    
    
    {/* <div>
        
    { //access catdetail by catDetail.key    Look at console.log for JSON keys
    catDetails.map(catDetail => (
        <div className = "flex">
            <img key={catDetail.CatImage} className = "w-40" src={`http://127.0.0.1:8000/${catDetail.CatImage}`} alt="Image" />
            <h2> {catDetail.CatName}</h2>
        </div>
        ))
    }

    </div> */}

    <Footing/>
    </>) }
 
export default CatsPage
;