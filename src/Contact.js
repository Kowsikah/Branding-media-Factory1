import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

import Header from "./Header";
import Footer from "./Footer";
import heroImg from "./hero.webp";
import contactImg from "./contact.png";

const WEB3FORMS_ACCESS_KEY = "fd3a1d81-4bb7-4cb2-8307-241fb3b9f523";
const API_ENDPOINT = "https://api.web3forms.com/submit";

const PRIMARY = "#007bff";

const BUSINESS = {
  name: "Branding Media Factory",
  phone: "+91 73737 55589",
  email: "brandingmediafactory@gmail.com",
  address: {
    street: "No 364, 103-C, Narayana Pillai Street",
    area: "Peramanur",
    city: "Salem",
    state: "Tamil Nadu",
    pincode: "636007",
    country: "IN",
  },
  website: "https://brandingmediafactory.com",
  mapEmbed:
    "https://www.google.com/maps?q=Branding+Media+Factory+Salem&output=embed",
  reviewsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.3089237!2d78.1469!3d11.6643",
};

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...form,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!", { id: toastId });
        setForm({ name: "", email: "", message: "" });

        // GA4 conversion
        if (window.gtag) {
          window.gtag("event", "contact_form_submit", {
            event_category: "Lead",
            event_label: "Contact Page",
          });
        }
      } else {
        toast.error(data.message || "Submission failed", { id: toastId });
      }
    } catch {
      toast.error("Network error. Try again later.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Digital Marketing Agency in Salem</title>
        <meta
          name="description"
          content="Visit Branding Media Factory in Salem. Contact us for SEO, branding, unipole advertising and highway hoardings."
        />
        <link rel="canonical" href="https://brandingmediafactory.com/contact" />

        {/* LocalBusiness Schema omitted for brevity */}
        <script type="application/ld+json">{`...`}</script>
      </Helmet>

      <Header />

      {/* Hero omitted for brevity */}
      <header
        style={{
          height: "420px",
          background: `url(${heroImg}) center/cover no-repeat`,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        />
        <div style={{ position: "relative", color: "#fff", textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem" }}>
            Contact Our Digital Marketing Team
          </h1>
          <p>SEO • Branding • Unipole • Highway Hoardings</p>
        </div>
      </header>

      <main style={{ background: "#f8f9fa", padding: "4rem 5%" }}>
        {/* Main section now ensures all content is centered and stacked */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex", // Use flex for easy stacking
            flexDirection: "column",
            gap: "50px", // Adds spacing between the top section and the bottom section
          }}
        >
          {/* 1. Address Card and Map Row (Full Width Block) */}
          <div className="top-info-block">
            {/* Address and Embedded Map in ONE ROW (using CSS Flex) */}
            <div
              style={{
                display: "flex",
                gap: "25px",
                marginBottom: "25px",
              }}
              className="address-map-row"
            >
              {/* Address - made flex-item */}
              <div
                className="address-card"
                style={{ flex: 1, minWidth: "50%", margin: 0 }}
              >
                <h3>📍 Our Office</h3>
                <p>
                  <strong>{BUSINESS.name}</strong>
                  <br />
                  {BUSINESS.address.street}, {BUSINESS.address.area}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} – {BUSINESS.address.pincode}
                </p>
                <p>📞 <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a></p>
                <p>📧 <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
              </div>

              {/* Embedded Map - made flex-item */}
              <div
                className="map-wrapper"
                style={{ flex: 1, minWidth: "50%" }}
              >
                <iframe
                  src={BUSINESS.mapEmbed}
                  title="Google Map Location"
                  loading="lazy"
                  style={{ width: "100%", height: "100%", border: "0", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                ></iframe>
              </div>
            </div>
          </div>
            
          {/* 2. Image and Form Row (New Flex Container) */}
          <div 
            style={{
                display: "flex",
                gap: "50px",
                alignItems: "stretch", // Ensures both columns stretch to the same height
            }}
            className="image-form-row"
          >
            {/* LEFT SIDE: Send Message Image (Resized to 40% of the row) */}
            <div style={{ flex: "0 0 40%", display: "flex", alignItems: "center" }}>
                <img
                    src={contactImg}
                    alt="Send Message"
                    className="floating-image"
                    style={{
                        width: "100%",
                        borderRadius: "24px",
                        animation: "floatImage 6s ease-in-out infinite",
                    }}
                />
            </div>


            {/* RIGHT SIDE: Send Message Form (Takes remaining 60% of the row) */}
            <div 
              style={{
                flex: "1 1 60%", // Allows it to grow and take 60% base
                background: "#fff",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                // Added height 100% to ensure it matches the image container height
                height: "100%", 
              }}
              className="contact-form-card"
            >
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  style={{...inputStyle,resize:"none"}}
                />
                <button 
                  type="submit" 
                  disabled={loading} 
                  style={{
                      ...buttonStyle, 
                      cursor: loading ? "not-allowed":"pointer",
                      marginTop: "10px"
                  }}
                >
                  {loading?"Sending...":"Submit Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        /* Keyframes and Card Styles omitted for brevity */
        @keyframes floatImage {
          0% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0); }
        }
        .floating-image:hover { animation-play-state: paused; }
        .address-card { background:#fff;padding:20px;border-radius:14px;box-shadow:0 8px 25px rgba(0,0,0,0.08);transition:all 0.3s ease; }
        .address-card:hover { transform:translateY(-6px);box-shadow:0 15px 35px rgba(0,0,0,0.15); }
        .address-card a { color: ${PRIMARY}; text-decoration:none; }
        
        /* New Media Query for Stacking Image and Form on Small Screens */
        @media (max-width:992px){
            .image-form-row { 
                flex-direction: column; 
            }
            .contact-form-card, .image-form-row > div {
                 flex: 1 1 100% !important; /* Forces full width on small screens */
            }
        }
        
        /* Existing Media Query */
        @media (max-width:768px){
            .address-map-row { 
                flex-direction: column; 
                gap: 25px;
            } 
            .map-wrapper iframe { height: 280px !important; } 
        }
      `}</style>
    </>
  );
};

const inputStyle = { width:"100%",padding:"12px",marginBottom:"14px",borderRadius:"8px",border:"1px solid #ccc",fontSize:"1rem" };
const buttonStyle = { background: PRIMARY, color:"#fff", padding:"14px", width:"100%", border:"none", borderRadius:"8px", fontSize:"1rem" };

export default ContactPage;