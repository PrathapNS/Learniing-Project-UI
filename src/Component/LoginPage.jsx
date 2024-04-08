import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Paper, TextField, colors } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "../App.css";
import Button from "@mui/material/Button";
import Logo from "./Asset/Ford-Logo.png";
import credentials from "./Api.json";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    const user = credentials.users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      setValidationError("Invalid email or password");
    }
  };

  const handleClickShowPassword = () =>
    setShowPassword((show) => !showPassword);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="LoginPage">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "70px",
        }}
      >
        <img style={{ width: "160px", height: "90px" }} src={Logo} />

        <Paper className="LoginPage-Paper">
          <h4
            style={{
              fontWeight: "400",
              fontSize: "1.5rem",
              color: "#102b4e",
            }}
          >
            {" "}
            SIGN IN
          </h4>

          <form onSubmit={handleFormSubmit}>
            {validationError && (
              <div
                style={{ color: "red", marginBottom: "10px", fontSize: "18px" }}
              >
                {validationError}
              </div>
            )}
            <div>
              <FormControl variant="outlined">
                <TextField
                  label="Email"
                  style={{ width: "450px", marginBottom: "30px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="current-password"
                />
              </FormControl>

              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  style={{ width: "450px" }}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  endAdornment={
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  }
                  label="Password"
                  autoComplete="current-password"
                />
              </FormControl>
              <div
                style={{
                  paddingLeft: "325px",
                  fontSize: "12px",
                  marginTop: "8px",
                  letterSpacing: ".5px",
                  color: "#102b4e",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </div>

              <br></br>

              <Button
                style={{
                  backgroundColor: "#00095b",
                  width: "20%",
                  color: "white",
                  borderRadius: "30px",
                  height: "40px",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
                onClick={handleLogin}
              >
                Sign In
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    </div>
  );
}

export default LoginPage;
