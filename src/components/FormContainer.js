import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FormContainer.css";

const FormContainer = () => {
  const navigate = useNavigate();

  const onStudentsContainerClick = useCallback(() => {
    navigate("/boleta");
  }, [navigate]);

  const onTeachersContainerClick = useCallback(() => {
    navigate("/estado-de-cuenta");
  }, [navigate]);

  const onEventContainerClick = useCallback(() => {
    navigate("/facturacin-emitida");
  }, [navigate]);

  const onFinanceContainerClick = useCallback(() => {
    navigate("/aviso-de-privacidad");
  }, [navigate]);

  const onFoodContainerClick = useCallback(() => {
    navigate("/polticas-devolucin");
  }, [navigate]);

  return (
    <div className="sidebar">
      <div className="footer">
        <div className="i-parent">
          <b className="i">I</b>
          <div className="frame-child" />
        </div>
        <b className="interschool">Interschool</b>
      </div>
      <div className="list">
        <div className="dashboard">
          <img className="home-icon" alt="" src="/home.svg" />
          <div className="email">Inicio</div>
        </div>
        <div className="students" onClick={onStudentsContainerClick}>
          <img className="home-icon" alt="" src="/student.svg" />
          <div className="email">Boleta</div>
        </div>
        <div className="students" onClick={onTeachersContainerClick}>
          <img className="home-icon" alt="" src="/teacher.svg" />
          <div className="email">Estado de cuenta</div>
        </div>
        <div className="students" onClick={onEventContainerClick}>
          <img className="home-icon" alt="" src="/calendar.svg" />
          <div className="email">Facturación emitada</div>
        </div>
        <div className="students" onClick={onFinanceContainerClick}>
          <img className="home-icon" alt="" src="/finance.svg" />
          <div className="email">Aviso de privacidad</div>
        </div>
        <div className="food" onClick={onFoodContainerClick}>
          <img className="vector-icon1" alt="" src="/vector1.svg" />
          <div className="email">Politicas Devolución</div>
        </div>
      </div>
      <div className="logo">
        <div className="i-parent">
          <b className="e">E</b>
          <div className="frame-child" />
        </div>
        <b className="escuela-benito-juarez">Escuela Benito Juarez</b>
      </div>
    </div>
  );
};

export default FormContainer;
