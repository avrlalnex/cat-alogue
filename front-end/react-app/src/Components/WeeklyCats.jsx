import React from 'react';
import CatBox from './CatBox.jsx'

const WeeklyCats = (props) => {
    return ( 
        <>
        <div aria-label='weekly-cats' className=" bg-cat-primary text-white font-main flex flex-col text-5xl text-center py-10">
            Cats of the Week
            <div className="h-5/12 w-6/12 flex mt-10 lg:flex-row sm:flex-col lg:gap-1 sm:gap-6 items-center justify-center">
            {props.catDetails.slice(0, 4).map((catDetail, index) => (
                <CatBox  featured="0"
                id = {catDetail.id}
                click={() => {handleFavorite(catDetail.id)}}
                favorite="true"
                name={catDetail.CatName}
                image={`http://127.0.0.1:8000/${catDetail.CatImage}`}/>
            ))}
            
            </div>
        </div>
        </>
     );
}
 
export default WeeklyCats;