"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";
import Footer from "../footer";
import type { Metadata } from "next";
import Image from "next/image";
import { CSSProperties } from "react";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import ViewCounter from "./view-counter";
import chess from "../images/chess.png";
import sudoku from "../images/sudoku.png";
import carCreator from "../images/carCreator.png";

const keyframesStyles = `
  @keyframes pop {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const cardContainerStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  maxWidth: "95%",
  marginBottom: "30px",
};

const cardStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  border: "1px solid #ddd",
  borderRadius: "4px",
  overflow: "hidden",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  width: "90%",
  marginBottom: "20px",
  transition: "transform 0.3s ease-in-out",
};

const imageStyle: CSSProperties = {
  minWidth: "60%",
  maxWidth: "60%",
  height: "420px",
  padding: "10px",
  objectFit: "contain",
  border: "1px solid #ccc",
};

const titleStyle = {
  fontSize: "1.5rem",
  margin: "0",
  fontWeight: "bold",
};

const descriptionStyle = {
  marginTop: "8px",
  fontSize: "0.875rem",
};

const cardContentStyle = {
  padding: "16px",
};

const box: CSSProperties = {
  padding: "5px",
  backgroundColor: "var(--box-bg-color)", // Use a CSS variable
  display: "inline-block",
  margin: "3px",
  borderRadius: "10px",
  fontSize: "13px",
};

const popAnimation: CSSProperties = {
  transform: "scale(1.05)", // Apply the pop effect here
};

export default function BlogPage() {
  const [isLightMode, setIsLightMode] = useState(true);

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  useEffect(() => {
    // Detect the system's color scheme and update the state accordingly
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsLightMode(!mediaQuery.matches);

    // Listen for changes in the system's color scheme
    const mediaQueryListener = (event) => {
      setIsLightMode(!event.matches);
    };

    mediaQuery.addEventListener("change", mediaQueryListener);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", mediaQueryListener);
    };
  }, []);

  // Define light and dark mode color values as CSS variables
  const lightModeVariables = {
    "--box-bg-color": "#8BC34A",
  };

  const darkModeVariables = {
    "--box-bg-color": "#009688",
  };

  // Combine the boxConfig with the appropriate mode variables
  const boxStyles = {
    ...box,
    ...(isLightMode ? lightModeVariables : darkModeVariables),
  };

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        So, here are some projects which I have built. Click the project to be
        redirected to the source code.
      </p>
      <div>
        <div
          style={isHovered1 ? { ...cardStyle, ...popAnimation } : cardStyle}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
          onClick={() =>
            (window.location.href =
              "https://github.com/gordon-ma98/teslaground-api.git")
          }
        >
          <div style={cardContentStyle}>
            <h2 style={titleStyle}>Supercharger API</h2>
            <hr style={{ marginBottom: "10px", marginTop: "5px" }}></hr>
            <div style={boxStyles}>
              <h5>MongoDB</h5>
            </div>
            <div style={boxStyles}>
              <h5>Express</h5>
            </div>
            <div style={boxStyles}>
              <h5>EJS</h5>
            </div>
            <div style={boxStyles}>
              <h5>Node.js</h5>
            </div>
            <div style={boxStyles}>
              <h5>Passport.js</h5>
            </div>
            <hr style={{ marginTop: "10px" }}></hr>
            <p style={descriptionStyle}>
              A dynamic <b>full-stack application</b> that maps Tesla{" "}
              <i>Superchargers</i> thoughout North America. Furthermore, MongoDB
              was utilized to set up database schemas and Passport.js was
              incorporated for secure authentication middleware.
            </p>
          </div>
          <Image src={chess} alt="chess" style={imageStyle} />
        </div>
        <div
          style={isHovered2 ? { ...cardStyle, ...popAnimation } : cardStyle}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          onClick={() =>
            (window.location.href =
              "https://github.com/gordon-ma98/car-creator")
          }
        >
          <div style={cardContentStyle}>
            <h2 style={titleStyle}>Car Creator</h2>
            <hr style={{ marginBottom: "10px", marginTop: "5px" }}></hr>
            <div style={boxStyles}>
              <h5>JavaScript</h5>
            </div>
            <div style={boxStyles}>
              <h5>OpenAI</h5>
            </div>
            <div style={boxStyles}>
              <h5>Prompt Engineering</h5>
            </div>
            <hr style={{ marginTop: "10px" }}></hr>
            <p style={descriptionStyle}>
              A novel app which enables uses to input automotive-themed phrases
              seamlessly transmutes these textual inputs into fictional car
              designs. The app leverages <b>prompt engineering</b> techniques
              and harnesses the capabilities of the OpenAI Library.
            </p>
          </div>
          <Image src={carCreator} alt="carCreator" style={imageStyle} />
        </div>
        <a href="mailto:g27ma@Uwaterloo.ca?subject=Requesting%20Source%20Code%20for%20AI%20Chess%20Bot" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div
          style={isHovered3 ? { ...cardStyle, ...popAnimation } : cardStyle}
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <div style={cardContentStyle}>
            <h2 style={titleStyle}>AI Chess Bot</h2>
            <hr style={{ marginBottom: "10px", marginTop: "5px" }}></hr>
            <div style={boxStyles}>
              <h5>C++</h5>
            </div>
            <div style={boxStyles}>
              <h5>X Window System</h5>
            </div>
            <hr style={{ marginTop: "10px" }}></hr>
            <p style={descriptionStyle}>
              An automated chess engine which has been designed using software
              design patterns, featuring a GUI in the X Window System. It allows
              users to play chess against{" "}
              <b>four different levels of artificial intelligence</b>, ranging
              from random legal moves at Level 1 to a more strategic approach at
              Level 4, considering capturing moves, checks, and avoidance of
              capture in its decision-making process.
            </p>
          </div>
          <Image src={chess} alt="chess" style={imageStyle} />
        </div>
        </a>
        <div
          style={isHovered4 ? { ...cardStyle, ...popAnimation } : cardStyle}
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
          onClick={() =>
            (window.location.href =
              "https://github.com/gordon-ma98/sudoku-solver.git")
          }
        >
          <div style={cardContentStyle}>
            <h2 style={titleStyle}>Sudoku Solver</h2>
            <hr style={{ marginBottom: "10px", marginTop: "5px" }}></hr>
            <div style={boxStyles}>
              <h5>Python</h5>
            </div>
            <div style={boxStyles}>
              <h5>PyGame</h5>
            </div>
            <hr style={{ marginTop: "10px" }}></hr>
            <p style={descriptionStyle}>
              An interactive Sudoku game board interface that allows users to
              input numbers and receive real-time feedback. In addition, the
              interface features an efficient solver based on{" "}
              <b>dynamic programming principles</b> and the "backtracking
              algorithm".
            </p>
          </div>
          <Image src={sudoku} alt="sudoku" style={imageStyle} />
        </div>
      </div>
      <Footer />
    </section>
  );
}
