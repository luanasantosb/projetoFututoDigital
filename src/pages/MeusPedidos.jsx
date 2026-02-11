import { useEffect, useState } from "react";
import Menu from "../components/Menu";

export default function Admin() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pedidos")
      .then((res) => res.json())
      .then((data) => setPedidos(data));
  }, []);

  const atualizarStatus = async (id, novoStatus) => {
    try {
      await fetch(`http://localhost:3000/pedidos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: novoStatus }),
      });

      setPedidos((prevPedidos) =>
        prevPedidos.map((pedido) =>
          pedido.id === id ? { ...pedido, status: novoStatus } : pedido
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar pedido:", error);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Aguardando aprovação":
        return styles.statusPendente;
      case "Aprovado":
        return styles.statusAprovado;
      case "Recusado":
        return styles.statusRecusado;
      default:
        return {};
    }
  };

  return (
    <div>
      <Menu />
      <div style={styles.container}>
        <h2 style={styles.h2}>Pedidos</h2>

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
            {pedidos.map((pedido) => (
              <tr key={pedido.id} style={styles.tabelaLinha}>
                <td>{pedido.id}</td>
                <td>{pedido.data}</td>
                <td>{pedido.servico}</td>
                <td>
                  <span style={{ ...styles.statusBase, ...getStatusStyle(pedido.status) }}>
                    {pedido.status}
                  </span>
                </td>
                <td>
                  {pedido.status?.toLowerCase().trim() === "aguardando aprovação" && (

                    <>
                      <button
                        style={styles.botaoAprovar}
                        onClick={() => atualizarStatus(pedido.id, "Aprovado")}
                      >
                        Aprovar
                      </button>
                      <button
                        style={styles.botaoRecusar}
                        onClick={() => atualizarStatus(pedido.id, "Recusado")}
                      >
                        Recusar
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#f5f5f5",
    minHeight: "75vh",
  },
  h2: {
    marginBottom: "1rem",
  },
  tabela: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
  },
  tabelaCabecalho: {
    backgroundColor: "#007fff",
    color: "#fff",
  },
  tabelaLinha: {
    textAlign: "center",
    borderBottom: "1px solid #eee",
  },
  statusBase: {
    padding: "6px 10px",
    borderRadius: "6px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
  statusPendente: {
    backgroundColor: "#fff3cd",
    color: "#856404",
  },
  statusAprovado: {
    backgroundColor: "#d4edda",
    color: "#155724",
  },
  statusRecusado: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
  },
  botaoAprovar: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    marginRight: "5px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  botaoRecusar: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
