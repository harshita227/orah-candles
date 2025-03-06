// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// function Header() {
//   const navigate = useNavigate();
//   const sendBtn = () => {
//     navigate("/cartpage");
//   };
//   const cartItems = useSelector((state) => state.userCart.cartItems); // Now using cartItems array
//   console.log(cartItems);
//   const announcements = [
//     "Special Offer: Get 20% Off!",
//     "Free Shipping on Orders Above ₹999!",
//     "New Arrivals Now Available!",
//   ];

//   const [index, setIndex] = useState(0);

//   // Auto-rotate announcements every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % announcements.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Function to show previous announcement
//   // const showPrevious = () => {
//   //   setIndex((prevIndex) =>
//   //     prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
//   //   );
//   // };

//   // // Function to show next announcement
//   // const showNext = () => {
//   //   setIndex((prevIndex) => (prevIndex + 1) % announcements.length);
//   // };

//   return (
//     <>
//       {/* Announcement Bar */}
//       <div className="announcement-bar ">
//         {/* <button onClick={showPrevious}>
//           <i className="bi bi-caret-left"></i>
//         </button> */}
//         <p>{announcements[index]}</p>
//         {/* <button onClick={showNext}>
//           <i className="bi bi-caret-right"></i>
//         </button>
//       */}
//       </div>
//       {/* Sticky Header */}
//       <div className="fixed-header">
//         <div className="middle-header">
//           <div className="logo">
//             <a href="#">
//               <img src="/images/logo-orah.png" className="logo" />
//             </a>
//           </div>
//           <div className="user-cart">
//             <Link to="/userpage" className="user-icon ">
//               <i className="bi bi-person "></i>
//             </Link>
//             {/* <Link to="/about">Go to About</Link> */}
//             <button onClick={sendBtn} className="cart-icon position-relative">
//               <i className="bi bi-cart"></i>
//               <span className="position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-light rounded-circle">
//                 {cartItems.length}
//               </span>
//             </button>
//           </div>
//         </div>

//         <nav className="header-bottom">
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <a href="#">Collaborations</a>
//             </li>
//             <li>
//               <a href="#">Shop</a>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <a href="#">Orah By You</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default Header;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove_cart } from "../Redux/cartSlice"; // Import action to remove item

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.userCart.cartItems);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRemove = (id) => {
    dispatch(remove_cart(id)); // Remove item from Redux store

    if (cartItems.length === 1) {
      setIsDropdownOpen(false); // Close dropdown when last item is removed
    }
  };

  const announcements = [
    "Special Offer: Get 20% Off!",
    "Free Shipping on Orders Above ₹999!",
    "New Arrivals Now Available!",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <p>{announcements[index]}</p>
      </div>

      {/* Sticky Header */}
      <div className="fixed-header">
        <div className="middle-header">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo-orah.png" className="logo" alt="Logo" />
            </Link>
          </div>
          <div className="user-cart">
            <Link to="/userpage" className="user-icon">
              <i className="bi bi-person"></i>
            </Link>

            <div className={`cart-dropdown ${isDropdownOpen ? "open" : ""}`}>
              <button
                onClick={toggleDropdown}
                className="cart-icon position-relative"
              >
                <i className="bi bi-cart"></i>
                {cartItems.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-light rounded-circle">
                    {cartItems.length}
                  </span>
                )}
              </button>

              {/* Dropdown List */}
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {cartItems.length > 0 ? (
                    <ul>
                      {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-item-image mx-2"
                          />
                          <div className="cart-item-details d-flex gap-2">
                            <p>{item.title}</p>
                            <p>₹{item.price}</p>
                          </div>
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="remove-btn"
                          >
                            ❌
                          </button>
                        </li>
                      ))}
                      <button
                        className="go-to-cart-btn"
                        onClick={() => navigate("/cartpage")}
                      >
                        Go to Cart
                      </button>
                    </ul>
                  ) : (
                    <p className="empty-cart">Your cart is empty.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <nav className="header-bottom">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collabaration">Collabrations</Link>
            </li>
            <li>
              <Link to="/shopnow">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/orah">Orah By You</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
