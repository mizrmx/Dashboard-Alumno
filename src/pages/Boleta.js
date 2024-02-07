import Component from "../components/Component";
import "./Boleta.css";

const Boleta = () => {
  return (
    <div className="boleta">
      <Component />
      <div className="background1" />
      <div className="boletapdf">
        <div className="bg" />
        <img className="boletapdf-child" alt="" src="/rectangle-459@2x.png" />
      </div>
      <div className="boleta1">
        <div className="title4">
          <b className="boleta2">Boleta</b>
        </div>
      </div>
    </div>
  );
};

export default Boleta;
