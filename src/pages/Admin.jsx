import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import '../styles.css';

function Admin() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const pedidosSalvos = JSON.parse(localStorage.getItem("orders") || "[]");
    setPedidos(pedidosSalvos);
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pendente":
        return styles.statusPendente;
      case "Aprovado":
        return styles.statusAprovado;
      case "Finalizado":
        return styles.statusFinalizado;
      default:
        return {};
    }
  };
  function aprovarPedido(id) {
    const pedidosAtualizados = pedidos.map((pedido) =>
      pedido.id === id
        ? { ...pedido, status: "Aprovado" }
        : pedido
    );

    setPedidos(pedidosAtualizados);
    localStorage.setItem("orders", JSON.stringify(pedidosAtualizados));
  }

  function recusarPedido(id) {
    const pedidosAtualizados = pedidos.map((pedido) =>
      pedido.id === id
        ? { ...pedido, status: "Recusado" }
        : pedido
    );

    setPedidos(pedidosAtualizados);
    localStorage.setItem("orders", JSON.stringify(pedidosAtualizados));
  }

      function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div>
      <Menu />
      <div style={styles.container}>
        <div style={styles.buttonsContainer}>
        <button onClick={handleLogout} style={styles.button}>
          Logout
        </button>
      </div>

        <h2 style={styles.h2}>Pedidos Recentes</h2>
        <p style={styles.paragrafo}>
          Aqui você pode visualizar todos os pedidos cadastrados.
        </p>

        <table style={styles.tabela}>
          <thead style={styles.tabelaCabecalho}>
            <tr>
              <th>Número</th>
              <th>Data</th>
              <th>Serviço</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "10px" }}>
                  Nenhum pedido encontrado.
                </td>
              </tr>
            ) : (
              pedidos.map((pedido) => (
                <tr key={pedido.id} style={styles.tabelaLinha}>
                  <td>{pedido.id}</td>
                  <td>{pedido.data}</td>
                  <td>{pedido.servico}</td>
                  <td>
                    <span
                      style={{
                        ...styles.statusBase,
                        ...getStatusStyle(pedido.status),
                      }}
                    >
                      {pedido.status}
                    </span>
                  </td>
                  <td>
                    {pedido.status === "Pendente" && (
                      
                      <div style={styles.containerButtons}>
                        <button onClick={() => aprovarPedido(pedido.id)} style={styles.botaoAprovar}>
                          Aprovar </button>

                        <button onClick={() => recusarPedido(pedido.id)} style={styles.botaoRecusar}>
                          Recusar </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>

      </div>
    </div>
  );
}
export default Admin;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "75vh",
    padding: "2rem",
    backgroundColor: "#F5F5F5",
  },
  h2: {
    margin: "1rem",
    color: "#212121",
    textTransform: "uppercase",
  },
  paragrafo: {
    fontSize: "1rem",
    color: "#212121",
    marginBottom: "1rem",
  },
  input: {
    width: "80%",
    padding: "0.7rem",
    marginBottom: "1.5rem",
    border: "1px solid #212121",
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
  tabelaLinha: {
    textAlign: "center",
    borderBottom: "1px solid #0033FF",
  },
  statusBase: {
    padding: "6px 10px",
    borderRadius: "6px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
  containerButtons: {
    width: "100%",
    justifyContent: "center",
    margin: "0.8rem 0",
    gap: "0.8rem",
    display: "flex",
    flexDirection: "row",
  },
  botaoAprovar: {
    color: "#FFF",
    padding: "0.1rem",
    backgroundColor: "#0033FF",
    border: "1px solid #0033FF",
  },
  botaoRecusar: {
    color: "#FFF",
    padding: "0.1rem",
    backgroundColor: "#B22222",
    border: "1px solid #B22222",
  },

  statusPendente: {
    color: "#856404",
  },
  statusAprovado: {

    color: "#155724",
  },
  statusFinalizado: {
    color: "#004085",
  },
    buttonsContainer: {
    width: "100%",
    justifyContent: "flex-start",
    margin: "0.8rem 0",
    gap: "0.8rem",
    display: "flex",
    flexDirection: "row",
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


