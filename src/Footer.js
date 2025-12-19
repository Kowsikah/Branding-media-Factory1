import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MOBILE_BREAKPOINT = 768;

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        footerSection: {
            backgroundColor: '#000000',
            color: '#ffffff',
            padding: isMobile ? '40px 5%' : '60px 8%',
            fontFamily: 'Arial, sans-serif',
        },
        footerContent: {
            display: 'grid',
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
            color: '#00ff7f', 
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        footerLinkList: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: isMobile ? 'center' : 'left',
        },
        footerLinkItem: {
            marginBottom: '10px',
        },
        footerLink: (isHovered) => ({
            color: isHovered ? '#00ff7f' : '#cccccc',
            textDecoration: 'none',
            fontSize: '1em',
            transition: 'color 0.3s',
            cursor: 'pointer',
        }),
        footerAboutText: {
            color: '#aaaaaa',
            fontSize: '0.95em',
            lineHeight: '1.6',
            marginBottom: '30px',
            textAlign: isMobile ? 'center' : 'justify',
        },
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
        footerCopyright: {
            textAlign: 'center',
            fontSize: '0.85em',
            color: '#666666',
            paddingTop: '20px',
        }
    };

    const renderLink = (to, label) => (
        <li style={styles.footerLinkItem}>
            <Link 
                to={to} 
                style={styles.footerLink(hoveredLink === label)}
                onMouseEnter={() => setHoveredLink(label)}
                onMouseLeave={() => setHoveredLink(null)}
            >
                {label}
            </Link>
        </li>
    );

    return (
        <footer style={styles.footerSection}>
            <div style={styles.footerContent}>
                {/* Column 1: Quick Links */}
                <div style={styles.footerColumn}>
                    <h4 style={styles.footerTitle}>Quick Links</h4>
                    <ul style={styles.footerLinkList}>
                        {renderLink("/about", "About Us")}
                        {renderLink("/work", "Our Portfolio")}
                        {renderLink("/services", "All Services")}
                        {renderLink("/contact", "Contact Us")}
                    </ul>
                </div>

                {/* Column 2: Our Services - Updated to match App.js Routes */}
                <div style={styles.footerColumn}>
                    <h4 style={styles.footerTitle}>Our Services</h4>
                    <ul style={styles.footerLinkList}>
                        {renderLink("/services/ooh-advertising", "OOH Advertising")}
                        {renderLink("/services/social-media-marketing", "Social Media")}
                        {renderLink("/services/train-branding", "Train Branding")}
                        {renderLink("/services/web-design", "Web Design")}
                    </ul>
                </div>

                {/* Column 3: About Us & Social */}
                <div style={styles.footerColumn}>
                    <h4 style={styles.footerTitle}>About Us</h4>
                    <p style={styles.footerAboutText}>
                        Branding Media Factory is a Digital Marketing & Advertising Agency,
                        excelling in both traditional & digital advertising. With 25
                        years of experience, we provide the edge needed to perfect 
                        campaigns across TV, Print, FM, and Digital platforms.
                    </p>
                    <div style={styles.socialIcons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>f</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>i</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>t</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>in</a>
                    </div>
                </div>
            </div>
            <div style={styles.footerCopyright}>
                © {new Date().getFullYear()} **Branding Media Factory**. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;