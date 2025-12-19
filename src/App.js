import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Work from "./work";
import OohAdvertising from "./OohAdvertising";
import TrainBranding from './TrainBranding';
import AdShoot from './AdShoot';
import Photography from './Photography';
import Social from './SocialMediaMarketing';
import Webdesign from './Webdesign';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work"  element={<Work/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/ooh-advertising" element={<OohAdvertising/>} />
        <Route path="/services/train-branding" element={<TrainBranding/>} />
        <Route path="/services/adshoot" element={<AdShoot/>} />
        <Route path="/services/photography" element={<Photography/>} />
        <Route path="/services/social-media-marketing" element={<Social/>} />
        <Route path="/services/web-design" element={<Webdesign/>} />
      </Routes>
    </Router>
  );
}

export default App;
