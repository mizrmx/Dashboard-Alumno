import styles from "./EstadoDeCuenta.module.css";

const EstadoDeCuenta = () => {
  return (
    <div className={styles.estadoDeCuenta}>
      <div className={styles.component1}>
        <div className={styles.sideMenu}>
          <div className={styles.placeholder} />
          <div className={styles.name}>
            <div className={styles.mayraZ}>Mayra Z.</div>
            <div className={styles.admin}>Admin</div>
          </div>
          <img className={styles.contraseaIcon} alt="" src="/contrasea.svg" />
          <img
            className={styles.disponibilidadIcon}
            alt=""
            src="/disponibilidad.svg"
          />
          <img className={styles.inboxIcon} alt="" src="/inbox.svg" />
        </div>
        <div className={styles.sidebar}>
          <div className={styles.footer}>
            <div className={styles.iParent}>
              <b className={styles.i}>I</b>
              <div className={styles.frameChild} />
            </div>
            <b className={styles.interschool}>Interschool</b>
          </div>
          <div className={styles.list}>
            <div className={styles.dashboard}>
              <img className={styles.homeIcon} alt="" src="/home.svg" />
              <div className={styles.email}>Inicio</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/student.svg" />
              <div className={styles.email}>Boleta</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/teacher.svg" />
              <div className={styles.email}>Estado de cuenta</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/calendar.svg" />
              <div className={styles.email}>Facturación emitada</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/finance.svg" />
              <div className={styles.email}>Aviso de privacidad</div>
            </div>
            <div className={styles.food}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.email}>Politicas Devolución</div>
            </div>
          </div>
          <div className={styles.logo}>
            <div className={styles.iParent}>
              <b className={styles.e}>E</b>
              <div className={styles.frameChild} />
            </div>
            <b className={styles.escuelaBenitoJuarez}>Escuela Benito Juarez</b>
          </div>
        </div>
      </div>
      <div className={styles.pagos}>
        <div className={styles.menuTable}>
          <div className={styles.idCiclo}>ID Ciclo</div>
          <div className={styles.fechaPago}>Fecha Pago</div>
          <div className={styles.mesCargo}>Mes Cargo</div>
          <div className={styles.concepto}>Concepto</div>
          <div className={styles.descripcin}>Descripción</div>
          <div className={styles.cant}>Cant</div>
          <div className={styles.pUnitario}>P. Unitario</div>
          <div className={styles.descuento}>Descuento</div>
          <div className={styles.recargo}>Recargo</div>
          <div className={styles.monto}>{`Monto `}</div>
          <div className={styles.formaDePago}>Forma de Pago</div>
          <div className={styles.mtodoDePago}>Método de Pago</div>
          <div className={styles.recibo}>Recibo</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.f2023Parent}>
            <div className={styles.f2023}>F2023</div>
            <div className={styles.div}>13/09/23</div>
            <div className={styles.septiembre}>Septiembre</div>
            <div className={styles.allccnio}>ALLCCNIÑO</div>
            <div className={styles.allAccessNio}>All Access Niño</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>345,00</div>
            <div className={styles.div3}>0,00</div>
            <div className={styles.div4}>17,25</div>
            <div className={styles.div5}>362,25</div>
            <div className={styles.tarjetaDeCrdito}>Tarjeta de crédito EVO</div>
            <div className={styles.enLinea}>En linea</div>
          </div>
          <div className={styles.total}>
            <b className={styles.totalDeCarrito}>Total de carrito:</b>
            <b className={styles.b}>362,25</b>
            <img className={styles.totalChild} alt="" src="/line-2.svg" />
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.title}>
          <b className={styles.estadoDeCuenta1}>Estado de cuenta</b>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.total1}>
          <b className={styles.totalDeCarrito1}>Total de carrito:</b>
          <b className={styles.b1}>$14, 090.00</b>
        </div>
        <div className={styles.result}>
          <div className={styles.resultChild} />
          <img className={styles.resultItem} alt="" src="/line-2.svg" />
          <b className={styles.totales}>Totales</b>
          <div className={styles.div6}>$121.470,00</div>
          <div className={styles.div7}>0,00</div>
          <div className={styles.div8}>
            <span>0,</span>
            <span className={styles.span}>00</span>
          </div>
          <div className={styles.div9}>$7.770,00</div>
          <div className={styles.div10}>$129.240,00</div>
          <div className={styles.div11}>0,00</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <div className={styles.div12}>1</div>
            <div className={styles.div13}>2023</div>
            <div className={styles.agosto}>Agosto</div>
            <div className={styles.div14}>31/07/23</div>
            <div className={styles.insp}>Insp</div>
            <div className={styles.inscripcinPrimaria}>
              Inscripción Primaria
            </div>
            <div className={styles.div15}>$14.090,00</div>
            <div className={styles.div16}>0,00</div>
            <div className={styles.div17}>0,00</div>
            <div className={styles.div18}>0,00</div>
            <div className={styles.div19}>0,00</div>
            <div className={styles.div20}>14.090,00</div>
            <div className={styles.botonCarrito}>
              <img className={styles.shopIcon} alt="" src="/shop.svg" />
              <div className={styles.agregarAlCarrito}>Agregar al carrito</div>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.div12}>1</div>
            <div className={styles.div13}>2023</div>
            <div className={styles.agosto}>Agosto</div>
            <div className={styles.div14}>31/07/23</div>
            <div className={styles.insp}>Insp</div>
            <div className={styles.inscripcinPrimaria}>
              Inscripción Primaria
            </div>
            <div className={styles.div15}>$14.090,00</div>
            <div className={styles.div16}>0,00</div>
            <div className={styles.div17}>0,00</div>
            <div className={styles.div18}>0,00</div>
            <div className={styles.div19}>0,00</div>
            <div className={styles.div20}>14.090,00</div>
            <div className={styles.botonCarrito}>
              <img className={styles.shopIcon} alt="" src="/shop.svg" />
              <div className={styles.agregarAlCarrito}>Agregar al carrito</div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.div12}>1</div>
            <div className={styles.div13}>2023</div>
            <div className={styles.agosto}>Agosto</div>
            <div className={styles.div14}>31/07/23</div>
            <div className={styles.insp}>Insp</div>
            <div className={styles.inscripcinPrimaria}>
              Inscripción Primaria
            </div>
            <div className={styles.div15}>$14.090,00</div>
            <div className={styles.div16}>0,00</div>
            <div className={styles.div17}>0,00</div>
            <div className={styles.div18}>0,00</div>
            <div className={styles.div19}>0,00</div>
            <div className={styles.div20}>14.090,00</div>
            <div className={styles.botonCarrito}>
              <img className={styles.shopIcon} alt="" src="/shop.svg" />
              <div className={styles.agregarAlCarrito}>Agregar al carrito</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.div12}>1</div>
            <div className={styles.div13}>2023</div>
            <div className={styles.agosto}>Agosto</div>
            <div className={styles.div14}>31/07/23</div>
            <div className={styles.insp}>Insp</div>
            <div className={styles.inscripcinPrimaria}>
              Inscripción Primaria
            </div>
            <div className={styles.div15}>$14.090,00</div>
            <div className={styles.div16}>0,00</div>
            <div className={styles.div17}>0,00</div>
            <div className={styles.div18}>0,00</div>
            <div className={styles.div19}>0,00</div>
            <div className={styles.div20}>14.090,00</div>
            <div className={styles.botonCarrito}>
              <img className={styles.shopIcon} alt="" src="/shop.svg" />
              <div className={styles.agregarAlCarrito}>Agregar al carrito</div>
            </div>
          </div>
          <div className={styles.parent1}>
            <div className={styles.div12}>1</div>
            <div className={styles.div13}>2023</div>
            <div className={styles.agosto}>Agosto</div>
            <div className={styles.div14}>31/07/23</div>
            <div className={styles.insp}>Insp</div>
            <div className={styles.inscripcinPrimaria}>
              Inscripción Primaria
            </div>
            <div className={styles.div15}>$14.090,00</div>
            <div className={styles.div16}>0,00</div>
            <div className={styles.div17}>0,00</div>
            <div className={styles.div18}>0,00</div>
            <div className={styles.div19}>0,00</div>
            <div className={styles.div20}>14.090,00</div>
            <div className={styles.botonCarrito}>
              <img className={styles.shopIcon} alt="" src="/shop.svg" />
              <div className={styles.agregarAlCarrito}>Agregar al carrito</div>
            </div>
          </div>
          <div className={styles.parent2}>
            <div className={styles.div12}>1</div>
            <div className={styles.div13}>2023</div>
            <div className={styles.agosto}>Agosto</div>
            <div className={styles.div14}>31/07/23</div>
            <div className={styles.insp}>Insp</div>
            <div className={styles.inscripcinPrimaria}>
              Inscripción Primaria
            </div>
            <div className={styles.div15}>$14.090,00</div>
            <div className={styles.div16}>0,00</div>
            <div className={styles.div17}>0,00</div>
            <div className={styles.div18}>0,00</div>
            <div className={styles.div19}>0,00</div>
            <div className={styles.div20}>14.090,00</div>
            <div className={styles.botonCarrito}>
              <img className={styles.shopIcon} alt="" src="/shop.svg" />
              <div className={styles.agregarAlCarrito}>Agregar al carrito</div>
            </div>
          </div>
          <div className={styles.parent3}>
            <div className={styles.div12}>1</div>
            <div className={styles.div13}>2023</div>
            <div className={styles.agosto}>Agosto</div>
            <div className={styles.div14}>31/07/23</div>
            <div className={styles.insp}>Insp</div>
            <div className={styles.inscripcinPrimaria}>
              Inscripción Primaria
            </div>
            <div className={styles.div15}>$14.090,00</div>
            <div className={styles.div16}>0,00</div>
            <div className={styles.div17}>0,00</div>
            <div className={styles.div18}>0,00</div>
            <div className={styles.div19}>0,00</div>
            <div className={styles.div20}>14.090,00</div>
            <div className={styles.botonCarrito}>
              <img className={styles.shopIcon} alt="" src="/shop.svg" />
              <div className={styles.agregarAlCarrito}>Agregar al carrito</div>
            </div>
          </div>
          <div className={styles.parent4}>
            <div className={styles.div12}>1</div>
            <div className={styles.div13}>2023</div>
            <div className={styles.agosto}>Agosto</div>
            <div className={styles.div14}>31/07/23</div>
            <div className={styles.insp}>Insp</div>
            <div className={styles.inscripcinPrimaria}>
              Inscripción Primaria
            </div>
            <div className={styles.div15}>$14.090,00</div>
            <div className={styles.div16}>0,00</div>
            <div className={styles.div17}>0,00</div>
            <div className={styles.div18}>0,00</div>
            <div className={styles.div19}>0,00</div>
            <div className={styles.div20}>14.090,00</div>
            <div className={styles.botonCarrito}>
              <img className={styles.shopIcon} alt="" src="/shop.svg" />
              <div className={styles.agregarAlCarrito}>Agregar al carrito</div>
            </div>
          </div>
        </div>
        <div className={styles.menuTable1}>
          <div className={styles.div84}>#</div>
          <div className={styles.ciclo}>Ciclo</div>
          <div className={styles.mesCargo1}>Mes Cargo</div>
          <div className={styles.fVencimiento}>F. Vencimiento</div>
          <div className={styles.concepto1}>Concepto</div>
          <div className={styles.descripcin1}>Descripción</div>
          <div className={styles.monto1}>Monto</div>
          <div className={styles.beca}>Beca</div>
          <div className={styles.descuento1}>Descuento</div>
          <div className={styles.recargo1}>Recargo</div>
          <div className={styles.montoPagado}>Monto Pagado</div>
          <div className={styles.saldo}>Saldo</div>
        </div>
      </div>
      <div className={styles.header1}>
        <div className={styles.data}>
          <div className={styles.idAlumno}>
            <div className={styles.modalidadCarrera}>ID Alumno</div>
            <div className={styles.admin}>22100017</div>
          </div>
          <div className={styles.nombre}>
            <div className={styles.modalidadCarrera}>Nombre</div>
            <div className={styles.admin}>Hernandez Kahikwm Frida Regina</div>
          </div>
          <div className={styles.nivel}>
            <div className={styles.modalidadCarrera}>Nivel</div>
            <div className={styles.admin}>Primaria</div>
          </div>
          <div className={styles.modalidad}>
            <div className={styles.modalidadCarrera}>Modalidad Carrera</div>
            <div className={styles.admin}>Primaria</div>
          </div>
          <div className={styles.grado}>
            <div className={styles.modalidadCarrera}>Grado</div>
            <div className={styles.admin}>5to</div>
          </div>
          <div className={styles.grupo}>
            <div className={styles.modalidadCarrera}>Grupo</div>
            <div className={styles.admin}>PR5B</div>
          </div>
          <div className={styles.clabeInterbancaria}>
            <div className={styles.modalidadCarrera}>Clabe interbancaria</div>
            <div className={styles.admin}>646180140401407349</div>
          </div>
        </div>
        <div className={styles.title1}>
          <b className={styles.estadoDeCuenta2}>Estado de cuenta</b>
        </div>
      </div>
      <div className={styles.ciclos}>
        <div className={styles.expenses}>
          <div className={styles.modalidadCarrera}>2023</div>
        </div>
        <div className={styles.expenses2}>
          <div className={styles.modalidadCarrera}>F2023</div>
        </div>
        <div className={styles.expenses2}>
          <div className={styles.modalidadCarrera}>2022</div>
        </div>
      </div>
    </div>
  );
};

export default EstadoDeCuenta;
