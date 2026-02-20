import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import Menu from "../components/Menu";
import '../styles.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "teste@email.com" && password === "123456") {
      const fakeUser = { email };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      navigate("/");
    } else {
      alert("Credenciais inválidas");
    }
  }
  return (
    <div>
      <Menu />
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleLogin}>
          <h2 style={styles.h2}>Entrar na sua conta</h2>

          <label htmlFor="email" style={styles.label}>
            Digite seu e-mail</label>
          <input
            style={styles.input}
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <label htmlFor="senha" style={styles.label}>
            Digite sua senha</label>
          <input
            style={styles.input}
            id="senha"
            type="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" style={styles.button}>Entrar</button>

          <Link
            to="/registro"
            style={{ ...styles.registro, textDecoration: "none" }}>
            Não possui uma conta? Cadastre-se
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Login;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "75vh",
    padding: "1rem",
  },
  h2: {
    margin: "1.5rem",
    paddingLeft: "1.5rem",
    color: "#212121",
    textTransform: "uppercase",
  },
  form: {
    width: "100%",
    maxWidth: "500px",
    padding: "2.5rem",
    borderRadius: "0.5rem",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "1rem",
    marginBottom: "0.5rem",
    color: "#212121",
  },
   input: {
    backgroundColor:"#E1E1E1",
    outline:"none",
    border:"none",
    padding: "0.5rem",
    borderBottom: "1px solid #0033FF",
    marginBottom: "1rem",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#0033FF",
    color: "#F5F5F5",
    padding: "0.5rem",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "0.5rem",
    width: "4rem",
  },
  registro: {
    textAlign: "center",
    marginTop: "1rem",
    textDecoration: "none",
    color: "#0033FF",
    fontSize: "1rem",
  },

};
