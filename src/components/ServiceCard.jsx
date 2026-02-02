import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
   if (!service || !service.id) return null;
  return (
    <div style={styles.card}>
      
        <div>
          <h3>{service.title}</h3>
          <p>R$ {service.price}</p>
        </div>
  
  <div style={styles.buttonsContainer}>
  <Link to={`/service/${service.id}`} style={{ textDecoration: "none" }}><button style={styles.button}>Ver +</button></Link>

      <Link to="/checkout"
      state={{ service }} style={{ textDecoration: "none" }}>
      <button style={styles.button}>Contratar</button>
      </Link>
      </div>
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
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "1rem",
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

