import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div style={styles.card}>
      <h3>{service.nome}</h3>
      R$ {service.preco}
      
      <div style={styles.buttonsContainer}>
      <Link to={`/detalhes/${service.id}`}>
        <button style={styles.button}>Ver detalhes</button>
      </Link>
      <Link to={`/Checkout/${service.id}`}>
      <button style={styles.button}>Contratar</button>
      </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #007fff",
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
    flexDirection:"row",
    marginTop: "0.5rem",
    gap:"0.5rem"
  },
    button: {
    backgroundColor: "#007fff",
    color: "#f8f8ff",
    padding: "0.5rem",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: "0.8rem",
    marginTop: "0.5rem",
    width: "6rem",
  },
};

