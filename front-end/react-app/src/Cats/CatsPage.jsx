import { useState, useEffect} from "react";
import axios from 'axios';
import Header from '../Header';
import Footing from '../Footing';
import Banner from "./Banner";
import WeeklyCats from "./WeeklyCats";
import Filter from "./Filter";
import Catbox from "./CatBox";
import CatGallery from "./CatGallery";


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
        <div className="flex lg:flex-row sm:flex-col h-auto bg-cat-secondary">
            <div className="lg:w-1/6 sm:w-full p-10 flex flex-col sm:items-center lg:items-start gap-2 ">
            <Filter name="Breed" drop="1"/>
            <Filter name="Color" drop="1"/>
            <Filter name="Liked" drop="1"/>
            </div>
            <div className="w-full h-auto p-10">
            <span className="text-6xl text-cat-primary font-main">The Cats</span>
            <div className="mt-10 rounded-3xl h-auto p-10 py-14 bg-cat-primary/30 ">
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