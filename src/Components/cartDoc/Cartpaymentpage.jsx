import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Cartpaymentpage() {
  const navigate = useNavigate();
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0;
  return (
    <>
      <h1>Payment Page</h1>
      <h3>Total Amount :{totalAmount}</h3>
      <div className="payment-options d-flex flex-column gap-2 mx-auto w-50">
        <h4>Select Payment Method:</h4>
        <button className="btn btn-success mt-2">Pay with PayPal</button>
        <button className="btn btn-primary mt-2">Pay with Credit Card</button>
        <button className="btn btn-dark mt-2">Pay with Google Pay</button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back to Cart
        </button>
      </div>
    </>
  );
}

export default Cartpaymentpage;
