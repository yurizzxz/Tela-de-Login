import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface LoginFormProps {
    handleSubmit: (e: React.FormEvent) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    showPassword: boolean;
    setShowPassword: (showPassword: boolean) => void;
    emailError: string;
    passwordError: string;
    onClick: () => void
}

const LoginForm = ({ handleSubmit, email, setEmail, password, setPassword, showPassword, setShowPassword, emailError, passwordError, onClick }: LoginFormProps) => {
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePassword] = useState(false);

  const handleFocusEmail = () => setActiveEmail(true);
  const handleBlurEmail = () => setActiveEmail(false);
  const handleFocusPassword = () => setActivePassword(true);
  const handleBlurPassword = () => setActivePassword(false);

  return (
    <div>
      <div className="formControlctner">
        <div className={`formControl ${activeEmail ? "active" : ""}`}>
          <input
            type="email"
            id="email"
            value={email}
            required
            onFocus={handleFocusEmail}
            onBlur={handleBlurEmail}
            spellCheck="false"
            aria-labelledby="email-label"
            aria-required="true"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" id="email-label">
            Insira seu E-mail
          </label>
        </div>
      </div>
      {emailError && <span className="errorMessage">{emailError}</span>}

      <div className="formControlctner">
        <div className={`formControl ${activePassword ? "active" : ""}`}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            required
            onFocus={handleFocusPassword}
            onBlur={handleBlurPassword}
            minLength={6}
            aria-labelledby="password-label"
            aria-required="true"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" id="password-label">
            Senha
          </label>
          <i
            onClick={() => setShowPassword(!showPassword)}
            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
          />
        </div>
      </div>
      {passwordError && <span className="errorMessage">{passwordError}</span>}

      <footer className="formFooter" style={{ marginTop: ".5rem" }}>
        <div className="checkbox">
          <input type="checkbox" id="checkboxRemember" aria-labelledby="remember-label" />
          <label htmlFor="checkboxRemember" id="remember-label">
            Lembrar de mim
          </label>
        </div>
        <a href="#" onClick={onClick}>
          Esqueceu a Senha?
        </a>
      </footer>

      <div className="buttonLayout">
        <button
          type="submit"
          className="btnSign"
          aria-label="Enviar formulário de login"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
