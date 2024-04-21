import React from 'react';
import Header from "../../Components/Header";
import Footing from "../../Components/Footing";
import empty_logo from '../../assets/empty_paw.svg';
import catpic from '../../assets/mocha_sample.jpeg'

const CatProfile = () => {
    return ( <>
    <Header/>
    <div aria-label="content" className="h-auto py-10 font-main flex lg:flex-row md:flex-col sm:flex-col lg:gap-10 md:gap-3 sm:gap-3 justify-center bg-cat-secondary w-full">
        <div className="p-10 flex flex-col gap-2 lg:w-2/4 md:w-full sm:w-full">
            
            {/* CAT PROFILE */}
            <div className="flex flex-row items-end justify-between">
            <span className="text-5xl text-cat-primary">Cat Profile</span>
            <div className="flex flex-row gap-2">
            <span className="text-3xl text-end text-[#A25411]">Add to Favorites</span>
            <img className = "relative size-9 ml-auto orange-paw" src = {empty_logo} /> 
            </div>
            </div>


            <div className="bg-cat-primary p-8 mt-4 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 gap-3 grid-rows-6 rounded-2xl text-lg w-full h-auto items-center">
                <div className="col-span-1  px-3 text-white text-end">Name</div>
                <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Mocha Macias</div>
                <div className="col-span-1 px-3 text-white text-end">Birthdate</div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary  text-cat-details text-sm rounded-lg bg-cat-secondary">00/00/00</div>
                <div className="col-span-1 px-3 text-white text-end">Age</div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">8</div>
                <div className="col-span-1 px-3 text-white text-end">Gender</div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Male</div>
                <div className="col-span-1 px-3 text-white text-end">Breed</div>
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Orange</div>
                <div className="col-span-1 px-3 text-white text-end">Color</div>
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Orange</div>
                <div className="col-span-1  px-3 text-white text-end">Address</div>
                <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Bangkal, Davao City</div>
                <div className="col-span-1  px-3 text-white text-end">Personality</div>
                <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Cute, cute, ANG CUTE</div>
                <div className="col-span-1  px-3 text-white text-end">Likes</div>
                <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Aaron</div>
                <div className="col-span-1  px-3 text-white text-end">Dislikes</div>
                <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Aaron</div>
                
            </div>

            {/* OWNER PROFILE */}
            <div className="flex flex-row items-end justify-between mt-10">
            <span className="text-4xl text-cat-primary">Owner Profile</span>
            </div>


            <div className="bg-cat-primary p-8 mt-2 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 gap-3 grid-rows-3 rounded-2xl text-lg w-full h-auto items-center">
                <div className="col-span-1  px-3 text-white text-end">Name</div>
                <div className="lg:col-span-3 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Aaron Macias</div>
                <div className="col-span-1 px-3 text-white text-end">Age</div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary  text-cat-details text-sm rounded-lg bg-cat-secondary">21</div>
                <div className="col-span-1 px-3 text-white text-end">Email</div>
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">bebeboi@gmail.com</div>
                <div className="col-span-1 px-3 text-white text-end">Facebook</div>
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Aaron Macias</div>
                <div className="col-span-1  px-3 text-white text-end">Address</div>
                <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Bangkal, Davao City</div>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-full bg-cat-secondary lg:p-10 md:px-20 sm:px-20 flex flex-col gap-6">
        <div className = "lg:w-full lg:scale-100 md:scale-75 sm:scale-75 aspect-square overflow-hidden rounded-full lg:mb-5 md:mb-2"> 
            <img aria-label='cat-pic' src={catpic} alt="sample cat" className="w-full"/>
        </div>
        
        <span className="text-5xl text-cat-primary w-full text-center">Luffy</span>
        <div className="w-full font-secondary text-cat-details text-justify font-bold">
        Laborum aute enim anim ut ea esse minim occaecat Lorem non reprehenderit. Do Lorem do do laboris mollit excepteur anim voluptate nisi cillum Lorem magna minim elit. Irure consectetur ea officia aute ea minim Lorem. Aute magna duis aliqua qui irure occaecat esse duis commodo esse exercitation ex nulla consectetur. Ex proident aliquip nostrud ut ea aute duis proident laborum sint nisi sit dolore aute. Labore nulla quis fugiat officia. Dolore sit nulla nisi adipisicing ea irure et.
        </div>
        </div>
    </div>

    <Footing/>
    
    </> );
}
 
export default CatProfile;