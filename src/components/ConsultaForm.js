import DateRangeFilter from "./DateRangeFilter";
import "./ConsultaForm.css";

const ConsultaForm = () => {
  return (
    <div className="consulta">
      <div className="button-consultar">
        <div className="mostrar">Mostrar</div>
      </div>
      <DateRangeFilter dateRangeLabel="Hasta" />
      <DateRangeFilter
        dateRangeLabel="Desde"
        propLeft="677px"
        propPadding="0px 0px 0px var(--padding-11xs)"
      />
      <div className="title5">
        <b className="consulta-facturacin">Consulta Facturación</b>
      </div>
      <div className="nombre2">
        <div className="nombre3">Nombre</div>
        <div className="hernandez-kahikwm-frida10">
          Hernandez Kahikwm Frida Regina
        </div>
      </div>
      <div className="id-alumno2">
        <div className="nombre3">ID Alumno</div>
        <div className="hernandez-kahikwm-frida10">22100017</div>
      </div>
    </div>
  );
};

export default ConsultaForm;
