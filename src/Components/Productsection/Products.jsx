import React, { useState } from "react";
import { add_cart } from "../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./Product.css";
const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.userCart.cartItems); // Now using cartItems array
  const navigate = useNavigate();
  const productList = [
    {
      id: 1,
      image: "/images/img1.jpeg",
      title: "Coffee Candle",
      price: "34.00",
    },
    { id: 2, image: "/images/img2.jpeg", title: "Vanilla", price: "34.00" },
    { id: 3, image: "/images/img1.jpeg", title: "Rose Candle", price: "29.99" },
    { id: 4, image: "/images/img2.jpeg", title: "Lavender", price: "39.99" },
  ];

  return (
    <section className="container pro d-flex flex-column">
      <h2 className="text-danger">Featured Collection</h2>
      <div className="product-list d-flex gap-2">
        {productList.map((product, index) => (
          <div
            key={product.id}
            className="product-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="image-container">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info d-flex justify-content-evenly">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
            </div>
            <div className="buttons">
              <button
                className="buy-now "
                onClick={() => {
                  navigate("/buynowpayment", {
                    state: { price: product.price, title: product.title },
                  });
                }}
              >
                Buy Now
              </button>
              <button
                onClick={() => dispatch(add_cart(product))} // Pass product object
                className="add-to-cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
