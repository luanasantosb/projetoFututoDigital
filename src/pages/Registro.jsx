import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import '../styles.css';
export default function Registro() {
  return (
    <div>
      <Menu />
      <div style={styles.container}>
          <form style={styles.form}>
            <h2 style={styles.h2}>Faça seu cadastro</h2>
            
            <label htmlFor="nome"style={styles.label}>Nome Completo:</label>
            <input id="nome"type="text" value="seu nome" />
            
            <label htmlFor="email"style={styles.label}>Digite seu e-mail</label>
            <input id="email" type="email" placeholder="seu@email.com" />
            
            <label htmlFor="senha"style={styles.label}>
              Digite sua senha:</label>
            <input id="senha" type="password" placeholder="Minimo 8 caracteres"/>

            <label htmlFor="confirmarSenha"style={styles.label}>
              Confirme sua senha:</label>
            <input id="confirmarSenha" type="password" placeholder="Repita a senha"/>

            <button style={styles.button}>
              Cadastrar
            </button>
              
              <Link
              to="/login"
              style={{...styles.login,textDecoration: "none"}}>
              Não possui uma conta? Cadastre-se aqui
            </Link>

          </form>
        </div>
      </div>
  );
}

const styles = {
    h2: {
    margin: "1.5rem",
    paddingLeft: "1.5rem",
    color: "#212121",
    textTransform: "uppercase",
  },

    container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "75vh",
    padding: "1rem",
    backgroundColor: "#f5f5f5"
  },
  form: {
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#f5f5f5",
    padding: "2.5rem",
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
    border:"none",
    outline:"none",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    borderBottom: "1px solid #212121",
    marginBottom: "1rem",
    fontSize: "1rem",
    backgroundColor: "#f8f8ff",
  },
  button: {
    backgroundColor: "#B22",
    color: "#f8f8ff",
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
    color:"#B22",
    fontSize:"1rem",
  },
  
};
