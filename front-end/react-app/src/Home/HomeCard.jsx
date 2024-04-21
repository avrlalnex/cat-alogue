import mocha from '../assets/mocha-sample.png';
import open from '../assets/open.png';
import care from '../assets/care.png';
import stray from '../assets/stray.png';
import adopt from '../assets/adopt.png';
import React from 'react';

function HomeCard() {
  return (
    <div className='bg-cat-secondary'>
      <div className='flex justify-between mt-60 ml-10'>
      <div className="w-1/2 px-4 mt-20">
        <h1 className="text-5xl font-main text-cat-details font-normal text-left mt-0"> What do we do? </h1>
      <div className="flex justify-between items-center space-x-10"> 
          
      <div className="w-1/3 mt-10 mr-8 flex flex-col items-center transform transition duration-300 hover:scale-105">
      <div className="w-64 mx-auto"> 
        <img src={open} alt="Cat 1" className="w-full h-auto" />
      </div>
        <h2 className="text-lg font-main font-normal text-center mt-1 text-cat-details">Open Doors for Cats without Homes</h2> 
      </div>
            
      <div className="w-1/3 mt-10 mr-8 flex flex-col items-center transform transition duration-300 hover:scale-105">
      <div className="w-64 mx-auto"> 
        <img src={stray} alt="Cat 2" className="w-full h-auto" />
      </div>
        <h2 className="text-lg font-main font-normal text-center mt-1 text-cat-details">Save abandoned felines</h2> 
      </div>
      
      <div className="w-1/3 mt-10 mr-8 flex flex-col items-center transform transition duration-300 hover:scale-105">
      <div className="w-64 mx-auto"> 
        <img src={care} alt="Cat 3" className="w-full h-auto" />
      </div>
        <h2 className="text-lg font-main font-normal text-center mt-1 text-cat-details">Provide Care and Support</h2>
      </div>
      </div>
      </div>
      </div>

      <div className="flex justify-between items-center ml-10 ml-[10px] mt[-20px]"> 
      <div className="w-1/2 ml-[-200px]"> 
        <img src={mocha} alt="Luffy" className="max-w-full h-auto mt-[30px]" style={{ width: '150%' }} />
      </div>
      <div className="w-1/2 ml-10">
        <img src={adopt} alt="Adopt" className="w-full h-auto transform transition duration-300 hover:scale-105 rounded-lg" />
        <h2 className="text-2xl font-main text-center text-cat-details mb-4"> Find a Forever Home for Your Furry Friend </h2>
        <p className="text-lg font-main font-normal text-center text-cat-details ml-[-20px]">
            Got a furry friend in need of a forever home? Whether you're looking <br/> to adopt or rehome a cat, we're here to help you every step of the way. <br/>Let's connect and make a purr-fect match!</p>
      <div className="flex justify-center mt-6 ml-[-20px]">
        <button className="px-4 py-2 text-white bg-cat-primary rounded-xl font-main w-32 mr-4 hover:scale-105 transition duration-300"> Get Started </button>

      </div>
      </div>
      </div>
      </div> 
  );
}

export default HomeCard;
