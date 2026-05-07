import { Heart, Calendar, Music as MusicIcon, HeartIcon } from 'lucide-react';
import { Polaroid } from '@/components/Polaroid';
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
                <div
                    className="absolute bottom-40 left-[10%] hidden lg:flex flex-col items-center gap-2"
                >
                    <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-md border border-pink-100 flex items-center gap-2">
                        <Heart fill="#f472b6" size={16} className="text-pink-400" />
                        <span className="text-pink-600 font-medium">Selamanya</span>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
                    {/* Polaroid Strip */}
                    <div className="lg:col-span-3 hidden lg:flex flex-col gap-6 -rotate-6">
                        <Polaroid
                            src="1 (1).jpeg"
                            className="w-full"
                        />
                        <Polaroid
                            src="1 (2).jpeg"
                            className="w-full"
                        />
                        <Polaroid
                            src="1 (3).jpeg"
                            className="w-full"
                        />
                    </div>

                    {/* Center Envelope */}
                    <div className="lg:col-span-6 flex justify-center">
                        <div className="relative w-full max-w-md">

                            {/* The Envelope */}
                            <div className="bg-[#feeaea] aspect-4/3 rounded-sm shadow-2xl relative overflow-hidden">

                                {/* Top Flap (Closed) */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1/2 bg-[#feeaea] z-30"
                                    style={{
                                        clipPath: "polygon(0 0, 100% 0, 50% 60%)",
                                    }}
                                />

                                {/* Bottom Part */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#f7dada] z-10"
                                    style={{
                                        clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
                                    }}
                                />

                                {/* Left Fold */}
                                <div
                                    className="absolute top-0 left-0 w-1/2 h-full bg-[#f7dada] z-20"
                                    style={{
                                        clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                                    }}
                                />

                                {/* Right Fold */}
                                <div
                                    className="absolute top-0 right-0 w-1/2 h-full bg-[#f7dada] z-20"
                                    style={{
                                        clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
                                    }}
                                />

                                {/* Red Seal */}
                                <Link href="/Page2" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center">
                                    <div
                                        className="
      w-12 h-12 
      bg-red-600 
      rounded-full 
      flex items-center 
      justify-center 
      shadow-lg 
      border-2 
      border-red-700

      animate-pulse
      hover:scale-110
      hover:rotate-6
      transition-all
      duration-300

      hover:shadow-pink-400/50
    "
                                    >
                                        <Heart fill="white" size={20} className="text-white" />
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>


                    {/* Decorative Right Side (Mobile view shows this) */}
                    <div className="lg:col-span-3 flex flex-col gap-6 text-center lg:text-left">
                        <h1 className="font-['Quicksand',sans-serif] text-5xl md:text-6xl text-pink-600 font-bold leading-tight">
                            HAPPY VALENTINE
                        </h1>
                        <p className="text-gray-600 text-lg">
                            you are a great, strong, and beautiful woman. keep growing and being the best
                        </p>
                    </div>

                    <div className="md:hidden flex gap-6">
                        <Polaroid
                            src="1 (1).jpeg"
                            className="w-full"
                        />
                        <Polaroid
                            src="1 (2).jpeg"
                            className="w-full"
                        />
                        <Polaroid
                            src="1 (3).jpeg"
                            className="w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-rose-200/50 text-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-2">
                        {[1, 2, 3].map((i) => (
                            <Heart key={i} size={16} fill="#fda4af" className="text-rose-300" />
                        ))}
                    </div>
                    <p className="text-rose-400 font-medium tracking-wide">Dibuat dengan cinta • 2026</p>
                    <div className="text-[10px] text-rose-300 uppercase tracking-widest">
                        Selalu & Selamanya
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default page