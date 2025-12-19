import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ppc from './ppc.jpg';
import pay from './pay.png';
import animation from './animation.png';
import startegy from './c.png';

const MarketingAgencyPage = () => {
  return (
    <div style={styles.container}>
      {/* Global Styles for Interactions */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap');
          
          .btn-primary:hover { 
            background-color: #2563eb !important; 
            transform: translateY(-2px); 
            box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.4); 
          }
          .btn-secondary:hover { 
            background-color: rgba(255,255,255,0.1) !important; 
            border-color: #fff !important;
          }
          .card:hover { 
            transform: translateY(-12px); 
            border-color: #3b82f6 !important;
            box-shadow: 0 20px 40px -15px rgba(0,0,0,0.05);
          }
          
          @media (max-width: 768px) {
            .hero-title { font-size: 2.8rem !important; }
            .split-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            .services-grid { grid-template-columns: 1fr !important; }
          }
        `}
      </style>

      {/* --- FIXED HEADER --- */}
      <div style={styles.headerWrapper}>
        <Header />
      </div>

      {/* --- HERO SECTION --- */}
      <section style={styles.hero}>
        {/* BACKGROUND IMAGE */}
        <img 
          src={ppc}
          alt="PPC Strategy Dashboard" 
          style={styles.heroImg}
        />

        {/* OVERLAY */}
        <div style={styles.overlay}></div>

        {/* CONTENT */}
        <div style={styles.heroContent}>
          <div style={styles.badge}>ROI-DRIVEN AGENCY</div>
          <h1 className="hero-title" style={styles.heroTitle}>
            Convert Clicks Into <span style={styles.accentText}>Customers</span>
          </h1>
          <p style={styles.heroSubtitle}>
            High-performance PPC management and premium Content Marketing designed to capture attention and dominate your market.
          </p>
          <div style={styles.btnGroup}>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={styles.btnPrimary}>
                Start Your Free Audit
              </button>
            </Link>
            
            <Link to="/portfolio" style={{ textDecoration: 'none' }}>
              <button className="btn-secondary" style={styles.btnSecondary}>
                See Our Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- WHAT WE PROVIDE (SERVICES) --- */}
      <section style={styles.section}>
        <div style={styles.centered}>
          <h2 style={styles.sectionHeading}>What We Provide</h2>
          <div style={styles.underline}></div>
          <p style={styles.sectionSubtext}>Comprehensive digital growth strategies that bridge the gap between ad traffic and storytelling.</p>
        </div>
        
        <div className="services-grid" style={styles.servicesGrid}>
          <div className="card" style={styles.card}>
            <img src={pay} alt="PPC" width="70px" height="70px" />
            <h3 style={styles.cardTitle}>Pay-Per-Click (PPC)</h3>
            <p style={styles.cardText}>
              Precision targeting on Google, Meta, and LinkedIn. We optimize for high-value conversions.
            </p>
          </div>

          <div className="card" style={styles.card}>
            <img src={animation} alt="Animation" width="70px" height="70px" />
            <h3 style={styles.cardTitle}>Content & Animation</h3>
            <p style={styles.cardText}>
              Custom 2D/3D animations and high-retention video content designed to explain complex services.
            </p>
          </div>

          <div className="card" style={styles.card}>
            <img src={startegy} alt="Strategy" width="70px" height="70px" />
            <h3 style={styles.cardTitle}>Conversion Strategy</h3>
            <p style={styles.cardText}>
              We optimize the entire user journey, turning existing traffic into a predictable revenue stream.
            </p>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section style={styles.darkSection}>
        <div className="split-grid" style={styles.splitGrid}>
          <div>
            <h2 style={styles.darkHeading}>Why Scale With Us?</h2>
            <p style={styles.darkText}>
              We combine technical PPC audits with custom-animated content to outpace your competitors.
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>✓ Data-Backed Campaign Audits</li>
              <li style={styles.listItem}>✓ Custom Explainer Animations</li>
              <li style={styles.listItem}>✓ Real-Time ROI Reporting</li>
              <li style={styles.listItem}>✓ Transparent Management</li>
            </ul>
          </div>
          <div style={styles.statsContainer}>
            <div style={styles.statBox}><h4 style={styles.statNum}>4.8x</h4><p style={styles.statLabel}>Avg. ROAS</p></div>
            <div style={styles.statBox}><h4 style={styles.statNum}>$10M+</h4><p style={styles.statLabel}>Managed Spend</p></div>
            <div style={styles.statBox}><h4 style={styles.statNum}>150+</h4><p style={styles.statLabel}>Active Campaigns</p></div>
            <div style={styles.statBox}><h4 style={styles.statNum}>24/7</h4><p style={styles.statLabel}>Live Monitoring</p></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// --- STYLES OBJECT ---
const styles = {
  container: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    backgroundColor: '#fff',
    overflowX: 'hidden',
  },
  headerWrapper: {
    position: 'fixed',         // Fixes it to the top
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,              // Keeps it above all content
    backgroundColor: '#0f172a', // Solid dark color
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)', // Shadow for visibility on white
  },
  hero: {
    position: 'relative',
    height: '80vh',           // Increased to 100vh for full screen
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    paddingTop: '80px',        // Prevents header from covering hero content
  },
  heroImg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.7) 100%)',
    zIndex: 2,
  },
  heroContent: { 
    position: 'relative',
    zIndex: 3,
    padding: '0 20px', 
    maxWidth: '900px' 
  },
  heroTitle: { fontSize: '4.5rem', fontWeight: '800', lineHeight: 1.1, margin: 0 },
  accentText: { color: '#3b82f6' },
  heroSubtitle: { fontSize: '1.25rem', color: '#cbd5e1', marginTop: '24px', maxWidth: '650px', marginInline: 'auto' },
  badge: { display: 'inline-block', padding: '6px 16px', border: '1px solid #3b82f6', borderRadius: '100px', fontSize: '0.85rem', color: '#3b82f6', marginBottom: '20px' },
  btnGroup: { display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px' },
  btnPrimary: { padding: '16px 36px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', transition: '0.3s' },
  btnSecondary: { padding: '16px 36px', backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '12px', cursor: 'pointer', transition: '0.3s' },
  section: { padding: '100px 5%', maxWidth: '1200px', margin: '0 auto' },
  centered: { textAlign: 'center', marginBottom: '60px' },
  sectionHeading: { fontSize: '3rem', fontWeight: '800', marginBottom: '10px' },
  sectionSubtext: { color: '#64748b', fontSize: '1.1rem' },
  underline: { width: '50px', height: '5px', backgroundColor: '#3b82f6', margin: '15px auto' },
  servicesGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' },
  card: { padding: '50px 30px', borderRadius: '24px', border: '1px solid #f1f5f9', transition: '0.3s', backgroundColor: '#fff', textAlign: 'center' },
  cardTitle: { fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px', marginTop: '15px' },
  cardText: { color: '#64748b', lineHeight: '1.7' },
  darkSection: { backgroundColor: '#0f172a', color: '#fff', padding: '120px 5%' },
  splitGrid: { maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' },
  darkHeading: { fontSize: '3rem', fontWeight: '800', marginBottom: '20px' },
  darkText: { color: '#94a3b8', lineHeight: '1.8', marginBottom: '35px', fontSize: '1.1rem' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { marginBottom: '12px', color: '#3b82f6', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' },
  statsContainer: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' },
  statBox: { padding: '35px 20px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' },
  statNum: { fontSize: '2.5rem', fontWeight: '800', color: '#3b82f6', margin: 0 },
  statLabel: { color: '#94a3b8', fontSize: '0.9rem', marginTop: '5px', textTransform: 'uppercase', letterSpacing: '1px' },
};

export default MarketingAgencyPage;