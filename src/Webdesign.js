import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Zap, TrendingUp, Smartphone, Search, Layout, 
  ShieldCheck, Rocket, MessageSquare, CheckCircle2,
  ArrowRight, Sparkles
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

// TYPEWRITER HOOK
const useTypewriter = (words, speed = 150, delay = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, delay]);

  return words[index].substring(0, subIndex);
};

export default function WebDesignPage() {
  const typedText = useTypewriter([
    "Demand Attention",
    "Drive Conversions",
    "Dominate Search",
    "Define Brands"
  ]);

  return (
    <main style={styles.page}>
      <Helmet>
        <title>Professional Web Design Services | High-Impact SEO Websites</title>
      </Helmet>

      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }
          .cursor {
            display: inline-block;
            width: 3px;
            height: 1em;
            background-color: #2563eb;
            margin-left: 4px;
            animation: blink 1s step-end infinite;
            vertical-align: middle;
          }
          
          .hover-card {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
          }
          .hover-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 30px 60px -12px rgba(0,0,0,0.12) !important;
            border-color: #2563eb !important;
          }
          
          .hover-icon {
            transition: transform 0.3s ease;
          }
          .hover-card:hover .hover-icon {
            transform: scale(1.2) rotate(5deg);
            color: #7c3aed !important;
          }

          .btn-animate {
            transition: all 0.3s ease;
          }
          .btn-animate:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
          }

          /* Subtle floating animation for the hero content */
          @keyframes floatContent {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .hero-floating {
            animation: floatContent 6s ease-in-out infinite;
          }
        `}
      </style>

      <Header />

      {/* UPDATED HERO SECTION WITH BLUISH-PURPLE GRADIENT */}
      <section style={styles.hero}>
        {/* Atmospheric Glow Elements */}
        <div style={styles.glowPurple} />
        <div style={styles.glowBlue} />
        
        <div style={styles.heroContent} className="hero-floating">
          <div style={styles.badge}>
            <Sparkles size={14} style={{ marginRight: 8, color: '#2563eb' }} />
            Premium Digital Agency
          </div>
          <h1 style={styles.heroTitle}>
            Bold Websites That <br />
            <span style={styles.gradient}>
              {typedText}
              <span className="cursor" />
            </span>
          </h1>
          <p style={styles.heroText}>
            We design visually striking, SEO-powered websites engineered to
            convert visitors into customers.
          </p>
          <div style={styles.ctaRow}>
            <Link to="/contact">
              <button style={styles.primary} className="btn-animate">
                Start Your Project <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </button>
            </Link>
            <Link to="/portfolio">
              <button style={styles.secondary} className="btn-animate">Explore Work</button>
            </Link>
          </div>
        </div>
      </section>

      {/* METRICS & SERVICES (Kept as per your request) */}
      <section style={styles.metrics}>
        {metrics.map((m) => (
          <div key={m.title} style={styles.metricCard} className="hover-card">
            <div style={styles.metricIcon} className="hover-icon">{m.icon}</div>
            <h3 style={styles.metricValue}>{m.value}</h3>
            <p style={styles.metricTitle}>{m.title}</p>
          </div>
        ))}
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>What We Deliver</h2>
        <div style={styles.cardGrid}>
          {services.map((s) => (
            <div key={s.title} style={styles.featureCard} className="hover-card">
              <div style={styles.iconBox} className="hover-icon">{s.icon}</div>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ padding: '0 8%', marginBottom: '100px' }}>
        <section style={styles.finalCTA} className="hover-card">
          <Rocket size={60} color="#ffffff" style={{ marginBottom: 24 }} />
          <h2 style={styles.ctaHeading}>Let’s Build Something Powerful</h2>
          <Link to="/contact">
            <button style={styles.primaryLarge} className="btn-animate">Get Started Today</button>
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}

// ... (Data Constants remain the same)
const metrics = [
  { value: "3x", title: "Faster Performance", icon: <Zap size={32} /> },
  { value: "50%+", title: "Higher Conversions", icon: <TrendingUp size={32} /> },
  { value: "100%", title: "Responsive Design", icon: <Smartphone size={32} /> },
  { value: "Rank #1", title: "Search Optimized", icon: <Search size={32} /> }
];

const services = [
  { title: "Custom UI Design", desc: "Visually bold designs crafted for maximum psychological impact.", icon: <Layout size={32} /> },
  { title: "SEO Architecture", desc: "Search-engine friendly structure from the first line of code.", icon: <Search size={32} /> },
  { title: "Mobile-First UX", desc: "Designed for modern users on every device and screen size.", icon: <Smartphone size={32} /> },
  { title: "Performance Tuning", desc: "Fast-loading pages that retain users and boost rankings.", icon: <Zap size={32} /> },
  { title: "Secure Development", desc: "Clean, safe, and enterprise-ready scalable codebase.", icon: <ShieldCheck size={32} /> },
  { title: "Ongoing Support", desc: "We grow and optimize with your business long after launch.", icon: <MessageSquare size={32} /> }
];

const styles = {
  page: { background: "#ffffff", color: "#020617", fontFamily: "'Plus Jakarta Sans', sans-serif", overflow: 'hidden' },
  hero: {
    padding: "160px 8% 140px",
    textAlign: "center",
    position: "relative",
    /* Light Bluish Purple Background */
    background: "linear-gradient(180deg, #b5bdd4ff 0%, #ffffff 100%)", 
  },
  glowPurple: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
    zIndex: 1,
  },
  glowBlue: {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, rgba(255, 255, 255, 0) 70%)',
    zIndex: 1,
  },
  heroContent: { position: "relative", zIndex: 10 },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "10px 24px",
    borderRadius: "99px",
    background: "#ffffff",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    color: "#020617",
    fontSize: "0.85rem",
    fontWeight: 700,
    marginBottom: "32px",
    border: "1px solid #f1f5f9"
  },
  heroTitle: { fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-3px" },
  gradient: { background: "linear-gradient(90deg, #2563eb, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  heroText: { maxWidth: "700px", margin: "32px auto", fontSize: "1.3rem", color: "#64748b", lineHeight: 1.6 },
  ctaRow: { display: "flex", justifyContent: "center", gap: 20, marginTop: 40 },
  primary: { background: "#020617", color: "#fff", padding: "20px 42px", borderRadius: "16px", border: "none", fontWeight: 700, display: "flex", alignItems: "center", cursor: "pointer" },
  secondary: { background: "#ffffff", color: "#020617", padding: "20px 42px", borderRadius: "16px", border: "2px solid #e2e8f0", fontWeight: 700, cursor: "pointer" },
  metrics: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, padding: "0 8% 100px" },
  metricCard: { padding: "50px 30px", borderRadius: "32px", background: "#ffffff", border: "1px solid #f1f5f9", textAlign: "center" },
  metricIcon: { marginBottom: 20, display: "flex", justifyContent: "center", color: "#2563eb" },
  metricValue: { fontSize: "3rem", fontWeight: 900, color: "#020617", marginBottom: 8 },
  metricTitle: { color: "#64748b", fontWeight: 600, fontSize: '1.1rem' },
  section: { padding: "120px 8%" },
  heading: { textAlign: "center", fontSize: "3.5rem", fontWeight: 900, marginBottom: "80px", letterSpacing: '-2px' },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 40 },
  featureCard: { padding: "60px", borderRadius: "40px", background: "#ffffff", border: "1px solid #f1f5f9" },
  iconBox: { color: "#2563eb", marginBottom: 32 },
  cardTitle: { fontSize: "1.75rem", fontWeight: 800, marginBottom: "20px" },
  cardDesc: { color: "#64748b", lineHeight: 1.8, fontSize: '1.1rem' },
  finalCTA: { 
    padding: "100px 8%", 
    textAlign: "center", 
    background: "linear-gradient(135deg, #2563eb, #7c3aed)", 
    borderRadius: '60px',
    color: 'white',
    boxShadow: '0 40px 100px rgba(37,99,235,0.3)'
  },
  ctaHeading: { fontSize: "4rem", fontWeight: 900, marginBottom: "24px", letterSpacing: '-3px' },
  primaryLarge: { padding: "24px 70px", borderRadius: "20px", border: "none", background: "#ffffff", color: "#2563eb", fontWeight: 900, fontSize: "1.2rem", cursor: "pointer" }
};