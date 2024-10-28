
import p14 from '../assets/p14.jpg'; // Importa la imagen
import p15 from '../assets/p15.jpg'; // Importa la imagen
import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function ContactContainer() {

  return (
    <section >

      <h1 className="text-3xl font-semibold text-black text-center my-8 ">Contactanos</h1>
      <div className='flex flex-row w-full justify-center gap-10' >
        <div className='flex flex-col gap-3 animate__animated animate__backInLeft' >
          <a className='grid gap-3' href='https://wa.me/528341447473?text=Hola%20Elisa%20%F0%9F%91%8B%20%0ATengo%20una%20duda%20%F0%9F%98%83%20%0AHelp%20me%20' target='_blank'>
            <Image
              src={p15}
              alt="Elisa Aguilar"
              className="w-40 h-40 rounded-full object-cover shadow-md" />
            <h2 className="text-2xl font-bold text-center flex items-center"> <WhatsAppIcon />Elisa Aguilar</h2>
          </a>
        </div>

        <div className='flex flex-col gap-3 animate__animated animate__backInRight' >
          <a  className='grid gap-3' href='https://wa.me/528131801846?text=Hola%20Alex%20%F0%9F%91%8B%20%0ATengo%20una%20duda%20%F0%9F%98%83%20%0AHelp%20me' target='_blank'>
            <Image
              src={p14}
              alt="Alex García"
              className="w-40 h-40 rounded-full object-cover shadow-md" />
            <h2 className="text-2xl font-bold text-center flex items-center"><WhatsAppIcon />Alex García</h2>
          </a>

        </div>
      </div>

    </section>
  )
}

export default ContactContainer