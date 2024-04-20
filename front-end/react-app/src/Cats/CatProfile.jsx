import Header from "../Header";
import Footing from "../Footing";
import empty_logo from '../assets/empty_paw.svg'

const CatProfile = () => {
    return ( <>
    <Header/>
    <div className="h-auto py-10 font-main border border-black flex flex-row gap-10 justify-center bg-cat-secondary w-full">
        <div className="p-10 border border-black flex flex-col w-2/4">
            <div className="flex flex-row items-end justify-between">
            <span className="text-5xl text-cat-primary">Cat Profile</span>
            <div className="flex flex-row gap-2">
            <span className="text-3xl text-end text-[#A25411]">Add to Favorites</span>
            <img className = "relative size-9 ml-auto orange-paw" src = {empty_logo} /> 
            </div>
            </div>

            <div className="bg-cat-primary mt-4 rounded-2xl w-full h-60">

            </div>
        </div>
        <div className="border border-black w-1/4 bg-cat-primary">

        </div>
    </div>

    <Footing/>
    
    </> );
}
 
export default CatProfile;