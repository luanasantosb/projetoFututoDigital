// src/components/ServiceCard.jsx
export default function ServiceCard({ service }) {
  return (
    <div style={styles.card}>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p style={styles.price}>R$ {service.price}</p>
    </div>
  );
}

const styles = {
    body:{
        backgroundColor:"#212121",
        color:"#fff",
    },
  card: {
    border: "1px solid #555",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#121212",
    color:"#fff",
  },
  price: {
    fontWeight: "bold",
    marginTop: "0.5rem",
  },
};
