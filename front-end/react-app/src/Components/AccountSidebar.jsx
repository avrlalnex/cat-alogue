import React from 'react';
import Filter from "./Filter";

const AccountSidebar = () => {
    return ( 
        <>
        <div aria-label='sidebar' className="lg:w-1/4 sm:w-auto h-full pt-10 flex lg:flex-col sm:flex-row lg:justify-start sm:justify-center gap-3">
            <Filter drop="0" name="Profile" link="/profile/view"/>
            <Filter drop="0" name="Favorites" link="/profile/favorites"/>
            <Filter drop="0" name="My Cats" link="/profile/cats"/>
        </div>
        </>
     );
}
 
export default AccountSidebar;