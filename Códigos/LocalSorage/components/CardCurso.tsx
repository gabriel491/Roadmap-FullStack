interface CardCursoProps {
  id: number; // ◄ Precisamos do ID para saber qual curso excluir
  titulo: string;
  categoria: string;
  horas: number;
  onExcluir: (id: number) => void; // ◄ Função que avisa o pai passando o ID
}

export function CardCurso({
  id,
  titulo,
  categoria,
  horas,
  onExcluir,
}: CardCursoProps) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        width: "200px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <span
          style={{
            fontSize: "11px",
            backgroundColor: "#e1f5fe",
            color: "#0288d1",
            padding: "3px 8px",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          {categoria}
        </span>

        <h3
          style={{ margin: "10px 0 15px 0", color: "#333", fontSize: "18px" }}
        >
          {titulo}
        </h3>
      </div>

      <div style={{ fontSize: "13px", color: "#777", marginBottom: '15px' }}>
        ⏱️ Duração: <strong>{horas}h</strong>
      </div>

      {/* Botão de excluir */}
      <button
        onClick={() => onExcluir(id)} // ◄ Dispara a função passando o ID deste card
        style={{
            backgroundColor: '#ff4d4d',
            color: '#fff',
            border: 'none',
            padding: '6px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            fontWeight: 'bold'
        }}
      >
        🗑️ Excluir Curso
      </button>
    </div>
  );
}
