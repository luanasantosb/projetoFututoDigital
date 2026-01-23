import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import MeusPedidos from "./pages/MeusPedidos";
import Registro from "./pages/Registro";
import ServiceDetails from "./pages/ServiceDetails";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/meus-pedidos" element={<MeusPedidos />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
  );
}

export default App;
