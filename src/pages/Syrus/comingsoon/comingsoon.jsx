import React, { useEffect, useRef } from "react";
import SyrusFooter from "../../../components/SyrusComponents/SyrusFooter/SyrusFooter";
import CodecellLogo from "/codecell-logo.webp";
import VESITLogo from "/VESIT.png";
import "./comingsoon.modulo.css";
import "../Syrus.css";

function Syrus() {
    const canvasRef = useRef(null);

    // Pure CodeCell Gold Matrix Background Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let animationFrameId;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const characters =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>/$@#&*{}~";
        const fontSize = 16;
        const columns = Math.floor(width / fontSize);
        const drops = Array(columns).fill(1);

        // Matrix gradient using official CodeCell yellow brand colors
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "#f6c31c");
        gradient.addColorStop(0.5, "#816710");
        gradient.addColorStop(1, "#53430a");

        let lastTime = 0;
        const fps = 24;
        const nextFrame = 1000 / fps;
        let timer = 0;

        const render = (timeStamp) => {
            const deltaTime = timeStamp - lastTime;
            lastTime = timeStamp;

            if (timer > nextFrame) {
                ctx.fillStyle = "rgba(5, 8, 22, 0.18)";
                ctx.fillRect(0, 0, width, height);

                ctx.fillStyle = gradient;
                ctx.font = `${fontSize}px monospace`;

                for (let i = 0; i < drops.length; i++) {
                    const text = characters.charAt(
                        Math.floor(Math.random() * characters.length)
                    );
                    const x = i * fontSize;
                    const y = drops[i] * fontSize;

                    ctx.fillText(text, x, y);

                    if (y > height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
                timer = 0;
            } else {
                timer += deltaTime;
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render(0);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="syrus-page">
            {/* Background Matrix Canvas */}
            <canvas ref={canvasRef} className="syrus-matrix-bg" />

            {/* CodeCell Gold Ambient Radial Glow Overlays */}
            <div className="syrus-glow-top" />
            <div className="syrus-glow-bottom" />

            <div className="syrus-content-wrapper">
                {/* Navigation Bar */}
                <header className="syrus-coming-soon-nav">
                    <a href="/" className="syrus-nav-brand">
                        <img src={CodecellLogo} alt="CodeCell Logo" className="syrus-nav-logo" />
                        <span className="syrus-nav-title">CodeCell++</span>
                    </a>

                    <div className="syrus-nav-links">
                        <img src={VESITLogo} alt="VESIT Logo" className="syrus-vesit-logo" />
                    </div>
                </header>

                {/* Hero Section */}
                <section className="syrus-hero-section">
                    <div className="syrus-title-wrapper">
                        <h1 className="syrus-main-heading">
                            SYRUS <span className="syrus-highlight">7.0</span>
                        </h1>
                        <h2 className="syrus-subheading">Dream It. Build It. Hack It.</h2>
                    </div>

                    <div className="syrus-coming-soon-banner">
                        <span className="syrus-banner-glitch" data-text="COMING SOON">
                            COMING SOON
                        </span>
                    </div>

                    <p className="syrus-tagline">
                        Something exciting is coming.
                    </p>


                </section>

                {/* CodeCell Syrus Footer */}
                <SyrusFooter />
            </div>
        </div>
    );
}

export default Syrus;