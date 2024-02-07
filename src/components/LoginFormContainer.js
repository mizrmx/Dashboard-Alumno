import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginFormContainer.css";

const LoginFormContainer = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/inicio-v2");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/inicio-v2");
  }, [navigate]);

  return (
    <div className="form1">
      <div className="button" onClick={onButtonContainerClick}>
        <div className="state-layer">
          <div className="label-text">Login</div>
        </div>
      </div>
      <div
        className="communication-mail-parent"
        onClick={onFrameContainerClick}
      >
        <img
          className="communication-mail"
          alt=""
          src="/communication--mail.svg"
        />
        <div className="admin">admin</div>
      </div>
      <img className="form-child" alt="" src="/frame-5031.svg" />
      <div className="usuario">Usuario</div>
      <div className="contrasea">Contraseña</div>
      <div className="recordar">Recordar</div>
      <div className="form-item" />
      <div className="login1">Login</div>
    </div>
  );
};

export default LoginFormContainer;
