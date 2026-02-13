import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import Menu from "../components/Menu";
import '../styles.css'

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
      <h1 style={styles.h1}>ContrataFácil</h1>
      <h2 style={styles.h2}>SERVIÇOS</h2>
      <div style={styles.grid}>
        {services.map((service) => (
          <div key={service.id}
            style={{ display: "flex", flexDirection: "column" }}>
            <ServiceCard service={service} />

            <div style={styles.buttonsContainer}>

              <Link to={`/servicos/${service.id}`} style={styles.linkStyle}>
                Ver detalhes
              </Link>

              <Link
                to="/checkout"
                state={{ service }}
                style={styles.linkStyle}
              >
                Contratar
              </Link>



            </div>
          </div>
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

  h1: {
    margin: "1.5rem",
    paddingLeft: "2rem",
    color: "#007fff",
  },

  h2: {
    margin: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#212121",
    textTransform: "uppercase",
  },

  card: {
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 2px 6px rgba(0.0.0.0,1)",
  },

  buttonsContainer: {
    justifyContent: "space-evenly",
    margin: "0.5rem",
    gap: "0.5rem",
    display: "flex",
    flexDirection: "row",
  },

  linkStyle: {
    display: "inline-block",
    border: "1px solid #007fff",
    borderRadius: "4px",
    backgroundColor: "#007fff",
    color: "#f8f8ff",
    padding: "0.5rem 1rem",
    margin: "0.25rem",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "none",
  },

};

