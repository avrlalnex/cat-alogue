import Header from "../Header";
import Footing from "../Footing";
import "./CatIn.css";
import { useState, useEffect} from "react";
import axios from 'axios';
import { TextInput, Select, FileInput, Textarea} from "flowbite-react"

const CatOut = () => {

    const [images, setImages] = useState([]);
    
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
                console.log(imageUrls);
            } catch (error) {
                // Handle errors
                console.error('Error fetching images:', error);
            }
        };
        // Call the async function inside useEffect
        fetchData();
    }, []);

       
    
    return(

        <div>
        <Header/>

            {images.map(imageUrl => (
                <img key={imageUrl} src={`http://127.0.0.1:8000/${imageUrl}`} alt="Image" />
            ))}
        </div>
    )
}

export default CatOut;