import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from '../assets/p1.jpg'; // Importa la imagen
import p2 from '../assets/p2.jpg'; // Importa la imagen
import p3 from '../assets/p3.jpg'; // Importa la imagen
import g4 from '../assets/g4.jpg'; // Importa la imagen
import g1 from '../assets/g1.jpg'; // Importa la imagen
import g6 from '../assets/g6.jpg'; // Importa la imagen
import Image from 'next/image';

function GalleryContainer() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false 
  };
  return (
    <section>
      <h1 className="text-3xl font-semibold text-black text-center">Save The Date</h1>

      <Slider {...settings} className="h-full mx-5">
        
          <Image src={g1} alt="" className="w-full" />
      
          <Image src={p2} alt="" className="w-full" />
   
          <Image src={p3} alt="" className="w-full" />
   
          <Image src={g4} alt="" className="w-full" />
     
          <Image src={p1} alt="" className="w-full" />
       
          <Image src={g6} alt="" className="w-full" />
      
      </Slider>
    </section>
  );

}

export default GalleryContainer