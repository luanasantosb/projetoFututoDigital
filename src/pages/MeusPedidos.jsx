import { useEffect, useState } from "react";
import Menu from "../components/Menu";
export default function MeusPedidos() {
  return (
    <div>
      <Menu />
      <div style={styles.container}>
        <h2 style={styles.h2}>Meus Pedidos</h2>
        <p style={styles.paragrafo}>Aqui você pode ver todos os seus pedidos.</p>
        <table style={styles.tabela}>
          <thead style={styles.tabelaCabecalho}>
            <tr style={styles.linhaTabela}>
              <th>Número</th>
              <th>Data</th>
              <th>Serviço</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tabelaLinha}>
              <td>12345</td>
              <td>01/01/2024</td>
              <td>Manutenção de Computador</td>
              <td>Aguardando aprovação</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles= {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "75vh",
    padding: "1rem",
    backgroundColor: "#f5f5f5"
  },
  h2: {
    margin: "1.5rem",
    paddingLeft: "1.5rem",
    color: "#212121",
    textTransform: "uppercase",
  },
  paragrafo: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "1.5rem",
  },
  tabela: {
    width: "80%",
    borderCollapse: "collapse",
  },
  tabelaCabecalho: {
    backgroundColor: "#b22",
    color: "#f5f5f5",
  },
  tabelaLinha: {   
    textAlign: "center",
  },
}
