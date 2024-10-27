import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a1 from '../assets/a1.jpg'; // Importa la imagen
import a2 from '../assets/a2.jpg'; // Importa la imagen
import a3 from '../assets/a3.jpg'; // Importa la imagen
import Image from 'next/image';

function AccommodationsContainer() {
  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar un grid a la vez
    slidesToScroll: 1,
    autoplay: true,  // Activa el autoplay
    autoplaySpeed: 3000,  // Velocidad en milisegundos (cada 3 segundos)
  };

  return (
    <section className="flex flex-col py-6 gap-5 mx-auto bg-[#f2f0f1]">
      <h1 className="text-3xl font-semibold text-black text-center">Recomendaciones</h1>

      <div className="block sm:hidden mx-5"> 
        <Slider {...settings}>
          <article>
            <div className="bg-white shadow-md rounded-lg overflow-hidden ">
              <figure className="overflow-hidden h-48">
                <Image src={a1} alt="" className="w-full h-full object-cover" />
              </figure>
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-center">Las Palomas de Santiago</h2>
                <p className="text-center">
                  Calle Jose Mariano Abasolo #101
                  <br /> Santiago Nuevo Léon.
                </p>
                <a
                  href="https://maps.app.goo.gl/co6gpJjxpDBatxop9"
                  target="_blank"
                  className="flex bg-black text-white justify-center border border-black my-3 mx-auto w-fit px-3 py-1"
                >
                  Ver ubicación
                </a>
              </div>
            </div>
          </article>

          <article>
            <div className="bg-white shadow-md rounded-lg overflow-hidden ">
              <figure className="overflow-hidden h-48">
                <Image src={a2} alt="" className="w-full h-full object-cover" /> {/* Ajusta la altura */}
              </figure>
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-center">Posada de Colores</h2>
                <p className="text-center">
                  Calle Hidalgo #100
                  <br /> Santiago Nuevo Léon.
                </p>
                <a
                  href="https://maps.app.goo.gl/1E8dQGFonPZMRZMG6"
                  target="_blank"
                  className="flex bg-black text-white justify-center border border-black my-3 mx-auto w-fit px-3 py-1"
                >
                  Ver ubicación
                </a>
              </div>
            </div>
          </article>

          <article>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <figure className="overflow-hidden h-48">
                <Image src={a3} alt="" className="w-full h-full object-cover" />
              </figure>
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-center">Hotel Parador Campestre Inn</h2>
                <p className="text-center">
                  Carretera Nacional, Santiago-Monterrey KM 247
                  <br /> Santiago Nuevo Léon.
                </p>
                <a
                  href="https://maps.app.goo.gl/MKyQpdCeCAYCiFPq5"
                  target="_blank"
                  className="flex bg-black text-white justify-center border border-black my-3 mx-auto w-fit px-3 py-1"
                >
                  Ver ubicación
                </a>
              </div>
            </div>
          </article>
        </Slider>
      </div>

      {/* Grid para pantallas más grandes (tabletas y desktop) */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5"> {/* Visible en pantallas grandes */}
        <article className="bg-white shadow-md rounded-lg overflow-hidden ">
        <figure className="overflow-hidden h-48">
          <Image src={a1} alt="" className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" /> {/* Ajusta la altura */}
          </figure>
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 text-center">Las Palomas de Santiago</h2>
            <p className="text-center">
              Calle Jose Mariano Abasolo #101
              <br /> Santiago Nuevo Léon.
            </p>
            <a
              href="https://maps.app.goo.gl/co6gpJjxpDBatxop9"
              target="_blank"
              className="flex bg-black text-white justify-center border border-black my-3 mx-auto w-fit px-3 py-1"
            >
              Ver ubicación
            </a>
          </div>
        </article>

        <article className="bg-white shadow-md rounded-lg overflow-hidden ">
          <figure className="overflow-hidden h-48 ">
            <Image src={a2} alt="" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" /> {/* Ajusta la altura */}
          </figure>
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 text-center">Posada de Colores</h2>
            <p className="text-center">
              Calle Hidalgo #100
              <br /> Santiago Nuevo Léon.
            </p>
            <a
              href="https://maps.app.goo.gl/1E8dQGFonPZMRZMG6"
              target="_blank"
              className="flex bg-black text-white justify-center border border-black my-3 mx-auto w-fit px-3 py-1"
            >
              Ver ubicación
            </a>
          </div>
        </article>

        <article className="bg-white shadow-md rounded-lg overflow-hidden">
          <figure className="overflow-hidden h-48">
            <Image src={a3} alt="" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
          </figure>
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 text-center">Hotel Parador Campestre Inn</h2>
            <p className="text-center">
              Carretera Nacional, Santiago-Monterrey KM 247
              <br /> Santiago Nuevo Léon.
            </p>
            <a
              href="https://maps.app.goo.gl/MKyQpdCeCAYCiFPq5"
              target="_blank"
              className="flex bg-black text-white justify-center border border-black my-3 mx-auto w-fit px-3 py-1"
            >
              Ver ubicación
            </a>
          </div>
        </article>

      </div>
    </section>
  );
}

export default AccommodationsContainer;
