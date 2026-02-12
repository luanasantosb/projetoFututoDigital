import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import MeusPedidos from "./pages/MeusPedidos";
import Registro from "./pages/Registro";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/meus-pedidos" element={<MeusPedidos />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
  );
}

export default App;
