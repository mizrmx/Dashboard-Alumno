import Component from "../components/Component";
import CardContainer from "../components/CardContainer";
import "./InicioV.css";

const InicioV = () => {
  return (
    <div className="inicio-v2">
      <Component />
      <b className="panel-de-inicio">Panel de inicio</b>
      <div className="avisos">
        <div className="avisos1">
          <div className="chat">
            <div className="bg1" />
            <img className="line-icon" alt="" />
            <img className="dots-icon" alt="" src="/dots.svg" />
            <img className="video-icon" alt="" src="/video.svg" />
            <div className="chat1">
              <div className="chat2">
                <div className="hello-nabila">Hello Nabila!</div>
              </div>
              <div className="chat3">
                <div className="can-i-see-your-history-lesson-wrapper">
                  <div className="hello-nabila">{`Can i see your history lesson homework? `}</div>
                </div>
                <div className="pm">12:45 PM</div>
              </div>
            </div>
            <div className="chat4">
              <div className="chat5">
                <div className="hello-nabila">Hello Samantha!</div>
              </div>
              <div className="chat6">
                <div className="hello-nabila">
                  <p className="im-not-finished">{`I’m not finished yet, why don’t work `}</p>
                  <p className="im-not-finished">
                    together to finish homework?
                  </p>
                </div>
              </div>
              <div className="pm1">12:45 PM</div>
            </div>
            <div className="profile">
              <div className="placeholder" />
              <div className="name">
                <div className="cci-informacin-container">
                  <p className="im-not-finished">
                    CCI | Información Semanal: PMD - Invitaciones | Próximo Café
                    Literario |
                  </p>
                  <p className="im-not-finished">Café Celta - menú</p>
                </div>
                <div className="online">
                  <div className="online-child" />
                  <div className="enero-9-2024">enero 9, 2024</div>
                </div>
              </div>
            </div>
            <div className="chat-form">
              <div className="rectangle" />
              <div className="type-form">
                <div className="form">
                  <div className="write-your-message">
                    Write your message...
                  </div>
                </div>
                <div className="send-button">
                  <div className="send">Send</div>
                  <img className="sent-icon" alt="" src="/sent.svg" />
                </div>
                <img className="attachment-icon" alt="" src="/attachment.svg" />
              </div>
              <div className="line" />
            </div>
          </div>
          <div className="messages">
            <div className="bg2" />
            <div className="btnviewmore">
              <div className="send">Ver más</div>
            </div>
            <div className="search-bar">
              <div className="text">
                <img className="sent-icon" alt="" src="/magnifier.svg" />
                <div className="hello-nabila">Search here...</div>
              </div>
            </div>
            <div className="frames">
              <div className="chat7">
                <CardContainer
                  cCIInformacinSemanalPMDIn="CCI | Información Semanal: PMD - Invitaciones | Próximo Café Literario | Café Celta - menú"
                  deyaniraAndradeCoeto="Deyanira Andrade Coeto"
                  hace2Das="hace 2 días"
                />
                <CardContainer
                  cCIInformacinSemanalPMDIn="CCI | Circular No. 4, Salida Académica 2 grado"
                  deyaniraAndradeCoeto="Deyanira Andrade Coeto"
                  hace2Das="hace 2 días"
                  propGap="27px"
                  propLeft="368px"
                />
                <CardContainer
                  cCIInformacinSemanalPMDIn="Agenda del 08 al 12 de enero"
                  deyaniraAndradeCoeto="Maria Cristina Parra Carrillo"
                  hace2Das="hace 2 días"
                  propGap="27px"
                  propLeft="368px"
                />
                <CardContainer
                  cCIInformacinSemanalPMDIn="Agenda del 8 al 12 de enero 2024"
                  deyaniraAndradeCoeto="Velia Delgado Montiel"
                  hace2Das="hace 3 dias"
                  propGap="27px"
                  propLeft="367px"
                />
                <CardContainer
                  cCIInformacinSemanalPMDIn="Agenda del 8 al 12 de enero"
                  deyaniraAndradeCoeto="Maria Cristina Parra Carrillo"
                  hace2Das="Hace un mes"
                  propGap="27px"
                  propLeft="357px"
                />
                <CardContainer
                  cCIInformacinSemanalPMDIn="Agenda (January), Monday 8th - Friday 12th"
                  deyaniraAndradeCoeto="Susana Regalado"
                  hace2Das="hace 6 días"
                  propGap="27px"
                  propLeft="368px"
                />
              </div>
              <div className="groups">Groups</div>
            </div>
            <b className="avisos2">Avisos</b>
          </div>
          <div className="border" />
        </div>
      </div>
      <div className="tabs">
        <div className="bg3" />
        <div className="quizzes">
          <img className="tasks-icon" alt="" src="/tasks.svg" />
          <div className="quizzes1">Quizzes</div>
        </div>
        <div className="tareas">
          <img className="check-double-icon" alt="" src="/checkdouble.svg" />
          <div className="tareas1">Tareas</div>
        </div>
        <div className="avisos3">
          <img className="newspaper-icon" alt="" src="/newspaper.svg" />
          <div className="tareas1">Avisos</div>
        </div>
      </div>
    </div>
  );
};

export default InicioV;
