import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/inicio-v2");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.form}>
        <div className={styles.button}>
          <div className={styles.stateLayer}>
            <div className={styles.labelText}>Login</div>
          </div>
        </div>
        <div
          className={styles.communicationMailParent}
          onClick={onFrameContainerClick}
        >
          <img
            className={styles.communicationMail}
            alt=""
            src="/communication--mail.svg"
          />
          <div className={styles.admin}>admin</div>
        </div>
        <img className={styles.formChild} alt="" src="/frame-5031.svg" />
        <div className={styles.usuario}>Usuario</div>
        <div className={styles.contrasea}>Contraseña</div>
        <div className={styles.recordar}>Recordar</div>
        <div className={styles.formItem} />
        <div className={styles.login1}>Login</div>
      </div>
      <div className={styles.header}>
        <div className={styles.bienvenidoAlPanel}>
          Bienvenido al panel de control de alumnos
        </div>
        <img
          className={styles.interschoolLogoAzul1Icon}
          alt=""
          src="/interschoollogoazul-1.svg"
        />
      </div>
    </div>
  );
};

export default Login;
