import { useState } from "react";
import "./login.css";
import LoginInput from "./loginInput";
import { Link } from "react-router-dom";
import LoginButton from "./SignInButton.js";

function LoginPage() {
  const [idInuptValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState(null);

  const handleInputChange = (event) => {
    setIdValue(event.target.value);
    console.log("id" + event.target.value);
  };
  const passwordInputChange = (event) => {
    setPasswordValue(event.target.value);
    console.log("pw" + event.target.value);
  };
  return (
    <div className="loginBox">
      <div className="SignInText">
        <h1>Sign in</h1>
        <p>Log in to Anawax</p>
      </div>
      <div className="SignInInput">
        <LoginInput
          inputValue={idInuptValue}
          handleInputChange={handleInputChange}
        />
        <LoginInput
          inputValue={passwordValue}
          handleInputChange={passwordInputChange}
        />
        <Link to="#">
          <p>Forgot password?</p>
        </Link>
      </div>

      <LoginButton name={"Sign In"} className = "SignInButton"/>
      <div className="separator">
        <span className="separator-text">or</span>
      </div>
      <LoginButton name={"Sign Up"} className = "SignUpButton" />
    </div>
  );
}

export default LoginPage;
