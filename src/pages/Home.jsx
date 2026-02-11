import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import Menu from "../components/Menu";

export default function Home() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando serviços...</p>;

  return (
    <div>
      <Menu />
      <h2 style={styles.h2}>SERVIÇOS</h2>
      <div style={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} 
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    padding: "1.5rem",
    backgroundColor: "#f8f8ff",
  },

  h2: {
    margin: "1.5rem",
    paddingLeft: "1.5rem",
    color: "#212121",
    textTransform: "uppercase",
  },

  card: {
    border: "1px solid #007fff",
    borderRadius: "10px",
    padding: "1rem",
    backgroundColor: "#f8f8ff",
    boxShadow: "0 2px 6px rgba(0.0.0.0,1)",
  },
};

