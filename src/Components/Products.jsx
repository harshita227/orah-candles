// function Products() {
//   return (
//     <>
//       <section className="container pro">
//         <h1>Product Page</h1>
//       </section>
//     </>
//   );
// }

// export default Products;import React, { useState } from "react";
import { useState } from "react";
const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const productList = [
    {
      image: "/images/img1.jpeg",
      title: "Coffee Candle",
      price: "34.00",
    },
    {
      image: "/images/img2.jpeg",
      title: "Vanilla",
      price: "34.00",
    },
    {
      image: "/images/img1.jpeg",
      title: "Coffee Candle",
      price: "34.00",
    },
    {
      image: "/images/img2.jpeg",
      title: "Vanilla",
      price: "34.00",
    },
  ];

  return (
    <section className="container pro d-flex flex-column">
      <h2 className="text-danger">Featured Collection</h2>

      <div className="product-list d-flex gap-3">
        {productList.map((product, index) => (
          <div
            key={index}
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
              <button className="buy-now">Buy Now</button>
              <button className="add-to-cart ">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
