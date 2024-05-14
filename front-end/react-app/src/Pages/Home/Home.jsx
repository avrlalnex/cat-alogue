import Header from '../../Components/Header';
import Footer from '../../Components/Footing';
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