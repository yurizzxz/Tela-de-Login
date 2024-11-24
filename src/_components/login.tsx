import { useState } from "react";
import "./login.css";
import logo from "../assets/logopng.png";
import logobranco from "../assets/logobranco.png";
import '@fortawesome/fontawesome-free/css/all.min.css';f

const LoginPage = () => {
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePassword] = useState(false);

  const handleFocusEmail = () => setActiveEmail(true);
  const handleBlurEmail = () => setActiveEmail(false);

  const handleFocusPassword = () => setActivePassword(true);
  const handleBlurPassword = () => setActivePassword(false);

  return (
    <div className="loginSection">
      <div className="loginContent">
        <div className="loginLead">
          <div className="loginLogo">
            <img src={logobranco} width={140} alt="Logo" />
          </div>
          <div className="loginText">
            <h1>
              Hello, <strong>welcome!</strong>
            </h1>
            <p>description</p>
          </div>
        </div>
        <div className="loginForm">
          <div className="loginInfos">
            <div className="formHead">
              <img src={logo} width={120} alt="logo" />
            </div>
            {/* email */}
            <div className="formControlctner">
              <div className={`formControl ${activeEmail ? "active" : ""}`}>
                <input
                  type="text"
                  required
                  onFocus={handleFocusEmail}
                  onBlur={handleBlurEmail}
                  spellCheck="false"
                />
                <label>Enter Your Email</label>
              </div>
            </div>

            {/* password */}
            <div className="formControlctner">
              <div className={`formControl ${activePassword ? "active" : ""}`}>
                <input
                  type="password"
                  id="password"
                  required
                  onFocus={handleFocusPassword}
                  onBlur={handleBlurPassword}
                  minLength={6}
                />
                <label>Password</label>
              </div>
            </div>

            {/* more actions */}
            <div className="formFooter">
              <div className="checkbox">
                <input type="checkbox" id="checkboxRemember" />
                <label htmlFor="checkboxRemember">Remember-me</label>
              </div>
              <a href="#">Forgot Password?</a>
            </div>

            {/* submit */}
            <div className="buttonLayout">
              <button className="btnSign">Login</button>
              <a href="">Don't have an account? <span>Sign Up</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
