import { Navbar, Button } from "flowbite-react"
import logo from './assets/cat_icon.svg'
import {Link} from "react-router-dom"


const Header = () => {
    return ( 
        <><div className="bg-cat-primary py-2 px-6 font-main text-white">
        <Navbar fluid className="bg-cat-primary">
        <Navbar.Brand className="m-0" href="/">
        <img src={logo} className="h-6" alt="Cat-alogue Logo" />
        <span className="self-center whitespace-nowrap text-xl text-white ml-3">Cat-alogue</span>
        </Navbar.Brand>

        <div className="flex md:order-2 items-center gap-10">
        <a href="/"> Home </a>
        <a href="/cat"> Cats </a>
        <a href="/"> About Us</a>

        <Link to="/login"><Button color="light" pill className="px-4 h-8 text-cat-primary">Login</Button></Link>
        <Navbar.Toggle />
        
        </div>
        

        </Navbar>
        </div>
        </>
    );
}
 
export default Header;