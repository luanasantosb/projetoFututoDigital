import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
   if (!service || !service.id) return null;
  return (
    <div style={styles.card}>
      <Link to={`/service/${service.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div>
          <h3>{service.title}</h3>
          <p>R$ {service.price}</p>
        </div>
      </Link>
      <Link to='./checkout' style={{ textDecoration: "none" }}>
      <button style={styles.button}>Comprar</button>
      </Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #B22",
    borderRadius: "8px",
    padding: "1rem",
    cursor: "pointer",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
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
    width: "6rem",
  },
};

