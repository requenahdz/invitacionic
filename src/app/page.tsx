"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  useEffect(() => {

    const timeout = setTimeout(() => {
      router.push("/elisayalex");
    }, 500);

    return () => clearTimeout(timeout);
  }, [router]);

  return (

    <>
      <div className="bg-gray-100">
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
      </div>


    </>
  );
}
