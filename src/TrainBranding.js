import React from 'react';
import Header from './Header';
import Footer from './Footer';

// --- Assets ---
import trainHero from './trainhero.jpg'; 
import whyBestImg from './best.jpg'; 
import trainMotion1 from './tb1.mp4'; 
import trainMotion2 from './tb2.mp4'; 
import work1 from './t1.jpg';
import work2 from './t2.jpg';
import work3 from './t3.jpg';
import work4 from './t4.jpg';

const CTABanner = () => {
    const styles = `
        @keyframes float-star { 
            0% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; } 
            50% { transform: translate(20px, -20px) rotate(180deg); opacity: 1; } 
            100% { transform: translate(-10px, 10px) rotate(360deg); opacity: 0.6; } 
        }
        .cta-container { 
            background: #000 !important; 
            padding: 40px 20px;
            border-radius: 40px 15px;
            max-width: 1100px; 
            margin: 40px 15px; 
            text-align: center; 
            position: relative; 
            overflow: hidden; 
            box-shadow: 0 0 50px rgba(0, 255, 127, 0.3);
        }
        @media (min-width: 768px) {
            .cta-container { padding: 60px 20px; border-radius: 80px 20px; margin: 60px auto; }
        }
        .cta-text { position: relative; z-index: 10; color: #fff; }
        .cta-headline { font-size: 1.8rem; font-weight: 800; margin-bottom: 15px; }
        @media (min-width: 768px) { .cta-headline { font-size: 2.5rem; } }
        .cta-btn { color: #fff; text-decoration: none; font-size: 1.2rem; font-weight: 600; display: inline-block; transition: 0.3s; }
        .cta-btn:hover { color: #00ff7f; transform: scale(1.05); }
        .cta-line { display: block; width: 60px; height: 3px; background: #00ff7f; margin: 8px auto 0; transition: 0.4s; }
        .cta-btn:hover + .cta-line { width: 140px; }
        .floating-element { position: absolute; border-radius: 50%; filter: blur(2px); animation: float-star 10s infinite alternate ease-in-out; }
    `;

    return (
        <div className="cta-container">
            <style>{styles}</style>
            {[...Array(10)].map((_, i) => (
                <div key={i} className="floating-element" style={{ 
                    background: ['#ff6b6b', '#48dbfb', '#00ff7f', '#feca57', '#ff9ff3'][i % 5],
                    top: `${Math.random() * 90}%`, left: `${Math.random() * 95}%`, 
                    width: `${Math.random() * 10 + 4}px`, height: `${Math.random() * 10 + 4}px`, 
                    animationDelay: `${i * 0.3}s` 
                }}></div>
            ))}
            <div className="cta-text">
                <h2 className="cta-headline">Ready to Scale Your Brand Reach?</h2>
                <div className="cta-button-container">
                    <a href="/contact" className="cta-btn">Consult Our Experts</a>
                    <span className="cta-line"></span>
                </div>
            </div>
        </div>
    );
};

