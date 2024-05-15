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
    const [allCats, setAllCats] = useState([])

    const [filter, setFilter] = useState('All');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };
    const handleFilter = (() => {
        console.log(filter)
        let newCatArray = []
        if(filter == 'Liked'){
        allCats.map((cat) => {
            if (favorites.includes(cat.id)){
                newCatArray.push(cat)
            }
        })}
        else if(filter == 'Not Liked'){
            allCats.map((cat) => {
                if (favorites.includes(cat.id) == false){
                    newCatArray.push(cat)
                }
            })
        }
        else if(filter == 'All'){
            newCatArray = allCats
        }
        setCatDetails(newCatArray)
    })

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
                setAllCats(response.data)
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
        localStorage.setItem("cat", id)
    }

    
    return ( <>
    <Header/>
    
    <div>
        <Banner/>
        <WeeklyCats adoption = {false} catDetails = {catDetails}/>
        <div className="flex lg:flex-row sm:flex-col h-auto bg-cat-secondary">
            <div className="lg:w-1/6 sm:w-full p-10 flex flex-col sm:items-center lg:items-start gap-2 ">
            
            </div>
            <div className="w-full h-auto p-10">
            <div className = "flex gap-2">
            <span className="text-6xl text-cat-primary font-main">The Cats</span>
            
                <select className = "ml-4 w-2/12 cursor-pointer text-lg rounded-full border-0 bg-white text-center flex px-5 py-2 text-cat-primary font-main" id="cat-filter" value={filter} onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="Liked">Liked</option>
                    <option value="Not Liked">Not Liked</option>
                    
                </select>
                <button onClick = {handleFilter}className = "bg-white p-2 rounded-md w-1/12"> Filter</button>
                </div>
            <div className="mt-10 rounded-3xl h-auto p-10 py-14 bg-cat-primary/30 ">
                <div className="grid grid-cols-4 gap-7 place-items-center justify-items-center pl-5 auto-cols-max">
                
        
                { 
  // Log the catDetail object and its keys
            catDetails.map(catDetail => {
                console.log(catDetail.id);
                console.log(favorites.includes(catDetail.id))

                return (
                <Catbox 
                    featured="0"
                    id = {catDetail.id}
                    condition={favorites.includes(catDetail.id)}
                    click={() => {handleFavorite(catDetail.id)}}
                    favorite="true"
                    name={catDetail.CatName}
                    image={`http://127.0.0.1:8000/${catDetail.CatImage}`}
                />
                );
            })
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