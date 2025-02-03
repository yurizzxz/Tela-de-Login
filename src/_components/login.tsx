import { useState } from "react";
import "./login.css";
import logo from "../assets/logopng.png";
import logobranco from "../assets/logobranco.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LoginForm from "./LogIn/index";
import SignUpForm from "./SignUp/index";

const LoginPage = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [activeForm, setActiveForm] = useState<"login" | "register">("login");

  const handleSubmit = (e: React.FormEvent) => {
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
                Seja muito <strong>bem-vindo!</strong>
              </h1>
              <p>Estamos animados por tê-lo conosco.</p>
              <p>Faça login para continuar sua incrível jornada.</p>
              <p>Pronto para começar?</p>
            </div>
          </aside>
          <main className="loginForm" role="form">
            <div className="loginInfos">
              <header className="formHead">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src={logo} width={120} alt="Logo da plataforma" />
                </div>

                <div className="buttonContainer">
                  <button
                    className={activeForm === "login" ? "active" : ""}
                    onClick={() => setActiveForm("login")}
                  >
                    Entrar
                  </button>
                  <button
                    className={activeForm === "register" ? "active" : ""}
                    onClick={() => setActiveForm("register")}
                  >
                    Criar Conta
                  </button>
                </div>
              </header>

              {activeForm === "login" ? (
                /* LOGIN */
                <>
                  <h2 style={{ marginBottom: "0rem", marginTop: "0rem" }}>
                    Olá novamente!
                  </h2>
                  <LoginForm
                    handleSubmit={handleSubmit}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    emailError={emailError}
                    passwordError={passwordError}
                    onClick={handleOpenModal}
                  />
                </>
              ) : (
                /* REGISTRO */
                <>
                  <h2 style={{ marginBottom: "0rem", marginTop: "0rem" }}>
                    Crie sua conta!
                  </h2>
                  <SignUpForm
                    handleSubmit={handleSubmit}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    emailError={emailError}
                    passwordError={passwordError}
                  />
                </>
              )}
            </div>
          </main>
        </div>

        {isModalOpen && (
          <div className="modal">
            <div className="modalContent">
              <div className="modalHead">
                <h2>Recuperação de Senha</h2>
                <span
                  style={{ cursor: "pointer", fontSize: "1.2rem" }}
                  onClick={handleCloseModal}
                >
                  <i className="fas fa-times" />
                </span>
              </div>
              <div>
                <p>Digite seu e-mail para recuperar a senha.</p>
              </div>
              <div className="modalFooter">
                <input type="email" placeholder="E-mail" />
                <button className="btnSign" onClick={handleCloseModal}>
                  Enviar email
                </button>
                <div className="image">
                  <img src={logo} width={100} alt="Logo DayByDay" />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default LoginPage;
