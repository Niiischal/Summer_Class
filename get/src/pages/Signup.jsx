import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImage from "../assets/svgs/signup-illustration.svg";
import Button from "../components/Button";
import TextInputs from "../components/TextInputs";
import "../styles/inputs.css";
import "../styles/signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="container">
        <div className="signupFormContainer">
          <div className="signupForm">
            <div className="form">
              <form action="">
                <h1>Signup</h1>
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
                    type="number"
                    placeholder="Contact"
                    value={contact}
                    onTextChange={(text) => {
                      setContact(text);
                    }}
                  />
                  <TextInputs type="email" placeholder="Email" value={email} 
                  onTextChange={(text) => {
                    setEmail(text);
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
                  <TextInputs
                    type="password"
                    placeholder="Confirm Password"
                    value={password}
                    onTextChange={(text) => {
                        setPassword(text);
                      }}
                  />
                  <Button label="Signup"/>
                </div>
              </form>
              <div className="contents">
                <div style={{color:"#61DAFB"}}>Already have an account?</div>
                <div
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#61DAFB",
                    color: "#61DAFB",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </div>
              </div>
            </div>
          </div>
          <div className="signupImage">
            <img src={signupImage} alt="signup" />
          </div>
        </div>
      </div>
    </>
  );
};


export default Signup;
