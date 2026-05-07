"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const tombolNgeles = () => {
    const router = useRouter();

    const [pos, setPos] = useState({ top: 0, left: 0 });
    const [clicked, setClicked] = useState(false);

    const moveButton = () => {
        setClicked(true); // tandai sudah diklik

        const maxWidth = window.innerWidth - 150;
        const maxHeight = window.innerHeight - 60;

        const randomX = Math.random() * maxWidth;
        const randomY = Math.random() * maxHeight;

        setPos({
            top: randomY,
            left: randomX,
        });
    };

    return (
        <div>
            {/* Tombol Malas */}
            <button
                onClick={moveButton}
                style={
                    clicked
                        ? {
                            position: "absolute",
                            top: pos.top,
                            left: pos.left,
                        }
                        : {}
                }
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-red-200 transition-all"
            >
                Malas 😜
            </button>
        </div>
    )
}

export default tombolNgeles