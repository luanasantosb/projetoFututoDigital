import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import '../styles.css';
export default function Login() {
  return (
    <div>
      <h1 style={styles.h1}>Login</h1>
      <div style={styles.container}>
        
        <fieldset style={styles.fieldset}>
          <form style={styles.form}>
            <h2 style={styles.h2}>Faça seu login</h2>
            <label style={styles.label}>Digite seu e-mail</label>
            <input className="input" type="text" />

            <label style={styles.label}>Digite sua senha:</label>
            <input className="input" type="password" />

            <input style={styles.submit} type="submit" value="Logar" />
          </form>

          <span>Não possui conta? Castre-se aqui!</span>
        </fieldset>
      </div>
    </div>
  );
}

const styles = {
  h1: {
    margin: "1.5rem",
    paddingLeft: "1.5rem",
    color: "blue",
    textTransform: "uppercase",
  },
  h2: {
    margin: "1.5rem",
    paddingLeft: "1.5rem",
    color: "#FFFEF6",
    textTransform: "uppercase",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
  },
  fieldset:{
    display: "inline-block",
    width: "30%",
    height: "auto",  
    padding: "2rem",
    borderRadius:"24px",
    border:"2px solid #B22222",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    border: "none",
    borderBottom: "1px solid red;",
    outline: "none",
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
  }
};
