
import liverpool from '../assets/liverpool.png'; // Importa la imagen
import Image from 'next/image';


function GiftTableContainer() {

  return (
    <section className="flex flex-col items-center w-full  my-10">
      <div className="m-auto shadow-md rounded-lg bg-white flex flex-col items-center w-80 ">
        <Image  alt="" src={liverpool} className='w-60' />
        <p className='text-md font-semibold'>No. de evento: 5153321</p>
        <a className='flex items-center px-5 py-3' target='_blank' href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/51533321'>
          <p className="font-semibold px-3 py-2 text-center text-black text-sm bg-[#f2f0f1] border solid">Ver mesa de regalos</p>
        </a>
      </div>
    </section>
  )
}

export default GiftTableContainer