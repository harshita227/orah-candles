import React from "react";
import { useNavigate } from "react-router-dom";
function Cartpage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Cart page</h1>
      <button onClick={() => navigate("/")}>Go To Home</button>
    </div>
  );
}

export default Cartpage;
