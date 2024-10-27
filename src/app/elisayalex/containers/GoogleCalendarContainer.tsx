
import gc from '../assets/google-calendar.png'; // Importa la imagen
import Image from 'next/image';


function GoogleCalendarContainer() {

  return (
    <section className="flex flex-col items-center w-full my-10 ">

      <div className="m-auto shadow-md rounded-lg bg-white flex w-80">
        <a className='flex  items-center  justify-center px-5 py-3' target='_blank'  href='https://calendar.app.google/2nvCbXGxjzJ4XaWF8'>
          <Image alt="" src={gc} className='w-10' />
          <p className="font-semibold p-3 text-center">Agregar a Google Calendar</p>
        </a>

      </div>

    </section>
  )
}

export default GoogleCalendarContainer