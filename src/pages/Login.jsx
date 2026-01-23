import Menu from "../components/Menu";
import '../styles.css';
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <Menu />
      <div style={styles.container}>
        <fieldset style={styles.fieldset}>
          <form style={styles.form}>
            <h2 style={styles.h2}>Faça seu login</h2>

            <label style={styles.label}>Digite seu e-mail</label>
            <input className="input" type="text" />

            <label style={styles.label}>Digite sua senha:</label>
            <input className="input" type="password" />

            <input className="btn" type="submit" value="Entrar" />

            <Link
              to="/registro"
              style={{...styles.registro,textDecoration: "none"}}>
              Não possui uma conta? Cadastre-se aqui
            </Link>
          </form>

        </fieldset>
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
    minHeight: "70vh",
  },
  fieldset: {
    display: "inline-block",
    width: "30%",
    height: "auto",
    padding: "2rem",
    borderRadius: "2px",
    border: "1px solid #B22222",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
  },
  label: {
    fontSize: "1.2rem",
  },
  submit:
  {
    color: "#fffef6",
    backgroundColor: "#B22222",
    padding: "1rem 4rem",
    outline: "none",
    border: "none",
    borderRadius: "2px",
    fontSize: "1rem",
  },
  registro:
  {
    color: "red",
    marginTop: "1rem",
    gap: "1.2rem",
    padding: "1rem 4rem",
    textDecoration: "none",
    color: "inherit"
  },
}
