import type { Metadata } from "next";
import Image from "next/image";
import { CSSProperties } from "react";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import ViewCounter from "./view-counter";
import coke from "../images/coke.jpeg";

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
};

const imageStyle: CSSProperties = {
  minWidth: "60%",
  maxWidth: "60%",
  height: "390px",
  padding: "10px",
  objectFit: "cover",
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
  backgroundColor: "#009688",
  display: "inline-block",
  margin: "3px",
  borderRadius: "10px",
  fontSize: "13px",
};

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Read about my projects on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        So, here are some projects which I have built:
      </p>
      <div style={cardStyle}>
        <div style={cardContentStyle}>
          <h2 style={titleStyle}>Supercharger API</h2>
          <hr style={{ marginBottom: "10px", marginTop: "5px" }}></hr>
          <div style={box}>
            <h5>MongoDB</h5>
          </div>
          <div style={box}>
            <h5>Express</h5>
          </div>
          <div style={box}>
            <h5>EJS</h5>
          </div>
          <div style={box}>
            <h5>Node.js</h5>
          </div>
          <div style={box}>
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
        <Image src={coke} alt="coke" style={imageStyle} />
      </div>
      <div style={cardStyle}>
        <div style={cardContentStyle}>
          <h2 style={titleStyle}>AI Chess</h2>
          <hr style={{ marginBottom: "10px", marginTop: "5px" }}></hr>
          <div style={box}>
            <h5>C++</h5>
          </div>
          <div style={box}>
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
        <Image src={coke} alt="coke" style={imageStyle} />
      </div>
      <div style={cardStyle}>
        <div style={cardContentStyle}>
          <h2 style={titleStyle}>Sudoku Solver</h2>
          <hr style={{ marginBottom: "10px", marginTop: "5px" }}></hr>
          <div style={box}>
            <h5>Python</h5>
          </div>
          <div style={box}>
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
        <Image src={coke} alt="coke" style={imageStyle} />
      </div>
    </section>
  );
}
