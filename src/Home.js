import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import heroVideo from "./heroVideo.mp4";
import Header from './Header';
import Footer from './Footer';
// Import images (assuming these paths are correct)
import paid from './paid-media.png';
import premium from './premium.png';
import media from './media production.png';
import lg1 from "./lg1.png";
import lg2 from "./lg2.png";
import lg3 from "./lg3.png";
import lg4 from "./lg4.png";
import lg5 from "./lg5.png";
import lg6 from "./lg6.png";
import lg7 from "./lg7.png";
import lg8 from "./lg8.png";
import lg9 from "./lg9.png";
import lg10 from "./lg10.png";
import lg11 from "./lg11.png";
import lg12 from "./lg12.png";
import lg13 from "./lg13.png";
import lg14 from "./lg14.png";
import search from "./search.png";
import content from "./content.png";
import synchronization from "./synchronization.png";
import performance from "./performance1.png";

// --- SERVICE DATA 1 (Core 3 Cards) ---
const services = [
    {
        id: 1,
        headline: "MEDIA PRODUCTION",
        description: "We are a full factory: high-speed, high-quality video and visual asset creation ensures brand consistency and continuous content flow.",
        icon: media,
        color: '#ff6b6b', // Red
    },
    {
        id: 2,
        headline: "PREMIUM SEO",
        description: "Our strategy focuses on authority and intent. We target high-value keyword clusters that directly lead to sales, not just clicks or traffic volume.",
        icon: premium,
        color: '#4ecdc4', // Cyan
    },
    {
        id: 3,
        headline: "PAID MEDIA ROI",
        description: "We eliminate vanity spend. Paid campaigns are hyper-optimized using CRM data to deliver qualified, bottom-of-funnel leads with clear cost-per-acquisition.",
        icon: paid,
        color: '#4f8a8b', // Dark Teal
    },
];

// --- SERVICE DATA 2 (Strategy & Execution Cards - Timeline Data) ---
const strategyPhases = [
    {
        id: 1,
        title: "Diagnostic Audit",
        detail: "A deep dive into current marketing assets, conversion funnels, and competitive landscape to pinpoint hidden opportunities and core weaknesses.",
        icon: search
    },
    {
        id: 2,
        title: "Content Structuring",
        detail: "Building an authority-driven content matrix (video, long-form, pillar pages) that captures search intent across the entire customer journey.",
        icon: content
    },
    {
        id: 3,
        title: "Channel Synchronization",
        detail: "Integrating SEO, Paid Media, and Production pipelines to ensure every asset is leveraged optimally across all traffic sources.",
        icon: synchronization
    },
    {
        id: 4,
        title: "Performance Scaling",
        detail: "Continuous optimization based on real-time CRM and revenue data, aggressively scaling channels that yield the highest quality leads and ROI.",
        icon: performance
    },
];

// --- SERVICE DATA 3 (Full Service List) ---
const fullServiceList = [
    "Advertising",
    "Social Media Marketing",
    "Branding and Package Designing",
    "Ad Shoot (Video/Photo)",
    "Photography (Commercial & Product)",
    "Web Designing & Development",
    "Train Branding",
    "OOH Advertising (Out-of-Home)",
    "Unipole Advertising",
    "Logo Design & Visual Identity",
    "2D/3D Video Animation",
];

// --- CONSTANTS FOR COLOR SCHEME ---
const SPRING_GREEN = '#00ff7f';
const DARK_SPRING_GREEN = '#00cc66';
const BLACK_BACKGROUND = '#000000';
const DARK_CARD_BACKGROUND = '#1c1c1c';
const LIGHT_TEXT = '#e0e0e0';
const WHITE_TEXT = '#ffffff';

// --- NEW CONSTANTS FOR LIGHT LISTING ---
const PRIMARY_BLUE = '#007bff';
const LIGHT_BACKGROUND = '#f8f8f8';
const DARK_TEXT = '#333333';

// --- HOOK TO DETECT MOBILE SIZE ---
const useIsMobile = (maxWidth = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= maxWidth);
        };

        if (typeof window !== 'undefined') {
            checkMobile();
            window.addEventListener('resize', checkMobile);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', checkMobile);
            }
        };
    }, [maxWidth]);

    return isMobile;
};


