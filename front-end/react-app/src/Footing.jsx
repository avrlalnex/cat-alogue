
import logo from './assets/cat_icon.svg'
import { Footer } from "flowbite-react";
import { BsFacebook,  BsInstagram } from "react-icons/bs";


const Footing = () => {
    return ( 
        <>

      <Footer container className='bg-cat-primary text-white mt-10'>
      <div className="w-full bg-cat-primary">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <Footer.Brand href="/" >
            <div className='flex flex-row my-4'>
            <img src={logo} className="h-10" alt="Cat-alogue Logo" />
            <span className="self-center whitespace-nowrap text-2xl text-white ml-3 font-main">Cat-alogue</span>
            </div>
            </Footer.Brand>
          
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-reset text-white">

            <div>
              <div className='mb-6 text-sm font-semibold uppercase'>About</div>
              <div className="flex flex-wrap text-sm flex-col space-y-4">
              <a className="me-4 last:mr-0 md:mr-6 hover:underline" href="#">Cat-alogue</a>
              </div>
            </div>

            <div>
              <div className='mb-6 text-sm font-semibold uppercase'>Follow us</div>
              <div className="flex flex-wrap text-sm flex-col space-y-4">
              <a className="me-4 last:mr-0 md:mr-6 hover:underline" href="#">Facebook</a>
              <a className="me-4 last:mr-0 md:mr-6 hover:underline" href="#">Instagram</a>
              </div>
            </div>

            <div>
              <div className='mb-6 text-sm font-semibold uppercase'>Legal</div>
              <div className="flex flex-wrap text-sm flex-col space-y-4">
              <a className="me-4 last:mr-0 md:mr-6 hover:underline" href="#">Privacy Policy</a>
              <a className="me-4 last:mr-0 md:mr-6 hover:underline" href="#">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="text-sm sm:text-center">
            <a href="/" className="ml-1 hover:underline">Cat-alogue 2024</a>
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <BsFacebook className='h-5 w-5'/>
            <BsInstagram className='h-5 w-5'/>
          </div>
        </div>
      </div>
    </Footer>
        </>
     );
}
 
export default Footing;