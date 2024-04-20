import { useState, useEffect} from "react";
import axios from 'axios';
import Header from '../Header';
import Footing from '../Footing';
import Banner from "./Banner";
import WeeklyCats from "./WeeklyCats";
import Filter from "./Filter";
import Catbox from "./CatBox";


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

    
    return ( <>
    <Header/>
    
    <div>
        <Banner/>
        <WeeklyCats/>
        <div className="flex flex-row h-auto bg-cat-secondary">
            <div className="w-1/6 p-10 flex flex-col gap-2 ">
            <Filter name="Breed"/>
            <Filter name="Color"/>
            <Filter name="Liked"/>
            </div>
            <div className="w-full h-auto p-10">
            <span className="text-6xl text-cat-primary font-main">The Cats</span>
            <div className="mt-10 rounded-3xl h-auto p-10 py-14 bg-cat-primary/30 ">
                <div className="grid grid-cols-4 gap-7 place-items-center justify-items-center pl-5 auto-cols-max">
                
        
                { //access catdetail by catDetail.key    Look at console.log for JSON keys
                catDetails.map(catDetail => (
                        <Catbox featured = "0" click = { () => {handleFavorite(catDetail.id)} } favorite = "true" condition = {favorites.includes(catDetail.id)} name = {catDetail.CatName} image = {`http://127.0.0.1:8000/${catDetail.CatImage}`}/>
                  
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