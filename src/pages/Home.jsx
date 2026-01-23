import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import '../styles.css';

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
      <h1 style={styles.h1}>Página Inicial</h1>
      <div style={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
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
  },
  h1:{
    paddingLeft:"1.5rem",
    color:"#FFFEF6",
    textTransform:"uppercase",
  },
};
