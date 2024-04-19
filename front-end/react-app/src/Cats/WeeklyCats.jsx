import CatBox from './CatBox.jsx'

const WeeklyCats = () => {
    return ( 
        <>
        <div className="w-full h-50 border bg-cat-primary text-white font-main text-2xl text-center border-black py-10">
            Cats of the Week
            <CatBox featured="1"/>
        </div>
        </>
     );
}
 
export default WeeklyCats;