"use client"

import Image from "next/image";

export default function Home() {
  return (

    <>
      <div className="bg-gray-100">
        {/* Hero Section */}
        <section className="bg-cover bg-center h-screen flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/your-background-image.jpg')" }}>
          <div className="text-center p-6 max-w-lg bg-opacity-70 bg-black rounded">
            <h1 className="text-5xl font-bold mb-4">Invitaciones Especiales para tus Momentos Únicos</h1>
            <p className="mb-6">Diseños personalizados para bodas, fiestas y eventos especiales. Dale un toque único a tus invitaciones.</p>
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
              ¡Empieza Ahora!
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-gray-700">
              Ofrecemos invitaciones personalizadas para hacer de tus momentos una experiencia inolvidable. Con materiales de alta calidad y diseño único, tus invitados estarán encantados desde el primer momento.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 bg-gray-200 px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Galería de Ejemplos</h2>
            <p className="text-gray-700">Mira algunos de nuestros diseños exclusivos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Imagen de Ejemplo */}
            <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
              <Image src="/example1.jpg" layout="fill" objectFit="cover" alt="Ejemplo 1" />
            </div>
            <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
              <Image src="/example2.jpg" layout="fill" objectFit="cover" alt="Ejemplo 2" />
            </div>
            <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
              <Image src="/example3.jpg" layout="fill" objectFit="cover" alt="Ejemplo 3" />
            </div>
            {/* Agrega más imágenes según necesites */}
          </div>
        </section>
      </div>


    </>
  );
}
