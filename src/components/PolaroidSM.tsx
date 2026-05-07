interface PolaroidProps {
    src: string;
    caption?: string;
    rotation?: string;
    className?: string;
}

export const PolaroidSM = ({ src, caption, rotation = "rotate-0", className = "" }: PolaroidProps) => {
    return (
        <div
            className={`bg-white p-3 pb-8 shadow-xl border border-gray-100 relative ${rotation} ${className}`}
            style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
        >
            <div className="aspect-square overflow-hidden bg-gray-50 mb-4">
                <img
                    src={src}
                    alt={caption || "Memory"}
                    className="w-full h-full object-cover"
                />
            </div>
            {caption && (
                <p className="font-['Caveat',cursive] text-lg text-gray-700 text-center leading-tight">
                    {caption}
                </p>
            )}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6 bg-white/40 backdrop-blur-sm border border-white/50 rotate-3 z-20 pointer-events-none" />
        </div>
    );
};