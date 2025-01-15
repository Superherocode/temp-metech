import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Import icon từ Lucide
import { assets } from "../assets/asset";
import {Link} from "react-router-dom"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Xử lý hiển thị footer khi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Xử lý cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="foot"
      className={`fixed inset-x-0 bottom-0 flex justify-between items-center font-semibold text-[#5D6165] px-4 md:px-[150px] h-[64px] bg-white rounded-t-3xl ${
        isVisible ? "block" : "hidden"
      }`}
    >
      {/* Logo */}
      <div className="hidden min-[400px]:block">
        <img src={assets.image1} alt="" />
      </div>

      {/* Links */}
      <div className="flex">
        <p className="hover:text-[#148EFF] hover:underline">
          <Link to="/privacypolicy">Privacy Policy</Link>
        </p>
        <p className="sm:mx-8 mx-3 hover:text-[#148EFF] hover:underline">
          <Link to="/FAQ">FAQ</Link>
        </p>
        <p className="hover:text-[#148EFF] hover:underline">
          <Link to="/reviews">Reviews</Link>
        </p>
      </div>

      {/* Go to Top */}
      <div
        id="foot-to-top"
        className="flex items-center cursor-pointer ml-2 text-center"
        onClick={scrollToTop}
      >
        <p>Go to top</p>
        <ArrowUp className="ml-2" />
      </div>
    </div>
  );
};

export default Footer;
