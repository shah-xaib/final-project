import React, { useState, useEffect } from "react";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import p1 from "./assets/s1.jfif";
import p2 from "./assets/s2.jfif";
import p3 from "./assets/s3.jfif";

import "./Home.css";

export default function Home() {
  const images = [p1, p2, p3];
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      
      <div className="carousel slide">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === current ? "active" : ""}`}
            >
              <img src={img} className="carousel-img" alt={`Slide ${index}`} />
            </div>
          ))}
        </div>

        <button className="carousel-control prev" onClick={handlePrev}>
          ❮
        </button>
        <button className="carousel-control next" onClick={handleNext}>
          ❯
        </button>
      </div>

      
      <div className="services-grid">
        <div className="service-card">
          <CheckroomIcon className="service-icon" />
          <h3>Classic Suits</h3>
          <p>Tailored elegance for the modern gentleman, perfect for every occasion.</p>
        </div>

        <div className="service-card">
          <CheckroomIcon className="service-icon" />
          <h3>Modern Slim Fit</h3>
          <p>Sharp, sleek, and refined — redefining men’s suiting with bold precision.</p>
        </div>

        <div className="service-card">
          <CheckroomIcon className="service-icon" />
          <h3>Luxury 3-Piece</h3>
          <p>Experience timeless sophistication with our handcrafted 3-piece suits.</p>
        </div>

        <div className="service-card">
          <CheckroomIcon className="service-icon" />
          <h3>Custom Tailored</h3>
          <p>Each suit crafted to perfection — because every detail defines your style.</p>
        </div>
      </div>

    
      <div className="services-footer">
        <button className="service-btn">Let’s Work Together 🚀</button>
      </div>
    </>
  );
}
