import Catbox from "./CatBox";

const CatGallery = (props) => {
    return ( <>
        <div className="grid h-auto grid-rows-4 sm:grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-7 place-items-center justify-items-center pl-5 auto-cols-max">
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

        {/* note for later dev: 
        props.show == "all" -> all cats
        == id -> specific to account
        */}
    </> );
}
 
export default CatGallery;