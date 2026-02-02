import { useState } from "react";

function Agendamento() {
  const [erro, setErro] = useState("");

  const handleAgendar = () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
      setErro("Faça login para concluir o agendamento.");
      return;
    }

    setErro("");
    console.log("Agendamento feito!");
  };

  return (
    <div>
      <button onClick={handleAgendar}>
        Agendar
      </button>

      {erro && <p className="erro-agendamento">{erro}</p>}
    </div>
  );
}

export default Agendamento;
