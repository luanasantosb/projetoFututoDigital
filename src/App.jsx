import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Registro from "./pages/Registro";
import Details from "./pages/Details";
import PrivateRoute from "./pages/PrivateRoute";
import Dashboard from"./pages/Dashboard";
import Checkout from "./pages/Checkout";
import MeusPedidos from "./pages/MeusPedidos";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/:id" element={<Details />} />
         <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
         <Route path="/checkout"element={<Checkout />}/>
         <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
         <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
         <Route path="/meuspedidos" element={<PrivateRoute><MeusPedidos />
        </PrivateRoute>} />
      </Routes>
  );
}

export default App;
