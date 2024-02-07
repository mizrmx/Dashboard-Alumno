import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import EspecialidadesTaller from "./pages/EspecialidadesTaller";
import Login from "./pages/Login";
import Materia from "./pages/Materia";
import PolticasDevolucin from "./pages/PolticasDevolucin";
import AvisoDePrivacidad from "./pages/AvisoDePrivacidad";
import FacturacinEmitida from "./pages/FacturacinEmitida";
import EstadoDeCuenta from "./pages/EstadoDeCuenta";
import Boleta from "./pages/Boleta";
import InicioV from "./pages/InicioV";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/materia":
        title = "";
        metaDescription = "";
        break;
      case "/polticas-devolucin":
        title = "";
        metaDescription = "";
        break;
      case "/aviso-de-privacidad":
        title = "";
        metaDescription = "";
        break;
      case "/facturacin-emitida":
        title = "";
        metaDescription = "";
        break;
      case "/estado-de-cuenta":
        title = "";
        metaDescription = "";
        break;
      case "/boleta":
        title = "";
        metaDescription = "";
        break;
      case "/inicio-v2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<EspecialidadesTaller />} />
      <Route path="/login" element={<Login />} />
      <Route path="/materia" element={<Materia />} />
      <Route path="/polticas-devolucin" element={<PolticasDevolucin />} />
      <Route path="/aviso-de-privacidad" element={<AvisoDePrivacidad />} />
      <Route path="/facturacin-emitida" element={<FacturacinEmitida />} />
      <Route path="/estado-de-cuenta" element={<EstadoDeCuenta />} />
      <Route path="/boleta" element={<Boleta />} />
      <Route path="/inicio-v2" element={<InicioV />} />
    </Routes>
  );
}
export default App;