// --- CSS INJECTION COMPONENT FOR ANIMATIONS & STYLES ---
const CardAnimationsCSS = ({ isMobile }) => {
    const shapes = {
        shape1: '60% 40% 40% 60% / 60% 40% 60% 40%',
        shape2: '40% 60% 60% 40% / 40% 60% 40% 60%',
    };

    // --- ENHANCEMENT: Slower Marquee speed for Mobile ---
    const logoTrackSpeed = isMobile ? '60s' : '40s'; // Slower animation on mobile

    // --- MODIFIED: Increased client logo size ---
    const clientLogosStyle = `
        .client-logos-section {
            text-align: center;
            padding: ${isMobile ? "20px 0 60px 0" : "40px 0 100px 0"};
            overflow: hidden; 
            white-space: nowrap; 
            max-width: 100%; 
            margin: 0 auto;
        }
        
        .client-logo-wrapper {
            min-width: ${isMobile ? '550px' : '550px'}; 
            display: inline-block;
            padding: ${isMobile ? '15px 20px' : '0 30px'};
            display: flex;
            justify-content: center;
            align-items: center;
            height: ${isMobile ? '80px' : '120px'}; 
        }

        .client-logo-img {
            height: ${isMobile ? "650px" : "650px"}; 
            opacity: 1;
            transition: opacity 0.3s;
            object-fit: contain;
            filter: grayscale(0%);
            flex-shrink: 0;
            max-width: 100%;
        }
        
        .client-logo-img:hover {
            opacity: 1;
            filter: grayscale(0%);
        }
    `;

    const marqueeCSS = `
        /* --- LOGO MARQUEE STYLES (Dynamic Speed) --- */
        @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
        }

        .logo-marquee-track {
            display: flex;
            width: fit-content;
            animation: marquee ${logoTrackSpeed} linear infinite; /* Dynamic speed applied here */
        }
    `;

    const css = `
        /* --- KEYFRAMES (Unchanged) --- */
        @keyframes blob-pulse {
            0%, 100% { border-radius: ${shapes.shape1}; transform: scale(1); }
            50% { border-radius: ${shapes.shape2}; transform: scale(1.02); }
        }
        
        @keyframes slide-up-3d-tilt {
            from { opacity: 0; transform: perspective(1000px) translateY(100px) rotateX(15deg) scale(0.95); }
            to { opacity: 1; transform: perspective(1000px) translateY(0) rotateX(0deg) scale(1); }
        }
        
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* --- CORE 3 CARDS STYLES (Unchanged) --- */
            .organic-infographic-section {
    color: #2c3e50;
    /* This background pattern makes the section visually distinct */
    background: repeating-linear-gradient(
        -45deg, #f8f8f8, #f8f8f8 10px, #f0f0f0 10px, #f0f0f0 11px 
    );
    padding: 60px 0; /* Added padding for section spacing */
}

.organic-pillar-grid {
    display: flex; 
    justify-content: space-between;
    gap: 40px; 
    max-width: 1200px; /* Constrain width for desktop view */
    margin: 40px auto;
    padding: 0 20px;
}

.organic-pillar-card {
    flex: 1 1 25%; 
    text-align: center;
    padding: 35px 20px;
    height: auto;
    
    /* Elegant gradient background for a "clean" look */
    background: linear-gradient(160deg, #fdfdfd 0%, #f7f7ff 50%, #e8e8ff 100%); 
    
    border-radius: ${shapes.shape1}; 
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.18); 
    border: 3px solid #f0f0f0; 
    
    /* Animation (Assumed keyframes are defined elsewhere) */
    animation: slide-up-3d-tilt 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards, 
               blob-pulse 8s ease-in-out infinite alternate; 
    opacity: 0;

    /* === TRANSITIONS for Hover Effects === */
    transition: 
        transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        border-color 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        z-index 0s;
}

/* === HOVER EFFECT: CARD LIFT, SHADOW, AND BORDER HIGHLIGHT === */
.organic-pillar-card:hover {
    /* Lift the card slightly */
    transform: translateY(-12px); 
    
    /* Increase the shadow and add a subtle blue glow */
    box-shadow: 0 25px 55px rgba(0, 0, 0, 0.25), 
                0 0 15px rgba(52, 152, 219, 0.4); 
    
    /* Highlight the border */
    border-color: springgreen; 
    
    /* Bring the hovered card to the front */
    z-index: 5;
}

.organic-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    margin: 0 auto 15px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); 
    border: 1px solid #ddd;

    /* === TRANSITIONS for Icon Hover Effects === */
    transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease;
}

/* === HOVER EFFECT: ICON CONTAINER POP AND COLOR CHANGE === */
.organic-pillar-card:hover .organic-icon-container {
    /* Slightly scale the icon */
    transform: scale(1.1); 
    
    /* Change background color */
    background-color: springgreen; /* Blue */
    
    /* Enhance shadow/glow */
    box-shadow: 0 0 20px springgreen;
}

/* Optional: Add hover effect to the text content (if you have one) */
.organic-pillar-card h3 {
    transition: color 0.4s ease;
}

.organic-pillar-card:hover h3 {
    color: #3498db; /* Highlight the heading text */
}

/* Add a media query for responsive layout on smaller screens */
@media (max-width: 900px) {
    .organic-pillar-grid {
        flex-wrap: wrap;
        gap: 20px;
    }
    .organic-pillar-card {
        flex: 1 1 calc(50% - 10px); /* Two cards per row */
    }
}

@media (max-width: 600px) {
    .organic-pillar-card {
        flex: 1 1 100%; /* One card per row */
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
    }
}
        /* --- HORIZONTAL TIMELINE STYLES (Unchanged for Desktop) --- */
     /* Existing CSS */
.strategy-section-timeline {
    background-color: ${BLACK_BACKGROUND}; 
    padding: 80px 20px;
    color: ${WHITE_TEXT}; 
}

.timeline-container {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 40px auto 0;
    position: relative;
    padding-top: 50px; 
}

.timeline-container::before {
    content: '';
    position: absolute;
    top: 20px; 
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, ${SPRING_GREEN}, ${DARK_SPRING_GREEN}); 
    z-index: 1;
}

.timeline-item {
    flex: 1 1 20%; 
    padding: 20px 15px;
    text-align: center;
    position: relative;
    z-index: 2;
    opacity: 0;
    animation: fade-in-up 0.8s forwards;
    margin: 0 5px; 
    /* Add smooth transition for hover effects */
    transition: transform 0.3s ease, z-index 0s, box-shadow 0.3s ease; 
}

/* Hover effect for the entire timeline item */
.timeline-item:hover {
    transform: translateY(-10px); /* Lift the item slightly */
    z-index: 10; /* Bring the hovered item to the front */
}

.timeline-item::before {
    content: '';
    position: absolute;
    top: 15px; /* Aligned with horizontal line */
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${SPRING_GREEN}; 
    border: 4px solid ${BLACK_BACKGROUND}; 
    box-shadow: 0 0 0 2px ${DARK_SPRING_GREEN};
    /* Add transition for before pseudo-element */
    transition: background-color 0.3s ease, box-shadow 0.3s ease; 
}

/* Change the dot color on item hover */
.timeline-item:hover::before {
    background-color: ${WHITE_TEXT}; /* Change dot color on hover */
    box-shadow: 0 0 5px 3px ${SPRING_GREEN}; /* Stronger glow on hover */
}

.timeline-item-content {
    background-color: ${DARK_CARD_BACKGROUND}; 
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); 
    padding: 25px 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; /* Include box-shadow and border transition */
    border: 1px solid ${DARK_SPRING_GREEN}40; 
}

/* Hover effect for the content box within the item */
.timeline-item:hover .timeline-item-content {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.8), 0 0 20px ${SPRING_GREEN}80; /* Stronger/more noticeable shadow and glow */
    border-color: ${SPRING_GREEN}; /* Highlight border on hover */
}

.timeline-icon-wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${WHITE_TEXT};
    box-shadow: 0 0 10px ${SPRING_GREEN}80;
    border: 2px solid ${DARK_SPRING_GREEN};
    margin-bottom: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; 
}

/* Hover effect for the icon wrapper */
.timeline-item:hover .timeline-icon-wrapper {
    transform: scale(1.05); /* Slightly enlarge the icon */
    box-shadow: 0 0 15px ${SPRING_GREEN}; /* Enhance the glow */
    border-color: ${SPRING_GREEN};
}

.timeline-item h3 {
    color: ${SPRING_GREEN}; 
    transition: color 0.3s ease;
}

/* Hover effect for the heading */
.timeline-item:hover h3 {
    color: ${WHITE_TEXT}; /* Change text color on hover for contrast */
}

/* Animation definition is assumed to be present elsewhere */
/* @keyframes fade-in-up { ... } */

        /* --- FULL SERVICE WHITE LIST STYLES (Unchanged for Desktop) --- */
        .full-service-section {
            background-color: ${WHITE_TEXT}; 
            padding: 80px 20px;
            color: ${DARK_TEXT};
            text-align: center;
        }
        
        .service-list-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            max-width: 1200px;
            margin: 40px auto 0;
            list-style: none;
            padding: 0;
        }

        .service-list-grid li {
            background-color: ${LIGHT_BACKGROUND}; 
            color: ${DARK_TEXT};
            padding: 20px 15px;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            border-left: 5px solid ${PRIMARY_BLUE}00; 
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); 
            cursor: default;
        }

        .service-list-grid li:hover {
            transform: translateY(-3px) scale(1.01);
            border-left: 5px solid ${PRIMARY_BLUE}; 
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); 
            color: ${PRIMARY_BLUE};
        }
        
        .full-service-section h2 {
            color: ${PRIMARY_BLUE} !important; 
        }
        .full-service-section p {
            color: ${DARK_TEXT} !important;
        }
        
        /* --- MOBILE RESPONSIVENESS (Refined) --- */
        @media (max-width: 768px) {
            /* Full Service List */
            .service-list-grid {
                grid-template-columns: 1fr;
            }
            .service-list-grid li:hover {
                transform: none !important;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            }
            /* Core 3 Cards */
            .organic-pillar-grid {
                flex-direction: column;
                gap: 20px;
            }
            .organic-pillar-card {
                 /* Simplified animation for better mobile performance/readability */
                animation: fade-in-up 0.8s forwards; 
            }
            /* Timeline */
            .timeline-container {
                flex-direction: column;
                padding-top: 0; 
            }
            .timeline-container::before {
                /* Vertical line on mobile */
                top: 0;
                left: 20px;
                right: auto;
                width: 3px;
                height: 100%;
                background: linear-gradient(to bottom, ${SPRING_GREEN}, ${DARK_SPRING_GREEN}); 
            }
            .timeline-item {
                text-align: left;
                /* Increased left padding to push content away from the vertical line */
                padding: 20px 20px 20px 40px; 
                margin: 0;
            }
            .timeline-item::before {
                /* Timeline Dot on mobile: Align perfectly with the vertical line */
                top: 30px; 
                left: 20px; 
                transform: translateX(-50%);
            }
        }
        
        /* Inject the new Logo Marquee styles */
        ${marqueeCSS}
        
        /* Inject the new Client Logo styles (MODIFIED) */
        ${clientLogosStyle}
        
    `;

    return <style>{css}</style>;
};

