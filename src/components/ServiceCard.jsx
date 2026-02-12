import { Link } from "react-router-dom";
export default function ServiceCard({ service }) {
 
  return (
    <div style={cardStyle}>
      {service.imagem && (
        <img src={service.imagem} alt={service.nome} style={imgStyle} />
      )}
      <h3>{service.nome}</h3>
      <p>Preço: R$ {service.preco}</p>
      {service.detalhes && <p>{service.detalhes}</p>}
    </div>
  );
}

 const cardStyle = {
    border: "1px solid #007fff",
    borderRadius: 10,
    padding: 15,
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#f5f5f5",
  };

  const imgStyle = {
    width: "100%",
    height: 150,
    objectFit: "cover",
    borderRadius: 5,
    marginBottom: 10,
  };