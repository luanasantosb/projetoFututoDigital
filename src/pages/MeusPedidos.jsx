import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MeusPedidos() {
  const navigate = useNavigate();

  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div style={styles.container}>
      <div style={styles.buttonsContainer}>
        <Link to="/checkout" style={styles.linkStyle}>
          Ir para Checkout
        </Link>

        <button onClick={handleLogout} style={styles.button}>
          Logout
        </button>
      </div>

      <h1 style={styles.h1}>Meus Pedidos</h1>

      {orders.length === 0 ? (
        <p>Você ainda não possui pedidos.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Serviço</th>
              <th style={styles.th}>Pedido</th>
              <th style={styles.th}>Data</th>
              <th style={styles.th}>Horário</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Preço</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td style={styles.td}>{order.servico}</td>
                <td style={styles.td}>#{order.id}</td>
                <td style={styles.td}>{order.data}</td>
                <td style={styles.td}>{order.horario}</td>
                <td style={styles.td}>{order.status}</td>
                <td style={styles.td}>R$ {order.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MeusPedidos;

const styles = {
  container: {
    padding: "2rem",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem",
  },

  th: {
    backgroundColor:"#357ec7",
    borderBottom: "2px solid #357ec7",
    textAlign: "left",
    padding: "4px",
  },

  td: {
    borderBottom: "1px solid #eee",
    padding: "8px",
  },

  buttonsContainer: {
    width: "100%",
    justifyContent: "flex-start",
    margin: "0.8rem 0",
    gap: "0.8rem",
    display: "flex",
    flexDirection: "row",
  },
  linkStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "9rem",
    height: "2.2rem",
    border: "1px solid #357ec7",
    borderRadius: "5px",
    backgroundColor: "#357ec7",
    color: "#f8f8ff",
    cursor: "pointer",
    textDecoration: "none",
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "5rem",
    height: "2.2rem",
    border: "1px solid #B22222",
    borderRadius: "5px",
    backgroundColor: "#B22222",
    color: "#f8f8ff",
    cursor: "pointer",
  },

  h1: {
    margin: "1.5rem 0",
    color: "#212121",
    textAlign: "center",
  },
};
