import mocha from './../../assets/mocha_circle.png';
import open from './../../assets/open.png';
import care from './../../assets/care.png';
import stray from './../../assets/stray.png';
import adopt from './../../assets/adopt.png';
import React from 'react';

function HomeCard() {
  return (
    <div className='bg-cat-secondary pb-10'>
      <div className='flex justify-between mt-60 ml-10'>
      <div className="w-1/2 px-4 mt-20">
        <h1 className="text-6xl font-main text-cat-details font-normal text-left mt-0"> What do we do? </h1>
      <div className="flex justify-between pt-20 gap-20"> 
          
      <div className="flex flex-col gap-2 items-center transform transition duration-300 hover:scale-105">
      <div className="w-64 mx-auto"> 
        <img src={open} alt="Cat 1" className="w-full h-auto" />
      </div>
        <h2 className="text-2xl font-main font-normal text-center text-cat-details">Open Doors for Cats without Homes</h2> 
      </div>
            
      <div className="flex flex-col gap-2 items-center transform transition duration-300 hover:scale-105">
      <div className="w-64 mx-auto"> 
        <img src={stray} alt="Cat 2" className="w-full h-auto scale-110" />
      </div>
        <h2 className="text-2xl font-main font-normal text-center text-cat-details">Save abandoned felines</h2> 
      </div>
      
      <div className="flex flex-col gap-1 items-center transform transition duration-300 hover:scale-105">
      <div className="w-64 mx-auto"> 
        <img src={care} alt="Cat 3" className="w-full h-auto scale-100" />
      </div>
        <h2 className="text-2xl font-main font-normal text-center text-cat-details">Provide Care and Support</h2>
      </div>
      </div>
      </div>
      </div>

      <div className="flex justify-between items-center ml-[10px] py-20"> 
      <div className="w-1/2 ml-[-200px]"> 
        <img src={mocha} alt="Luffy" className="h-auto w-full scale-110 mt-[30px]" />
      </div>
      <div className="w-3/6 mr-14 h-full bg-cat-primary/10 py-10 px-6 rounded-xl">
        <div className="text-5xl font-main text-center text-cat-details mb-4 w-3/4 m-auto"> Find a Forever Home for Your Furry Friend </div>
        <p className="text-lg font-main font-normal text-center text-cat-details ml-[-20px]">
            Got a furry friend in need of a forever home? Whether you're looking <br/> to adopt or rehome a cat, we're here to help you every step of the way. <br/>Let's connect and make a purr-fect match!</p>
      <div className="flex justify-center mt-6 ml-[-20px]">
        <a href='/login'><button className="px-4 py-2 text-white bg-cat-primary rounded-xl font-main w-32 mr-4 hover:scale-105 transition duration-300"> Get Started </button></a>

      </div>
      </div>
      </div>
      </div> 
  );
}

export default HomeCard;