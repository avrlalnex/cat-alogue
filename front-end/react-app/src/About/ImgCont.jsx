
import Img from '../assets/blorb.png';

function ImgCont() {
  return (
    <div className="bg-cat-primary">
      <img src={Img} alt="Block" className="w-full object-cover" />
    </div>
  );
}

export default ImgCont;
