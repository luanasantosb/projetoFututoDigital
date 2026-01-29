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
        <li style={styles.li}>
          <Link style={styles.link} to="/registro">Registro</Link>
        </li>
        <li style={styles.li}>
          <Link style={styles.link} to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
     display: "flex",
    justifyContent:"center",
    padding: "1rem",
    backgroundColor: "#B22222",
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
    color: "#f8f8ff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
