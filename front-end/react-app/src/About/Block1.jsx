import React from 'react';
import Img from './assets/block1.png';

function Block() {
  return (
    <div className="flex flex-col md:flex-row bg-cat-secondary">
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center md:items-start">
        <div className="text-center md:text-left"> 
          <h1 className="text-xl font-bold text-main mb-4 mx-auto md:text-center">About Us</h1> 
          <p className="mb-8 text-center text-secondary"> 
          At Cat-alogue, our passion for feline welfare drives everything we do. Founded by a team of dedicated cat lovers, our journey began with a simple yet profound belief: every cat deserves a loving home. With this ethos at our core, we set out to create a platform that not only streamlines the adoption process but also fosters a sense of community and advocacy for cats in need. Our commitment to transparency, integrity, and empathy guides every interaction, ensuring that both cats and adopters receive the care and attention they deserve.
          </p>
          <p className="text-center text-secondary">
          However, our vision extends beyond facilitating adoptions. Cat-alogue is also a beacon of knowledge and support for both current and prospective cat owners. Through our educational resources and expert guidance, we empower individuals to become responsible pet guardians, promoting the health, happiness, and well-being of cats everywhere. Together, let's embark on a journey of compassion and advocacy, ensuring that every cat's tale has a purrfectly happy ending.
          </p>
        </div>
      </div>
    
      <div className="w-full md:w-1/2">
        <img src={Img} alt="Block" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Block;