// --- LOGO RENDER FUNCTION (Unchanged) ---
const renderLogos = () => (
    <>
      <div className="client-logo-wrapper">
        <img src={lg1} alt="Godrej" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg2} alt="ACT Volvo" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg3} alt="RKFL" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg4} alt="SSI TMT Bars" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg5} alt="TVS" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg6} alt="Godrej" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg7} alt="ACT Volvo" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg8} alt="RKFL" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg9} alt="SSI TMT Bars" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg10} alt="TVS" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg11} alt="Godrej" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg12} alt="ACT Volvo" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg13} alt="RKFL" className="client-logo-img" />
      </div>
      <div className="client-logo-wrapper">
        <img src={lg14} alt="SSI TMT Bars" className="client-logo-img" />
      </div>
    </>
  );
// --- HOOK FOR SCROLL DETECTION (Intersection Observer - Unchanged) ---
const useIntersectionObserver = (options) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target); 
            }
        }, options);

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isVisible];
};


// --- SERVICE CARD COMPONENT (Core 3 - Semantic H tag is correctly used) ---
const ServiceCard = ({ service, index }) => {
    const [ref, isVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    const cardStyle = {
        visibility: isVisible ? 'visible' : 'hidden', 
        animationPlayState: isVisible ? 'running' : 'paused',
        opacity: isVisible ? 1 : 0,
        // The animationDelay needs to be injected as an inline style since it's dynamic
        animationDelay: isVisible ? `${index * 0.3}s, ${index * 0.3}s` : '0s, 0s'
    };

    return (
        <div 
            ref={ref} 
            className="organic-pillar-card" 
            style={cardStyle}
        >
            <div className="organic-icon-container">
                <img src={service.icon} alt={service.headline + " icon"} style={cardStyles.icon} />
            </div>
            {/* H3 is appropriate here as a sub-heading under the H2 "Core 3 Blueprint" */}
            <h3>{service.headline}</h3> 
            <p>{service.description}</p>
        </div>
    );
};

// --- CARD STYLES (Unchanged) ---
const cardStyles = {
    icon: {
        width: '40px', 
        height: '40px',
        objectFit: 'contain',
    },
};


// --- SERVICE CARDS SECTION (Core 3 - Unchanged) ---
const ServiceCardsSection = () => {
    const threeServices = services.slice(0, 3);

    return (
        <>
            <section id="services-cards" className="organic-infographic-section" style={sectionStyles.container}>
                <h2 style={{...sectionStyles.headline, color: '#2c3e50'}}>
                    The Core 3-Point Growth Blueprint
                </h2>
                <p style={{...sectionStyles.subtitle, color: '#555'}}>
                    Our integrated process eliminates wasted spend and delivers predictable, qualified appointments.
                </p>

                <div style={sectionStyles.cardsWrapper} className="organic-pillar-grid">
                    {threeServices.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
                
                <p style={{...sectionStyles.footerText, color: '#2c3e50', borderTop: '1px solid #ccc'}}>
                    Stop guessing and start scaling. These three core strategies are designed to maximize your media impact and revenue.
                </p>
            </section>
        </>
    );
};


// --- TIMELINE ITEM (Corrected Alt Text) ---
const TimelineItem = ({ phase, index }) => {
    const [ref, isVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    });

    const style = {
        opacity: isVisible ? 1 : 0, 
        animationPlayState: isVisible ? 'running' : 'paused',
        animationDelay: isVisible ? `${index * 0.2}s` : '0s', 
    };

    return (
        <div 
            ref={ref} 
            className="timeline-item" 
            style={style}
        >
            <div className="timeline-item-content">
                <div className="timeline-icon-wrapper">
                   {/* SEO Correction: Added alt tag for icon */}
                   <img 
                       src={phase.icon} 
                       width="50px" 
                       height="50px"
                       alt={phase.title + " icon"} 
                   ></img> 
                </div>
                <h3>{phase.title}</h3>
                <p>{phase.detail}</p>
            </div>
        </div>
    );
}


// --- STRATEGY SECTION (Unchanged - Keeps Dark Theme) ---
const StrategySection = () => {
    const darkSectionStyles = {
        ...sectionStyles.headline, 
        color: WHITE_TEXT 
    };
    const darkSubtitleStyles = {
        ...sectionStyles.subtitle, 
        color: LIGHT_TEXT 
    };

    return (
        <section id="strategy-section" className="strategy-section-timeline">
            <h2 style={darkSectionStyles}>
                Our 4-Phase Execution Framework: The Path to Scale
            </h2>
            <p style={darkSubtitleStyles}>
                We transform strategy into revenue through a repeatable, data-driven cycle.
            </p>
            
            <div className="timeline-container">
                {strategyPhases.map((phase, index) => (
                    <TimelineItem key={phase.id} phase={phase} index={index} />
                ))}
            </div>
        </section>
    );
}

// --- FULL SERVICE LISTING (Unchanged) ---
const FullServiceListing = () => {
    const [ref, isVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });
    
    const listStyle = {
        opacity: isVisible ? 1 : 0, 
        transition: 'opacity 0.8s ease-in'
    };

    return (
        <section id="full-service-listing" className="full-service-section">
            {/* Using PRIMARY_BLUE for accent color on the white background */}
            <h2 style={{...sectionStyles.headline, color: PRIMARY_BLUE}}>
                Full-Spectrum Media & Creative Services
            </h2>
            <p style={{...sectionStyles.subtitle, color: DARK_TEXT}}>
                Everything you need for compelling brand visibility and targeted customer acquisition.
            </p>
            
            <ul ref={ref} className="service-list-grid" style={listStyle}>
                {fullServiceList.map((service, index) => (
                    // Staggered fade-in-up animation
                    <li 
                        key={index} 
                        style={isVisible ? { animation: `fade-in-up 0.5s forwards ${index * 0.05}s` } : { opacity: 0 }}
                    >
                        {service}
                    </li>
                ))}
            </ul>
        </section>
    );
}



