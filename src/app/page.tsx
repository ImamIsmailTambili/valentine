import Link from "next/link";
import TombolNgeles from "@/components/tombolNgeles";

const Page = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center gap-6">

      <h1 className="text-2xl font-bold">
        Aku ada pesan nih buat kamu
      </h1>

      <div className="flex gap-5">
        <TombolNgeles />

        {/* Tombol Lanjut */}
        <Link
          href="/Home"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-pink-200 transition-colors"
        >
          Lanjut
        </Link>
      </div>

    </div>
  );
};

export default Page;
