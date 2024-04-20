import Header from "../Header";
import Footing from "../Footing";
import CatGallery from "../Cats/CatGallery";
import AccountSidebar from "./AccountSidebar";

const AccountFave = () => {
    return ( <>
    
    <Header/>
    <div className="bg-cat-secondary h-auto flex flex-row justify-center font-main">
        <div className=" h-auto w-3/4 flex flex-row p-20">
            <AccountSidebar />

            <div className="w-full h-auto">
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