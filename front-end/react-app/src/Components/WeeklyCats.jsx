import React from 'react';
import CatBox from './CatBox.jsx'

const WeeklyCats = () => {
    return ( 
        <>
        <div aria-label='weekly-cats' className="w-full h-auto bg-cat-primary text-white font-main flex flex-col text-5xl text-center py-10">
            Cats of the Week
            <div className="flex mt-10 lg:flex-row sm:flex-col lg:w-auto sm:w-full lg:gap-1 sm:gap-6 items-center justify-center">
            <CatBox featured="1" name="Luffy" favorite="false"/>
            <CatBox featured="1" name="Luffy" favorite="false"/>
            <CatBox featured="1" name="Luffy" favorite="false"/>
            <CatBox featured="1" name="Luffy" favorite="false"/>
            </div>
        </div>
        </>
     );
}
 
export default WeeklyCats;