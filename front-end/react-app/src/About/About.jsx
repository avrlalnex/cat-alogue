
import Block from './Block';
import Block1 from './Block1';
import Header from './../Header';
import Footer from './../Footing';
import ImgCont from './ImgCont';


function About() {
  return (
  <>
  <div className="bg-cat-primary">
  <Header/>
  <ImgCont/>
  <Block1></Block1>
  <Block></Block>
  <Footer/> 
  </div>
  </>
    
  );
}

export default About;
