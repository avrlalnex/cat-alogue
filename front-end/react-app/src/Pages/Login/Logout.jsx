import React from "react";
import Home from "../Home/Home";
import Header from "../../Components/Header";
import Footing from "../../Components/Footing";

const Logout = () => {

    localStorage.clear();

    return ( 
        <>
        <Home/>
        </>
     );
}
 
export default Logout;