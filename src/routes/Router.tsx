import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import ProntaEntrega from "../pages/ProntaEntrega";
import Encomendas from "../pages/Encomendas";
import Novidades from "../pages/Novidades";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pronta-entrega" element={<ProntaEntrega />} />
        <Route path="/encomendas" element={<Encomendas />} />
        <Route path="/novidades" element={<Novidades />} />
      </Routes>
    </BrowserRouter>
  );
}
