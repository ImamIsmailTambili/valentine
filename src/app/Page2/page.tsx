import { Heart, Calendar, Music as MusicIcon, HeartIcon } from 'lucide-react';
import Link from 'next/link';

const page = () => {
    return (
        <div>
            {/* Love Letter Section */}
            <section className="py-24 px-6 ">
                <div className="max-w-3xl mx-auto">
                    <div
                        className="bg-white p-12 md:p-20 shadow-2xl rounded-sm paper-texture relative overflow-hidden"
                    >
                        {/* Wax Seal / Heart Sticker */}
                        <div className="absolute top-10 right-10 opacity-20 rotate-12">
                            <HeartIcon size={120} fill="#f43f5e" className="text-rose-500" />
                        </div>

                        <div className="relative z-10 space-y-8">
                            <h2 className="handwritten text-4xl text-rose-700">Bikin Sendiri Nih🤣</h2>
                            <div className="space-y-6 text-xl text-rose-900/80 leading-loose handwritten">
                                <p>Untuk orang favoritku,</p>
                                <p>
                                    Kala itu<br />
                                    Aku memperhatikanmu di tengah lautan manusia<br />
                                    Hanya pada dirimu lah mata ini tertuju<br />
                                    Bagai kata yang tak sempat di ucapkan kayu kepada api<br />
                                    Yang menjadikannya abu<br />
                                    Begitupun aku yang tak butuh waktu untuk tertarik padamu<br />
                                    <br />
                                    Kala aku melihat semua fotomu<br />
                                    Saat itu aku tidak bisa berhenti tersenyum<br />
                                    Seperti senja yang merangkul bumi menuju malam<br />
                                    Bersamamu adalah rumah yang membuatku nyaman<br />

                                </p>
                                <p className="text-3xl font-bold">by : Orang Ganteng</p>

                            </div>
                        </div>

                        {/* Decorative Tape */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-32 h-8 bg-rose-200/40 backdrop-blur-sm border-x border-rose-300/30 rotate-1" />
                    </div>
                    <Link
                        href="/Page3"
                        className="rounded-full ml-auto block w-30 bg-pink-500 p-3 text-center mt-10 text-white font-bold"
                    >
                        Lanjut
                    </Link>

                </div>
            </section>
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