// --- ANIMATION CSS INJECTION (CTA) ---
const CTACSS = () => {
    const BLACK_BACKGROUND = '#000000';
const WHITE_TEXT = '#ffffff';
const SPRING_GREEN = '#00ff7f'; 
// Define a breakpoint constant for clarity
const MOBILE_BREAKPOINT = '768px'; 
    // Keyframes remain the same for animation consistency
    const starMovement = `
        @keyframes star-move-1 {
            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.8; }
            50% { transform: translate(15px, -10px) scale(1.05) rotate(5deg); opacity: 1; }
        }
        @keyframes star-move-2 {
            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.7; }
            50% { transform: translate(-10px, 8px) scale(0.95) rotate(-5deg); opacity: 0.9; }
        }
        @keyframes star-move-3 {
            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.6; }
            50% { transform: translate(10px, 15px) scale(1.02) rotate(3deg); opacity: 0.8; }
        }
    `;

    // General component and animation application styles (Desktop First)
    const ctaStyles = `
        .cta-container {
            background-color: ${BLACK_BACKGROUND} !important;
            color: ${WHITE_TEXT} !important;
            box-shadow: 0 0 30px rgba(0, 255, 127, 0.4), 0 0 15px rgba(0, 255, 127, 0.2) !important; 
            position: relative;
            overflow: hidden; 
        }

        .cta-text-wrapper {
            position: relative;
            z-index: 10; 
        }

        .cta-headline {
            color: ${WHITE_TEXT} !important;
            font-size: 3rem; /* Desktop size */
        }

        .cta-button {
            color: ${WHITE_TEXT} !important;
            transition: color 0.3s ease;
            font-size: 1.5rem; /* Desktop size */
        }

        /* Hover effect (Desktops only, usually ignored on touch devices) */
        .cta-button:hover {
            color: ${SPRING_GREEN} !important; 
        }
        
        .cta-underline {
            background-color: transparent !important;
            border-bottom: 2px solid ${SPRING_GREEN} !important;
            width: 150px; 
            margin: 0 auto;
            display: block;
            transition: width 0.3s ease;
        }

        .cta-button-container:hover .cta-underline {
            width: 200px;
        }
        
        /* Apply subtle animation to floating shapes */
        .cta-shape-1 {
            animation: star-move-1 6s ease-in-out infinite alternate;
        }
        .cta-shape-2 {
            animation: star-move-2 7s ease-in-out infinite alternate;
        }
        .cta-shape-3 {
            animation: star-move-3 5s ease-in-out infinite alternate;
        }

        /* -------------------- MOBILE RESPONSIVENESS (Max Width: 768px) -------------------- */
        @media (max-width: ${MOBILE_BREAKPOINT}) {
            
            /* Smaller Text and Padding */
            .cta-container {
                padding: 40px 10px !important;
                margin: 30px auto !important;
            }

            .cta-headline {
                font-size: 2rem; /* Reduced headline size for mobile */
            }

            .cta-button {
                font-size: 1.2rem; /* Reduced button text size for mobile */
            }

            .cta-underline {
                width: 100px; /* Reduced underline width */
            }
            .cta-button-container:hover .cta-underline {
                width: 150px; 
            }

            /* Adjust Floating Shapes for Mobile */
            /* Hide the largest/most distracting shapes to improve performance/focus */
            .cta-shape-3 {
                display: none; /* Hides Star 4, 5 */
            }

            /* Reposition remaining small shapes closer to the edges */
            .cta-shape-1 {
                top: 5px !important;
                right: 5% !important;
                width: 15px !important;
                height: 15px !important;
            }
            .cta-shape-2 {
                top: 5px !important;
                left: 5% !important;
                width: 20px !important;
                height: 20px !important;
            }
        }
    `;

    return <style>{starMovement + ctaStyles}</style>;
};

