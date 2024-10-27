import { useEffect, useState } from 'react';
import STD70 from '../assets/STD70.jpg'; // Importa la imagen
import Image from 'next/image';

function PhotosTogetherContainer() {
  const [offsetY, setOffsetY] = useState(0);

  // Función para actualizar la posición de la imagen con el desplazamiento
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    // Añadir evento de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento cuando el componente se desmonte
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //250 EN ESCRITORIO
  return (
    <section className="relative w-full md:96 overflow-hidden">
      <figure>
        <Image
          src={STD70}
          alt="Fondo"
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'top',
            transform: `translateY(${offsetY * 0.3 - 200}px)`, // Efecto parallax con un pequeño ajuste inicial
          }}
        />
      </figure>
    </section>
  );
}

export default PhotosTogetherContainer;