export const TrainBranding = () => {
    const portfolioImages = [work1, work2, work3, work4];

    const pageStyles = `
        .train-page { font-family: 'Montserrat', sans-serif; color: #222; overflow-x: hidden; scroll-behavior: smooth; }
        .header-fixed { position: fixed; top: 0; left: 0; width: 100%; z-index: 9999; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); box-shadow: 0 2px 20px rgba(0,0,0,0.08); }
        
        @keyframes float-slow {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(1.5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }

        .hero-section {
            height: 70vh; width: 100%;
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${trainHero}) center/cover no-repeat;
            display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: #fff; padding: 0 20px;
        }
        .hero-section h1 { font-size: 2.2rem; font-weight: 900; max-width: 1100px; line-height: 1.2; text-shadow: 0 4px 20px rgba(0,0,0,0.5); }
        .hero-section p { font-size: 1.1rem; margin-top: 15px; max-width: 800px; font-weight: 300; }
        @media (min-width: 768px) {
            .hero-section { height: 85vh; }
            .hero-section h1 { font-size: 4.5rem; }
            .hero-section p { font-size: 1.5rem; }
        }

        .split-section { display: flex; flex-direction: column; padding: 60px 20px; gap: 40px; background: #ffffff; }
        .image-side { width: 100%; }
        .fancy-img-split { width: 100%; border-radius: 40px 15px; box-shadow: 15px 15px 0px #1f428708; object-fit: cover; height: 350px; }
        .text-side { width: 100%; }
        .text-side h2 { font-size: 2rem; color: #1f4287; font-weight: 900; margin-bottom: 20px; }

        @media (min-width: 1024px) {
            .split-section { flex-direction: row; padding: 120px 8%; gap: 80px; align-items: center; }
            .image-side { flex: 1; animation: float-slow 8s infinite ease-in-out; }
            .text-side { flex: 1.2; }
            .fancy-img-split { height: 550px; border-radius: 100px 30px; }
            .text-side h2 { font-size: 3rem; }
        }

        .benefit-item-split { margin-bottom: 25px; display: flex; gap: 15px; }
        .check-mark { color: #00ff7f; font-weight: 900; font-size: 1.2rem; }
        .benefit-item-split b { color: #1f4287; font-size: 1.1rem; display: block; margin-bottom: 3px; }
        .benefit-item-split p { font-size: 0.95rem; line-height: 1.4; color: #555; }

        .motion-section { padding: 60px 0; background: #000; text-align: center; }
        .motion-title { color: #fff; font-size: 2rem; font-weight: 900; margin-bottom: 30px; letter-spacing: 1px; text-transform: uppercase; }
        .video-grid { display: grid; grid-template-columns: 1fr; gap: 15px; padding: 0 15px; }
        .motion-video { width: 100%; height: 300px; object-fit: cover; border-radius: 8px; opacity: 0.9; }

        @media (min-width: 768px) {
            .motion-section { padding: 100px 0; }
            .motion-title { font-size: 3rem; }
            .video-grid { grid-template-columns: 1fr 1fr; height: 50vh; padding: 0 40px; }
            .motion-video { height: 100%; }
        }

        .portfolio-container { display: flex; overflow-x: auto; gap: 15px; padding: 30px 20px; scroll-snap-type: x mandatory; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .portfolio-container::-webkit-scrollbar { display: none; }
        .portfolio-item { flex: 0 0 280px; height: 380px; scroll-snap-align: center; border-radius: 30px 10px; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

        @media (min-width: 768px) {
            .portfolio-container { gap: 25px; padding: 50px 8%; }
            .portfolio-item { flex: 0 0 450px; height: 550px; border-radius: 50px 15px; }
        }
    `;

    return (
        <div className="train-page">
            <style>{pageStyles}</style>
            <header className="header-fixed"><Header /></header>

            <section className="hero-section">
                <h1>Premium Train Branding & Railway Advertising</h1>
                <p>Transforming national transit corridors into high-visibility brand experiences.</p>
            </section>

            <section className="split-section">
                <div className="image-side">
                    <img src={whyBestImg} className="fancy-img-split" alt="Railway Branding" />
                </div>
                <div className="text-side">
                    <h2>The Leading Choice for Transit Media</h2>
                    <div className="benefit-item-split">
                        <span className="check-mark">✓</span>
                        <div><b>Strategic National Reach</b><p>Dominate key routes with consistent brand exposure across urban demographics.</p></div>
                    </div>
                    <div className="benefit-item-split">
                        <span className="check-mark">✓</span>
                        <div><b>High-Speed Durability</b><p>Industrial-grade materials designed for speed and weather resistance.</p></div>
                    </div>
                    <div className="benefit-item-split">
                        <span className="check-mark">✓</span>
                        <div><b>Full Campaign Management</b><p>We handle creative design, railway liaison, and professional installation.</p></div>
                    </div>
                </div>
            </section>

            <section id="motion" className="motion-section">
                <h2 className="motion-title">Train In Motion</h2>
                <div className="video-grid">
                    <video autoPlay muted loop playsInline className="motion-video"><source src={trainMotion1} type="video/mp4" /></video>
                    <video autoPlay muted loop playsInline className="motion-video"><source src={trainMotion2} type="video/mp4" /></video>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: '#fcfcfc' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 900, marginBottom: '10px' }}>Success Stories</h2>
                <div className="portfolio-container">
                    {portfolioImages.concat(portfolioImages).map((img, i) => (
                        <div className="portfolio-item" key={i}>
                            <img src={img} alt="Railway Project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
                <p style={{ textAlign: 'center', color: '#888', marginTop: '15px', fontSize: '0.9rem' }}>← Swipe to Explore →</p>
            </section>

            <CTABanner />
            <Footer />
        </div>
    );
};

export default TrainBranding;