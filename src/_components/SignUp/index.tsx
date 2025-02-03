import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface SignUpFormProps {
    handleSubmit: (e: React.FormEvent) => void;
    name: string;
    setName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    showPassword: boolean;
    setShowPassword: (showPassword: boolean) => void;
    emailError: string;
    passwordError: string;
}

const SignUpForm = ({ handleSubmit, name, setName, email, setEmail, password, setPassword, showPassword, setShowPassword, emailError, passwordError }: SignUpFormProps) => {
  const [activeName, setActiveName] = useState(false);
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePassword] = useState(false);

  const handleFocusName = () => setActiveName(true);
  const handleBlurName = () => setActiveName(false);
  const handleFocusEmail = () => setActiveEmail(true);
  const handleBlurEmail = () => setActiveEmail(false);
  const handleFocusPassword = () => setActivePassword(true);
  const handleBlurPassword = () => setActivePassword(false);

  return (
    <div>
      
      <div className="formControlctner">
        
        <div className={`formControl ${activeName ? "active" : ""}`}>
          <input
            type="text"
            id="name"
            value={name}
            required
            onFocus={handleFocusName}
            onBlur={handleBlurName}
            spellCheck="false"
            aria-labelledby="Name-label"
            aria-required="true"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name" id="name-label">
            Insira seu Nome
          </label>
        </div>
      </div>
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

      <div className="buttonLayout" style={{ marginTop: "10px" }}>
        <button
          type="submit"
          className="btnSign"
          aria-label="Enviar formulário de registro"
          onClick={handleSubmit}
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
