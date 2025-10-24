import React from "react";
import p4 from "./assets/bb.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      {/* Left Side - Image */}
      <div className="about-left">
        <img src={p4} alt="Profile" className="about-img" />
      </div>

      {/* Right Side - Text */}
      <div className="about-right">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Welcome to <strong className="para">SK Mughal Suiting😃</strong>, where elegance meets craftsmanship. 
          I’m <strong className="para">Shah-Zaib</strong>, the proud founder and creative force behind this brand.
        </p>
        <p className="about-text">
          What started as a simple passion for fine tailoring has grown into a full-fledged journey of style, sophistication, and self-expression. At AutoDrive Suits, we don’t just design pant coats — we design confidence. 
          Every stitch, cut, and detail reflects our dedication to perfection and individuality.
        </p>
        <p className="about-text">
          Our mission is to provide <strong className="para"> modern gentlemen </strong> with premium-quality suiting that defines who they are — bold, refined, and ambitious. From boardrooms to celebrations, every piece is crafted using 
          high-grade fabrics, contemporary patterns, and a timeless aesthetic that bridges tradition with trend.
        </p>
        <p className="about-text">
          With years of experience, a keen eye for detail, and an unwavering commitment to quality, 
          I aim to make AutoDrive Suits a name synonymous with excellence in formal fashion. 
          Because for us,<strong className="para"> a great suit doesn’t just fit your body — it fits your story.</strong>
        </p>

        <button className="about-btn">Contact Me</button>
      </div>
    </div>
  );
}
