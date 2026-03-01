import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Registro from "./pages/Registro";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout"
import MeusPedidos from "./pages/MeusPedidos";
import PrivateRoute from "./pages/PrivateRoute";
import Dashboard from"./pages/Dashboard";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/:id" element={<Details />} />
         <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/registro" element={<Registro />} />
         <Route path="/checkout"element={<Checkout />}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/meuspedidos" element={<PrivateRoute><MeusPedidos />
        </PrivateRoute>} />
      </Routes>
  );
}

export default App;
