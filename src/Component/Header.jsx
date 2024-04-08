import React from "react";
import "../App.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Logo from "./Asset/Ford-Logo.png";
import Horse from "./Asset/Bronco horse.jpeg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Navigate, useNavigate } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RoofingIcon from "@mui/icons-material/Roofing";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <header>
          <div className="header-top">
            <div className="header-eyebrow">
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Are you in Arizona, Oklahoma or Vermont?
                <ArrowForwardIosIcon
                  style={{
                    fontSize: "13px",
                    marginLeft: "5px",
                  }}
                />
              </div>

              <div style={{ marginLeft: "500px", cursor: "pointer" }}>
                WISHLIST
              </div>
              <div style={{ marginLeft: "50px", cursor: "pointer" }}>
                CONTACT
              </div>
              <div style={{ marginLeft: "50px", cursor: "pointer" }}>
                RETURN POLICY
              </div>
              <div style={{ marginLeft: "50px", cursor: "pointer" }}>FAQS</div>
            </div>
          </div>
          <div>
            <div className="header-main">
              <div className="header-main-left">
                <div>
                  <img style={{ width: "90px", height: "53px" }} src={Logo} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "13px",
                    }}
                  >
                    STORE
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    color: "#2861a4",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "21px",
                      height: "26px",
                      marginLeft: "30px",
                    }}
                    src={Horse}
                  />
                  <div style={{ marginLeft: "5px" }}> Bronco</div>
                  <div style={{ marginLeft: "18px" }}> Maverick</div>
                  <div
                    style={{
                      marginLeft: "15px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Accessories <KeyboardArrowDownIcon />
                  </div>
                  <div
                    style={{
                      marginLeft: "18px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Performace Parts <KeyboardArrowDownIcon />
                  </div>
                  <div style={{ marginLeft: "18px" }}> The Road Ahead</div>
                </div>
              </div>
              <div className="header-main-right"></div>
              <div>
                <OutlinedInput
                  style={{
                    width: "300px",
                    height: "40px",
                    borderRadius: "7px",
                  }}
                  placeholder="Search"
                  endAdornment={
                    <IconButton>
                      <SearchIcon style={{ fontSize: "30px" }} />
                    </IconButton>
                  }
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#102b4e",
                  cursor: "pointer",
                }}
              >
                <div style={{ marginLeft: "18px" }}>
                  <PersonOutlineIcon onClick={() => navigate("/LoginPage")} />
                </div>
                <div
                  style={{ marginLeft: "5px" }}
                  onClick={() => navigate("/LoginPage")}
                >
                  My Account
                </div>
                <div style={{ marginLeft: "18px" }}>
                  <RoofingIcon onClick={() => navigate("/LoginPage")} />
                </div>
                <div
                  style={{ marginLeft: "5px" }}
                  onClick={() => navigate("/LoginPage")}
                >
                  My Garage
                </div>
                <ShoppingCartCheckoutIcon
                  style={{ marginLeft: "20px" }}
                  onClick={() => navigate("/Cart")}
                />
              </div>
            </div>
          </div>
        </header>
      </div>
      <div>
        <div className="Top-banner">
          <div>
            <div
              style={{
                display: "flex",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                margin: "15px",
              }}
            >
              15% OFF ACCESSORIES PURCHASES UP TO $1,000.
              <div>*</div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "12px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
              }}
            >
              FOR REGISTERED CUSTOMERS. USE CODE
              <div style={{ color: "#3caeee" }}> &nbsp; REDEEM124</div>
              <div>. ENDS 2/29/24.</div>
            </div>
            <div
              style={{
                color: "#3caeee",
                fontWeight: "bold",
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
                cursor: "pointer",
              }}
            >
              OFFER DETAILS
            </div>
            <div
              style={{
                display: "flex",
                color: "yellow",
                marginTop: "15px",
                fontSize: "16px",
                letterSpacing: "1px",
              }}
            >
              <a style={{ color: "yellow" }} href="">
                Register or Login
              </a>
              <div>&nbsp; to redeem FordPass Rewards Points or Discounts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
