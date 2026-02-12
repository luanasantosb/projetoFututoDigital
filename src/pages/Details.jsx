import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Details() {
  const { id } = useParams();
  const [servico, setServico] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/servicos/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Serviço não encontrado");
        return res.json();
      })
      .then(data => {
        setServico(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando detalhes...</p>;
  if (!servico) return <p>Serviço não encontrado</p>;

  return (
    <div style={styles.container}>
      <h1>{servico.nome}</h1>

      {/* Imagem com estilo seguro */}
      <img
        src={servico.imagem}
        alt={servico.nome}
        style={styles.image}
      />

      <p style={styles.description}>{servico.detalhes}</p>
      <strong style={styles.price}>Preço: R$ {servico.preco}</strong>

      <Link to="/" style={{ textDecoration: "none" }}>
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
    color: "#212121",
  },
  image: {
    width: "300px",       // largura fixa
    maxHeight: "300px",   // altura máxima
    objectFit: "contain", // mantém proporção sem cortar
    marginBottom: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  },
  description: {
    margin: "1rem 0",
    lineHeight: 1.5,
    textAlign: "center",
    color: "#212121",
  },
  button: {
    textDecoration: "none",
    backgroundColor: "#007fff",
    color: "#f8f8ff",
    padding: "0.5rem 1rem",
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
