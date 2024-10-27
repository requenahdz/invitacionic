
import principal from '../assets/principal.jpg'; // Importa la imagen
import { useState, useEffect } from 'react';
import Image from 'next/image';

function NamesTogetherContainer() {

    const calculateTimeLeft = () => {
        const targetDate = new Date('December 13, 2024 17:30:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;
    
        let timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

    return (

        <section className="relative w-full h-96">

            <Image
                src={principal}
                alt=""
                className="absolute w-full h-full object-cover"

            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-5">
                <h2 className="text-white text-5xl font-bold animate__animated animate__fadeInDown">Elisa & Alex</h2>
                <h3 className='text-white text-3xl font-semibold animate__animated animate__fadeInDown'>13/12/24</h3>

                <div className='flex m-3 px-5'>
                    <div className="flex flex-row gap-1">

                        <div className="text-center border w-20 ">
                            <span className="block text-2xl font-semibold text-white">{timeLeft.days || '0'}</span>
                            <span className="text-md text-white">Días</span>
                        </div>
                        <div className="text-center border w-20">
                            <span className="block text-2xl font-semibold text-white">{timeLeft.hours || '0'}</span>
                            <span className="text-md text-white">Horas</span>
                        </div>
                        <div className="text-center border w-20">
                            <span className="block text-2xl font-semibold text-white">{timeLeft.minutes || '0'}</span>
                            <span className="text-md text-white">Minutos</span>
                        </div>
                        <div className="text-center border w-20">
                            <span className="block text-2xl font-semibold text-white">{timeLeft.seconds || '0'}</span>
                            <span className="text-md text-white">Segundos</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default NamesTogetherContainer