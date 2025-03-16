import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Orah.css'

function OrahByYou() {
  const whatsappMessage = "Hello, I want to customize a candle!";
  const whatsappNumber = "9817175996";

  return (
    <>
      <Header />

      <div className="customization-page">
        {/* Slideshow Banner */}
        <div className="carousel-container">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
          >
            <div className="slide">
              <img src="/images/banner1.png" alt="Custom Candle 1" />
            </div>
            <div className="slide">
              <img
                src="/images/banner.png"
                height="500px"
                width="757px"
                alt="Custom Candle 2"
              />
            </div>
          </Carousel>

          <div className="banner-message">
            <h2>We Love to Customize for You</h2>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Customize Now
            </a>
          </div>
        </div>

        {/* Static Images Section */}
        <div className="static-images">
          <h2>Customize Your Style</h2>
          <div className="image-gallery">
            <img src="/images/img1.jpeg" alt="Style 1" />
            <img src="/images/img2.jpeg" alt="Style 2" />
            <img src="/images/img2.jpeg" alt="Style 3" />
            <img src="/images/img1.jpeg" alt="Style 1" />
            <img src="/images/img2.jpeg" alt="Style 2" />
            <img src="/images/img2.jpeg" alt="Style 3" />
            <img src="/images/img1.jpeg" alt="Style 1" />
            <img src="/images/img2.jpeg" alt="Style 3" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OrahByYou;
