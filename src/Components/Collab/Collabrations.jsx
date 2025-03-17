import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./Collab.css";
const Collaborations = () => {
  const influencers = [
    {
      name: "Naina",
      location: "Pune",
      video: "/videos/nainamam.mp4",
      description:
        "Model and actress based in Pune, known for her work in fashion and lifestyle.",
      instagram: "https://www.instagram.com/p/DFKQQyxI7LV/",
    },
    {
      name: "Kirti Wadhwa",
      location: "Hisar",
      video: "/videos/kirtimam.mp4",
      description:
        "Lifestyle and food vlogger from Hisar, sharing daily life and culinary adventures.",
      instagram: "https://www.instagram.com/p/DGFfIlXyeEY/",
    },
  ];

  return (
    <div>
      {/* <Header/> */}
      {/* 📌 Breadcrumb Navigation */}
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Collaborations
            </li>
          </ol>
        </div>
      </nav>

      <section className="container py-5">
        <h1 className="text-center mb-5">Our Collaborations</h1>
        {influencers.map((influencer, index) => (
          <div
            className={`row align-items-center justify-content-center mb-5 ${
              index % 2 === 0 ? "flex-md-row" : "flex-md-row-reverse"
            }`}
            key={index}
          >
            {/* 🎥 Video Section */}
            <div className="col-md-6">
              <div className="video-wrapper">
                <video className="video-container" autoplay muted control>
                  <source src={influencer.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* 📌 Influencer Details */}
            <div className="col-md-5">
              <div className="content-box">
                <h3 className="card-title">{influencer.name}</h3>
                <p className="card-text">{influencer.description}</p>
                <a
                  href={influencer.instagram}
                  className="btn btn-dark shadow-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Collaborations;