// --- REACT COMPONENT ---
const CTABanner = () => {
    // Base styles for the container (desktop default, mobile handled by CSS)
    const baseStyles = {
        padding: '60px 20px',
        borderRadius: '12px',
        maxWidth: '1200px',
        margin: '50px auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1, 
    };

    // Base styles for all floating shapes
    const shapeStyle = {
        position: 'absolute',
        filter: 'blur(1px)', // Soft glow effect
        opacity: 0.8,
        zIndex: 5,
    };
    
    // Color palette
    const colors = {
        red: '#ff6b6b',
        yellow: '#feca57',
        green: '#1dd1a1',
        blue: '#48dbfb',
    };

    // Note: We use inline styles for the static properties and rely on the 
    // className and the injected CSS media queries for responsiveness.

    return (
        <div className="cta-container" style={baseStyles}>
            <CTACSS />
            
            {/* -------------------- FLOATING SHAPES -------------------- */}
            
            {/* Star 1: Top Right Red-ish shape (Class 1) */}
            <div 
                className="cta-shape-1" 
                style={{
                    ...shapeStyle,
                    backgroundColor: colors.red,
                    top: '20px',
                    right: '15%', 
                    width: '20px', 
                    height: '20px',
                    borderRadius: '40% 60% 70% 30% / 50% 50% 50% 50%',
                }}
            ></div>

            {/* Star 2: Top Left Blue-ish shape (Class 2) */}
            <div 
                className="cta-shape-2" 
                style={{
                    ...shapeStyle,
                    backgroundColor: colors.blue,
                    top: '10px',
                    left: '10%', 
                    width: '30px', 
                    height: '30px',
                    borderRadius: '60% 40% 40% 60% / 60% 40% 60% 40%',
                    animationDelay: '1.5s', 
                }}
            ></div>
            
            {/* Star 3: Bottom Left Yellow (Class 2) */}
            <div 
                className="cta-shape-2" 
                style={{
                    ...shapeStyle,
                    backgroundColor: colors.yellow,
                    bottom: '40px',
                    left: '20%',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    animationDuration: '5s',
                }}
            ></div>

            {/* Star 4: Bottom Left Green (Class 3 - HIDES ON MOBILE) */}
             <div 
                className="cta-shape-3" 
                style={{
                    ...shapeStyle,
                    backgroundColor: colors.green,
                    bottom: '30px',
                    left: '25%',
                    width: '10px',
                    height: '10px',
                    transform: 'rotate(15deg)',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    animationDelay: '2.5s',
                }}
            ></div>


            {/* Star 5: Bottom Right Green (Class 3 - HIDES ON MOBILE) */}
            <div 
                className="cta-shape-3" 
                style={{
                    ...shapeStyle,
                    backgroundColor: colors.green,
                    bottom: '-25px', 
                    right: '150px',
                    width: '80px',
                    height: '80px',
                    filter: 'blur(3px)', 
                    opacity: 0.4, 
                    borderRadius: '60% 40% 40% 60% / 60% 40% 60% 40%',
                    animationDuration: '8s', 
                }}
            ></div>

            {/* Star 6: Bottom Right Yellow (Class 1) */}
            <div 
                className="cta-shape-1" 
                style={{
                    ...shapeStyle,
                    backgroundColor: colors.yellow,
                    bottom: '5px',
                    right: '180px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    animationDelay: '4s',
                }}
            ></div>
            
            {/* -------------------- CONTENT -------------------- */}
            <div className="cta-text-wrapper">
                {/* Headline size is now responsive via CSS class */}
                <h2 className="cta-headline" style={{ fontWeight: 700, margin: '0 0 10px 0' }}>
                    Let's Make Something Amazing Together
                </h2>
                {/* Button container for hover effect */}
                <div className="cta-button-container" style={{ padding: '10px 0', display: 'inline-block' }}>
                    <a href="/contact" className="cta-button" style={{ 
                        textDecoration: 'none', 
                        fontWeight: 500,
                        paddingBottom: '5px',
                        letterSpacing: '0.5px'
                    }}>
                        Get Started
                    </a>
                    {/* Spring Green Underline */}
                    <span className="cta-underline"></span>
                </div>
            </div>
            
        </div>
    );
}

