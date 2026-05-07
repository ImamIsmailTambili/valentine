"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const playMusic = () => {
            const audio = audioRef.current;

            if (!audio) return;

            audio.play();
            audio.volume = 0.2;
            document.removeEventListener("click", playMusic);
        };

        document.addEventListener("click", playMusic);

        return () => {
            document.removeEventListener("click", playMusic);
        };
    }, []);

    return (
        <audio ref={audioRef} loop>
            <source src="/1.mp3" type="audio/mpeg" />
        </audio>
    );
}
