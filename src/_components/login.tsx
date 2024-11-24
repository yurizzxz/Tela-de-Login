import { useState } from "react";
import "./login.css";

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
            <img src="" alt="Image" />
          </div>
          <div className="loginText">
            <h1>Welcome Back!</h1>
            <p>description</p>
          </div>
          <button>Register Now!</button>
        </div>
        <div className="loginForm">
          <div className="loginInfos">
            <div className="formHead">
              <img src="" alt="Image" />
              <h1>Form-Head</h1>
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
                />
                <label>Password</label>
              </div>
            </div>

            {/* more actions */}
            <div className="formControlctner">
              <label htmlFor="checkboxRemember">
                Remember-me
                <input type="checkbox" id="checkboxRemember" />
              </label>
            </div>
            <a href="#">Forgot Password?</a>

            {/* submit */}
            <button className="btnSign">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
