import React from "react";
import { useLocation } from "react-router-dom";
function Buynowpayment() {
  const location = useLocation();
  const { price, title } = location.state || {};
  return (
    <>
      <h1>
        Payment PAge through buy Now Product
        {price}
        {title}
      </h1>
    </>
  );
}

export default Buynowpayment;
