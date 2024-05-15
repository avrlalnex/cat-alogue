import { useEffect } from 'react';
import paw from './../../assets/Paw Pattern.svg'; 
import cat1 from './../../assets/cat1.png';
import cat2 from './../../assets/cat2.png';

const HomeLandingContainer = () => {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        {/* Left container */}
        <div className="w-1/2 ml-8 p-8 flex gap-4 flex-col justify-center">
          <h1 className="text-6xl mb-0 mt-24 text-white font-main text-left">Adopt, Don't Shop! </h1>
          <p className="text-2xl font-main text-white text-left font-normal">Your purrfect companion.</p>
          <a href='/login'><button type='button' className="text-2xl px-9 py-3 text-cat-primary bg-white border border-cat-primary rounded-full hover:bg-orange-100 font-main focus:outline-none focus:ring w-fit mt-2 self-left">Adopt Now</button></a>
        </div>

        {/* Right container */}
        <div className="w-1/2 p-8 flex justify-end items-center relative">
          <div className="w-96 h-96 relative">
            <img src={paw} alt="Paw pattern" className="absolute w-full h-full" style={{ transform: "scaleX(-1)" }} />

            <div className="homeContainer-right">
              <div className="flex justify-center items-center">
                <div className="absolute z-10 overflow-hidden" style={{ top: "3%", left: "-90%", width: "150%", height: "150%" }}>
                  <img src={cat1} alt="Cat 1" className="object-cover w-full h-full" />
                </div>
                <div className="absolute z-0 overflow-hidden" style={{ top: "150%", right: "0", transform: "translateY(-50%)", marginRight: "-150px" }}>
                  <img src={cat2} alt="Cat 2" className="object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLandingContainer;