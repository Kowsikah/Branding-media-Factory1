import React, { useState } from 'react'; // <--- MODIFIED: Added useState
import { Helmet } from "react-helmet-async";


// --- EXTERNAL COMPONENT IMPORTS (Assumed available in the project) ---
import Header from './Header';
import Footer from './Footer';

// --- GENERAL IMAGE IMPORTS ---
import aboutImage from './aboutus.jpg'; 

// ----------------------------------------------------------------------
// --- TRUST CTA SECTION SPECIFIC IMPORTS ---
// ----------------------------------------------------------------------
import clientLogo01 from './cl1.png'; 
import clientLogo02 from './cl2.png';
import clientLogo03 from './cl3.png';
import clientLogo04 from './cl4.png';
import clientLogo05 from './cl5.png';
import clientLogo06 from './cl6.png';
import clientLogo07 from './cl7.png';
import clientLogo08 from './cl8.png';
import clientLogo09 from './cl9.png';
import clientLogo10 from './cl10.png';
import clientLogo11 from './cl11.jpg';
// ----------------------------------------------------------------------


// --- GLOBAL COLOR DEFINITIONS (Black/Spring Green Scheme) ---
const PRIMARY_COLOR = '#000000';    // Black
const SECONDARY_COLOR = '#333333';  // Dark Gray for secondary text
const ACCENT_COLOR = '#00FF7F';    // Spring Green (CTA/Highlight)
const BG_LIGHT = '#F5F5F5';        // Off-white/Light Gray (Section background)
const BG_WHITE = '#ffffff';        // Pure White
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
// --- DATA STRUCTURES ---
// ----------------------------------------------------------------------
const uniqueLogos = [
    clientLogo01, clientLogo02, clientLogo03, clientLogo04, clientLogo05,
    clientLogo06, clientLogo07, clientLogo08, clientLogo09, clientLogo10, clientLogo11
];

const uniqueShapes = [
    { type: 'shape', color: PRIMARY_COLOR, shape: 'circle' },        
    { type: 'shape', color: ACCENT_COLOR, shape: 'rounded-square' }, 
    { type: 'shape', color: PRIMARY_COLOR, shape: 'square' },        
    { type: 'shape', color: ACCENT_COLOR, shape: 'half-circle' },    
    { type: 'shape', color: BG_WHITE, shape: 'circle' },             
];

const TOTAL_ELEMENTS = 60; 
const avatarData = Array.from({ length: TOTAL_ELEMENTS }, (_, i) => {
    if (i % 2 === 0) {
        const logoIndex = (i / 2) % uniqueLogos.length;
        return { type: 'image', id: i, src: uniqueLogos[logoIndex] };
    } else {
        const shapeIndex = ((i - 1) / 2) % uniqueShapes.length;
        return uniqueShapes[shapeIndex];
    }
});


const coreValues = [
    { title: "Client-Centricity", description: "Placing client success at the heart of every strategy and execution, ensuring tailored solutions.", icon: "🤝", color: "#6f42c1" }, 
    { title: "Innovative Execution", description: "Continuously exploring new technologies and unconventional media channels to maximize campaign impact.", icon: "🚀", color: ACCENT_COLOR },
    { title: "Uncompromising Quality", description: "Committing to the highest standards in creative production, media buying, and client service.", icon: "💎", color: PRIMARY_COLOR },
];


// --- CORRECTED FAQ DATA FOR DIGITAL MARKETING AND OOH AGENCY ---
const faqData = [ 
    {
        question: "How do you integrate Digital Marketing with OOH Hoardings?",
        answer: "We employ a full-funnel approach: using high-impact OOH placements (like Unipole and Highway Hoardings) for mass awareness, then retargeting that localized audience segment online via geo-fencing, paid social, and search ads for conversion.",
    },
    {
        question: "What is the typical ROI on an OOH campaign?",
        answer: "ROI is tracked through specific metrics like unique landing page visits, geo-fenced lift studies, and dedicated campaign phone numbers. While awareness is high, we focus on measurable digital uplift to prove campaign success.",
    },
    {
        question: "Do you offer SEO services or just paid advertising?",
        answer: "We offer a complete suite of digital services including comprehensive Technical SEO, Content Strategy, and high-performance Paid Media (PPC, Social Ads). Our goal is to build long-term organic growth alongside immediate paid results.",
    },
    {
        question: "What makes your Unipole and Highway Hoarding locations prime?",
        answer: "We utilize proprietary traffic data and demographic mapping to secure locations with the highest daily vehicle traffic (DVT), longest dwell times, and maximum visibility to your target audience, guaranteeing optimal exposure.",
    },
];
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
// --- COMPONENT: TRUST CTA SECTION (Embedded Helper) ---
// ----------------------------------------------------------------------
const TrustCTASection = ({ clientCount = '1000+' }) => {
    
    // --- STYLES FOR TrustCTASection (Embedded within component for local use) ---
    const embeddedStylesCTA = `
        .trust-cta-section {
            padding: 80px 5%;
            background-color: ${BG_LIGHT}; 
            text-align: center;
            overflow: hidden; 
        }

        .trust-cta-grid {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            min-height: 500px; 
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        @keyframes slowPan {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-33.33%, 0, 0); } 
        }

        .avatar-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 150%; 
            height: 100%;
            display: grid;
            grid-template-columns: repeat(15, 1fr); 
            grid-template-rows: repeat(4, 1fr); 
            gap: 0; 
            padding: 0; 
            animation: slowPan 60s linear infinite;
        }
        
        .avatar-container {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            margin: 0; 
            width: 100%; 
            height: 100%;
            opacity: 0.85; 
        }

        .trust-cta-content-bubble {
            position: relative;
            z-index: 10;
            background-color: ${BG_WHITE};
            padding: 60px 50px;
            border-radius: 60px;
            border: 2px solid ${ACCENT_COLOR}; 
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
            max-width: 600px; 
        }

        .trust-cta-headline {
            font-family: 'Georgia', serif; 
            font-size: 2.5em;
            font-weight: 500;
            color: ${PRIMARY_COLOR}; 
            margin-bottom: 10px;
        }

        .client-count {
            font-family: 'Brush Script MT', 'Comic Sans MS', cursive; 
            font-weight: bold;
            color: ${PRIMARY_COLOR}; 
            font-size: 1.2em;
            text-decoration: underline;
            text-decoration-color: ${ACCENT_COLOR}; 
            text-decoration-thickness: 3px;
            margin: 0 5px;
        }

        .trust-cta-subtext {
            font-size: 1.2em;
            color: ${PRIMARY_COLOR}; 
            margin-bottom: 30px;
        }
        
        .growth-tag {
            position: absolute;
            top: 25%;
            right: 10%;
            font-size: 1.1em;
            color: ${ACCENT_COLOR}; 
            font-family: 'Brush Script MT', cursive;
            font-weight: bold;
            transform: rotate(10deg);
        }

        .arrow {
            position: absolute;
            width: 60px;
            height: 60px;
            top: -30px;
            left: 50%;
            transform: translateX(-50%) rotate(40deg);
            overflow: visible;
            pointer-events: none;
        }

        .trust-cta-button {
            display: inline-block;
            background-color: ${PRIMARY_COLOR}; 
            color: ${ACCENT_COLOR}; 
            padding: 15px 40px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.1em;
            transition: background-color 0.3s, transform 0.2s;
            border: 2px solid ${ACCENT_COLOR};
        }

        .trust-cta-button:hover {
            background-color: ${ACCENT_COLOR}; 
            color: ${PRIMARY_COLOR}; 
            transform: translateY(-2px);
        }

        @media (max-width: 768px) {
            .trust-cta-content-bubble {
                padding: 40px 30px;
                max-width: 95%;
            }
            .trust-cta-headline {
                font-size: 2em;
            }
            .growth-tag {
                top: 5%;
                right: 5%;
                font-size: 0.9em;
            }
            .avatar-background {
                grid-template-columns: repeat(10, 1fr);
                grid-template-rows: repeat(6, 1fr); 
                width: 200%; 
            }
            @keyframes slowPan {
                0% { transform: translate3d(0, 0, 0); }
                100% { transform: translate3d(-50%, 0, 0); } 
            }
        }
    `;
    
    // --- RENDER LOGIC for Avatars ---
    const renderAvatar = (avatar, index) => {
        const shapeType = avatar.shape || 'circle';
        let borderRadius = '0'; 
        if (shapeType === 'circle') borderRadius = '50%';
        if (shapeType === 'rounded-square') borderRadius = '15%'; 
        if (shapeType === 'half-circle') borderRadius = '50% 50% 0 0';
        
        if (avatar.type === 'image') {
            return (
                <div 
                    key={index} 
                    className={`avatar-container avatar-img ${shapeType}`} 
                    style={{ 
                        borderRadius: '50%', 
                        backgroundColor: BG_WHITE,
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)', 
                    }}
                >
                    <img 
                        src={avatar.src} 
                        alt={`Client Logo ${avatar.id}`} 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'contain', 
                            padding: '15%', 
                        }} 
                    />
                </div>
            );
        }
        
        return (
            <div 
                key={index} 
                className={`avatar-container avatar-shape ${shapeType}`}
                style={{ 
                    backgroundColor: avatar.color,
                    borderRadius: borderRadius,
                }}
            ></div>
        );
    };

    return (
        <section className="trust-cta-section">
            {/* Inject local CTA styles */}
            <style dangerouslySetInnerHTML={{ __html: embeddedStylesCTA }} />
            <div className="trust-cta-grid">
                <div className="avatar-background">
                    {avatarData.map(renderAvatar)}
                </div>

                <div className="trust-cta-content-bubble">
                    <h2 className="trust-cta-headline">
                        Join <span className="client-count">[{clientCount}] businesses</span>
                    </h2>
                    <p className="trust-cta-subtext">
                        who redefine advertising with **Branding Media Factory**
                    </p>
                    <span className="growth-tag">
                        growth!
                        <svg className="arrow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M70 30 C 50 10, 40 40, 30 70" stroke={`${ACCENT_COLOR}`} strokeWidth="8" />
                            <polygon points="20,70 30,85 40,70" fill={`${ACCENT_COLOR}`} transform="rotate(20 30 75)"/>
                        </svg>
                    </span>
                    <a href="/contact" className="trust-cta-button">
                        Start Your Redefinition
                    </a>
                </div>
            </div>
        </section>
    );
};

// ----------------------------------------------------------------------
// --- COMPONENT: STICKY CTA BAR (Embedded Helper) ---
// ----------------------------------------------------------------------
const StickyCTA = () => {
    // --- STYLES FOR StickyCTA ---
    const embeddedStylesStickyCTA = `
        .sticky-cta-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: ${PRIMARY_COLOR}; 
            color: ${BG_WHITE};
            padding: 15px 5%;
            z-index: 1000;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.2);
            border-top: 3px solid ${ACCENT_COLOR};
        }
        .sticky-cta-text {
            font-size: 1.1em;
            margin: 0 30px 0 0;
            font-weight: 300;
            color: #f0f0f0;
        }
        .sticky-cta-text strong {
            font-weight: 700;
            color: ${ACCENT_COLOR};
        }
        .sticky-cta-button {
            display: inline-block;
            background-color: ${ACCENT_COLOR};
            color: ${PRIMARY_COLOR};
            padding: 10px 25px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1em;
            transition: background-color 0.3s, transform 0.2s;
            border: none;
        }
        .sticky-cta-button:hover {
            background-color: ${BG_WHITE};
            color: ${PRIMARY_COLOR};
            transform: scale(1.05);
        }

        @media (max-width: 768px) {
            .sticky-cta-bar {
                flex-direction: column;
                padding: 10px 5%;
            }
            .sticky-cta-text {
                margin: 0 0 10px 0;
                text-align: center;
                font-size: 1em;
            }
            .sticky-cta-button {
                width: 100%; 
                text-align: center;
            }
        }
    `;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: embeddedStylesStickyCTA }} />
            <div className="sticky-cta-bar">
                <p className="sticky-cta-text">
                    Ready to scale your brand? **Let's Talk Strategy.**
                </p>
                <a href="/contact" className="sticky-cta-button">
                    Get Free Consultation
                </a>
            </div>
        </>
    );
};

const AttractiveMissionVision = () => {
    // Define the content for the cards (Updated to use emojis/placeholders instead of image variables)
    const cardData = [
        {
            title: "VISION",
            icon: "💡", // Lightbulb emoji as placeholder
            text: "To be the most trusted and innovative printing partner in the region, setting the benchmark for quality and creative excellence.",
            color: "#4a90e2", // Blue
        },
        {
            title: "MISSION",
            icon: "🎯", // Target emoji as placeholder
            text: "To empower every client with premium, tailor-made printing solutions, delivered with superior precision, speed, and customer focus.",
            color: "#d0021b", // Red
        },
        {
            title: "QUALITY",
            icon: "⭐", // Star emoji as placeholder
            text: "We commit to precision in every print, using the best materials and processes to ensure outstanding, lasting results.",
            color: "#f5a623", // Gold/Orange
        },
    ];

    // --- NEW: CSS for Mobile Vertical Stacking ---
    const mobileStackingStyles = `
        /* Force vertical stack on mobile for the Mission/Vision cards */
        @media (max-width: 768px) {
            .mv-cards-container {
                /* Override desktop horizontal scrolling layout */
                flex-direction: column !important; /* Stack cards vertically */
                flex-wrap: nowrap !important; 
                overflow-x: hidden !important; /* Remove horizontal scrolling */
                align-items: center; /* Center the stacked cards */
                padding: 0 5%; /* Add side padding for spacing */
                gap: 25px !important; /* Apply vertical gap between stacked cards */
            }
            .mv-card-item {
                width: 100% !important; /* Make card take full width */
                max-width: 450px; /* Cap maximum mobile width */
                height: auto !important; /* Allow card height to adjust to content */
                margin-bottom: 0 !important;
            }
        }
    `;
    // ---------------------------------------------


    return (
        <section id="mission-vision" style={{ 
            // MODIFIED: Increased padding
            padding: "100px 30px", 
            backgroundColor: "#ffffff", // Pure white background for high contrast
            fontFamily: "Roboto, sans-serif" 
        }}>
             {/* Inject the mobile specific stacking styles */}
            <style dangerouslySetInnerHTML={{ __html: mobileStackingStyles }} />

            <h2 style={{ 
                textAlign: "center", 
                // MODIFIED: Increased font size
                fontSize: "3.5rem", 
                marginBottom: "60px", 
                color: "#1c2c52", // Deep blue
                fontWeight: "900",
                letterSpacing: "-0.04em"
            }}>
                Our Driving Principles ✨
            </h2>

            <div 
                className="mv-cards-container" // <-- Added class for CSS targeting
                style={{
                    display: "flex",
                    // Kept: flexWrap: "nowrap" to enforce single line
                    flexWrap: "nowrap", 
                    justifyContent: "center",
                    gap: "40px", // Increased gap
                    maxWidth: "1700px",
                    margin: "0 auto",
                    // Kept: overflowX: 'auto' for horizontal scrolling
                    overflowX: 'auto', 
                    paddingBottom: '10px', // Space for scrollbar
                }}>
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="mv-card-item" // <-- Added class for CSS targeting
                        style={{
                            // MODIFIED: Increased width and height
                            width: "380px",
                            height: "450px", 
                            // Kept: Prevent cards from shrinking
                            flexShrink: 0, 
                            padding: "30px",
                            background: "#ffffff",
                            borderRadius: "15px",
                            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)", // Deeper shadow
                            transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s",
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                        onMouseEnter={(e) => { 
                            e.currentTarget.style.transform = "translateY(-15px)"; // More dramatic lift
                            e.currentTarget.style.boxShadow = `0 25px 50px ${card.color}30`; 
                        }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.1)"; }}
                    >
                        {/* 1. Icon/Title Area */}
                        <div style={{ 
                            position: 'relative', 
                            zIndex: 10,
                            paddingBottom: '20px',
                            width: '100%',
                            textAlign: 'left' // Align title/icon left
                        }}>
                            {/* Icon Circle */}
                            <div style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                background: card.color,
                                boxShadow: `0 0 0 10px ${card.color}30`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2.5rem', // Emoji size
                                marginBottom: '15px'
                            }}>
                                {card.icon}
                            </div>
                            
                            {/* Title */}
                            <h3 style={{ 
                                // MODIFIED: Increased font size
                                fontSize: "2rem", 
                                color: "#1c2c52", 
                                textTransform: "uppercase", 
                                fontWeight: "900",
                                borderBottom: '4px solid #eee',
                                paddingBottom: '10px',
                            }}>
                                {card.title}
                            </h3>
                        </div>

                        {/* 2. Text Content */}
                        <p style={{ 
                            // MODIFIED: Increased font size
                            fontSize: "1.2rem", 
                            color: "#555", 
                            lineHeight: "1.7",
                            textAlign: "left",
                            paddingTop: '20px',
                            flexGrow: 1, // Ensures text takes up vertical space
                            display: 'flex',
                            alignItems: 'center', // Centers text vertically if short
                        }}>
                            {card.text}
                        </p>

                        {/* 3. Decorative Angled Stripe (Sits behind the content) */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '-50px', // Push below to hide bottom edge
                                right: '-50px',
                                width: '200px',
                                height: '200px',
                                background: card.color,
                                transform: 'rotate(45deg)',
                                opacity: 0.1, // Very subtle background accent
                                zIndex: 0
                            }}
                        ></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// ----------------------------------------------------------------------
// --- NEW COMPONENT: ANIMATED CORE VALUES (Replacing the old Core Values section) ---
// ----------------------------------------------------------------------
const AnimatedCoreValues = () => {
    
    // Use the globally defined coreValues data structure
    const valuesData = coreValues; 

    // New Styles for Animated Cards
    const animatedStyles = `
        .core-values-section {
            background-color: ${BG_LIGHT};
            padding: 100px 5%; /* Adjusted padding */
            text-align: center;
        }
        .core-values-grid {
            display: flex;
            justify-content: center;
            flex-wrap: wrap; /* Allow wrapping on small screens */
            gap: 40px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .animated-value-card {
            width: 350px;
            padding: 40px;
            background: ${BG_WHITE};
            border-radius: 15px;
            /* Distinct Shadow */
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); 
            position: relative;
            overflow: hidden;
            border: 1px solid #e0e0e0;
            /* Animation on hover base */
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s;
            cursor: pointer;
            text-align: left;
        }

        .animated-value-card:hover {
            transform: translateY(-12px); /* Lift */
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2); /* Stronger shadow on lift */
            border-color: transparent; 
        }
        
        /* Colored Top Line - Infographic 1 */
        .animated-value-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 6px;
            background-color: var(--card-color);
            transition: height 0.3s;
        }
        
        .animated-value-card:hover::before {
            height: 12px; /* Thicken the bar dramatically on hover */
        }

        /* Icon Wrapper - Infographic 2 (Circular background with hover effect) */
        .icon-wrapper {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: var(--card-color); /* Solid color background */
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 25px;
            transition: transform 0.3s ease-out, box-shadow 0.3s;
            box-shadow: 0 5px 15px var(--card-color)40;
        }
        
        .animated-value-card:hover .icon-wrapper {
             transform: scale(1.1) rotate(5deg); /* Distinct pop/twist animation */
             /* Subtle pulse effect on hover via secondary shadow */
             box-shadow: 0 5px 25px var(--card-color)60, 0 0 0 5px var(--card-color)00; 
        }

        .value-icon {
            font-size: 3.5rem; /* Larger icon */
            color: ${BG_WHITE}; /* White icon inside solid circle */
            line-height: 1;
        }

        .value-title {
            font-size: 1.8rem; /* Larger title */
            font-weight: 800;
            color: ${PRIMARY_COLOR};
            margin-bottom: 15px;
            border-bottom: 2px solid ${ACCENT_COLOR}30;
            padding-bottom: 10px;
        }

        .value-description {
            font-size: 1.1rem;
            color: ${SECONDARY_COLOR};
            line-height: 1.6;
        }
        
        @media (max-width: 768px) {
            .animated-value-card {
                width: 100%;
                max-width: 450px;
            }
        }
    `;

    return (
        <section className="core-values-section" id="core-values">
            <style dangerouslySetInnerHTML={{ __html: animatedStyles }} />
            <h2 style={{ 
                textAlign: "center", 
                fontSize: "3.5rem", 
                marginBottom: "60px", 
                color: "#1c2c52",
                fontWeight: "900",
                letterSpacing: "-0.04em"
            }}>
                Our Guiding Principles 💡
            </h2>
            <div className="core-values-grid">
                {valuesData.map((value, index) => (
                    <div
                        key={index}
                        className="animated-value-card"
                        // Set the dynamic color variable
                        style={{'--card-color': value.color}}
                    >
                        <div className="icon-wrapper">
                            <span className="value-icon">
                                {value.icon}
                            </span>
                        </div>
                        <h4 className="value-title">{value.title}</h4>
                        <p className="value-description">{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// ----------------------------------------------------------------------
// --- NEW COMPONENT: FAQ Section (Accordion) ---
// ----------------------------------------------------------------------
const FAQSection = () => {
    // State to manage which FAQ item is open
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqStyles = `
        .faq-section {
            padding: 100px 5%;
            background-color: ${BG_WHITE};
            max-width: 1000px;
            margin: 0 auto;
        }
        .faq-accordion {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .faq-item {
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            transition: box-shadow 0.3s;
        }
        .faq-item-open {
            border-color: ${ACCENT_COLOR};
            box-shadow: 0 6px 15px ${ACCENT_COLOR}20;
        }
        .faq-question {
            background-color: ${BG_WHITE};
            padding: 20px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            font-size: 1.15rem;
            font-weight: 600;
            color: ${PRIMARY_COLOR};
            transition: background-color 0.2s;
        }
        .faq-question:hover {
            background-color: ${BG_LIGHT};
        }
        .faq-question-open {
            background-color: ${ACCENT_COLOR}10;
        }
        .faq-icon {
            font-size: 1.5rem;
            color: ${PRIMARY_COLOR};
            margin-left: 20px;
            transition: transform 0.3s;
        }
        .faq-icon-rotate {
            transform: rotate(45deg);
            color: ${ACCENT_COLOR};
        }
        .faq-answer {
            padding: 0 30px;
            background-color: ${BG_LIGHT};
            color: ${SECONDARY_COLOR};
            font-size: 1rem;
            overflow: hidden;
            transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
            max-height: 0;
        }
        .faq-answer-open {
            max-height: 300px; /* Arbitrary large height */
            padding: 20px 30px;
        }
    `;

    return (
        <section className="faq-section" id="faq">
            <style dangerouslySetInnerHTML={{ __html: faqStyles }} />
            <h2 style={{ 
                textAlign: "center", 
                fontSize: "3.5rem", 
                marginBottom: "60px", 
                color: "#1c2c52",
                fontWeight: "900",
                letterSpacing: "-0.04em"
            }}>
                Frequently Asked Questions ❓
            </h2>

            <div className="faq-accordion">
                {faqData.map((item, index) => {
                    const isOpen = index === openIndex;
                    return (
                        <div 
                            key={index} 
                            className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                        >
                            <div 
                                className={`faq-question ${isOpen ? 'faq-question-open' : ''}`} 
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{item.question}</span>
                                <span className={`faq-icon ${isOpen ? 'faq-icon-rotate' : ''}`}>
                                    +
                                </span>
                            </div>
                            <div className={`faq-answer ${isOpen ? 'faq-answer-open' : ''}`}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};


// ----------------------------------------------------------------------
// --- MAIN ABOUT PAGE COMPONENT ---
// ----------------------------------------------------------------------
export const AboutPage = () => {

    // --- MAIN PAGE STYLES (Includes global resets and section styles) ---
    const embeddedStylesPage = `
        /* Global Page Reset & Fonts */
        .about-page {
            font-family: 'Arial', sans-serif;
            color: #333;
            line-height: 1.6;
            background-color: ${BG_LIGHT};
        }

        h1, h2, h3, h4 {
            color: ${PRIMARY_COLOR};
            font-weight: 700;
        }
        
        h2 {
            font-size: 2.5em;
            margin-bottom: 40px;
            text-align: center;
            position: relative;
        }
        
        h2::after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background-color: ${ACCENT_COLOR};
            margin: 10px auto 0;
            border-radius: 2px;
        }

        .section {
            padding: 80px 5%;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* 1. HERO BANNER */
        .hero-banner {
            background-image: url(${aboutImage});
            background-size: cover;
            background-position: center;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: ${BG_WHITE};
            position: relative;
        }
        .hero-banner::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .hero-content {
            z-index: 1;
        }
        .hero-content h1 {
            font-size: 3.5em;
            color: ${BG_WHITE};
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
        }

        /* 2. OUR STORY */
        .content-block {
            display: flex;
            gap: 40px;
            align-items: center;
        }
        .story-image-container {
            flex: 1;
            max-width: 400px;
        }
        .story-image {
            width: 100%;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .story-text-container {
            flex: 2;
            text-align: left;
        }
        .story-text-container p {
            font-size: 1.1em;
            margin-bottom: 20px;
            color: ${SECONDARY_COLOR};
        }

        /* 3. MISSION & VISION CARDS */
           /* --- CSS Variables for Specific Colors --- */
:root {
    --section-bg: #f7fafc; 
    --card-bg: #ffffff; 
    --primary-text: #172b4d; 
    --secondary-text: #4a5568;
    --border-radius: 8px;
    --transition-speed: 0.3s;

    /* SPECIFIC ICON COLORS */
    --blue-icon: #007bff;     /* Bright Blue for VISION */
    --red-icon: #dc3545;      /* Bright Red for MISSION */
    --gold-icon: #ffc107;     /* Gold/Yellow for QUALITY */
    
    /* Subtle Tint Colors (Low opacity version of icons) */
    --blue-tint-bg: #007bff1a; 
    --red-tint-bg: #dc35451a; 
    --gold-tint-bg: #ffc1071a;
}

/* --- Section, Grid, Card Base Styles (Unchanged) --- */
.attractive-mv-section { padding: 80px 20px; text-align: center; background: var(--section-bg); }
.attractive-mv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; max-width: 1100px; margin: 0 auto; }

.attractive-mv-card {
    background: var(--card-bg); 
    border-radius: var(--border-radius);
    padding: 30px 25px;
    position: relative;
    overflow: hidden; 
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); 
    border: 1px solid #f0f0f0; 
    transition: box-shadow var(--transition-speed) ease-out, transform var(--transition-speed) ease-out;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    min-height: 380px; 
}
.attractive-mv-card:hover { box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); transform: translateY(-2px); }

/* --- Content Elements (Icon circle color handled below) --- */
.mv-icon-circle { 
    width: 60px; height: 60px; border-radius: 50%; display: flex; 
    justify-content: center; align-items: center; font-size: 2.2em; 
    box-shadow: none !important; color: var(--card-bg); /* Icon inside is white/light */
}
.mv-card-header { display: block; margin-bottom: 5px; }
.mv-card-header-h3 { font-size: 1.5em; font-weight: 700; margin: 15px 0 10px 0; color: var(--primary-text); letter-spacing: 0.5px; }
.attractive-mv-card::after { content: ''; display: block; max-width: 100px; width: 100%; height: 1px; background: #e0e0e0; margin-bottom: 25px; }
.mv-card-text { font-size: 1em; line-height: 1.6; color: var(--secondary-text); margin-top: 0; flex-grow: 1; }
.mv-decorative-stripe { display: none; }

/* --- Subtle Background Shape (Offset Rectangle) --- */
.attractive-mv-card::before {
    content: '';
    position: absolute;
    bottom: -150px; 
    right: -150px;
    width: 350px; 
    height: 350px; 
    background: transparent;
    opacity: 1; 
    transform: rotate(20deg); 
    pointer-events: none; 
    transition: background var(--transition-speed);
    border-radius: 8px; 
}

/* --- Applying Specific Colors (Blue, Red, Gold) --- */

/* Card 1: VISION (Blue) */
.attractive-mv-grid > .attractive-mv-card:nth-child(1) .mv-icon-circle { 
    background: var(--blue-icon); 
}
.attractive-mv-grid > .attractive-mv-card:nth-child(1)::before { 
    background: var(--blue-tint-bg); 
}

/* Card 2: MISSION (Red) */
.attractive-mv-grid > .attractive-mv-card:nth-child(2) .mv-icon-circle { 
    background: var(--red-icon); 
}
.attractive-mv-grid > .attractive-mv-card:nth-child(2)::before { 
    background: var(--red-tint-bg); 
}

/* Card 3: QUALITY (Gold/Yellow) */
.attractive-mv-grid > .attractive-mv-card:nth-child(3) .mv-icon-circle { 
    background: var(--gold-icon); 
}
.attractive-mv-grid > .attractive-mv-card:nth-child(3)::before { 
    background: var(--gold-tint-bg); /* <--- FIXED INCOMPLETE CSS */
}

/* --- Media Query (Unchanged) --- */
@media (max-width: 768px) {
    .attractive-mv-grid {
        grid-template-columns: 1fr;
    }
}
         /* 4. CORE VALUES - REMOVED OLD STYLES: Now using AnimatedCoreValues component with self-contained styles. */
        
        /* 5. TEAM CTA SECTION */
        .team-cta-section {
            background-color: ${BG_LIGHT};
            text-align: center;
            border-top: 1px solid #ddd;
        }
        .team-cta-section h2 {
            color: ${PRIMARY_COLOR};
        }
        .team-cta-section p {
            font-size: 1.2em;
            color: ${SECONDARY_COLOR};
            margin-bottom: 30px;
        }
        .main-cta-button {
            display: inline-block;
            background-color: ${ACCENT_COLOR};
            color: ${PRIMARY_COLOR};
            padding: 15px 40px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.1em;
            transition: background-color 0.3s, transform 0.2s;
            border: 2px solid ${ACCENT_COLOR};
        }
        .main-cta-button:hover {
            background-color: ${PRIMARY_COLOR};
            color: ${ACCENT_COLOR};
            border-color: ${PRIMARY_COLOR};
            transform: translateY(-2px);
        }

        /* Media Queries */
        @media (max-width: 992px) {
            .content-block {
                flex-direction: column;
                text-align: center;
            }
            .story-image-container {
                max-width: 100%;
            }
        }
        @media (max-width: 768px) {
            .about-page .footer {
                /* Ensures footer content is not hidden by the sticky bar */
                margin-bottom: 150px; 
            }
        }
        @media (max-width: 600px) {
            .hero-content h1 {
                font-size: 2.5em;
            }
            .section {
                padding: 40px 5%;
            }
            h2 {
                font-size: 2em;
            }
        }
    `;

    return (
        <div className="about-page">
            {/* Inject MAIN PAGE Styles once */}
            <style dangerouslySetInnerHTML={{ __html: embeddedStylesPage }} />
            
            <Helmet>
                {/* SEO OPTIMIZATION: Updated Title Tag */}
                <title>Digital Marketing Agency, Unipole & Highway Hoardings Solutions | Branding Media Factory</title>
                {/* SEO OPTIMIZATION: Updated Meta Description */}
                <meta name="description" content="Branding Media Factory is a full-service digital marketing agency providing SEO, social media, and paid media. We specialize in high-impact OOH advertising like Unipole and Highway Hoardings for maximum brand visibility."/>
            </Helmet>
            
            <Header/>

            {/* 1. HERO BANNER */}
            <section className="hero-banner">
                <div className="hero-content">
                    {/* SEO OPTIMIZATION: Updated H1 Heading */}
                    <h1>The Full-Spectrum Digital Marketing Agency & OOH Partner</h1>
                </div>
            </section>

            {/* 2. OUR STORY */}
            <section className="section" id="our-story">
                {/* SEO OPTIMIZATION: Updated H2 Heading */}
                <h2>Our Story: Uniting Digital & Traditional Media</h2>
                <div className="content-block">
                    <div className="story-image-container">
                        {/* SEO OPTIMIZATION: Updated image Alt Text */}
                        <img src={aboutImage} alt="Branding Media Factory team working on digital and OOH campaigns" className="story-image"/>
                    </div>
                    <div className="story-text-container">
                        <p>
                            Our **digital marketing agency** was founded on the belief that advertising should be both **unmissable and measurable**. We started by dominating the OOH advertising space, securing premium media slots across major metropolitan areas, including prominent **Highway Hoardings** and towering **unipole** structures. As the industry evolved, so did we. Today, we seamlessly integrate our physical media expertise with cutting-edge digital strategies—from SEO and PPC to creative production—to deliver holistic campaigns that capture attention both on the road and online.
                        </p>
                        <p>
                            Our journey is marked by successful partnerships with national brands and local businesses alike, all united by the goal of making a powerful statement in a crowded marketplace, whether through a strategic Google Ad campaign or an impactful **unipole** placement.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* 3. MISSION & VISION */}
            <AttractiveMissionVision/>
            

            {/* 4. CORE VALUES - USING NEW ANIMATED COMPONENT */}
            <AnimatedCoreValues/>
            
            {/* 5. FAQ SECTION */}
            <FAQSection /> {/* <--- NEWLY ADDED FAQ SECTION */}
            
            {/* 6. TEAM CTA SECTION */}
            <section className="section team-cta-section" id="team-placeholder">
                <h2>Ready to Start?</h2>
                <p>
                    Our team of strategists, designers, media buyers, and producers are ready to turn your vision into reality.
                </p>
                <a href="/contact" className="main-cta-button">Connect with us today</a>
            </section>
            
            {/* 7. TRUST/COMMUNITY CTA */}
            <TrustCTASection clientCount="1000+"/> 

            <Footer/>

            {/* 8. STICKY CTA BAR */}
            <StickyCTA/>
        </div>
    );
};

export default AboutPage;