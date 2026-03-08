import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link style={styles.link} to="/">Home</Link>
        </li>
        <li style={styles.li}>
          <Link style={styles.link} to="/login">Login</Link>
        </li>
        <li style={styles.li}>
          <Link style={styles.link} to="/admin">Admin</Link>
        </li>
        <li style={styles.li}>
          <Link style={styles.link} to="/meuspedidos">Meus Pedidos</Link>
        </li>
        <li style={styles.li}>
          <Link style={styles.link} to="/registro">Registro</Link>
        </li>
        <li style={styles.li}>
          <Link style={styles.link} to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
     display: "flex",
    justifyContent:"center",
    padding: "2rem",
    backgroundColor: "#0033FF",
  },
  ul: {
    fontSize:"1.5rem",
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#f5f5f5",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
