// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { remove_cart } from "../Redux/cartSlice"; // Import action to remove item
// import "./Header.css";

// function Header() {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const items = [
//     "Candles",
//     "Scented candles",
//     "Aromatherapy candles",
//     "Container",
//     "Pillar Candles",
//   ];
//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     if (value === "") {
//       setSuggestions([]);
//     } else {
//       const filtered = items.filter((item) =>
//         item.toLowerCase().includes(value.toLowerCase())
//       );
//       setSuggestions(filtered);
//     }
//   };
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.userCart.cartItems);

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleRemove = (id) => {
//     dispatch(remove_cart(id)); // Remove item from Redux store

//     if (cartItems.length === 1) {
//       setIsDropdownOpen(false); // Close dropdown when last item is removed
//     }
//   };

//   const announcements = [
//     "Special Offer: Get 20% Off!",
//     "Free Shipping on Orders Above ₹999!",
//     "New Arrivals Now Available!",
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % announcements.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* Announcement Bar */}
//       <div className="announcement-bar">
//         <p>{announcements[index]}</p>
//       </div>

//       {/* Sticky Header */}
//       <div className="fixed-header">
//         <div className="middle-header">
//           <div className="logo">
//             <Link to="/">
//               <img src="/images/logo-orah.png" className="logo" alt="Logo" />
//             </Link>
//           </div>
//             <nav>
//               <ul>
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/collabaration">Collabrations</Link>
//                 </li>
//                 <li>
//                   <Link to="/shopnow">Shop</Link>
//                 </li>
//                 <li>
//                   <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                   <Link to="/orah">Orah By You</Link>
//                 </li>
//               </ul>
//             </nav>

//           {/** For serach Bar with Suggestions */}
//           {/* <div className="search-bar">
//             <input
//               type="text"
//               value={query}
//               onChange={handleSearch}
//               placeholder="search.."
//             />
//             <button type="submit">
//               <i className="bi bi-search"></i>
//             </button>
//           </div>
//           //only check
//           {suggestions.length > 0 && (
//             <ul className="position-absolute top-50  start-50 translate-middle-x d-flex flex-column w-50 bg-white border border-secondary rounded p-2 list-unstyled shadow">
//               {suggestions.map((item, index) => (
//                 <li
//                   key={index}
//                   className="p-2 border-bottom text-dark cursor-pointer"
//                   onClick={() => {
//                     setQuery(item);
//                     setSuggestions([]);
//                   }}
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           )} */}

//           <div className="user-cart">
//             <Link to="/userpage" className="user-icon">
//               <i className="bi bi-person"></i>
//             </Link>

//             <div className={`cart-dropdown ${isDropdownOpen ? "open" : ""}`}>
//               <button
//                 onClick={toggleDropdown}
//                 className="cart-icon position-relative"
//               >
//                 <i className="bi bi-cart"></i>
//                 {cartItems.length > 0 && (
//                   <span className="position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-light rounded-circle">
//                     {cartItems.length}
//                   </span>
//                 )}
//               </button>

//               {/* Dropdown List */}
//               {isDropdownOpen && (
//                 <div className="dropdown-menu">
//                   {cartItems.length > 0 ? (
//                     <ul>
//                       {cartItems.map((item) => (
//                         <li key={item.id} className="cart-item">
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="cart-item-image mx-2"
//                           />
//                           <div className="cart-item-details d-flex gap-2">
//                             <p>{item.title}</p>
//                             <p>₹{item.price}</p>
//                           </div>
//                           <button
//                             onClick={() => handleRemove(item.id)}
//                             className="remove-btn"
//                           >
//                             ❌
//                           </button>
//                         </li>
//                       ))}
//                       <button
//                         className="go-to-cart-btn"
//                         onClick={() => navigate("/cartpage")}
//                       >
//                         Go to Cart
//                       </button>
//                     </ul>
//                   ) : (
//                     <p className="empty-cart">Your cart is empty.</p>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove_cart } from "../Redux/cartSlice";
import "./Header.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

function Header() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const items = [
    "Candles",
    "Scented candles",
    "Aromatherapy candles",
    "Container",
    "Pillar Candles",
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(
      value
        ? items.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.userCart.cartItems);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRemove = (id) => {
    dispatch(remove_cart(id));
    if (cartItems.length === 1) {
      setIsDropdownOpen(false);
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

      {/* Header */}
      <div className="fixed-header">
        <div className="middle-header d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src="/images/logo-orah.png" className="logo" alt="Logo" />
            </Link>
          </div>

          {/* Hamburger Button (Right-Aligned for Small Screens) */}
          <Button
            variant="outline-dark"
            className="d-lg-none menu-btn me-3"
            onClick={() => setShowOffcanvas(true)}
          >
            ☰
          </Button>

          {/* Navigation (Visible on Large Screens) */}
          <nav className="d-none d-lg-block">
            <ul className="d-flex gap-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collabaration">Collaborations</Link>
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

          {/* User & Cart Icons (Hidden on Small Screens) */}
          <div className="user-cart d-none d-lg-flex">
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
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </button>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {cartItems.length > 0 ? (
                    <ul>
                      {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-item-image"
                          />
                          <div className="cart-item-details">
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
      </div>

      {/* Offcanvas Sidebar (For Mobile View) */}

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="start"
        className="custom-offcanvas "
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Orah</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="d-flex flex-column sidebar">
            <li>
              <Link to="/" onClick={() => setShowOffcanvas(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/collabaration" onClick={() => setShowOffcanvas(false)}>
                Collaborations
              </Link>
            </li>
            <li>
              <Link to="/shopnow" onClick={() => setShowOffcanvas(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setShowOffcanvas(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/orah" onClick={() => setShowOffcanvas(false)}>
                Orah By You
              </Link>
            </li>

            <li>
              <Link to="/userpage" className="user-icon">
                <i className="bi bi-person"></i> Profile
              </Link>
            </li>
            <li>
              <Link to="/cartpage" className="cart-icon">
                <i className="bi bi-cart"></i> Cart {/*({cartItems.length}) */}
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
