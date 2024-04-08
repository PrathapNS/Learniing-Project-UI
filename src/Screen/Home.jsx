import "../App.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Tab, Tabs, AppBar } from "@mui/material";
import React, { useEffect, useState } from "react";
import Vehicle from "../Component/Asset/Vehicle.png";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ShippingIcon from "../Component/Asset/shipping.598923df53c6e7aba07f.svg";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Home() {
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };

  const [additionalValue, setAdditionalValue] = useState(72);
  const [points, setPoints] = useState(14400);
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
    setAdditionalValue(additionalValue + 72);
    setPoints(points + 14400);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setAdditionalValue(additionalValue - 72);
      setPoints(points - 14400);
    }
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <container className="container">
        <div>
          <Header />
          <div>
            <div
              style={{
                display: "flex",
                fontSize: "12px",
                paddingLeft: "295px",
                alignItems: "center",
                paddingBottom: "15px",
                paddingTop: "25px",
                letterSpacing: "1px",
                color: "#6e6e6e",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                ACCESSORIES
              </div>
              <ArrowForwardIosIcon
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              >
                BED/CARGO AREA
              </div>
              <ArrowForwardIosIcon
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              >
                CARGO AREA PRODUCTS
              </div>
              <ArrowForwardIosIcon
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              />
              <div
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              >
                BRONCO 2021-2023 SLIDEOUT TAILGATE
              </div>
            </div>
          </div>
          <body
            style={{
              display: "grid",
              justifyContent: "center",
              color: "#4d4d4d",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ paddingTop: "30px", display: "flex" }}>
                <div style={{ overflow: "hidden" }}>
                  <img className="img-vehicle" src={Vehicle} />
                </div>
                <div style={{ paddingLeft: "50px", width: "300px" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      letterSpacing: ".5px",
                      fontWeight: "bold",
                    }}
                  >
                    SKU: N2DZ99402K19AB
                  </div>
                  <div
                    style={{
                      fontSize: "34px",
                      letterSpacing: "3px",
                      fontWeight: "300",
                      marginTop: "5px",
                      color: "#4d4d4d",
                    }}
                  >
                    BRONCO 2021-2023 SLIDEOUT TAILGATE
                  </div>
                  <div
                    style={{
                      color: "#102b4e",
                      fontSize: "24px",
                      fontWeight: "300",
                      letterSpacing: "3px",
                      lineHeight: "34px",
                      marginTop: "20px",
                    }}
                  >
                    $1,360.00
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      letterSpacing: "1px",
                      marginTop: "15px",
                      color: "#102b4e",
                    }}
                  >
                    or redeem up to 272,000 Points
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      letterSpacing: "1.2px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      color: "#102b4e",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      VIEW FULL PRODUCT DETAILS <KeyboardArrowDownIcon />
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      letterSpacing: "1.2px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      color: "#102b4e",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      FITS THESE VEHICLES <KeyboardArrowDownIcon />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#4d4d4d",
                      letterSpacing: ".5px",
                    }}
                  >
                    <Checkbox {...label} />
                    <div>
                      <div style={{ fontWeight: "700" }}>
                        Include Installation (+ ${additionalValue})
                      </div>
                      <div style={{ fontSize: "12px" }}>
                        or redeem up to {points} Points
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", marginTop: "30px" }}>
                    <input
                      style={{
                        height: "40px",
                        width: "40px",
                        fontSize: "20px",
                        paddingLeft: "25px",
                      }}
                      type="text"
                      value={count}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div onClick={count > 0 ? increment : null}>
                        <ArrowDropUpIcon
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <div onClick={decrement}>
                        <ArrowDropDownIcon
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        style={{
                          width: "200px",
                          borderRadius: "20px",
                          backgroundColor: "#102b4e",
                          marginLeft: "30px",
                          height: "40px",
                          fontWeight: "bold",
                        }}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                paddingTop: "30px",
                paddingBottom: "60px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "265px",
                  borderRight: "1px solid #eaeaea",
                  fontSize: "15px",
                  lineHeight: "18px",
                  letterSpacing: ".5px",
                }}
              >
                <img src={ShippingIcon} />
                <div style={{ paddingLeft: "20px", fontSize: "14px" }}>
                  Pick up at your selected dealer is free
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "265px",
                  borderRight: "1px solid #eaeaea",
                  fontSize: "15px",
                  lineHeight: "18px",
                  letterSpacing: ".5px",
                  paddingLeft: "15px",
                }}
              >
                <img src={ShippingIcon} />
                <div style={{ paddingLeft: "20px", fontSize: "14px" }}>
                  Make the most of your vehicle – and your lifestyle
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "265px",
                  fontSize: "15px",
                  lineHeight: "18px",
                  letterSpacing: ".5px",
                  paddingLeft: "15px",
                }}
              >
                <img src={ShippingIcon} />
                <div
                  style={{
                    paddingLeft: "20px",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Engineered to fit your vehicle
                </div>
              </div>
            </div>
          </body>
          <div className="Product-tab-header">
            <AppBar
              position="static"
              style={{
                backgroundColor: "#eee",
                paddingLeft: "300px",
              }}
            >
              <Tabs value={value} onChange={handleTabs}>
                <Tab label="PRODUCT DETAILS" style={{ fontSize: "16px" }} />
                <Tab
                  label="FITS THESE VEHICLE"
                  style={{ marginLeft: "100px", fontSize: "16px" }}
                />
                <Tab
                  label="TECHNICAL SPECIFICATIONS"
                  style={{ marginLeft: "100px", fontSize: "16px" }}
                />
                <Tab
                  label="RETURN POLICY"
                  style={{ marginLeft: "100px", fontSize: "16px" }}
                />
              </Tabs>
            </AppBar>
            <div>
              <TabPanel value={value} index={0}>
                <div
                  style={{
                    paddingLeft: "300px",
                    paddingTop: "40px",
                    fontWeight: "lighter",
                    letterSpacing: "1px",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "lighter",

                      fontSize: "16px",
                    }}
                  >
                    ABOUT THIS PRODUCT
                  </h3>
                  <div style={{ fontSize: "12px" }}>Details</div>
                  <div style={{ fontSize: "12px" }}>
                    Add this handy Slide Out Tailgate that functions as a table,
                    work surface or step and stows under the load floor when not
                    in use.
                  </div>
                  <ul style={{ fontSize: "12px", lineHeight: "20px" }}>
                    <li>Available for 4-door models only</li>
                    <li>Rated at 600 lbs.</li>
                    <li>
                      Brings the trunk floor to an even level with the rear
                      seats when down creating a flat surface – not possible
                      with base load floor
                    </li>
                    <li>
                      Ford logo is a call back to the original Bronco design
                    </li>
                    <li>Prevents on-vehicle door storage</li>
                  </ul>
                  <div style={{ fontSize: "12px" }}>Not available with:</div>
                  <ul style={{ fontSize: "12px", lineHeight: "20px" }}>
                    <li>2-Door Bronco Models</li>
                    <li>
                      Cargo Area Protector on Base, Big Bend, Black Diamond,
                      Outer Banks and Wildtrak
                    </li>
                    <li>
                      Cargo Area Storage - Fixed Lid, Raised Lid, Drawer or
                      Trunk on Base, Outer Banks and Wildtrak
                    </li>
                    <li>
                      Sasquatch Package on Big Bend, Black Diamond, Outer Banks
                      and Everglades
                    </li>
                    <li>Full Vehicle Bash Plates on Wildtrak</li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div
                  style={{
                    paddingLeft: "300px",
                    paddingTop: "40px",
                    fontWeight: "lighter",
                    letterSpacing: "1px",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "lighter",

                      fontSize: "16px",
                    }}
                  >
                    FITS THESE VEHICLE
                  </h3>
                  <div style={{ fontSize: "12px" }}>Ford Bronco 2021-2024</div>
                  <div style={{ fontSize: "12px", paddingTop: "10px" }}>
                    Not available with:
                  </div>
                  <ul style={{ fontSize: "12px", lineHeight: "20px" }}>
                    <li>2-Door Bronco Models</li>
                    <li>
                      Cargo Area Protector on Base, Big Bend, Black Diamond,
                      Outer Banks and Wildtrak
                    </li>
                    <li>
                      Cargo Area Storage - Fixed Lid, Raised Lid, Drawer or
                      Trunk on Base, Outer Banks and Wildtrak
                    </li>
                    <li>Sasquatch</li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div
                  style={{
                    paddingLeft: "300px",
                    paddingTop: "40px",
                    fontWeight: "lighter",
                    letterSpacing: "1px",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "lighter",

                      fontSize: "16px",
                    }}
                  >
                    TECHNICAL SPECIFICATIONS
                  </h3>
                  <h3
                    style={{
                      fontWeight: "lighter",

                      fontSize: "16px",
                    }}
                  >
                    Catalogue: FOA
                  </h3>
                </div>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <div
                  style={{
                    paddingLeft: "300px",
                    paddingTop: "40px",
                    fontWeight: "lighter",
                    letterSpacing: "1px",
                    paddingRight: "300px",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "lighter",

                      fontSize: "16px",
                    }}
                  >
                    RETURN POLICY
                  </h3>
                  <div style={{ fontSize: "12px", lineHeight: "20px" }}>
                    Ford or the dealer (where applicable) will accept returns or
                    exchanges of applicable Motorcraft, Ford Parts, Omnicraft,
                    Ford Accessories, Lincoln Accessories and Ford Performance
                    Parts within 30 days of your receipt. Once you have
                    initiated a return, you must return the part(s) within 14
                    calendar days. Electronics, wheels and custom-painted parts
                    cannot be returned at any time for any reason. All returns
                    and exchanges must be returned to Ford (for orders shipped
                    directly to you) or the dealer (for orders picked up from
                    the dealer) solely at your expense, except in the case of
                    Ford or dealer error. Returned items must be in the original
                    box, in new, non-installed, resalable condition, with all
                    instructions and hardware, and in the condition it was
                    received. If all of these conditions are not met, it is at
                    discretion of Ford or the dealer (where applicable) to
                    accept the return. Shipping charges are non-refundable. If
                    you opt not to provide a VIN(s), you are solely responsible
                    for making sure the accessories you have ordered are
                    compatible with your vehicle. Attempting to return any parts
                    or assemblies that have been tampered with in a manner that
                    affects the re-salability and/or safety of the part(s) is
                    prosecutable under the law, and these parts and assemblies
                    are not eligible for return credit, refund and/or exchange.
                    If you believe a product sold by Ford has a condition or
                    defect that might make it unsafe, please report this safety
                    concern immediately by using the chat feature on the Site or
                    by calling 1-844-589-0060.
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
          <Footer />
        </div>
      </container>
    </div>
  );
}

function TabPanel(Props) {
  const { children, value, index } = Props;
  return <div>{value === index && <div>{children} </div>}</div>;
}

export default Home;
