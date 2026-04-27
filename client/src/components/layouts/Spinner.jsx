const Spinner = () => {
    return (
        <div className="relative w-20 h-20">
            {/* static background ring */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-700" />
            
            {/* spinning ring */}
            <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />

            {/* 404 centered inside */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span
                    className="text-xs font-mono font-bold text-blue-400 tracking-wider"
                    style={{ animation: "blink404 1.4s steps(1) infinite" }}
                >
                    404
                </span>
            </div>

            <style>{`
                @keyframes blink404 {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </div>
    )
}

export default Spinner