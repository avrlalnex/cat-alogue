import empty_logo from '../assets/empty_paw.svg'
import filled_logo from '../assets/accepted_paw.svg'
import React, { useState } from 'react'
import sample_pic from '../assets/mocha_sample.jpeg'
import './CatBox.css'

const Catbox = (props) => {

    const [paw, setPaw] = useState(empty_logo)

    const loadPaw = () => {
        if(props.favorite == "true")
            setPaw(filled_logo)
        else
            setPaw(empty_logo)
    }

    const handleImageClick = () => {
        if(paw == empty_logo)
            setPaw(filled_logo)
        else
            setPaw(empty_logo)

      };

    return ( 
        <div>
            {parseInt(props.featured)?
            <div className = "flex flex-col justify-center items-center h-auto w-64 bg-cat-secondary rounded-3xl m-10 ml-4 p-4">
            <img onClick = {handleImageClick} className = "relative size-9 ml-auto orange-paw" src = {paw} /> 

            <div className = "relative w-10/12 h-48 overflow-hidden rounded-full"> 
                <img className = "w-full h-auto" src = {sample_pic}></img>
            </div>
            <h1 className = "text-2xl text-center text-cat-primary mt-4 h-2 mb-6">{props.name}</h1>
            
            <button className = "w-24 h-7 text-xs rounded-2xl bg-cat-primary text-white mt-2">Learn More</button>


            </div>
            :
            <div className = "flex flex-col font-main justify-center items-center h-auto w-auto lg:scale-125 md:scale-100 bg-cat-primary rounded-3xl m-10 ml-4 p-4 pb-5">
            <img onClick = {handleImageClick} className = "relative size-9 ml-auto" src = {paw} /> 

            <div className="w-full px-3">
            <div className = "w-full min-w-40 aspect-square overflow-hidden rounded-full"> 
                <img className = "w-full h-auto" src = {sample_pic}></img>

            </div>
            </div>
            <h1 className = "text-2xl text-center text-white mt-4 h-2 mb-6">{props.name}</h1>
            
            <a href="/cat/view"><button className="w-24 h-7 text-xs rounded-2xl bg-cat-secondary text-cat-primary mt-2">Learn More</button></a>


            </div>
            }
            



        </div>


     );
}
 
export default Catbox;