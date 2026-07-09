interface CardSimplesProps {
  nome: string;
  aoComprar: () => void;
}

export function CardSimples({ nome, aoComprar }: CardSimplesProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        margin: "15px",
        maxWidth: "200px",
        backgroundColor: "#fff",
        fontFamily: "sans-serif",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
      }}
    >
      <h3>{nome}</h3>
      <button
        onClick={aoComprar}
        style={{
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
          width: "100%",
          fontWeight: "bold",
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
