
import Block from './Block';
import Block1 from './Block1';
import Header from './../Header';
import Footer from './../Footing';


function About() {
  return (
  <>
  <div className="bg-cat-primary">
  <Header/>
  <Block1></Block1>
  <Block></Block>
  <Footer/> 
  </div>
  </>
    
  );
}

export default About;
