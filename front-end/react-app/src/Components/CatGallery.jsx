import React from 'react';
import Catbox from "./CatBox";

import sample_pic from '../assets/mocha_sample.jpeg'

const CatGallery = (props) => {

    var columns = parseInt(props.profile)? 3 : 4;
    return ( <>

        {parseInt(props.profile)?
        <div aria-label="gallery" className="grid h-fit sm:grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-8 place-items-center justify-items-center auto-cols-max">
        <Catbox featured="0" favorite="false" name="Mocha" image={sample_pic}/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        </div>:
        <div aria-label="gallery" className="grid h-auto sm:grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-7 min-h-0 place-items-center justify-items-center pl-5 auto-cols-max">
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        <Catbox featured="0" favorite="false" name="Mocha"/>
        </div>    
        }
        {/* note for later dev: 
        props.show == "all" -> all cats
        == id -> specific to account
        */}
    </> );
}
 
export default CatGallery;