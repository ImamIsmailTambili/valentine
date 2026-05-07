"use client";

import { useState, useRef } from "react";
import { Play, Pause, Music } from "lucide-react";

export const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            audioRef.current.volume = 1.0;
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className="bg-rose-50/80 backdrop-blur-md p-4 rounded-3xl border border-rose-100 shadow-sm flex items-center gap-4 w-full max-w-xs">

            <div className="w-12 h-12 bg-rose-200 rounded-2xl flex items-center justify-center text-rose-500 shadow-inner">
                <Music size={24} />
            </div>

            <div className="flex-1 overflow-hidden">
                <p className="font-['Quicksand'] font-bold text-rose-900 truncate text-sm">
                    Listen Carefully
                </p>
            </div>

            <div className="flex items-center gap-1">
                <button
                    onClick={togglePlay}
                    className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white hover:bg-rose-600 transition-colors shadow-md"
                >
                    {isPlaying ? (
                        <Pause size={18} fill="currentColor" />
                    ) : (
                        <Play size={18} fill="currentColor" className="ml-0.5" />
                    )}
                </button>

                {/* Audio hidden */}
                <audio ref={audioRef}>
                    <source src="/1_V3.mp3" type="audio/ogg" />
                </audio>
            </div>
        </div>
    );
};
