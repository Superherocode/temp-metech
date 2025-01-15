import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddDomain from "./Pages/AddDomain";
import API from "./Pages/API";
import Articles from "./Pages/Articles";
import ContactUs from "./Pages/ContactUs";
import FAQ from "./Pages/FAQ";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Reviews from "./Pages/Reviews";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adddomain" element={<AddDomain/>} />
        <Route path="/api" element={<API />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