// --- SECTION CONTAINER STYLES (Unchanged) ---
const sectionStyles = {
    container: {
        padding: '80px 20px',
        fontFamily: 'Inter, sans-serif',
        overflowX: 'hidden',
        position: 'relative',
        perspective: '1000px' 
    },
    headline: {
        textAlign: 'center',
        fontSize: '3rem',
        marginBottom: '15px',
        fontWeight: '800'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: '1.4rem',
        marginBottom: '40px'
    },
    cardsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1400px', 
        margin: '0 auto',
    },
    footerText: {
        textAlign: 'center',
        marginTop: '60px',
        fontSize: '1.2rem',
        maxWidth: '900px',
        margin: '60px auto 0',
        lineHeight: '1.6',
        paddingTop: '30px'
    }
};


/* === INLINE STYLES FOR HOME COMPONENT (Hero Section + Client Logo Title - Unchanged) === */
const styles = {
    container: {
        width: "100%",
        margin: 0,
        padding: 0,
        backgroundColor: '#ffffff', 
    },
    // REMOVED HERO STYLE DEFINITION HERE TO MAKE IT DYNAMIC INSIDE HOME COMPONENT
    hero: {
        position: 'relative',
        display: 'flex',
        margin:0,
        padding :0,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        // Assume you might want a dark background color fallback if the video fails
        backgroundColor: '#000', 
    },
    video: {
        position: 'absolute',
        top:0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 1,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darken the video for text visibility
        zIndex: 2,
    },
    wave: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 'auto',
        zIndex: 3,
        // The path fill is already white in your HTML
    },
    content: {
        position: 'relative',
        zIndex: 4,
        textAlign: 'center',
        padding: '70px 20px',
    },
    title: {
        fontSize: '3em',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '10px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    },
    subtitle: {
        fontSize: '1.5em',
        color: '#f0f0f0',
        marginBottom: '30px',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
    },
    // === NEW CTA BUTTON STYLES ===
   ctaButton: {
        padding: '15px 30px',
        fontSize: '1.2em',
        fontWeight: 600,
        color: '#000', 
        backgroundColor: 'Springgreen', 
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        boxShadow: '0 0 20px rgba(57, 255, 20, 0.5)', 
        transition: 'all 0.3s ease',
        outline: 'none',
        
        // === CRITICAL STYLE CHANGES FOR <a> TAG ===
        textDecoration: 'none', // Removes the default underline for links
        display: 'inline-block', // Allows padding and sizing to work like a button
        lineHeight: 'normal', // Ensures text sits correctly
        // ==========================================
    },
    // The hover state needs to be applied using a separate handler in React 
    // or by using a CSS-in-JS library that supports pseudo-classes.
    // If you are using plain JSX inline styles, you will need an onMouseEnter/onMouseLeave handler:
    ctaButtonHover: {
        transform: 'scale(1.05)', // Slightly larger on hover
        backgroundColor: '#fff', // Change color to white on hover
        color: '#000',
        boxShadow: '0 0 30px #fff, 0 0 10px springgreen', // Stronger glow effect
    },
    /*LOGO TITLE STYLES ---*/
    titleSection: {
        textAlign: 'center',
        paddingTop: '60px',
        paddingBottom: '20px',
        backgroundColor: '#ffffff',
    },
    mainTitle: {
        fontSize: '2.8rem',
        fontWeight: '700',
        color: DARK_TEXT,
        marginBottom: '10px',
    },
    titleUnderline: {
        width: '100px',
        height: '4px',
        backgroundColor: PRIMARY_BLUE,
        margin: '0 auto',
        borderRadius: '2px',
    }
};


