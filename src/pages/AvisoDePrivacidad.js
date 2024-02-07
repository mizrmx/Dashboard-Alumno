import styles from "./AvisoDePrivacidad.module.css";

const AvisoDePrivacidad = () => {
  return (
    <div className={styles.avisoDePrivacidad}>
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
      <div className={styles.background} />
      <div className={styles.materia}>
        <img
          className={styles.capturaDePantalla20240131}
          alt=""
          src="/captura-de-pantalla-20240131-a-las-1223-1@2x.png"
        />
      </div>
      <div className={styles.header}>
        <div className={styles.title}>
          <b className={styles.avisoDePrivacidad1}>Aviso de privacidad</b>
        </div>
      </div>
    </div>
  );
};

export default AvisoDePrivacidad;
