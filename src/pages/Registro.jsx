import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import '../styles.css';
function Registro() {
  return (
    <div>
      <Menu />
      <div style={styles.container}>
        <form style={styles.form}>
          <h2 style={styles.h2}>Faça seu cadastro</h2>

          <label htmlFor="nome" style={styles.label}>Nome Completo:</label>
          <input style={styles.input} id="nome" type="text" value="seu nome" />

          <label htmlFor="email" style={styles.label}>Digite seu e-mail</label>
          <input style={styles.input} id="email" type="email" placeholder="seuemail@email.com" />

          <label htmlFor="senha" style={styles.label}>
            Digite sua senha:</label>
          <input style={styles.input} id="senha" type="password" placeholder="Minimo 8 caracteres" />
          
          <label htmlFor="confirmarSenha" style={styles.label}>
            Confirme sua senha:</label>
          <input style={styles.input} id="confirmarSenha" type="password" placeholder="Repita a senha" />

          <button style={styles.button}>
            Cadastrar
          </button>

          <Link
            to="/login"
            style={{ ...styles.login, textDecoration: "none" }}>
            Já tem uma conta? Faça seu login!
          </Link>

        </form>
      </div>
    </div>
  );
}
export default Registro;

const styles = {
    container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "75vh",
  },
  h2: {
    textAlign:"center",
    margin: "0.5rem",
    paddingLeft: "1.5rem",
    color: "#212121",
    textTransform: "uppercase",
  },
  form: {
    marginTop:"0",
    width: "100%",
    maxWidth: "500px",
    padding: "1rem",
    borderRadius: "0.5rem",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "1rem",
    color: "#212121",
    marginTop: "1rem",
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
    width:"6rem",
  },
  login: {
    textAlign: "center",
    marginTop:"1rem",
    textDecoration:"none",
    color:"#0033FF",
    fontSize:"1rem",
  },

};
