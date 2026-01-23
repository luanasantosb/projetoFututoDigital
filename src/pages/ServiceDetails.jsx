import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ServiceDetails() {
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
  if (!service) return <p>Produto não encontrado </p>;

  return (
    <div style={styles.container}>
      <Link to="/">⬅ Voltar</Link>

      <img src={service.image} alt={service.title} style={styles.image} />

      <h1>{service.title}</h1>

      <p style={styles.description}>{service.description}</p>

      <h2> R$ {service.price}</h2>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
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
  },
};
