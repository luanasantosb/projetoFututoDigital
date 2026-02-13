import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles.css'

export default function Details() {
  const { id } = useParams();


  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(
          "https://api.jsonbin.io/v3/b/698e0f3e43b1c97be97a0aca",
          {
            headers: {
              "X-Master-Key": "$2a$10$IuPxYHIyj8ksrR2epKQeJOSRYbN2.hp4HKH1n37SXocOfBYlpr2Ty",
            },
          }
        );

        if (!res.ok) throw new Error("Erro ao carregar serviço");

        const data = await res.json();

        const found = data.record.find((s) => s.id === parseInt(id));
        setService(found || null);
      } catch (err) {
        console.error(err);
        setService(null);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <p>Carregando serviço...</p>;
  if (!service) return <p>Serviço não encontrado.</p>;

  return (

    <div style={styles.container}>
      <Link to="/" style={styles.linkStyle}>⬅ Voltar</Link>
      <h2 style={styles.h2}>{service.nome}</h2>
      {service.imagem && (
        <img
          src={service.imagem}
          alt={service.nome}
          style={styles.imageStyle}
        />
      )}

      <p style={styles.preco}>Preço: R$ {service.preco}</p>
      <p>{service.detalhes}</p>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "75vh",
    padding: "1rem",
  },

  linkStyle: {
    alignSelf: "stretch",
    width: "2.5rem",
    textAlign: "left",
    border: "1px solid #007fff",
    borderRadius: "5px",
    backgroundColor: "#007fff",
    color: "#f8f8ff",
    padding: "0.3rem",
    margin: "0.25rem",
    cursor: "pointer",
    textDecoration: "none",
  },
  h2: {
    margin: "0.5rem",
    textTransform: "uppercase",
    color: "#212121",
  },
  imageStyle: {
    width: "300px",
    borderRadius: "10px",
  },
  preco: {
    margin: "1rem",
    fontWeight: "700",
  }
}