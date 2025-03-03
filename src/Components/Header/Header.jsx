import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const navigate = useNavigate();
  const sendBtn = () => {
    navigate("/cartpage");
  };
  const cartItems = useSelector((state) => state.userCart.cartItems); // Now using cartItems array
  console.log(cartItems);
  const announcements = [
    "Special Offer: Get 20% Off!",
    "Free Shipping on Orders Above ₹999!",
    "New Arrivals Now Available!",
  ];

  const [index, setIndex] = useState(0);

  // Auto-rotate announcements every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Function to show previous announcement
  // const showPrevious = () => {
  //   setIndex((prevIndex) =>
  //     prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
  //   );
  // };

  // // Function to show next announcement
  // const showNext = () => {
  //   setIndex((prevIndex) => (prevIndex + 1) % announcements.length);
  // };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar ">
        {/* <button onClick={showPrevious}>
          <i className="bi bi-caret-left"></i>
        </button> */}
        <p>{announcements[index]}</p>
        {/* <button onClick={showNext}>
          <i className="bi bi-caret-right"></i>
        </button>
      */}
      </div>
      {/* Sticky Header */}
      <div className="fixed-header">
        <div className="middle-header">
          <div className="logo">
            <a href="#">
              <img src="/images/logo-orah.png" className="logo" />
            </a>
          </div>
          <div className="user-cart">
            <Link to="/userpage" className="user-icon ">
              <i className="bi bi-person "></i>
            </Link>
            {/* <Link to="/about">Go to About</Link> */}
            <button onClick={sendBtn} className="cart-icon position-relative">
              <i className="bi bi-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-light rounded-circle">
                {cartItems.length}
              </span>
            </button>
          </div>
        </div>

        <nav className="header-bottom">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Collaborations</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="#">Orah By You</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
