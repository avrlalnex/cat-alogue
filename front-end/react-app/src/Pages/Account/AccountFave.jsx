import Header from "../../Components/Header";
import Footing from "../../Components/Footing";
import CatGallery from "../../Components/CatGallery";
import AccountSidebar from "../../Components/AccountSidebar";
import React from 'react';


const AccountFave = () => {
    return ( <>
    
    <Header/>
    <div className="bg-cat-secondary h-auto flex flex-row justify-center font-main">
        <div aria-label="content" className=" h-auto w-3/4 flex lg:flex-row sm:flex-col-reverse p-20">
            <AccountSidebar />

            <div aria-label="details" className="w-full h-auto">
            <span className="text-5xl text-cat-primary font-main">Favorites</span>
            <div className="mt-5 rounded-3xl h-auto p-10 py-14 bg-cat-primary/30 ">
                <CatGallery profile="1" />
            </div>
            </div>

        </div>
    </div>
    <Footing/>


    </> );


}
 
export default AccountFave;