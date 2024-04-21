import Filter from "./Filter";

const AccountSidebar = () => {
    return ( 
        <>
        <div className="w-1/4 h-full flex flex-col gap-3">
            <Filter drop="0" name="Profile" link="/profile/view"/>
            <Filter drop="0" name="Favorites" link="/profile/favorites"/>
            <Filter drop="0" name="My Cats" link="/profile/cats"/>
        </div>
        </>
     );
}
 
export default AccountSidebar;