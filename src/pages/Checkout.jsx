import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const service = location.state?.service;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  if (!service) {
    return <p>Serviço não encontrado.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !time) {
      setError("Escolha uma data e um horário.");
      return;
    }

    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/login", {
        state: { date, time, service },
      });
      return;
    }


    const pedidosSalvos = JSON.parse(localStorage.getItem("orders") || "[]");

 
    const novoPedido = {
      id: Date.now(),
      servico: service.nome,
      preco: service.preco,
      data: date,
      horario: time,
      status: "Agendado"
    };

  
    const pedidosAtualizados = [...pedidosSalvos, novoPedido];


    localStorage.setItem("orders", JSON.stringify(pedidosAtualizados));


    setDate("");
    setTime("");


    navigate("/meuspedidos");

    alert(
      `Agendamento para ${service.nome} em ${date} às ${time}, veja o status em meus pedidos.`
    );
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.linkStyle}>⬅ Voltar</Link>
      <div style={styles.card}>
        <img
          src={service.imagem}
          alt={service.nome}
          style={styles.image}
        />
        <h3>{service.nome}</h3>
        <p>R$ {service.preco}</p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Data:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Horário:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" style={styles.button}>
          Agendar
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    gap: "2rem",
  },
  linkStyle: {
    alignSelf: "stretch",
    width: "2.5rem",
    textAlign: "left",
    border: "1px solid #357ec7",
    borderRadius: "5px",
    backgroundColor: "#357ec7",
    color: "#f8f8ff",
    padding: "0.3rem",
    margin: "0.25rem",
    cursor: "pointer",
    textDecoration: "none",
  },
  card: {
    padding: "1rem",
    textAlign: "center",
    width: "250px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "250px",
  },
  button: {
    padding: "0.5rem",
    backgroundColor: "#007fff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
};
