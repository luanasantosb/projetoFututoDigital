import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Details() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando detalhes...</p>;

  if (!service) return <p>Serviço não encontrado </p>;


  return (
    
    <div style={styles.container}>
      <h1>{service.title}</h1>
      <img src={service.image} width={200} />
      <p>{service.description}</p>
      <strong style={styles.price}>Preço: R$ {service.price}</strong>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <button style={styles.button}>⬅ Voltar</button>
      </Link>

    </div>
  );
}

const styles = {
  container: {
    padding: "1rem",
    gap: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "1rem 2rem 0.5rem 2rem",
    color:"f5f5f5",
  },
  image: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "contain",
    marginBottom: "1rem",
  },
  description: {
    margin: "1rem 0",
    lineHeight: 1.5,
    color: "#212121",
  },
  button: {
    textDecoration: "none",
    backgroundColor: "#007fff",
    color: "#f8f8ff",
    padding: "0.5rem",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  price: {
    display: "block",
    marginTop: "1rem",
    fontSize: "1.2rem",
    color: "#007fff",
  },
};
