import React, { useEffect, useRef, useState } from 'react';

// --- Image Imports --- 
import oohHero from './herooh.png'; 
import work1 from './o2.jpg';
import work2 from './o3.jpg';
import work3 from './o4.jpg';
import work4 from './o2.jpg'; 
import Header from './Header';
import Footer from './Footer';
import strategic from './strategic.jpg';
import innovative from './innovative.jpg';
import end from './end.jpg';

const OOH_SERVICES = [
    { id: 1, headline: "Creative Concept", description: "Designing visually arresting, simple, and high-impact ad creatives tailored for the OOH environment. We focus on legibility and instant brand recall." },
    { id: 2, headline: "Media Planning", description: "Advanced spatial data analysis to select locations that reach the highest concentration of your target demographic across the city." },
    { id: 3, headline: "Traditional OOH", description: "Securing premium billboard inventory, static posters, and large-format print executions in high-traffic zones and major highways." },
    { id: 4, headline: "Digital OOH (DOOH)", description: "Dynamic campaign management across digital screens, bus shelters, and video networks with real-time content optimization." },
    { id: 5, headline: "Transit & Street", description: "Utilizing bus wraps, train interiors, and street furniture like kiosks and benches for localized, pervasive messaging." },
    { id: 6, headline: "Performance Metrics", description: "Proprietary reporting and geofencing to measure OOH-driven foot traffic and digital conversion rates accurately." },
];

const ScrollReveal = ({ children, direction }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) setIsVisible(true); // Changed to stay visible once revealed
            });
        }, { threshold: 0.1 });

        const { current } = domRef;
        if (current) observer.observe(current);
        return () => observer.unobserve(current);
    }, []);

    const animationClass = direction === 'left' ? 'reveal-left' : 'reveal-right';

    return (
        <div ref={domRef} className={`reveal-box ${isVisible ? animationClass : 'hidden-state'}`}>
            {children}
        </div>
    );
};

