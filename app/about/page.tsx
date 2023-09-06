import React from "react";
import Image from "next/image";
import coke from "../images/coke.jpeg";
import rcm from "../images/rcm.jpeg";
import tottenham from "../images/tottenham.jpeg";
import meal from "../images/meal.jpeg"
import { CSSProperties } from 'react';

const cardContainerStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  maxWidth: "95%",
  marginBottom: "30px",
};

const cardStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid #ddd",
  borderRadius: "4px",
  overflow: "hidden",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  width: "300px",
  margin: "5px",
};

const imageStyle: CSSProperties = {
  maxWidth: "100%",
  height: "390px",
  padding: "10px",
  objectFit: "cover",
  border: "1px solid #ccc",
};

const titleStyle = {
  fontSize: "1.25rem",
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

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">More About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Since you've taken that extra click, I'd like to reward you by sharing
        some of my unique interests.
      </p>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <div style={cardContentStyle}>
            <h2 style={titleStyle}>Coca-Cola</h2>
            <p style={descriptionStyle}>
              Yes. I can taste the difference between Coca-Cola and Pepsi. And
              yes, Coca-Cola is superior in every way. Here's a snapshot of my
              Coca-Cola bottle collection.
            </p>
          </div>
          <Image src={coke} alt="coke" style={imageStyle} />
        </div>
        <div style={cardStyle}>
          <div style={cardContentStyle}>
            <h2 style={titleStyle}>Violin</h2>
            <p style={descriptionStyle}>
              According to the <i>"laws of music"</i> (which don't exist), to
              complete my violin RCM degree, I had to also pass Grade 6 piano.
              Somehow, with my butter fingers, I managed...
            </p>
          </div>
          <Image src={rcm} alt="rcm" style={imageStyle} />
        </div>
      </div>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <div style={cardContentStyle}>
            <h2 style={titleStyle}>Tottenham Hotspur F.C.</h2>
            <p style={descriptionStyle}>
              If you haven't heard of Tottenham Hotspur F.C. (a.k.a. Spurs),
              it's that one team who has a stacked roster on paper, but can
              never win a trophy. But, I'm not giving up, they will win someday!
              (hopefully...)
            </p>
          </div>
          <Image src={tottenham} alt="tottenham" style={imageStyle} />
        </div>
        <div style={cardStyle}>
          <div style={cardContentStyle}>
            <h2 style={titleStyle}>Food</h2>
            <p style={descriptionStyle}>
              That's right. I'm a foodie. Whenever I'm travelling or away from
              home, I always love to try new food from different cultures. Here's
              a picture of my lobster and steak meal at the <i>360 Resturant</i> at the
              top of the <i>CN Tower</i>.
            </p>
          </div>
          <Image src={meal} alt="meal" style={imageStyle} />
        </div>
      </div>
    </section>
  );
}
