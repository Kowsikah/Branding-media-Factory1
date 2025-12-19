import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// Asset Imports
import socialHero from './socialmedia.webp'; 
import igIcon from './instagram.png';
import metaIcon from './facebook.png'; 
import linkedinIcon from './linkedin.png';

const SocialMediaMarketingPage = () => {
  return (
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
          
          /* Smooth Entrance */
          @keyframes reveal {
            from { opacity: 0; transform: translateY(40px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }

          .reveal { animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }

          /* Glass Bento Cards */
          .bento-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.4s ease;
          }

          .bento-card:hover {
            background: rgba(255, 255, 255, 0.07);
            border-color: #3b82f6;
            transform: translateY(-5px);
          }

          .nav-glass {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }

          .text-gradient {
            background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          @media (max-width: 768px) {
            .hero-title { font-size: 3rem !important; }
            .bento-grid { grid-template-columns: 1fr !important; }
            .stats-row { flex-direction: column !important; gap: 40px !important; }
          }
        `}
      </style>

      {/* --- NAV WRAPPER --- */}
      <div className="nav-glass" style={styles.headerWrapper}>
        <Header />
      </div>

      {/* --- HERO SECTION --- */}
      <section style={styles.hero}>
        <img src={socialHero} alt="Premium Background" style={styles.heroBgImg} />
        <div style={styles.heroOverlay}></div>

        <div style={styles.heroContent} className="reveal">
          <div style={styles.heroBadge}>THE NEW STANDARD OF SOCIAL</div>
          <h1 className="hero-title text-gradient" style={styles.heroTitle}>
            We Build Digital <br />
            <span style={styles.blueAccent}>Legacies.</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Moving beyond vanity metrics. We engineer high-authority social ecosystems for Meta and LinkedIn that command respect and drive revenue.
          </p>
          <div style={styles.heroActions}>
            <Link to="/contact"><button style={styles.btnPrimary}>Start Your Growth Phase</button></Link>
            <div style={styles.trustedBy}>
                <span style={{color: '#64748b', fontSize: '12px', letterSpacing: '1px'}}>TRUSTED BY INNOVATORS WORLDWIDE</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE METHODOLOGY (CONTENT UPGRADE) --- */}
      <section style={styles.section}>
        <div style={styles.centered}>
          <h2 style={styles.sectionHeading}>Our Methodology</h2>
          <p style={styles.sectionSub}>Precision-engineered growth across the three pillars of social dominance.</p>
        </div>

        <div className="bento-grid" style={styles.bentoGrid}>
          {/* META CARD */}
          <div className="bento-card" style={{...styles.bentoItem, gridColumn: 'span 2'}}>
            <div style={styles.iconBox}><img src={metaIcon} width="30" alt="Meta" /></div>
            <h3 style={styles.cardTitle}>Meta Full-Funnel Mastery</h3>
            <p style={styles.cardText}>From cinematic Instagram Reels to data-driven Facebook community management. We don't just "post"—we architect a journey from first impression to brand loyalty.</p>
            <div style={styles.tagGroup}>
                <span style={styles.tag}>Content Pillars</span>
                <span style={styles.tag}>Community Care</span>
                <span style={styles.tag}>Paid Integration</span>
            </div>
          </div>

          {/* LINKEDIN CARD */}
          <div className="bento-card" style={styles.bentoItem}>
            <div style={styles.iconBox}><img src={linkedinIcon} width="30" alt="LinkedIn" /></div>
            <h3 style={styles.cardTitle}>LinkedIn Authority</h3>
            <p style={styles.cardText}>B2B positioning for executives and high-growth firms.</p>
            <ul style={styles.miniList}>
                <li>• Executive Ghostwriting</li>
                <li>• Thought Leadership</li>
                <li>• Industry Networking</li>
            </ul>
          </div>

          {/* ANALYTICS CARD */}
          <div className="bento-card" style={styles.bentoItem}>
            <h3 style={styles.cardTitle}>Real-Time Insights</h3>
            <p style={styles.cardText}>Transparent dashboards showing the metrics that actually matter: ROI and Sentiment.</p>
          </div>

          {/* CREATIVE CARD */}
          <div className="bento-card" style={{...styles.bentoItem, gridColumn: 'span 2'}}>
            <h3 style={styles.cardTitle}>Cinematic Content Production</h3>
            <p style={styles.cardText}>Our in-house studio produces 4K short-form video content specifically designed to trigger the latest platform algorithms and maximize organic reach.</p>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION (VISUAL APPEAL UPGRADE) --- */}
      <section style={styles.darkSection}>
        <div style={styles.statsRow} className="stats-row">
            <div style={styles.statBox}>
                <h4 style={styles.statNum}>12M+</h4>
                <p style={styles.statLabel}>Impressions Managed</p>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.statBox}>
                <h4 style={styles.statNum}>340%</h4>
                <p style={styles.statLabel}>Avg. Engagement Lift</p>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.statBox}>
                <h4 style={styles.statNum}>15:1</h4>
                <p style={styles.statLabel}>Creative ROI</p>
            </div>
        </div>
      </section>

      {/* --- PROCESS STRATEGY --- */}
      <section style={styles.section}>
        <div style={styles.centered}>
            <span style={styles.preHeading}>THE ROADMAP</span>
            <h2 style={styles.sectionHeading}>How We Scale You</h2>
        </div>
        
        <div style={styles.processContainer}>
            <div style={styles.processStep}>
                <div style={styles.stepCircle}>1</div>
                <h4 style={styles.stepTitle}>Deep Audit</h4>
                <p style={styles.stepText}>We analyze your competitors, your voice, and your missed opportunities.</p>
            </div>
            <div style={styles.processLine}></div>
            <div style={styles.processStep}>
                <div style={styles.stepCircle}>2</div>
                <h4 style={styles.stepTitle}>Deployment</h4>
                <p style={styles.stepText}>High-cadence content scheduling across your primary growth channels.</p>
            </div>
            <div style={styles.processLine}></div>
            <div style={styles.processStep}>
                <div style={styles.stepCircle}>3</div>
                <h4 style={styles.stepTitle}>Optimization</h4>
                <p style={styles.stepText}>Bi-weekly strategy pivots based on real audience data and trends.</p>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#ffffff', fontFamily: "'Plus Jakarta Sans', sans-serif", overflowX: 'hidden' },
  headerWrapper: { position: 'fixed', top: 0, width: '100%', zIndex: 1000, borderBottom: '1px solid #f1f5f9' },
  
  // HERO
  hero: { position: 'relative', height: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617', textAlign: 'center', overflow: 'hidden' },
  heroBgImg: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 },
  heroOverlay: { position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 100%, #020617 80%)' },
  heroContent: { position: 'relative', zIndex: 5, padding: '0 20px' },
  heroBadge: { color: 'white', fontSize: '5px', fontWeight: '500', letterSpacing: '4px', marginBottom: '20px' },
  heroTitle: { fontSize: '5rem', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.04em' },
  blueAccent: { color: '#3b82f6' },
  heroSubtitle: { color: 'white', fontSize: '1.25rem', maxWidth: '600px', margin: '30px auto', lineHeight: '1.6' },
  btnPrimary: { padding: '20px 40px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '100px', fontWeight: '700', cursor: 'pointer', transition: '0.3s' },
  
  // SECTIONS
  section: { padding: '120px 5%', maxWidth: '1300px', margin: '0 auto' },
  centered: { textAlign: 'center', marginBottom: '80px' },
  sectionHeading: { fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-0.02em', color: '#0f172a' },
  sectionSub: { color: '#64748b', fontSize: '1.2rem', marginTop: '10px' },
  
  // BENTO GRID
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' },
  bentoItem: { padding: '40px', borderRadius: '32px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' },
  iconBox: { marginBottom: '25px', width: '50px', height: '50px', backgroundColor: '#fff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' },
  cardTitle: { fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '15px' },
  cardText: { color: '#64748b', lineHeight: '1.7' },
  tagGroup: { display: 'flex', gap: '10px', marginTop: '20px' },
  tag: { fontSize: '11px', fontWeight: '700', padding: '5px 12px', background: '#eff6ff', color: '#3b82f6', borderRadius: '50px' },
  miniList: { listStyle: 'none', padding: 0, marginTop: '15px', color: '#64748b', fontSize: '14px' },

  // STATS
  darkSection: { backgroundColor: '#020617', padding: '100px 5%' },
  statsRow: { maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  statBox: { textAlign: 'center' },
  statNum: { fontSize: '4rem', fontWeight: '800', color: '#fff', margin: 0 },
  statLabel: { color: '#3b82f6', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px', marginTop: '10px' },
  divider: { height: '80px', width: '1px', background: 'rgba(255,255,255,0.1)' },

  // PROCESS
  preHeading: { color: '#3b82f6', fontWeight: '800', fontSize: '12px', letterSpacing: '3px' },
  processContainer: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginTop: '60px' },
  processStep: { flex: 1, textAlign: 'center', padding: '0 20px' },
  stepCircle: { width: '60px', height: '60px', backgroundColor: '#0f172a', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '20px', fontWeight: '800' },
  processLine: { flex: 0.5, height: '2px', background: '#f1f5f9', marginTop: '30px' },
  stepTitle: { fontSize: '1.4rem', fontWeight: '700', marginBottom: '10px' },
  stepText: { color: '#64748b', lineHeight: '1.6' }
};

export default SocialMediaMarketingPage;