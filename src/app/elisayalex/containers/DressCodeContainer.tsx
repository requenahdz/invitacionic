

import p9 from '../assets/p9.png'; // Importa la imagen
import p10 from '../assets/p10.png'; // Importa la imagen
import Image from 'next/image';

function DressCodeContainer() {


  return (
    <>
      <section className="flex flex-col items-center w-full h-min-72 my-5 gap-5">

        <h1 className="text-3xl font-semibold text-black text-center">Código de Vestimenta</h1>

        <div className='flex flex-col md:flex-row ' >


          <div className='shadow-md rounded-lg m-5 p-5 bg-white'>

            <Image src={p10} alt="" className="w-48 m-auto order-1  md:order-1 " />
            <div className='flex flex-col justify-center gap-2'>
              <p className='text-xl font-semibold text-center '>Mujeres</p>
              <p className='text-center'>Formal</p>


              <a className='flex items-center rounded-md justify-center px-5 py-3' target='_blank' href="https://pin.it/3sd7eMx8f">
                <p className="font-semibold px-3 py-2 text-center text-black text-sm bg-[#f2f0f1] border solid">
                Ver ejemplo
                </p>
              </a>


            </div>
          </div>

          <div className='shadow-md rounded-lg m-5 p-5 bg-white'>

            <Image src={p9} alt="" className="w-48 m-auto" />
            <div className='flex flex-col justify-center gap-2  '>
              <p className='text-xl font-semibold text-center'>Hombres</p>
              <p className='text-center'> Formal</p>
       
              <a className='flex items-center rounded-md justify-center px-5 py-3' target='_blank' href="https://pin.it/63fRYWfiT">
                <p className="font-semibold px-3 py-2 text-center text-black text-sm bg-[#f2f0f1] border solid">
                Ver ejemplo
                </p>
              </a>


            </div>


          </div>

        </div>




      </section>
    </>
  )
}

export default DressCodeContainer