// --- MAIN HOME COMPONENT (Corrected for SEO) ---
export default function Home() {
    const isMobile = useIsMobile(); 
    const [isHovered, setIsHovered] = useState(false);

    // 1. DYNAMIC HERO STYLE: Define the hero style dynamically here
    const dynamicHeroStyle = {
        ...styles.hero,
        // MODIFIED: Set height to 70vh on mobile (down from 85vh), 80vh on desktop (down from 120vh)
        height: isMobile ? '90vh' : '100vh', 
    };
    
    // 2. STYLE DEFINITION: 'buttonStyle' must be defined here to use 'isHovered'.
    const buttonStyle = isHovered
        ? { ...styles.ctaButton, ...styles.ctaButtonHover } // Merge normal and hover styles
        : styles.ctaButton;
        
    return (
        
        <div style={{ ...styles.container, backgroundColor: '#ffffff' }}>
            <Helmet>
                <title>Digital Marketing Company in Salem | Branding Media Factory</title>
                <meta
                    name="description"
                    content="Branding Media Factory is a trusted digital marketing company in Salem providing SEO, social media marketing,Unipole,Highway Hoardings, Google Ads, branding and media production services."
                />
                <link rel="canonical" href="https://yourwebsite.com/" />
            </Helmet>

            {/* Pass isMobile to the CSS component */}
            <CardAnimationsCSS isMobile={isMobile} /> 
            <Header/> 
           {/* 3. APPLY DYNAMIC HERO STYLE */}
           <section style={dynamicHeroStyle}>
            <video autoPlay loop muted playsInline style={styles.video}>
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div style={styles.overlay}></div> 
            <svg style={styles.wave} viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#ffffff" d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,181.3C672,181,768,107,864,90.7C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,320L0,320Z"></path>
            </svg>
            <div style={styles.content}>
                {/* === HERO TEXT CORRECTION APPLIED HERE === */}
                <h1 style={styles.title}>
                   Digital Marketing Company in Salem
                </h1>
                <p style={styles.subtitle}>
                  We are a full-spectrum Media Factory that drives revenue through Premium SEO, High-ROI Paid Media, and high-speed Video Production.
                </p>
                {/* ======================================= */}
                
                {/* 4. USAGE: Use the defined variables in your JSX */}
                <a 
                    href="/contact" 
                    style={buttonStyle} // 'buttonStyle' is now defined
                    onMouseEnter={() => setIsHovered(true)} // 'setIsHovered' is now defined
                    onMouseLeave={() => setIsHovered(false)} // 'setIsHovered' is now defined
                >
                    Get Started Now
                </a>
            </div>
        </section>
            {/* --- FIRST SERVICE SECTION (Core 3 - Light Theme) --- */}
            <ServiceCardsSection />
            
            {/* --- STRATEGY SECTION (Horizontal Timeline - Dark Theme) --- */}
            <StrategySection />

            {/* --- FULL SERVICE LISTING SECTION (New White Theme) --- */}
            <FullServiceListing />
            

            {/* Our Awesome Clients - TITLE SECTION */}
            <div style={styles.titleSection}>
                <h2 style={styles.mainTitle}>Our Awesome Clients</h2>
                <div style={styles.titleUnderline}></div>
            </div>
            
            {/* Our Awesome Clients - LOGO MARQUEE SECTION */}
            <div className="client-logos-section">
                <div className="logo-marquee-track">
                    {/* Repeat logos twice for seamless loop */}
                    {renderLogos()}
                    {renderLogos()} 
                </div>
            </div>
            <CTABanner/>
            <Footer/>
        </div>
    );
}

