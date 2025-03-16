import React, { useState, useRef } from "react";

const galleryItems = [
  { type: "image", src: "/images/img1.jpeg" },
  { type: "image", src: "/images/img2.jpeg" },
  { type: "video", src: "/images/video1.mp4" },
  { type: "video", src: "/images/video2.mp4" },
  { type: "video", src: "/images/video3.mp4" },
  { type: "video", src: "/images/video4.mp4" },
];

const GetInsp = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="gallery-container">
      <h1>Get Inspired By Orah</h1>
      <div className="carousel-wrapper my-5">
        <button className="carousel-btn left" onClick={scrollLeft}>
          ❮
        </button>

        <div className="gallery" ref={carouselRef}>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              onMouseEnter={() => {
                setHoveredIndex(index);
                const video = document.getElementById(`video-${index}`);
                if (video) video.play();
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                const video = document.getElementById(`video-${index}`);
                if (video) video.pause();
              }}
            >
              {item.type === "image" ? (
                <img src={item.src} alt="Gallery item" />
              ) : (
                <video
                  id={`video-${index}`}
                  src={item.src}
                  muted
                  loop
                  playsInline
                  className="video-item"
                />
              )}

              {hoveredIndex === index && item.type === "image" && (
                <div className="overlay">
                  <span>
                    <a href="#" aria-label="Instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </span>

                  <button className="buy-now">Buy Now</button>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="carousel-btn right" onClick={scrollRight}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default GetInsp;
