import { Heart, Calendar, Music as MusicIcon, HeartIcon } from 'lucide-react';
import { Countdown } from '@/components/Countdown';
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">

                {/* Countdown Section */}
                <section className="px-6 text-center">
                    <div className="max-w-xl mx-auto space-y-8">

                        <div className="inline-flex items-center gap-2 text-rose-500 font-bold uppercase tracking-widest text-sm mb-4">
                            <Calendar size={18} />
                            Menghitung Mundur Menuju Hari VALENTINE
                        </div>

                        <h2 className="text-4xl font-bold text-rose-900 font-['Varela_Round']">
                            Hari Valentine 2026
                        </h2>

                        <Countdown />

                        <Link
                            href="/Page5"
                            className="m-auto block w-70 bg-pink-500 p-3 rounded-full text-white font-bold text-center mt-10"
                        >
                            Lanjut
                        </Link>

                    </div>
                </section>
            </div>

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
};

export default page;
