import { useState, useEffect } from "react";

function Header() {
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
            <a href="#" className="user-icon">
              <i className="bi bi-person"></i>
            </a>
            <a href="#" className="cart-icon">
              <i className="bi bi-cart"></i>{" "}
            </a>
          </div>
        </div>

        <nav className="header-bottom">
          <ul>
            <li>
              <a href="#">Collaborations</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Home Decor</a>
            </li>
            <li>
              <a href="#">Giftings</a>
            </li>
            <li>
              <a href="#">About</a>
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
