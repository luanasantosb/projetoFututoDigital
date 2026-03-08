import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import "../styles.css";

function Dashboard() {
  const [data, setData] = useState({ total: 0 });
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.jsonbin.io/v3/b/698e0f3e43b1c97be97a0aca",
          {
            headers: {
              "X-Master-Key":
                "$2a$10$IuPxYHIyj8ksrR2epKQeJOSRYbN2.hp4HKH1n37SXocOfBYlpr2Ty",
            },
          }
        );

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const result = await res.json();
        console.log("API result:", result);

        setData(result.record?.[0] || { total: 0 });
      } catch (err) {
        console.error("Fetch error:", err);
        setData({
          total: Number(result.record?.[0]?.total || 0),
        });
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
        <div style={styles.buttonsContainer}>
          <button onClick={handleLogout} style={styles.button}>
            Logout
          </button>
        </div>

        <div style={styles.card}>
          <h3>Faturamento Total</h3>
          <h2>
            {Number(data?.total || 0).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
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