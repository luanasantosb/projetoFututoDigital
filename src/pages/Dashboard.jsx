import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import '../styles.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Dashboard() {
  const [data, setData] = useState({ total: 0, mensal: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.jsonbin.io/v3/b/698e0f3e43b1c97be97a0aca", {
          headers: { "X-Master-Key": "$2a$10$IuPxYHIyj8ksrR2epKQeJOSRYbN2.hp4HKH1n37SXocOfBYlpr2Ty" },
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const result = await res.json();
        console.log("API result:", result); 


        setData(result.record || { total: 0, mensal: [] });
      } catch (err) {
        console.error("Fetch error:", err);
        setData({ total: 0, mensal: [] }); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
    <Menu />
    <div style={styles.container}>
      
      {/* CARD FATURAMENTO */}
      <div style={styles.card}>
        <h3>Faturamento Total</h3>
        <h2>
          {data.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </h2>
      </div>

      {/* GRÁFICO */}
      <div style={styles.chartCard}>
        <h3>Faturamento Mensal</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.mensal || []}>
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip 
              formatter={(value) =>
                value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
              }
            />
            <Bar dataKey="valor" fill="#0033FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
    </div>
  );
}

export default Dashboard;

const styles = {
  container: {
    padding: "2rem",
    display: "grid",
    gap: "2rem",
  },
  card: {
    padding: "1.5rem",
    borderRadius: "8px",
    backgroundColor: "#0033FF",
    color: "#F5F5F5",

  },
  chartCard: {
    padding: "1.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "#F5F5F5",
  },
};