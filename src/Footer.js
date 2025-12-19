import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Using Link for internal navigation

const MOBILE_BREAKPOINT = 768;

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

    // --- Responsiveness Logic (Window Resize Listener) ---
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        footerSection: {
            backgroundColor: '#000000', // Dark background
            color: '#ffffff',
            padding: isMobile ? '40px 5%' : '60px 8%',
            fontFamily: 'Arial, sans-serif',
        },
        footerContent: {
            display: 'grid',
            // Responsive columns: 1 column on mobile, 3 columns on desktop
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1.5fr', 
            gap: isMobile ? '30px' : '60px',
            maxWidth: '1300px',
            margin: '0 auto',
            borderBottom: '1px solid #333333',
            paddingBottom: '40px',
            marginBottom: '20px',
        },
        footerColumn: {
            textAlign: isMobile ? 'center' : 'left',
        },
        footerTitle: {
            fontSize: isMobile ? '1.3em' : '1.5em',
            fontWeight: 'bold',
            color: '#00ff7f', // Highlight color
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        
        // --- Links ---
        footerLinkList: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: isMobile ? 'center' : 'left',
        },
        footerLinkItem: {
            marginBottom: '10px',
        },
        footerLink: {
            color: '#cccccc',
            textDecoration: 'none',
            fontSize: '1em',
            transition: 'color 0.3s',
            cursor: 'pointer',
            // Using '&:hover' is not supported in inline styles, but we simulate the effect
            // with a functional component if needed. For simplicity, we stick to base styles.
        },
        
        // --- About Text ---
        footerAboutText: {
            color: '#aaaaaa',
            fontSize: '0.95em',
            lineHeight: '1.6',
            marginBottom: '30px',
            textAlign: isMobile ? 'center' : 'justify',
        },

        // --- Social Icons ---
        socialIcons: {
            display: 'flex',
            gap: '15px',
            justifyContent: isMobile ? 'center' : 'flex-start',
        },
        socialIcon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            backgroundColor: '#333333',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '1em',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
        },
        // Hover/Specific Colors (Optional: Can be extended with actual icons/libraries)
        facebook: { '&:hover': { backgroundColor: '#3b5998' } },
        instagram: { '&:hover': { backgroundColor: '#C13584' } },
        twitter: { '&:hover': { backgroundColor: '#1DA1F2' } },
        linkedin: { '&:hover': { backgroundColor: '#0077B5' } },
        youtube: { '&:hover': { backgroundColor: '#FF0000' } },

        // --- Copyright ---
        footerCopyright: {
            textAlign: 'center',
            fontSize: '0.85em',
            color: '#666666',
            paddingTop: '20px',
        }
    };

    return (
        <footer style={styles.footerSection}>
            <div style={styles.footerContent}>
                {/* Column 1: Quick Links */}
                <div style={styles.footerColumn}>
                    <h4 style={styles.footerTitle}>Quick Links</h4>
                    <ul style={styles.footerLinkList}>
                        <li style={styles.footerLinkItem}><Link to="/about" style={styles.footerLink}>About Branding Media Factory</Link></li>
                        <li style={styles.footerLinkItem}><Link to="/services" style={styles.footerLink}>Our Services</Link></li>
                        <li style={styles.footerLinkItem}><Link to="/work" style={styles.footerLink}>Portfolio</Link></li>
                        <li style={styles.footerLinkItem}><Link to="/contact" style={styles.footerLink}>Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 2: Our Services */}
                <div style={styles.footerColumn}>
                    <h4 style={styles.footerTitle}>Our Services</h4>
                    <ul style={styles.footerLinkList}>
                        <li style={styles.footerLinkItem}><Link to="/services#advertising" style={styles.footerLink}>Advertising</Link></li>
                        <li style={styles.footerLinkItem}><Link to="/services#digital" style={styles.footerLink}>Digital Marketing</Link></li>
                        <li style={styles.footerLinkItem}><Link to="/services#branding" style={styles.footerLink}>Branding</Link></li>
                        <li style={styles.footerLinkItem}><Link to="/services#photography" style={styles.footerLink}>Photography</Link></li>
                    </ul>
                </div>

                {/* Column 3: About Us & Social */}
                <div style={styles.footerColumn}>
                    <h4 style={styles.footerTitle}>About Us</h4>
                    <p style={styles.footerAboutText}>
                        Branding Media Factory is a Digital Marketing & Advertising Agency,
                        that excels in both traditional & digital advertising. With 25
                        years of experience in this field, we give our clients a much
                        needed edge to perfect the advertising campaigns on all
                        platforms - TV, Print, FM and Digital.
                    </p>
                    <div style={styles.socialIcons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{...styles.socialIcon, ...styles.facebook}}>f</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{...styles.socialIcon, ...styles.instagram}}>i</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{...styles.socialIcon, ...styles.twitter}}>t</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{...styles.socialIcon, ...styles.linkedin}}>in</a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{...styles.socialIcon, ...styles.youtube}}>y</a>
                    </div>
                </div>
            </div>
            <div style={styles.footerCopyright}>
                © 2025 **Branding Media Factory**. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;