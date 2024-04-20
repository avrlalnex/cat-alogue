import Header from "../Header";
import Footing from "../Footing";
import Filter from "../Cats/Filter";
import Catbox from "../Cats/CatBox";

const AccountProfile = () => {
    return ( <>
    
        <Header/>
        <div className="bg-cat-secondary h-screen flex flex-row justify-center">
            <div className="border border-black h-auto w-3/4 flex flex-row p-20">
                <div className="w-1/4 h-full flex flex-col gap-3">
                    <Filter drop="0" name="Profile"/>
                    <Filter drop="0" name="Favorites"/>
                    <Filter drop="0" name="My Cats"/>
                    <Filter drop="0" name="Settings"/>
                </div>
                <div className="w-full h-auto">
                <span className="text-5xl text-cat-primary font-main">My Profile</span>
                <div className="mt-5 rounded-3xl h-auto p-10 py-14 bg-cat-primary/30 ">
                    <div className="bg-cat-primary p-8 mt-2 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 gap-3 grid-rows-3 rounded-2xl text-lg w-full h-auto items-center">
                    <div className="col-span-1  px-3 text-white text-end">Name</div>
                    <div className="lg:col-span-3 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Aaron Macias</div>
                    <div className="col-span-1 px-3 text-white text-end">Age</div>
                    <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary  text-cat-details text-sm rounded-lg bg-cat-secondary">21</div>
                    <div className="col-span-1 px-3 text-white text-end">Email</div>
                    <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">bebeboi@gmail.com</div>
                    <div className="col-span-1 px-3 text-white text-end">Facebook</div>
                    <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Aaron Macias</div>
                    <div className="col-span-1  px-3 text-white text-end">Address</div>
                    <div className="lg:col-span-5 md:col-span-2 sm:col-span-2 py-2 px-4 font-secondary text-cat-details text-sm rounded-lg bg-cat-secondary">Bangkal, Davao City</div>
                    </div>
                </div>
                </div>

            </div>
        </div>
        <Footing/>


    
    </> );
}
 
export default AccountProfile;