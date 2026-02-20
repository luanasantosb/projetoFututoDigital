import { useState } from "react";
import { format } from "date-fns";
import { useNavigate, useLocation, Link } from "react-router-dom";
import '../styles.css';

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const service = location.state?.service;

  const [date, setDate] = useState("");
  const formattedDate = date
    ? format(new Date(date), "dd-MM-yyyy")
    : "";
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
      status: "Pendente",
      email: JSON.parse(user).email
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
      <Link to="/" style={styles.linkStyle}> ⬅ Voltar</Link>
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
        <label style={styles.label}>
          Data
          <input
            style={styles.input}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label style={styles.label}>
          Horário
          <input
            style={styles.input}
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
export default Checkout;
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    gap: "2rem",
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
  card: {
    padding: "1rem",
    textAlign: "center",
    width: "250px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "0.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "250px",
  },
  input: {
    display: "block",
    marginTop: "0.3rem",
    color: "#212121",
    border: "1px solid #0033FF",
  },
  button: {
    fontSize: "1rem",
    padding: "0.5rem",
    backgroundColor: "#0033FF",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
};
