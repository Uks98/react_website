import { useState } from "react";
import "./login.css";
import LoginInput from "./loginInput";
import { Link } from "react-router-dom";
import LoginButton from "./SignInButton.js";

function LoginPage() {
  const [idInuptValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState(0);

  const handleInputChange = (event) => {
    setIdValue(event.target.value);
  };
  const passwordInputChange = (event) => {
    setPasswordValue(event.target.value);
  };
  return (
    <div>
      <div className="SignInText">
        <h1>Sign in</h1>
        <p>Log in to Anawax</p>
      </div>
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
      <LoginButton name = {"Login"}  />
      <div className="separator">
      <span className="separator-text">or</span>
    </div>
      <LoginButton name = {"Sign Up"}  />
    </div>
  );
}

export default LoginPage;
