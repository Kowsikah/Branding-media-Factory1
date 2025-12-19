import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Megaphone, 
  Train, 
  MousePointerClick, // Updated for PPC
  Share2, 
  Layout, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";

import HeroBg from "./heroservice.png"; 
import Header from "./Header";
import Footer from "./Footer";

/* =========================
   UPDATED SERVICES DATA
========================= */
const services = [
  {
    title: "OOH Advertising",
    link: "/services/ooh-advertising",
    desc: "High-impact outdoor advertising including highway hoardings, unipoles and transit media.",
    icon: <Megaphone size={32} />
  },
  {
    title: "Train Branding",
    link: "/services/train-branding",
    desc: "Complete train exterior wrapping and interior branding solutions to reach millions of daily commuters.",
    icon: <Train size={32} />
  },
  {
    title: "Pay Per Click (PPC)",
    link: "/services/ppc-marketing", // Updated link
    desc: "Results-driven Google and Bing Ads designed to increase conversions and maximize your advertising spend.",
    icon: <MousePointerClick size={32} /> // Updated Icon
  },
  {
    title: "Social Media Marketing",
    link: "/services/social-media-marketing",
    desc: "Strategic content creation and paid social campaigns to amplify your brand voice across all platforms.",
    icon: <Share2 size={32} />
  },
  {
    title: "Web Designing",
    link: "/services/web-design",
    desc: "SEO-friendly, high-performance and conversion-focused websites that turn visitors into customers.",
    icon: <Layout size={32} />
  }
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Branding Media Factory</title>
      </Helmet>

      <Header />

      <main className="services-page">
        {/* HERO SECTION */}
        <section 
          className="services-hero" 
          style={{ backgroundImage: `url(${HeroBg})` }}
        >
          <div className="hero-gradient-overlay"></div>
          <div className="hero-content">
            <div className="badge-container">
              <span className="badge">Premium Expertise</span>
            </div>
            <h1>Our Creative <br/><span className="highlight-text">Verticals</span></h1>
            <p className="hero-desc">Strategic advertising and digital solutions designed to fuel your business growth.</p>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="services-section">
          <div className="section-header">
            <h2 className="section-title">Professional Solutions</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <Link to={service.link} className="service-card" key={index}>
                <div className="card-inner">
                  <div className="icon-container">
                    <div className="icon-bg"></div>
                    <div className="icon-wrapper">{service.icon}</div>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="view-more">
                    <span>View Details</span> 
                    <ArrowRight className="arrow-icon" size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="standalone-cta">
          <div className="cta-glass-card">
            <div className="cta-content">
               <div className="sparkle-circle">
                  <Sparkles className="cta-sparkle" size={28} />
               </div>
               <h2>Let’s build something <br/><span>extraordinary.</span></h2>
               <p>Connect with our expert strategy team today for a customized branding and marketing roadmap.</p>
            </div>
            <Link to="/contact" className="cta-button-animated">
              Get Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <style>{styles}</style>
    </>
  );
}

const styles = `
:root {
  --primary: #2563eb;
  --primary-light: #60a5fa;
  --dark: #0f172a;
  --slate: #64748b;
  --white: #ffffff;
  --transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.services-page { background-color: #fcfcfd; }

/* HERO REFINEMENTS */
.services-hero { 
  position: relative;
  padding: 180px 10% 140px; 
  text-align: center; 
  background-size: cover;
  background-position: center;
  color: var(--white);
  overflow: hidden;
}

.hero-gradient-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 1;
}

.hero-content { position: relative; z-index: 2; }

.badge-container { margin-bottom: 24px; }
.badge { 
  background: rgba(37, 99, 235, 0.15);
  border: 1px solid var(--primary);
  color: var(--white); 
  padding: 8px 24px; 
  border-radius: 100px; 
  font-weight: 700; 
  font-size: 0.75rem; 
  text-transform: uppercase;
  letter-spacing: 2px;
  backdrop-filter: blur(8px);
}

.services-hero h1 { 
  font-size: clamp(3rem, 8vw, 4.8rem); 
  font-weight: 800; 
  line-height: 1;
  margin-bottom: 25px;
  letter-spacing: -2px;
}

.highlight-text {
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-desc {
  max-width: 650px;
  margin: 0 auto;
  font-size: 1.3rem;
  color: #d1d5db;
  line-height: 1.6;
}

/* SECTION HEADER */
.section-header { text-align: center; margin-bottom: 70px; }
.section-title { font-size: 2.5rem; color: var(--dark); font-weight: 800; margin-bottom: 12px; }
.title-underline { width: 80px; height: 5px; background: var(--primary); margin: 0 auto; border-radius: 10px; }

/* SERVICE CARDS */
.services-section { padding: 120px 10%; }
.services-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); 
  gap: 40px; 
}

.service-card {
  text-decoration: none;
  background: var(--white);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 32px;
  transition: var(--transition);
}

.service-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 40px 70px -15px rgba(15, 23, 42, 0.12);
  border-color: var(--primary);
}

.card-inner { padding: 50px; }

.icon-container { position: relative; width: 70px; height: 70px; margin-bottom: 35px; }
.icon-bg { 
  position: absolute; width: 100%; height: 100%; 
  background: #f0f7ff; border-radius: 20px; 
  transform: rotate(-12deg); transition: var(--transition);
}
.icon-wrapper { 
  position: relative; z-index: 2; 
  color: var(--primary); width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  transition: var(--transition);
}

.service-card:hover .icon-bg { transform: rotate(0deg) scale(1.15); background: var(--primary); }
.service-card:hover .icon-wrapper { color: var(--white); transform: scale(0.9); }

.service-card h3 { color: var(--dark); font-size: 1.7rem; font-weight: 800; margin-bottom: 15px; }
.service-card p { color: var(--slate); line-height: 1.8; font-size: 1.05rem; }

.view-more { 
  display: flex; align-items: center; gap: 10px; margin-top: 35px; 
  color: var(--primary); font-weight: 800; font-size: 0.95rem;
}
.arrow-icon { transition: var(--transition); }
.service-card:hover .arrow-icon { transform: translateX(10px); }

/* CTA GLASS STYLES */
.standalone-cta { padding: 0 10% 120px; }
.cta-glass-card { 
  background: linear-gradient(145deg, #0f172a 0%, #1e293b 100%);
  padding: 90px; 
  border-radius: 48px; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  color: var(--white);
  position: relative;
  overflow: hidden;
  box-shadow: 0 60px 100px -25px rgba(15, 23, 42, 0.4);
}

.cta-content { max-width: 600px; position: relative; z-index: 2; }
.cta-content h2 { font-size: 3rem; line-height: 1.1; font-weight: 800; margin-bottom: 25px; }
.cta-content h2 span { color: var(--primary-light); }
.cta-content p { color: #94a3b8; font-size: 1.2rem; line-height: 1.7; }

.cta-button-animated {
  background: var(--primary);
  color: var(--white);
  padding: 24px 55px;
  border-radius: 100px;
  font-weight: 800;
  text-decoration: none;
  transition: var(--transition);
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.4);
  position: relative; z-index: 2;
  font-size: 1.1rem;
}

.cta-button-animated:hover {
  background: var(--white);
  color: var(--primary);
  transform: translateY(-5px);
}

@media (max-width: 1024px) {
  .cta-glass-card { flex-direction: column; text-align: center; padding: 70px 40px; gap: 50px; }
  .services-grid { grid-template-columns: 1fr; }
}
`;