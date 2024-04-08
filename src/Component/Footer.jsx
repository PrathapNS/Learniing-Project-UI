import React from "react";
import "../App.css";
import { Button } from "@mui/material";
import Logo from "./Asset/Ford-Logo.png";

function Footer() {
  return (
    <div>
      <div>
        <div
          style={{
            height: "50px",
            color: "#2861a4",
            fontSize: "16px",
            letterSpacing: "1px",
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
            cursor: "pointer",
          }}
        >
          DISCLOSURES
        </div>
        <div
          style={{
            color: "#4d4d4d",
            backgroundColor: "#f7f7f7",
            lineHeight: "20px",
            fontWeight: "500",
            height: "120px",
            fontSize: "12px",
            paddingRight: "250px",
            paddingLeft: "250px",
            letterSpacing: "1px",
            paddingTop: "30px",
          }}
        >
          *Offer valid for one-time only ecommerce purchase of accessories from
          &nbsp;
          <a href="" style={{ color: "#4d4d4d" }}>
            accessories.ford.com
          </a>
          &nbsp; or &nbsp;
          <a href="" style={{ color: "#4d4d4d" }}>
            accessories.lincoln.com
          </a>
          . Limited time offer. Excludes shipping and installation. Must be a
          registered customer on &nbsp;
          <a href="" style={{ color: "#4d4d4d" }}>
            accessories.ford.com
          </a>
          &nbsp; or &nbsp;
          <a href="" style={{ color: "#4d4d4d" }}>
            accessories.lincoln.com
          </a>
          &nbsp; at time of purchase to receive discount. Maximum amount of
          discount is $150. Promo code must be applied at checkout to receive
          discount. Cannot be combined with other current offers. &nbsp;
          <a href="" style={{ color: "#4d4d4d" }}>
            Accessories.ford.com
          </a>
          &nbsp; and &nbsp;
          <a href="" style={{ color: "#4d4d4d" }}>
            Accessories.lincoln.com
          </a>
          &nbsp; reserve the right to change program details at any time without
          obligations. Not valid in Arizona, Oklahoma, or Vermont.
        </div>
        <div className="Footer-Main">
          <div style={{ paddingTop: "50px" }}>
            <label style={{ fontSize: "18px" }}>ACCESSORIES</label>
            <div
              className="parent-div"
              style={{ color: "rgb(140, 140, 140)", fontSize: "16px" }}
            >
              <div style={{ paddingTop: "20px", cursor: "pointer" }}>
                Exterior
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Electronics
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Interior
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Wheels
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Bed Products
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Lincoln Accessories
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                View Accessories on Your Vehicle
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "50px", paddingLeft: "50px" }}>
            <label style={{ fontSize: "18px" }}>PERFORMANCE</label>
            <div
              className="parent-div"
              style={{ color: "rgb(140, 140, 140)", fontSize: "16px" }}
            >
              <div style={{ paddingTop: "20px", cursor: "pointer" }}>
                Appearance
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Chassis
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Electrical
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>Body</div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Driveline
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "50px", paddingLeft: "50px" }}>
            <label style={{ fontSize: "18px" }}>MY PROFILE</label>
            <div
              className="parent-div"
              style={{ color: "rgb(140, 140, 140)", fontSize: "16px" }}
            >
              <div style={{ paddingTop: "20px", cursor: "pointer" }}>LOGIN</div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Create an Account
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Account Details
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                My Orders & Returns
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                My Garage
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "50px", paddingLeft: "50px" }}>
            <label style={{ fontSize: "18px" }}>RESOURCES</label>
            <div
              className="parent-div"
              style={{ color: "rgb(140, 140, 140)", fontSize: "16px" }}
            >
              <div style={{ paddingTop: "20px", cursor: "pointer" }}>
                Frequently Asked Questions
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Contact Us
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Shipping & Delivery
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Return Policy
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Make a Return
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Terms & Conditions
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Warranty Information
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Feedback
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "50px", paddingLeft: "50px" }}>
            <label style={{ fontSize: "18px" }}>RELATED LINKS</label>
            <div
              className="parent-div"
              style={{ color: "rgb(140, 140, 140)", fontSize: "16px" }}
            >
              <div style={{ paddingTop: "20px", cursor: "pointer" }}>
                Frequently Asked Questions
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Ford Vehicles
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Lincoln Vehicles
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Contact Ford
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Racing
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                FordParts.com
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Ford Charge Stations
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Ford Collision
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Power Stroke Diesel
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Tire Finder
              </div>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                Vintage Parts
              </div>
            </div>
          </div>
        </div>
        <div className="footer-sub">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingLeft: "250px",
              paddingRight: "250px",
              paddingTop: "40px",
            }}
          >
            <div>
              <div>© 2024 Ford Motor </div>
              <div> Company</div>
            </div>
            <div style={{ cursor: "pointer" }}>Site Map</div>
            <div style={{ cursor: "pointer" }}>Contact Us</div>
            <div style={{ cursor: "pointer" }}>Terms & Conditions</div>
            <div style={{ cursor: "pointer" }}>Privacy Notice</div>
            <div>
              <Button
                style={{
                  color: "#68b631",
                  border: "1px solid #68b631",
                  fontSize: "9px",
                  width: "130px",
                }}
                variant="outlined"
              >
                Cookies Settings
              </Button>
            </div>
            <div style={{ cursor: "pointer" }}>Your Privacy Choices</div>
            <div style={{ cursor: "pointer" }}>Accessibility</div>

            <div>
              <img
                style={{
                  width: "70px",
                  height: "43px",
                  display: "flex",
                  alignItems: "center",
                }}
                src={Logo}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                STORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
