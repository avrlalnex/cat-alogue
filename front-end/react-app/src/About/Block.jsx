import React from 'react';
import Img from '../assets/block2.png';

function Block() {
  return (
    <div className="flex flex-col md:flex-row bg-cat-primary">

      <div className="w-full md:w-1/2">
        <img src={Img} alt="Block" className="w-full h-full object-cover" />
      </div>
      
      <div className="w-full md:w-1/2 p-8 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-xl font-bold font-main mb-4">Mission Statement</h1>
          <p className="mb-8 font-main text-cat-details">
          Cat-alogue is a heartfelt endeavor committed to revolutionizing the way individuals find their furry companions. Our platform stands as a beacon of hope for cats awaiting their forever homes, offering a user-friendly interface that showcases their unique personalities and charms. Through Cat-alogue, we strive to not only facilitate adoptions but also cultivate a community centered around compassion, education, and support for all aspects of cat welfare.
          </p>
          <p className='text-cat-details'>
          In addition to facilitating adoptions, Cat-alogue serves as an educational hub, providing resources and guidance on responsible pet ownership, feline care, and behavior. We believe that every cat deserves a loving home and every adopter deserves the knowledge and tools necessary to provide the best possible care. By empowering both shelters and adopters with the information and support they need, we aim to make every adoption journey with Cat-alogue a rewarding and fulfilling experience for both cats and their human companions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Block;
