import { Heart, Calendar, Music as MusicIcon, HeartIcon } from 'lucide-react';
import Button from './button';

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
                            <h2 className="handwritten text-4xl text-rose-700">Surat Untuk Kamu</h2>
                            <div className="space-y-6 text-xl text-rose-900/80 leading-loose handwritten">
                                <p>Dibaca yaa 😇,</p>
                                <p>
                                    aku tau harimu berat.
                                    tapi tuhanmu lebih tau kalo kamu kuat.<br />
                                    this your life, kamu bebas mengekspresikannya.
                                    if you want to cry, angry, happy or laugh do it.
                                    mungkin kamu hari ini lagi ga mood. <br />its okey...
                                    kalo kamu udah better,
                                    jangan lama-lama yaa ilangnya ☺
                                    honestly, I miss you when you disappear🥲<br /><br />
                                    kamu boleh kok shering masalah kamu sama aku, kalo kamu mau.
                                    i think aku bisa jadi pendengar buat kamu.<br /><br />
                                    maaf yaa...<br />kalo beberapa sikap ku yang justru merusak atau bahkan memperparah mood kamu.
                                    I'm just trying to best for you 🙏🙏🙏  <br />
                                    thank you for coming into my life and please don't leave me alone semoga harimu selalu seperti apa yang kamu inginkan

                                    <br />
                                </p>
                                <p className='text-sm'>
                                    kalo mood kamu udah bagus send me a message
                                    <br />I'm waiting for your message here 😁
                                </p>
                                <p className="text-3xl">Aku ❤️</p>
                            </div>
                        </div>

                        {/* Decorative Tape */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-32 h-8 bg-rose-200/40 backdrop-blur-sm border-x border-rose-300/30 rotate-1" />
                    </div>
                    <Button />
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