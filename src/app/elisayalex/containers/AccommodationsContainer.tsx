import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import a1 from '../assets/a1.jpg';
import a2 from '../assets/a2.jpg';
import a3 from '../assets/a3.jpg';

function AccommodationsContainer() {
  // Definimos los datos en una constante
  const accommodations = [
    {
      id: 1,
      title: "Las Palomas de Santiago",
      address: "Calle Jose Mariano Abasolo #101, Santiago Nuevo Léon.",
      image: a1,
      link: "https://maps.app.goo.gl/co6gpJjxpDBatxop9"
    },
    {
      id: 2,
      title: "Posada de Colores",
      address: "Calle Hidalgo #100, Santiago Nuevo Léon.",
      image: a2,
      link: "https://maps.app.goo.gl/1E8dQGFonPZMRZMG6"
    },
    {
      id: 3,
      title: "Hotel Parador Campestre Inn",
      address: "Carretera Nacional, Santiago-Monterrey KM 247, Santiago Nuevo Léon.",
      image: a3,
      link: "https://maps.app.goo.gl/MKyQpdCeCAYCiFPq5"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="flex flex-col py-6 gap-5 mx-auto bg-[#f2f0f1]">
      <h1 className="text-3xl font-semibold text-black text-center">Recomendaciones</h1>

      <div className="block sm:hidden mx-5">
        <Slider {...settings}>
          {accommodations.map((item) => (
            <article key={item.id}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden ">
                <figure className="overflow-hidden h-48">
                  <Image src={item.image} alt={item.title} className="w-full h-full object-cover" width={500} height={300} />
                </figure>
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2 text-center">{item.title}</h2>
                  <p className="text-center">{item.address}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex bg-black text-white justify-center border border-black my-3 mx-auto w-fit px-3 py-1"
                  >
                    Ver ubicación
                  </a>
                </div>
              </div>
            </article>
          ))}
        </Slider>
      </div>

      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {accommodations.map((item) => (
          <article key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <figure className="overflow-hidden h-48">
              <Image src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" width={500} height={300} />
            </figure>
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 text-center">{item.title}</h2>
              <p className="text-center">{item.address}</p>
 
              <a className='flex items-center rounded-md justify-center px-5 py-3' target='_blank' href={item.link}>
                <p className="font-semibold px-3 py-2 text-center text-black text-sm bg-[#f2f0f1] border solid">
                   Ver ubicación
                </p>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AccommodationsContainer;
