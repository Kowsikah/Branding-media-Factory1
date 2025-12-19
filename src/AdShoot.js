import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

// --- Assets ---
import productionHero from './ads.jpg'; 
import shoot1 from './adv1.mp4'; 
import shoot2 from './adv2.mp4'; 
import shoot3 from './adv3.mp4'; 
import shoot4 from './adv4.mp4';

export const MediaProduction = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const productions = [
        { id: 'p1', src: shoot1, title: "Cinematic Narrative", label: "Commercial" },
        { id: 'p2', src: shoot2, title: "Urban Velocity", label: "Brand Film" },
        { id: 'p3', src: shoot3, title: "Digital Soul", label: "Documentary" },
        { id: 'p4', src: shoot4, title: "Abstract Motion", label: "Motion Art" }
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = selectedVideo ? 'hidden' : 'unset';
    }, [selectedVideo]);

    const styles = `
        .prod-container { font-family: 'Inter', sans-serif; background: #000; color: #fff; overflow-x: hidden; }
        
        .header-wrapper {
            position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; transition: 0.5s;
            background: ${isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent'};
            backdrop-filter: ${isScrolled ? 'blur(15px)' : 'none'};
        }

        .prod-hero {
            height:80vh; width: 100%;
            background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,1)), url(${productionHero}) center/cover no-repeat;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
        }

        /* --- ATTRACTIVE GLOWING TIMELINE --- */
        .timeline-wrapper { padding: 120px 5%; background: #000; position: relative; }
        .main-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: rgba(255,255,255,0.05); transform: translateX(-50%); }
        .active-path { position: absolute; left: 50%; top: 0; height: 100%; width: 2px; background: linear-gradient(to bottom, transparent, #00ff7f, #00ff7f, transparent); transform: translateX(-50%); filter: drop-shadow(0 0 8px #00ff7f); }
        .timeline-item { position: relative; margin-bottom: 150px; width: 100%; display: flex; justify-content: center; align-items: center; }
        .timeline-card { width: 400px; padding: 40px; background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.05); transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1); position: relative; z-index: 2; }
        .timeline-item:nth-child(odd) .timeline-card { margin-right: 550px; text-align: right; border-right: 4px solid #00ff7f; }
        .timeline-item:nth-child(even) .timeline-card { margin-left: 550px; text-align: left; border-left: 4px solid #00ff7f; }
        .timeline-card:hover { background: rgba(0, 255, 127, 0.05); border-color: #00ff7f; transform: translateY(-10px); }
        .glow-node { position: absolute; left: 50%; transform: translateX(-50%); width: 12px; height: 12px; background: #000; border: 2px solid #00ff7f; border-radius: 50%; box-shadow: 0 0 15px #00ff7f; z-index: 3; }

        @media (max-width: 900px) {
            .main-line, .active-path, .glow-node { left: 20px; transform: none; }
            .timeline-item { justify-content: flex-start; padding-left: 60px; }
            .timeline-item:nth-child(odd) .timeline-card, .timeline-item:nth-child(even) .timeline-card { margin: 0; width: 100%; text-align: left; border-left: 4px solid #00ff7f; border-right: none; }
        }

        /* --- 2 COLUMN VIDEO PRODUCTIONS --- */
        .prod-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; padding: 20px; max-width: 1500px; margin: 0 auto; }
        @media (max-width: 800px) { .prod-grid { grid-template-columns: 1fr; } }
        .video-box { position: relative; aspect-ratio: 16/9; overflow: hidden; cursor: pointer; background: #000; border: 1px solid #111; }
        .video-box video { width: 100%; height: 100%; object-fit: cover; opacity: 0.5; transition: 0.8s; }
        .box-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; background: rgba(0,0,0,0.6); opacity: 0; transition: 0.4s; }
        .video-box:hover video { opacity: 1; transform: scale(1.05); }
        .video-box:hover .box-overlay { opacity: 1; }

        /* --- CINEMA MODE --- */
        .cinema-mode { position: fixed; inset: 0; background: #000; z-index: 10000; display: flex; flex-direction: column; }
        .cinema-header { padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; background: #050505; }
        .close-cinema { background: #00ff7f; color: #000; border: none; padding: 10px 25px; font-weight: 800; cursor: pointer; transition: 0.3s; }
        .close-cinema:hover { background: #fff; }
        .cinema-body { flex: 1; display: flex; align-items: center; justify-content: center; }
        .cinema-body video { width: 100%; max-height: 85vh; }

        /* --- FINAL CTA SECTION --- */
        .final-cta { padding: 150px 5%; background: #050505; text-align: center; border-top: 1px solid #111; }
        .cta-content { max-width: 800px; margin: 0 auto; }
        .cta-content h2 { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; margin-bottom: 20px; letter-spacing: -2px; line-height: 1; }
        .cta-content p { color: #888; font-size: 1.2rem; margin-bottom: 40px; }
        .btn-glow { 
            position: relative; display: inline-block; padding: 22px 60px; background: #00ff7f; color: #000; 
            text-decoration: none; font-weight: 900; font-size: 1.1rem; text-transform: uppercase; 
            letter-spacing: 2px; transition: 0.4s; z-index: 1;
        }
        .btn-glow::before {
            content: ''; position: absolute; inset: 0; background: #00ff7f; filter: blur(20px); opacity: 0; transition: 0.4s; z-index: -1;
        }
        .btn-glow:hover { transform: scale(1.05); color: #000; background: #fff; }
        .btn-glow:hover::before { opacity: 0.6; background: #fff; }
    `;

    return (
        <div className="prod-container">
            <style>{styles}</style>
            <div className="header-wrapper"><Header /></div>

            <section className="prod-hero">
                <h1 style={{fontSize: 'clamp(3rem, 12vw, 8rem)', fontWeight: 950, margin: 0, letterSpacing: '-5px'}}>STUDIO</h1>
                <p style={{color: '#00ff7f', letterSpacing: '10px', fontWeight: 600}}>CRAFTING VISUAL EXCELLENCE</p>
            </section>

            {/* TIMELINE SECTION */}
            <section className="timeline-wrapper">
                <div className="main-line"></div>
                <div className="active-path"></div>
                <div style={{textAlign: 'center', marginBottom: '100px'}}><h2 style={{fontSize: '2.5rem', fontWeight: 900}}>THE WORKFLOW</h2></div>

                <div className="timeline-item">
                    <div className="glow-node"></div>
                    <div className="timeline-card">
                        <h3 style={{color: '#00ff7f', letterSpacing: '3px', fontSize: '0.8rem', marginBottom: '10px'}}>STAGE 01</h3>
                        <h4 style={{fontSize: '1.5rem', marginBottom: '15px'}}>The Concept</h4>
                        <p style={{color: '#888', lineHeight: '1.6'}}>Bridging strategy and art to develop a blueprint for high-impact visual storytelling.</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="glow-node"></div>
                    <div className="timeline-card">
                        <h3 style={{color: '#00ff7f', letterSpacing: '3px', fontSize: '0.8rem', marginBottom: '10px'}}>STAGE 02</h3>
                        <h4 style={{fontSize: '1.5rem', marginBottom: '15px'}}>The Execution</h4>
                        <p style={{color: '#888', lineHeight: '1.6'}}>Principal photography using industry-standard technology and cinematic lighting.</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="glow-node"></div>
                    <div className="timeline-card">
                        <h3 style={{color: '#00ff7f', letterSpacing: '3px', fontSize: '0.8rem', marginBottom: '10px'}}>STAGE 03</h3>
                        <h4 style={{fontSize: '1.5rem', marginBottom: '15px'}}>The Polish</h4>
                        <p style={{color: '#888', lineHeight: '1.6'}}>Meticulous color grading and sound design to elevate the narrative to a global standard.</p>
                    </div>
                </div>
            </section>

            {/* PRODUCTIONS - 2 VIDEOS PER ROW */}
            <section style={{paddingBottom: '100px'}}>
                <div style={{textAlign: 'center', marginBottom: '40px'}}><h2 style={{fontSize: '2.5rem', fontWeight: 900}}>LATEST PRODUCTIONS</h2></div>
                <div className="prod-grid">
                    {productions.map((p) => (
                        <div className="video-box" key={p.id} onClick={() => setSelectedVideo(p.src)}>
                            <video muted loop autoPlay playsInline><source src={p.src} type="video/mp4" /></video>
                            <div className="box-overlay">
                                <span style={{fontSize: '0.7rem', color: '#00ff7f', letterSpacing: '3px'}}>{p.label}</span>
                                <h3 style={{fontSize: '1.5rem', marginTop: '10px'}}>{p.title}</h3>
                                <p style={{marginTop: '15px', fontWeight: 800, fontSize: '0.8rem'}}>MAXIMIZE VIEW ⤢</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CALL TO ACTION */}
            <section className="final-cta">
                <div className="cta-content">
                    <h2>HAVE A VISION?<br/>LET'S BUILD IT.</h2>
                    <p>Now accepting select projects for the upcoming quarter.</p>
                    <a href="/contact" className="btn-glow">Start Your Production</a>
                </div>
            </section>

            {/* MAXIMIZE THEATER MODE */}
            {selectedVideo && (
                <div className="cinema-mode">
                    <div className="cinema-header">
                        <span style={{fontWeight: 900, color: '#00ff7f'}}>THEATER VIEW</span>
                        <button className="close-cinema" onClick={() => setSelectedVideo(null)}>MINIMIZE ✕</button>
                    </div>
                    <div className="cinema-body">
                        <video controls autoPlay><source src={selectedVideo} type="video/mp4" /></video>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default MediaProduction;