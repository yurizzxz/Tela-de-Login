import { useState } from "react";
import "./login.css";
import logo from "../assets/logopng.png";
import logobranco from "../assets/logobranco.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

const LoginPage = () => {
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePassword] = useState(false);

  const handleFocusEmail = () => setActiveEmail(true);
  const handleBlurEmail = () => setActiveEmail(false);

  const handleFocusPassword = () => setActivePassword(true);
  const handleBlurPassword = () => setActivePassword(false);

  return (
    <section className="loginSection">
      <div className="loginContent">
        <aside className="loginLead">
          <div className="loginLogo">
            <img src={logobranco} width={140} alt="Logo" />
          </div>
          <div className="loginText">
            <h1>
              Hello, <strong>welcome!</strong>
            </h1>
            <p>description</p>
          </div>
        </aside>
        <main className="loginForm">
          <div className="loginInfos">
            <header className="formHead">
              <img src={logo} width={120} alt="logo" />
            </header>

            {/* email */}
            <div className="formControlctner">
              <div className={`formControl ${activeEmail ? "active" : ""}`}>
                <input
                  type="email"
                  id="email"
                  required
                  onFocus={handleFocusEmail}
                  onBlur={handleBlurEmail}
                  spellCheck="false"
                  aria-label="Enter Your Email"
                />
                <label htmlFor="email">Enter Your Email</label>
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
                  aria-label="Password"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            {/* more actions */}
            <footer className="formFooter">
              <div className="checkbox">
                <input type="checkbox" id="checkboxRemember" />
                <label htmlFor="checkboxRemember">Remember-me</label>
              </div>
              <a href="#">Forgot Password?</a>
            </footer>

            {/* submit */}
            <div className="buttonLayout">
              <button type="submit" className="btnSign">Login</button>
              <a href="">
                Don't have an account? <span>Sign Up</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default LoginPage;
