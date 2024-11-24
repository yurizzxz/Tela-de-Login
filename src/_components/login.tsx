import { useState } from "react";
import "./login.css";
import logo from "../assets/logopng.png";
import logobranco from "../assets/logobranco.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LoginPage = () => {
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocusEmail = () => setActiveEmail(true);
  const handleBlurEmail = () => setActiveEmail(false);

  const handleFocusPassword = () => setActivePassword(true);
  const handleBlurPassword = () => setActivePassword(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Por favor, insira um e-mail válido.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password || password.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres.");
      valid = false;
    } else {
      setPasswordError("");
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
    <section className="loginSection" aria-labelledby="login-header">
      <div className="loginContent">
        <aside className="loginLead">
          <div className="loginLogo">
            <img src={logobranco} width={140} alt="Logo DayByDay" />
          </div>
          <div className="loginText">
            <h1 id="login-header">
              Olá, <strong>bem-vindo!</strong>
            </h1>
            <p>Estamos animados por tê-lo conosco novamente.</p>
            <p>Faça login para continuar sua incrível jornada.</p>
            <p>Pronto para começar?</p>
          </div>
        </aside>
        <main className="loginForm" role="form">
          <div className="loginInfos">
            <header className="formHead">
              <img src={logo} width={120} alt="Logo da plataforma" />
            </header>

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
            {passwordError && (
              <span className="errorMessage">{passwordError}</span>
            )}

            <footer className="formFooter">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="checkboxRemember"
                  aria-labelledby="remember-label"
                />
                <label htmlFor="checkboxRemember" id="remember-label">
                  Lembrar de mim
                </label>
              </div>
              <a
                href="#"
                onClick={handleOpenModal}
                aria-label="Esqueceu sua senha?"
              >
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
              <a href="#" aria-label="Criar uma nova conta">
                Não tem uma conta? <span>Cadastre-se</span>
              </a>
            </div>
          </div>
        </main>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modalContent">
            <div className="modalHead">
              <h2>Recuperação de Senha</h2>
              <p>Digite seu e-mail para recuperar a senha.</p>
            </div>
            <div className="modalFooter">
              <input type="email" placeholder="E-mail" />
              <button onClick={handleCloseModal}>Fechar</button>
            </div>
            <div className="image">
              <img src={logo} width={100} alt="Logo DayByDay" />
            </div>
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default LoginPage;
