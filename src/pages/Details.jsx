import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles.css'

function Details() {
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
export default Details;
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
    whiteSpace: "nowrap",
    display: "flex",
    alignSelf: "stretch",
    gap: "0.5rem",
    width: "3.5rem",
    padding: "0.5rem",
    margin: "0.25rem 0",
    fontSize: "1rem",
    textAlign: "left",
    textDecoration: "none",
    backgroundColor: "#0033FF",
    border: "1px solid #0033FF",
    borderRadius: "0.5rem",
    color: "#F5F5F5",
    cursor: "pointer",
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