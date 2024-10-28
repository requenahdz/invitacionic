import React, { useEffect, useRef } from 'react';

const MusicContainer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioSrc: string = "/audio.mp3";

    useEffect(() => {

        const audioElement = audioRef.current;

        setTimeout(() => {
            console.log("Retrasado por 10 segundo.");
            playAudio()
        }, 5000);


        if (audioElement) {
            // Evento para cuando los datos del audio se han cargado



            return () => {
                if (audioElement) {
                    audioElement.play();
                    audioElement.currentTime = 0;
                }
            };
        }
    }, []);

    const playAudio = async () => {
        if (audioRef.current) { // Reproduce solo si el audio está cargado
            try {
                await audioRef.current.play();
                console.error("Listo para reproducir");

           
            } catch (error) {
                console.error("No se pudo reproducir el audio:", error);
            }
        }
    };


    return (
        <div
            className={`fixed bottom-0 right-3 cursor-pointer`}
        >
            <audio ref={audioRef} src={audioSrc} preload="metadata" controls />
        </div>
    );
};

export default MusicContainer;
