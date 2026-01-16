// src/components/Menu.jsx
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
          <Link style={styles.link} to="/meus-pedidos">Meus Pedidos</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "1rem",
    backgroundColor: "#212121",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
  },
  li: {},
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
