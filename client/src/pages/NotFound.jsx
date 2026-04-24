// pages/NotFound.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = Array.from({ length: 60 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 0.5,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4,
            opacity: Math.random() * 0.5 + 0.1,
        }));

        let animId;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99, 179, 237, ${p.opacity})`;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            animId = requestAnimationFrame(draw);
        };
        draw();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-gray-950 overflow-hidden flex items-center justify-center">
            {/* animated particle background */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

            {/* glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* content */}
            <div className="relative z-10 text-center px-6 flex flex-col items-center">

                {/* broken chat bubble */}
                <div className="relative mb-8 flex items-center justify-center">
                    <div
                        className="w-36 h-28 rounded-3xl border-2 border-blue-400/30 bg-blue-500/5 flex items-center justify-center"
                        style={{ borderBottomLeftRadius: "4px" }}
                    >
                        <span
                            className="text-6xl font-black text-transparent select-none"
                            style={{
                                fontFamily: "'Courier New', monospace",
                                WebkitTextStroke: "2px rgba(99,179,237,0.6)",
                                animation: "flicker 3s infinite",
                            }}
                        >
                            404
                        </span>
                    </div>
                    {/* chat tail */}
                    <div
                        className="absolute -bottom-3 left-6 w-4 h-4 bg-gray-950 border-l-2 border-b-2 border-blue-400/30"
                        style={{ transform: "skewX(-20deg)" }}
                    />
                </div>

                {/* message bubble — like a chat message */}
                <div className="mb-2 self-start bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl rounded-tl-sm px-5 py-3 max-w-xs text-left">
                    <p className="text-gray-400 text-xs mb-1 font-mono">System • just now</p>
                    <p className="text-gray-100 text-sm leading-relaxed">
                        This conversation doesn't exist. The page you're looking for was deleted or never existed.
                    </p>
                </div>

                <div className="mb-8 self-end bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl rounded-tr-sm px-5 py-3 max-w-xs text-left">
                    <p className="text-blue-300 text-xs mb-1 font-mono">You • just now</p>
                    <p className="text-gray-100 text-sm leading-relaxed">
                        How do I get back home? 😅
                    </p>
                </div>

                {/* CTA */}
                <button
                    onClick={() => navigate("/")}
                    className="group relative px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                >
                    <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </span>
                </button>
            </div>

            <style>{`
                @keyframes flicker {
                    0%, 95%, 100% { opacity: 1; }
                    96% { opacity: 0.4; }
                    97% { opacity: 1; }
                    98% { opacity: 0.2; }
                    99% { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default NotFound;