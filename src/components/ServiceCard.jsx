import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
   if (!service || !service.id) return null;
  return (
    <Link 
      to={`/service/${service.id}`} 
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div style={styles.card}>
        <h3>{service.title}</h3>
        <p>R$ {service.price}</p>
      </div>
    </Link>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
  },
};

