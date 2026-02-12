import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import Menu from "../components/Menu";

export default function Home() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("https://api.jsonbin.io/v3/b/698e0f3e43b1c97be97a0aca", {
          headers: {
            "X-Master-Key": "$2a$10$IuPxYHIyj8ksrR2epKQeJOSRYbN2.hp4HKH1n37SXocOfBYlpr2Ty" 
          }
        });

        if (!res.ok) throw new Error("Erro ao carregar serviços");
        const data = await res.json();

        setServices(data.record);
      } catch (err) {
        console.error(err);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p>Carregando serviços...</p>;
  if (!services.length) return <p>Nenhum serviço encontrado.</p>;

  return (
    <div>
      <Menu />
      <h2 style={styles.h2}>SERVIÇOS</h2>
      <div style={styles.grid}>
        {services.map((servico) => (
          <ServiceCard key={servico.id} service={servico} />
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

