import Catbox from "./CatBox";
import { useState, useEffect } from "react";
import axios from "axios";

const CatGallery = (props) => {

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

        {parseInt(props.profile)?
        <div className="grid h-auto sm:grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-7 place-items-center justify-items-center pl-5 auto-cols-max">
            <Catbox featured="0" favorite="false" name="Mocha"/>
            <Catbox featured="0" favorite="false" name="Mocha"/>
            <Catbox featured="0" favorite="false" name="Mocha"/>
            <Catbox featured="0" favorite="false" name="Mocha"/>
            <Catbox featured="0" favorite="false" name="Mocha"/>
            <Catbox featured="0" favorite="false" name="Mocha"/>
         {/* { //access catdetail by catDetail.key    Look at console.log for JSON keys
        catDetails.map(catDetail => (
            <Catbox featured="0" favorite="false" name={catDetail.CatName} image={`http://127.0.0.1:8000/${catDetail.CatImage}`}/>
        //     <div className = "flex">
        //     <img key={catDetail.CatImage} className = "w-40" src={`http://127.0.0.1:8000/${catDetail.CatImage}`} alt="Image" />
        //     <h2> {catDetail.CatName}</h2>
        // </div>
        ))
        } */}
        </div>:
        <div className="grid h-auto sm:grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-7 place-items-center justify-items-center pl-5 auto-cols-max">
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        </div>    
        }
        {/* note for later dev: 
        props.show == "all" -> all cats
        == id -> specific to account
        */}
    </> );
}
 
export default CatGallery;