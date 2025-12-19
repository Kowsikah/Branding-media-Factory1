import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import heroImage from './workhero.jpg'; 
import train1 from './t1.jpg';
import train2 from './t2.jpg';
import train3 from './t3.jpg';
import train4 from './t4.jpg';
import train5 from './t5.jpg';
import train6 from './t6.jpg';

import ooh1 from './o1.jpg';
import ooh2 from './o2.jpg';
import ooh3 from './o3.jpg';
import ooh4 from './o4.jpg';
import ooh5 from './o5.jpg';

import web1 from './w1.jpg';
import web2 from './w2.webp';
import web3 from './w3.webp';
import web4 from './w4.jpg';

import unipole1 from './o1.jpg';
import unipole2 from './o5.jpg';
import unipole3 from './o3.jpg';
import unipole4 from './o4.jpg';

import Header from './Header';
import Footer from './Footer';

const portfolioItems = [
  { id: 1, src: train1, category: 'Train Branding', title: 'Metro Train Branding Campaign' },
  { id: 2, src: train2, category: 'Train Branding', title: 'High-Speed Train Interior Branding' },
  { id: 3, src: train3, category: 'Train Branding', title: 'Luxury Coach Branding' },
  { id: 4, src: train4, category: 'Train Branding', title: 'Commuter Train Advertising' },
  { id: 5, src: train5, category: 'Train Branding', title: 'Railway Logo Branding' },
  { id: 6, src: train6, category: 'Train Branding', title: 'Full Train Wrap Advertising' },

  { id: 7, src: ooh1, category: 'OOH', title: 'Airport Outdoor Advertising' },
  { id: 8, src: ooh2, category: 'OOH', title: 'Street Furniture OOH Campaign' },
  { id: 9, src: ooh3, category: 'OOH', title: 'Digital Outdoor Signage' },
  { id: 10, src: ooh4, category: 'OOH', title: 'Highway Hoarding Billboard' },
  { id: 11, src: ooh5, category: 'OOH', title: 'Junction Outdoor Branding' },

  { id: 12, src: web1, category: 'Website', title: 'SEO Optimized E-Commerce Website' },
  { id: 13, src: web2, category: 'Website', title: 'Corporate Digital Marketing Website' },
  { id: 14, src: web3, category: 'Website', title: 'Blog Website UI with SEO' },
  { id: 15, src: web4, category: 'Website', title: 'High Conversion Landing Page' },

  { id: 18, src: unipole1, category: 'Unipole', title: 'Highway Unipole Advertising' },
  { id: 19, src: unipole2, category: 'Unipole', title: 'City Junction Unipole Branding' },
  { id: 20, src: unipole3, category: 'Unipole', title: 'Product Launch Unipole Hoarding' },
  { id: 21, src: unipole4, category: 'Unipole', title: 'Seasonal Highway Unipole Campaign' },
];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);
  const categories = ['All', 'Train Branding', 'OOH', 'Website', 'Unipole'];

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeFilter);

  const embeddedStyles = `
    :root {
      --primary:#1f4287;
      --accent:#007bff;
      --bg:#f8f8f8;
      --shadow:0 4px 12px rgba(0,0,0,.1);
      --shadow-hover:0 12px 28px rgba(0,0,0,.25);
    }

    .portfolio-page { background:var(--bg);  }
    .section-padding { max-width:1300px; margin:auto; padding:60px 5%; }

    .hero-section {
      height:350px;
      background:url(${heroImage}) center/cover no-repeat;
      display:flex; align-items:center; justify-content:center;
      position:relative;
    }

    .hero-content h1 { font-size:3rem; color:#fff; margin:0; }
    .hero-content p { color:#eee; }

    .filter-container { text-align:center; margin-bottom:40px; }
    .filter-button {
      margin:6px; padding:10px 22px; border-radius:25px;
      border:none; cursor:pointer; font-weight:600;
    }

    .gallery-grid {
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
      gap:20px;
    }

    .portfolio-item {
      position:relative;
      aspect-ratio:1/1;
      overflow:hidden;
      border-radius:14px;
      background:#fff;
      box-shadow:var(--shadow);
      will-change:transform;
    }

    .portfolio-item img {
      width:100%; height:100%;
      object-fit:cover;
      transition:transform .4s ease;
    }

    .portfolio-item:hover img { transform:scale(1.05); }

    .item-overlay {
      position:absolute; inset:0;
      background:linear-gradient(to top,rgba(0,0,0,.85),transparent);
      display:flex; flex-direction:column; justify-content:flex-end;
      padding:20px; color:#fff;
      opacity:0; transition:opacity .3s ease;
    }

    .portfolio-item:hover .item-overlay { opacity:1; }

    @media(max-width:768px){
      .hero-section{height:250px}
      .item-overlay{opacity:1}
    }
  `;

  return (
    <div className="portfolio-page">
      <style dangerouslySetInnerHTML={{ __html: embeddedStyles }} />

      <Helmet>
        <title>Portfolio | Digital Marketing Agency | Unipole & Highway Hoardings</title>

        <meta name="description"
          content="Explore train branding, unipole advertising, highway hoardings and digital marketing projects by Branding Media Factory." />

        <meta name="keywords"
          content="digital marketing agency, unipole advertising, highway hoarding, highway boarding, train branding, OOH advertising" />

        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://brandingmediafactory.com/portfolio" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="PASTE_YOUR_GSC_CODE_HERE" />

        {/* Preload Hero for LCP */}
        <link rel="preload" as="image" href={heroImage} />

        {/* Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context":"https://schema.org",
            "@type":"MarketingAgency",
            "name":"Branding Media Factory",
            "serviceType":"Digital Marketing, Unipole Advertising, Highway Hoardings",
            "url":"https://brandingmediafactory.com"
          }
        `}</script>
      </Helmet>

     
      <Header />
      <header className="hero-section">
        <div className="hero-content">
          <h1>Creative Portfolio</h1>
          <p>Train Branding • Unipole • Highway Hoardings</p>
        </div>
      </header>

      <main className="section-padding">
        <div className="filter-container">
          {categories.map(c => (
            <button
              key={c}
              className="filter-button"
              onClick={() => setActiveFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <section className="gallery-grid">
          {filteredItems.map(item => (
            <article key={item.id} className="portfolio-item">
              <img
                src={item.src}
                alt={`${item.title} | Digital Marketing Agency | Unipole Advertising`}
                loading="lazy"
                width="600"
                height="600"
              />
              <div className="item-overlay">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
