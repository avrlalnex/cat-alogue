import { Navbar, Button } from "flowbite-react"
import logo from '../assets/cat_icon.svg'
import React, {useState, useEffect} from 'react';



const Header = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
        var log = localStorage.getItem("username");
        console.log("log: ",log==null)
        log==null? setLoggedIn(false):setLoggedIn(true);
        console.log(isLoggedIn)
    },"")


    return ( 
        <><div aria-label="header" className="bg-cat-primary py-2 px-6 font-main text-white">
        <Navbar fluid className="bg-cat-primary">
        <Navbar.Brand className="m-0" href="/">
        <img src={logo} className="h-6" alt="Cat-alogue Logo" />
        <span className="self-center whitespace-nowrap text-xl text-white ml-3">Cat-alogue</span>
        </Navbar.Brand>

        <div className="flex md:order-2 items-center gap-10">
        <a href="/"> Home </a>
        {isLoggedIn?<>
            <a href="/cat"> Cats </a>
            <a href="/profile/view"> Profile</a> 
            <a href="/"><button onClick={localStorage.clear()} role="button" className="px-8 h-8 text-cat-primary bg-white rounded-full">Logout</button></a>
        </>:
        <a href="/login"><button role="button" className="px-8 h-8 text-cat-primary bg-white rounded-full">Login</button></a>}
        {/* temporary */}        
        

        
        
        

        <Navbar.Toggle />
        
        </div>
        

        </Navbar>
        </div>
        </>
    );
}
 
export default Header;