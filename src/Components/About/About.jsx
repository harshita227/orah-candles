import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <section className="container py-5 text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bold">About Orah Candles</h2>
            <p className="text-muted fs-5">
              Illuminating Spaces with Nature’s Radiance
            </p>
            <p className="text-secondary">
              At <span className="fw-semibold">Orah Candles</span>, we believe
              that every flame tells a story. Our handcrafted candles bring
              warmth, elegance, and serenity into your home. Inspired by
              nature’s beauty, we use premium, eco-friendly ingredients to
              ensure a clean and long-lasting burn.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm p-3">
              <h3 className="h5 fw-semibold">Handcrafted with Love</h3>
              <p className="text-secondary">
                Every candle is made in small batches with attention to detail,
                ensuring the highest quality.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm p-3">
              <h3 className="h5 fw-semibold">Eco-Friendly Ingredients</h3>
              <p className="text-secondary">
                We use natural wax and toxin-free fragrances for a cleaner,
                healthier burn.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm p-3">
              <h3 className="h5 fw-semibold">Signature Scents</h3>
              <p className="text-secondary">
                Thoughtfully crafted fragrances to evoke emotions and create
                unforgettable memories.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm p-3">
              <h3 className="h5 fw-semibold">Elegant Aesthetic</h3>
              <p className="text-secondary">
                Our stylish, minimalist designs complement any decor—perfect for
                gifting and personal use.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p className="fs-5 text-secondary">
            Experience the magic of Orah Candles and let us illuminate your
            space.
          </p>
          <Link
            to="/shopnow"
            className="btn btn-warning text-white fw-semibold px-4 py-2"
          >
            Explore Our Collection
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
