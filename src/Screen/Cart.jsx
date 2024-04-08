import React from "react";
import "../App.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <body className="cart-body">
          <div
            style={{
              fontSize: "34px",
              letterSpacing: "3px",
              fontWeight: "300",
            }}
          >
            CART
          </div>
          <div
            style={{
              fontWeight: "400",
              lineHeight: "1.5",
              letterSpacing: "1px",
              marginTop: "50px",
            }}
          >
            Your cart is currently empty.
          </div>
          <Button
            style={{
              backgroundColor: "#102b4e",
              width: "200px",
              color: "white",
              borderRadius: "30px",
              height: "40px",
              fontWeight: "bold",
              fontSize: "15px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            onClick={() => navigate("/")}
          >
            Return To Home
          </Button>
        </body>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
