import { Heart, Calendar, Music as MusicIcon, HeartIcon } from 'lucide-react';
import { MusicPlayer } from '@/components/MusicPlayer';
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                {/* Music Section */}
                <section className="w-full py-24 px-6 flex flex-col items-center gap-8 bg-white/40">
                    <div className="flex items-center gap-3 text-rose-600 handwritten text-3xl">
                        Music For You <MusicIcon size={28} />
                    </div>
                    <MusicPlayer />

                    <Link
                        href="/Page4"
                        className="m-auto block w-70 bg-pink-500 p-3 rounded-full text-white font-bold text-center mt-10"
                    >
                        Lanjut
                    </Link>
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
    )
}

export default page