import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles.css';

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
        <Link to="/" style={styles.linkStyle}>
          Voltar ao inicio
        </Link>

        <button onClick={handleLogout} style={styles.button}>
          Logout
        </button>
      </div>

      <h2 style={styles.h2}>Meus Pedidos</h2>

      {orders.length === 0 ? (
        <p>Você ainda não possui pedidos.</p>
      ) : (
        <table style={styles.tabela}>
          <thead style={styles.tabelaCabecalho}>
            <tr>
              <th>Serviço</th>
              <th>Pedido</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Status</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.servico}</td>
                <td>#{order.id}</td>
                <td>{order.data}</td>
                <td>{order.horario}</td>
                <td>{order.status}</td>
                <td>R$ {order.preco}</td>
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
  h2: {
    margin: "1rem",
    color: "#212121",
    textTransform: "uppercase",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "75vh",
    padding: "2rem",
    backgroundColor: "#F5F5F5",
  },
  tabela: {
    width: "80%",
    borderCollapse: "collapse",
    backgroundColor: "#F5F5F5",
    overflow: "hidden",
  },
   tabelaCabecalho: {
    backgroundColor: "#0033FF",
    color: "#F5F5F5",
  },

  th: {
    backgroundColor: "#0033FF",
    borderBottom: "2px solid #0033FF",
    textAlign: "left",
    padding: "0.5rem",
    color: "#F5F5F5"
  },

  td: {
    backgroundColor: "#F5F5F5",
    borderBottom: "1px solid #F5F5F5",
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
    border: "1px solid #0033FF",
    borderRadius: "5px",
    backgroundColor: "#0033FF",
    color: "#F5F5F5",
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
    borderRadius: "0.5rem",
    backgroundColor: "#B22222",
    color: "#F5F5F5",
    cursor: "pointer",
  },

};
