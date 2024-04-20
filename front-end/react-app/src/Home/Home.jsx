import Header from './../Header';
import Footer from './../Footing';
import HomeLandingContainer from './HomeLandingContainer';
import HomeCard from './HomeCard';


const Home = () => {
    return ( <>
    <div className="bg-cat-primary">

        <Header/> 
        <HomeLandingContainer/>
        <HomeCard/>
        <Footer/>
        
        
        

        
    </div>
    </> );
}
 
export default Home;