
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import Image from 'next/image';


function SpecialMentionsContainer() {


  return (

    <section className="flex flex-col items-center w-full h-min-72 my-5 gap-5">

      <h1 className="text-3xl font-semibold text-black text-center ">Menciones especiales</h1>


      <div className="mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">

        <div className="bg-white flex flex-col items-center p-5 shadow-md rounded-lg">
          <Image src={icon2} alt="" className='w-12 m-2' />
          <p className="text-center font-semibold">Padrinos de Anillos</p>
          <p className="text-center">Tania Barajas & Edmundo Bermudez</p>
        </div>

        <div className="bg-white flex flex-col items-center p-5 shadow-md rounded-lg">
          <Image src={icon3} alt="" className='w-12 m-2' />
          <p className="text-center font-semibold">Padrinos de Arras </p>
          <p className="text-center">Fanny Pérez & Alex Gutierrez</p>
        </div>

        <div className="bg-white flex flex-col items-center p-5 shadow-md rounded-lg">
          <Image src={icon4} alt="" className='w-12 m-2' />
          <p className="text-center font-semibold">Padrinos de Lazo</p>
          <p className="text-center">Catalina Guerrero & Juan Carlos Roque</p>
        </div>


      </div>


    </section>


  )
}

export default SpecialMentionsContainer