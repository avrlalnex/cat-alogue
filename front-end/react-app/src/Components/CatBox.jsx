import empty_logo from '../assets/empty_paw.svg'
import filled_logo from '../assets/accepted_paw.svg'
import React, { useState , useEffect} from 'react'
import sample_pic from '../assets/mocha_sample.jpeg'
import './CatBox.css'
import axios from 'axios';


const Catbox = (props) => {

    useEffect( ()=> {props.condition ? setPaw(filled_logo) : setPaw(empty_logo)}, [props.condition])


    const handleAdoption = (event) => {
        if (window.confirm('Are you sure this cat has been adopted?')) {
            event.preventDefault();
            //makes post request to api
            axios.post('http://127.0.0.1:8000/catprofile/', {id: props.id})
            .then(response => {console.log("success", response.data);})
            .catch(error => {console.log(error)})
        } else {
            // Code to execute if the user clicks Cancel
            console.log('User canceled');
        }
       
      }
    

    
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


      const handleView = () => {
        localStorage.setItem('cat', props.id)
        console.log(localStorage.getItem('cat'))
      }

      const move = () => {setTimeout(() => {
        window.location.href = '/cat/view'; // Navigate to the new page after the delay
      }, 0)} // 1000ms = 1 second delay
        
      const handleBoth = () => {
        handleView()
        move()
      }
    return ( 
        <div>
            {parseInt(props.featured)?

            <div aria-label='catbox' className = "flex flex-col justify-center items-center h-auto w-64 bg-cat-secondary lg:scale-100 sm:scale-125 rounded-3xl m-10 ml-4 p-4">
             <img onClick = {() => {handleImageClick()}} className = "relative size-9 ml-auto orange-paw cursor-pointer" src = {paw} /> 
            <div className = "relative w-10/12 h-48 overflow-hidden rounded-full"> 
                <img className = "w-full h-auto" src = {sample_pic} aria-label='cat_pic'></img>
            </div>
            <h1 className = "text-2xl text-center text-cat-primary mt-4 h-2 mb-6">{props.name}</h1>
            
            <button className = "w-24 h-7 text-xs rounded-2xl bg-cat-primary text-white mt-2 hover:bg-cat-secondary hover:text-cat-primary hover:shadow-md hover:border hover:border-cat-primary">Learn More</button>


            </div>
            :

            <div aria-label='catbox' className = "flex flex-col font-main justify-center items-center h-11/12 w-11/12 xl:scale-110 lg:scale-125 md:scale-100 bg-cat-primary rounded-3xl p-4 mb-10 pb-5">
            {props.adoption || props.favoritePage ? <></>  : <div className="hover:shadow-lg h-fit w-fit self-end"><img onClick = { ()=> {handleImageClick(); props.click()}}  className = "relative size-9 ml-auto" src = {paw} /> </div> }

            <div className="w-full px-3">
            <div className = "w-full min-w-40 aspect-square overflow-hidden rounded-full"> 
                <img className = "w-full h-auto" src = {props.image} aria-label='cat_pic'></img>

            </div>
            </div>
            <div role="head" className = "text-2xl text-center text-white mt-4 h-2 mb-6">{props.name}</div>
            

            <a aria-label="view_profile" onClick = {handleBoth}  href='/cat/view'><button className="w-24 h-7 text-xs rounded-2xl bg-cat-secondary text-cat-primary mt-2  hover:bg-cat-primary hover:text-white hover:shadow-md hover:border hover:border-cat-secondary">Learn More</button></a>
            {props.adoption == true ? <button onClick = {handleAdoption} className="w-24 h-7 text-xs rounded-2xl bg-cat-secondary text-cat-primary mt-2  hover:bg-cat-primary hover:text-white hover:shadow-md hover:border hover:border-cat-secondary">Adopted</button> : <></>}


            </div>
            }
            



        </div>


     );
}
 
export default Catbox;