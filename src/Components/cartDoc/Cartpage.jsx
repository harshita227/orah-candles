import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove_cart, update_cart } from "../Redux/cartSlice";

function Cartpage() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.userCart.cartItems); // Now using cartItems array
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart Page</h1>

      {cartItems.length === 0 ? (
        <h1>Your Cart Is Empty. Shop Now!!</h1>
      ) : (
        <>
          <h3 className="mt-4 text-danger">Cart Items:</h3>
          <div className="card p-3 shadow-sm">
            <ul className="list-unstyled">
              {cartItems.map((item, idx) => (
                <li key={idx} className="d-flex align-items-center mb-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="50"
                    className="me-3 rounded"
                  />

                  <select
                    className="form-select ms-3"
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(
                        update_cart({
                          id: item.id,
                          quantity: Number(e.target.value),
                        })
                      )
                    }
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}{" "}
                  </select>
                  <span>
                    {item.title} - <strong>${item.price}</strong>
                  </span>
                  <button
                    onClick={() => {
                      dispatch(remove_cart(item.id));
                    }}
                  >
                    trash
                  </button>

                  <span>
                    <strong>Total: ${item.price * item.quantity}</strong>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-3 d-flex justify-content-between align-items-center">
              <span>Total</span>
              <span className="fs-4 fw-bold">${totalAmount}</span>
            </div>

            <button
              className="btn btn-primary w-100 mt-3"
              onClick={() => {
                navigate("/cartpayment", { state: { totalAmount } }); //navigate ke sath hi payment bhej di simply
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}

      <button onClick={() => navigate("/")}>Go To Home</button>
    </div>
  );
}

export default Cartpage;
