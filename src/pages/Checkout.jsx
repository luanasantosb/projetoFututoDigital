import { Link } from "react-router-dom";
import Menu from "../components/Menu";
function Checkout() {
    return (
        <div>
            <Menu />
            <h2 style={styles.h2}>Página de Checkout - Em construção!</h2>
            <div style={styles.container}>
                <h3>{service.title}</h3>
                <img src={service.image} width={200} />
                <p>{service.description}</p>
                <strong style={styles.price}>Preço: R$ {service.price}</strong>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button style={{ ...styles.button, marginLeft: "1.5rem" }}>⬅ Voltar</button>
            </Link>
        </div>
    );
}
export default Checkout;

const styles = {
    h2: {
        margin: "1.5rem",
        paddingLeft: "1.5rem",
        color: "#212121",
        textTransform: "uppercase",
    },
    button: {
        textDecoration: "none",
        backgroundColor: "#B22",
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
}