export const OOHPage = () => {
    const differences = [
        { title: "Strategic Placement", description: "Data-driven site selection.", icon: strategic },
        { title: "Innovative Media Mix", description: "Combining static and digital OOH.", icon: innovative },
        { title: "End-to-End Execution", description: "Managing permits to installation.", icon: end }
    ];

    const portfolioImages = [work1, work2, work3, work4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
        }, 3500); 
        return () => clearInterval(interval);
    }, [portfolioImages.length]);

    const styles = `
        .ooh-page { 
            background-color: #f8f9fa; 
            font-family: 'Montserrat', sans-serif; 
            overflow-x: hidden;
            /* Added padding-top so the fixed header doesn't cover the hero */
            padding-top: 80px; 
        }
        
        .header-wrapper {
            position: fixed; /* Changed from sticky to fixed */
            top: 0;
            left: 0;
            width: 100%;
            z-index: 2000; /* Increased z-index to stay above everything */
            background: #fff;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
        }

        .hero { 
            background: url(${oohHero}) center/cover no-repeat; 
            height:50vh; display: flex; align-items: center; justify-content: center; 
            text-align: center; color: white; position: relative;
        }
        .hero::after { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.45); }
        .hero-content { position: relative; z-index: 2; width: 100%; max-width: 1000px; padding: 0 20px; }

        .portfolio-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto 100px auto;
            position: relative;
            height: 650px;
            overflow: hidden;
            border-radius: 40px;
            box-shadow: 0 40px 80px rgba(0,0,0,0.15);
        }

        .slide {
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
            transform: scale(1.05);
        }

        .slide.active {
            opacity: 1;
            transform: scale(1);
        }

        .slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .dot-container {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-top: -60px;
            position: relative;
            z-index: 10;
        }
        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255,255,255,0.4);
            transition: 0.3s;
        }
        .dot.active {
            background: #fff;
            transform: scale(1.3);
        }

        .reveal-box { transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .hidden-state { opacity: 0; filter: blur(10px); transform: translateY(30px); }
        .reveal-left { animation: slideInLeft 1s forwards; }
        .reveal-right { animation: slideInRight 1s forwards; }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-120px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(120px); } to { opacity: 1; transform: translateX(0); } }

        .services-grid {
            display: grid; grid-template-columns: repeat(2, 1fr); gap: 50px;
            max-width: 1400px; margin: 0 auto; padding: 100px 30px;
        }
        .service-card-wide {
            background: #ffffff; border-radius: 40px; padding: 85px 60px; text-align: center;
            box-shadow: 0 30px 60px rgba(0,0,0,0.05); border-bottom: 15px solid #1f4287;
            min-height: 420px; display: flex; flex-direction: column; justify-content: center;
            transition: transform 0.3s ease;
        }
        .service-card-wide:hover { transform: translateY(-10px); }
        .service-card-wide h3 { font-size: 2.6rem; color: #1f4287; margin-bottom: 20px; font-weight: 800; }
        .service-card-wide p { font-size: 1.35rem; color: #444; line-height: 1.8; }

        .diff-card {
            background: #fff; border-radius: 30px; padding: 50px; width: 420px; text-align: center;
            box-shadow: 0 10px 40px rgba(0,0,0,0.05); transition: 0.3s;
        }
        .diff-card:hover { transform: translateY(-5px); }
        .diff-card img { width: 100%; height: 420px; object-fit: cover; border-radius: 20px; }

        @media (max-width: 1100px) {
            .services-grid { grid-template-columns: 1fr; }
            .portfolio-container { height: 400px; margin: 0 20px 80px 20px; }
            .ooh-page { padding-top: 70px; }
        }
    `;

    return (
        <div className="ooh-page">
            <style>{styles}</style>
            <div className="header-wrapper"><Header /></div>

            <section className="hero">
                <div className="hero-content">
                    <h1 style={{ fontSize: '5.5rem', fontWeight: 900, marginBottom: '10px' }}>OUT OF HOME</h1>
                    <p style={{ fontSize: '2rem', fontWeight: 300 }}>Strategic visibility in high-impact environments.</p>
                </div>
            </section>

            {/* HOW WE DIFFER SECTION */}
            <section style={{ padding: '120px 0' }}>
                <h2 style={{ textAlign: 'center', fontSize: '3.8rem', color: '#1f4287', marginBottom: '80px', fontWeight: 900 }}>HOW WE DIFFER</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
                    {differences.map((diff, i) => (
                        <div key={i} className="diff-card">
                            <img src={diff.icon} alt={diff.title} />
                            <h3 style={{ fontSize: '2.2rem', color: '#1f4287', marginTop: '20px' }}>{diff.title}</h3>
                            <p style={{ fontSize: '1.2rem', color: '#666' }}>{diff.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* OUR WORKS */}
            <section>
                <h2 style={{ textAlign: 'center', fontSize: '3.5rem', color: '#1f4287', marginBottom: '40px', fontWeight: 900 }}>OUR WORKS</h2>
                <div className="portfolio-container">
                    {portfolioImages.map((img, index) => (
                        <div className={`slide ${index === currentIndex ? 'active' : ''}`} key={index}>
                            <img src={img} alt={`Work ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="dot-container">
                    {portfolioImages.map((_, index) => (
                        <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} />
                    ))}
                </div>
            </section>

            {/* EXPERTISE SECTION */}
            <section style={{ backgroundColor: '#fff', padding: '100px 0' }}>
                <h2 style={{ textAlign: 'center', fontSize: '3.8rem', color: '#1f4287', marginBottom: '40px', fontWeight: 900 }}>OUR EXPERTISE</h2>
                <div className="services-grid">
                    {OOH_SERVICES.map((service, index) => (
                        <ScrollReveal key={service.id} direction={index % 2 === 0 ? 'left' : 'right'}>
                            <div className="service-card-wide">
                                <h3>{service.headline}</h3>
                                <p>{service.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OOHPage;