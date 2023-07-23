import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/svgs/login-illustration.svg";
import Button from "../components/Button";
import TextInputs from "../components/TextInputs";
import "../styles/inputs.css";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container">
        <div className="loginFormContainer">
          <div className="loginForm">
            <div className="form">
              <form action="">
                <h1>Login</h1>
                <div className="textInputs">
                  <TextInputs
                    type="text"
                    placeholder="Username"
                    value={username}
                    onTextChange={(text) => {
                      setUsername(text);
                    }}
                  />
                  <TextInputs
                    type="password"
                    placeholder="Password"
                    value={password}
                    onTextChange={(text) => {
                        setPassword(text);
                      }}
                  />
                  <Button label="Login" />
                </div>
              </form>
              <div className="contents">
                <div>Don't have an account?</div>
                <div
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#6315eb",
                    color: "#6315eb",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </div>
              </div>
            </div>
          </div>
          <div className="loginImage">
            <img src={loginImage} alt="login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
