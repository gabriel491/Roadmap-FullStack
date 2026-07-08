import { useState } from "react";

export function GeradorCracha() {
  const [nome, setNome] = useState("");

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "350px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        fontFamily: "sans-serif",
        margin: "15px",
      }}
    >
      <h4 style={{ margin: "0 0 5px 0", color: "#555" }}>
        Diga-nos o seu nome:
      </h4>

      {/* Campo de Entrada de Texto */}
      <input
        type="text"
        placeholder="Digite aqui..."
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px",
          marginBottom: "20px",
          outline: "none",
        }}
      />

      {/* O Crachá Visual Visual */}
      <div style={{
        backgroundColor: '#0070f3',
        color: '#fff',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(135deg, #0070f3 0%, #004ba0 100%)'
      }}>

        <span style={{ fontSize: '11px', letterSpacing: '2px', fontWeight: 'bold', opacity: 0.8}}>VISITANTE COLABORADOR</span>

        {/* Mostra o nome digitado. Se estiver vazio, mostra um texto padrão */}
        <h2 style={{ margin: '10px 0 0 0', minHeight: '32px', wordBreak: 'break-word' }}>
            {/* trim remove espaços em branco no início ou no final */}
            {nome.trim() !== "" ? nome : "Seu Nome Aqui"}
        </h2>
      
      </div>



    </div>
  );
}
