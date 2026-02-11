import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import Menu from "../components/Menu";

export default function Checkout() {
    const location = useLocation();
    const service = location.state?.service;

    const [erro, setErro] = useState("");

    const handleAgendar = () => {
        const usuario = JSON.parse(localStorage.getItem("usuario"));

        if (!usuario) {
            setErro("Faça login para concluir o agendamento.");
            return;
        }

        setErro("");

        console.log("Agendamento realizado!");

    };


    return (
        <div>
            <Menu />

            <Link to="/" style={{ textDecoration: "none" }}>
                <button style={{ ...styles.button, marginLeft: "1.5rem" }}>
                    ⬅ Voltar
                </button>
            </Link>

            <h2 style={styles.h2}>Página de Checkout</h2>

            <div style={styles.container}>
                <h3 style={styles.h3}>{service.title}</h3>

                <img style={styles.image}
                    src={service.image}
                    alt={service.title}
                />

                <p>{service.description}</p>

                <strong style={styles.price}>
                    Preço: R$ {service.price}
                </strong>
                <div style={styles.options}>
                    <label style={styles.label}>Escolha o dia</label>
                    <input type="date" style={styles.input} />

                    <label style={styles.label}>Escolha o horário</label>
                    <input type="time" style={styles.input} />

                    <button style={styles.button} onClick={handleAgendar}>
                        Agendar
                    </button>
                    {erro && <p style={styles.erroAgendamento}>{erro}</p>}

                </div>
            </div>
        </div>
    );
}

const styles = {
      button: {
        display: "flex",
        backgroundColor: "#007fff",
        color: "#f8f8ff",
        padding: "0.5rem",
        border: "none",
        borderRadius: "0.5rem",
        cursor: "pointer",
        fontSize: "1rem",
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
    },
    h2: {
        margin: "1.5rem",
        paddingLeft: "1.5rem",
        color: "#007fff",
        textTransform: "uppercase",
    },
    container: {
        padding: "1rem",
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1rem 2rem 0.5rem 2rem",
        color: "f5f5f5",
    },
    h3: {
        margin: "1.2rem",
        paddingLeft: "1.2rem",
        color: "#212121",
        textTransform: "uppercase",
        fontSize: "1.5rem",
    },
    image: {
        width: "100%",
        maxHeight: "200px",
        objectFit: "contain",
        marginBottom: "1rem",
    },
    description: {
        margin: "1rem 0",
        lineHeight: 1.5,
        color: "#212121",
    },
    price: {
        display: "block",
        marginTop: "1rem",
        fontSize: "1.2rem",
        color: "#B22222222",
    },
    options: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        gap: "1rem",
        marginTop: "2rem",
    },
    label: {
        fontSize: "1rem",
        color: "#212121",
    },
    input: {
        outline: "none",
        border:"none",
        borderBottom: "1px solid #007fff",
        padding: "0.5rem",
        fontSize: "1rem",
        color: "#212121",
    },
    erroAgendamento: {
        margin: "0.5rem 0 0 0",
        padding: "0.75rem 1rem",
        backgroundColor: "#ffe5e5",
        color: "#007fff",
        borderRadius: "8px",
        fontSize: "0.9rem",
    }
};
