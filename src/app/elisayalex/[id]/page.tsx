"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const {id}  = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return; // Asegúrate de que el id esté disponible antes de hacer la solicitud
      
      try {
        const BASE_URL = `https://robertorequena.mx/api/A007/guests/${id}`; // Actualiza la URL para incluir el id
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Asegúrate de establecer los datos correctamente
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // Agrega id a las dependencias del useEffect
  

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Datos Obtenidos</h1>
        {JSON.stringify(data)}
    </div>
  );
};

export default Page;
