import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import play from '../assets/play.png';
import pause from '../assets/pause.png';

const MusicContainer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioSrc: string = "/audio.mp3";
    const [currentPlay, setCurrentPlay] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false); // Estado para verificar si el audio se ha cargado
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const audioElement = audioRef.current;

        setTimeout(() => {
            console.log("Retrasado por 10 segundo.");
            playAudio()
          }, 10000);


        if (audioElement) {
            // Evento para cuando los datos del audio se han cargado
            const handleLoadedData = () => {
                setIsLoaded(true);
            };

            audioElement.addEventListener('loadeddata', handleLoadedData);

            return () => {
                audioElement.removeEventListener('loadeddata', handleLoadedData);
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
        
                setCurrentPlay(true);
            } catch (error) {
                console.error("No se pudo reproducir el audio:", error);
            }
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setCurrentPlay(false);
        }
    };

    const handlePlayClick = () => {
        if (currentPlay) {
            pauseAudio();
        } else {
            playAudio();
        }
    };

    return (
        <div
        className={`fixed bottom-0 right-3 cursor-pointer`}
    >
        <audio ref={audioRef} src={audioSrc} preload="metadata" controls  />
    </div>
    );
};

export default MusicContainer;
