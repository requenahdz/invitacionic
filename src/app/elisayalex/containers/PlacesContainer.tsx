import Image from 'next/image';
import p6 from '../assets/p6.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';

const locations = [
  {
    title: "Ceremonia Civil",
    description: "Oficialía Primera del Registro Civil. Santiago Nuevo León.",
    time: "4:00 PM",
    image: p8,
    link: "https://maps.app.goo.gl/vzhFg2QZKSydTRUm6"
  },
  {
    title: "Ceremonia Religiosa",
    description: "Parroquia de Santiago Apóstol. Santiago Nuevo León.",
    time: "5:30 PM",
    image: p6,
    link: "https://maps.app.goo.gl/17VBkyPtQuQ2g33o7"
  },
  {
    title: "Recepción",
    description: "Jardín los Agaves. Santiago Nuevo León.",
    time: "8:00 PM",
    image: p7,
    link: "https://maps.app.goo.gl/nQDviAY4nhmfvYRP8"
  }
];

function PlacesContainer() {
  return (
    <section className="flex flex-col py-6 gap-5 mx-auto bg-[#f2f0f1]">
      <h1 className="text-3xl font-semibold text-black text-center">¿Dónde?</h1>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {locations.map((location, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-hidden h-48">
              <Image
                src={location.image}
                alt={location.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 text-center">{location.title}</h2>
              <p className="text-center">{location.description}</p>
              <p className="text-center">{location.time}</p>
          

              <a className='flex items-center rounded-md justify-center px-5 py-3' target='_blank' href={location.link}>
                <p className="font-semibold px-3 py-2 text-center text-black text-sm bg-[#f2f0f1] border solid">
                   Ver ubicación
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlacesContainer;
