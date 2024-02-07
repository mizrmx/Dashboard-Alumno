import Component from "../components/Component";
import ContainerTable from "../components/ContainerTable";
import Expenses from "../components/Expenses";
import "./EstadoDeCuenta.css";

const EstadoDeCuenta = () => {
  return (
    <div className="estado-de-cuenta">
      <Component />
      <div className="pagos">
        <div className="menu-table1">
          <div className="id-ciclo">ID Ciclo</div>
          <div className="fecha-pago">Fecha Pago</div>
          <div className="mes-cargo">Mes Cargo</div>
          <div className="concepto">Concepto</div>
          <div className="descripcin2">Descripción</div>
          <div className="cant">Cant</div>
          <div className="p-unitario">P. Unitario</div>
          <div className="descuento">Descuento</div>
          <div className="recargo">Recargo</div>
          <div className="monto">{`Monto `}</div>
          <div className="forma-de-pago">Forma de Pago</div>
          <div className="mtodo-de-pago">Método de Pago</div>
          <div className="recibo">Recibo</div>
        </div>
        <div className="frame-group">
          <div className="f2023-parent">
            <div className="f2023">F2023</div>
            <div className="div71">13/09/23</div>
            <div className="septiembre">Septiembre</div>
            <div className="allccnio">ALLCCNIÑO</div>
            <div className="all-access-nio">All Access Niño</div>
            <div className="div72">1</div>
            <div className="div73">345,00</div>
            <div className="div74">0,00</div>
            <div className="div75">17,25</div>
            <div className="div76">362,25</div>
            <div className="tarjeta-de-crdito">Tarjeta de crédito EVO</div>
            <div className="en-linea">En linea</div>
          </div>
          <div className="total1">
            <b className="total-de-carrito">Total de carrito:</b>
            <b className="b">362,25</b>
            <img className="total-child" alt="" src="/line-2.svg" />
          </div>
        </div>
      </div>
      <div className="header3">
        <div className="title2">
          <b className="estado-de-cuenta1">Estado de cuenta</b>
        </div>
      </div>
      <ContainerTable />
      <div className="header4">
        <div className="data">
          <div className="id-alumno">
            <div className="modalidad-carrera">ID Alumno</div>
            <div className="primaria">22100017</div>
          </div>
          <div className="nombre">
            <div className="modalidad-carrera">Nombre</div>
            <div className="primaria">Hernandez Kahikwm Frida Regina</div>
          </div>
          <div className="nivel">
            <div className="modalidad-carrera">Nivel</div>
            <div className="primaria">Primaria</div>
          </div>
          <div className="modalidad">
            <div className="modalidad-carrera">Modalidad Carrera</div>
            <div className="primaria">Primaria</div>
          </div>
          <div className="grado">
            <div className="modalidad-carrera">Grado</div>
            <div className="primaria">5to</div>
          </div>
          <div className="grupo1">
            <div className="modalidad-carrera">Grupo</div>
            <div className="primaria">PR5B</div>
          </div>
          <div className="clabe-interbancaria">
            <div className="modalidad-carrera">Clabe interbancaria</div>
            <div className="primaria">646180140401407349</div>
          </div>
        </div>
        <div className="title3">
          <b className="estado-de-cuenta2">Estado de cuenta</b>
        </div>
      </div>
      <div className="ciclos">
        <Expenses
          expenseYear="2023"
          expensesBackgroundColor="#4d44b5"
          expensesColor="#fff"
        />
        <Expenses
          expenseYear="F2023"
          expensesBackgroundColor="1px solid #e1e1e1"
          expensesColor="#222"
        />
        <Expenses
          expenseYear="2022"
          expensesBackgroundColor="1px solid #e1e1e1"
          expensesColor="#222"
        />
      </div>
    </div>
  );
};

export default EstadoDeCuenta;
