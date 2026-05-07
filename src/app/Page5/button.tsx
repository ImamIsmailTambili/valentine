"use client"

const sendWhatsApp = () => {
    const phoneNumber = "6282220700912"; // Ganti dengan nomor kamu
    const message = `Aku udah baca surat kamu…
Aku kangen
I LOVE YOU`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
};


const button = () => {
    return (
        <button
            onClick={sendWhatsApp}
            className="m-auto block w-70 bg-pink-500 p-3 rounded-full text-white font-bold text-center mt-10"
        >
            Lanjut
        </button>
    )
}

export default button