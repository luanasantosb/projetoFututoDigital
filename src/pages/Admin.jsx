import { useEffect, useState } from "react";
import Menu from "../components/Menu";

export default function Admin() {
  const [pedidos, setPedidos] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    // Simulação de API
    const pedidosMock = [
      {
        id: 12345,
        data: "01/01/2024",
        servico: "Manutenção de Computador",
        status: "Aguardando aprovação",
      },
      {
        id: 12346,
        data: "03/01/2024",
        servico: "Formatação",
        status: "Aprovado",
      },
      {
        id: 12347,
        data: "05/01/2024",
        servico: "Troca de HD",
        status: "Finalizado",
      },
    ];

    setPedidos(pedidosMock);
  }, []);

  const pedidosFiltrados = pedidos.filter((pedido) =>
    pedido.servico.toLowerCase().includes(busca.toLowerCase())
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Aguardando aprovação":
        return styles.statusPendente;
      case "Aprovado":
        return styles.statusAprovado;
      case "Finalizado":
        return styles.statusFinalizado;
      default:
        return {};
    }
  };

  return (
    <div>
      <Menu />
      <div style={styles.container}>
        <h2 style={styles.h2}>Pedidos Recentes</h2>
        <p style={styles.paragrafo}>
          Aqui você pode visualizar todos os pedidos cadastrados.
        </p>

        <input
          type="text"
          placeholder="Buscar por serviço..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={styles.input}
        />

        <table style={styles.tabela}>
          <thead style={styles.tabelaCabecalho}>
            <tr>
              <th>Número</th>
              <th>Data</th>
              <th>Serviço</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pedidosFiltrados.map((pedido) => (
              <tr key={pedido.id} style={styles.tabelaLinha}>
                <td>{pedido.id}</td>
                <td>{pedido.data}</td>
                <td>{pedido.servico}</td>
                <td>
                  <span style={{ ...styles.statusBase, ...getStatusStyle(pedido.status) }}>
                    {pedido.status}
                  </span>
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "75vh",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
  },
  h2: {
    margin: "1rem",
    color: "#212121",
    textTransform: "uppercase",
  },
  paragrafo: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "1rem",
  },
  input: {
    width: "80%",
    padding: "0.7rem",
    marginBottom: "1.5rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  tabela: {
    width: "80%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
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
    
    color: "#856404",
  },
  statusAprovado: {

    color: "#155724",
  },
  statusFinalizado: {
    color: "#004085",
  },
};


