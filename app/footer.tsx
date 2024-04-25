"use client";

import React, { useEffect, useState } from "react";
import { CSSProperties } from "react";

const footerStyle: CSSProperties = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
  display: "none",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%", // Make it full-width
  transition: "opacity 0.5s ease-in-out",
};

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far the user has scrolled from the top
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Set a threshold (e.g., 100 pixels from the bottom) to show the footer
      const threshold = 100;

      // Determine whether to show or hide the footer based on the scroll position
      if (
        scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - threshold
      ) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer style={{ ...footerStyle, display: showFooter ? "block" : "none" }}>
      Made with <span style={{ color: "red" }}>&#9829;</span> by Gordon. Last
      Updated Apr 2024.
    </footer>
  );
}

export default Footer;
