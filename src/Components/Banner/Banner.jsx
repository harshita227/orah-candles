import { Navigate, useNavigate } from "react-router-dom";
import "./Banner.css";
function Banner() {
  const navigate = useNavigate();

  const redirectShop = () => {
    navigate("/shopnow");
  };
  return (
    <section className="hero-section">
      <div className="hero-content banner">
        <h1 className="text-danger">Welcome to Orah Candles</h1>
        <p className="text-danger">
          Illuminate Your Space with Nature’s Radiance
        </p>
        <button className="shop-now" onClick={redirectShop}>
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Banner;