/* === RESPONSIVE STYLES (Original media queries for other elements - MODIFIED) === */
const mobileStylesOriginal = `
/* FONT INJECTION (for the hero section) */
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Playfair+Display:ital,wght@1,900&display=swap" rel="stylesheet">
 
@media (max-width: 768px) {
 
    /* Hero Section Mobile Adjustments */
    /* REMOVED: section { height: 85vh !important; } - This is now handled dynamically in React to avoid conflicting with other sections */
 
    #root div[style*="translate(-50%, -50%)"] {
        width: 95% !important; 
        padding: 0 10px !important;
    }
    #root h1 { 
        font-size: 1.8rem !important; 
        font-family: 'Montserrat', sans-serif !important;
        margin-bottom: 5px !important;
        letter-spacing: 1px !important;
    }
    #root p { 
        font-size: 1.5rem !important; 
        font-weight: 900 !important;
        font-family: 'Playfair Display', serif !important;
        line-height: 1.3 !important;
        font-style: italic !important;
    }
    #root svg { 
        height: 80px !important; 
    }

    /* CARD SECTION Mobile Adjustments (Header/Footer text) */
    #services-cards h2 {
        font-size: 2rem !important;
        color: #2c3e50 !important;
    }
    #services-cards p {
        font-size: 1.1rem !important;
        color: #555 !important;
    }
}
`;

// Inject the responsive CSS and Google Fonts
if (typeof document !== 'undefined' && document.head.insertAdjacentHTML) {
    document.head.insertAdjacentHTML("beforeend", `<style>${mobileStylesOriginal}</style>`);
}