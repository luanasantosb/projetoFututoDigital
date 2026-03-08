import { useState } from "react";
import { format } from "date-fns";
import Menu from "../components/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles.css";

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const service = location.state?.service;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const formattedDate = date ? format(new Date(date), "dd-MM-yyyy") : "";

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
      setError("Você precisa estar logado para agendar um serviço.");
      return;
    }

    setError("");

    const userData = JSON.parse(user);
    const pedidosSalvos = JSON.parse(localStorage.getItem("orders") || "[]");

    const novoPedido = {
      id: Date.now(),
      servico: service.nome,
      preco: service.preco,
      data: formattedDate,
      horario: time,
      status: "Pendente",
      email: userData.email,
    };

    const pedidosAtualizados = [...pedidosSalvos, novoPedido];
    localStorage.setItem("orders", JSON.stringify(pedidosAtualizados));

    setDate("");
    setTime("");

    navigate("/meuspedidos");

    alert(
      `Agendamento para ${service.nome} em ${formattedDate} às ${time} realizado com sucesso!`
    );
  };

  return (
    <div>
      <Menu />
      <div style={styles.container}>

        <h2 style={styles.h2}>{service.nome}</h2>
        {service.imagem && (
          <img
            src={service.imagem}
            alt={service.nome}
            style={styles.imageStyle}
          />
        )}

        <p style={styles.preco}>
          {Number(service.preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Data
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
    </div>
  );
}
export default Checkout;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "75vh",
    padding: "1rem",
  },
  h2: {
    margin: "1rem",
    textTransform: "uppercase",
    color: "#212121",
  },
  imageStyle: {
    width: "300px",
    borderRadius: "10px",
  },
  preco: {
    fontSize:"1.5rem",
    margin: "1.5rem",
    fontWeight: "700",
  },
  form: {
    padding:"1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "250px",
  },
  label:{
    textAlign:"center",
    fontSize:"1.2rem",
    fontWeight: "700",
  },
  input: {
    width:"15rem",
    height:"1.8rem",
    border:"none",
    fontSize:"1rem",
    display: "block",
    marginTop: "0.3rem",
    color: "#212121",
    borderBottom: "1px solid #0033FF",
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
    color: "#B22222",
  },
};
