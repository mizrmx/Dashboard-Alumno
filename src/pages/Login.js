import LoginFormContainer from "../components/LoginFormContainer";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <img className="image-icon" alt="" src="/image@2x.png" />
      <LoginFormContainer />
      <div className="header">
        <div className="bienvenido-al-panel">
          Bienvenido al panel de control de alumnos
        </div>
        <img
          className="interschool-logo-azul-1-icon"
          alt=""
          src="/interschoollogoazul-1.svg"
        />
      </div>
    </div>
  );
};

export default Login;
