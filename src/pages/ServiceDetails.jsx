import { useParams } from "react-router-dom";
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

  if (!service) return <p>Serviço não encontrado 😢</p>;

  return (
    <div>
      <h1>{service.title}</h1>
      <img src={service.image} width={200} />
      <p>{service.description}</p>
      <strong>Preço: R$ {service.price}</strong>
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
