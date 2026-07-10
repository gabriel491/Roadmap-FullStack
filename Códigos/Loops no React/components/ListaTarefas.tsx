export function ListaTarefas() {
  // lista de tarefas simulando um Banco de Dados
  const tarefas = [
    { id: 1, texto: "Estudar TypeScript às 14h", concluida: true },
    { id: 2, texto: "Estudar React às 15h", concluida: false },
    { id: 3, texto: "Fazer o exemplo do método .map()", concluida: true },
    { id: 4, texto: "Tomar café (muito importante)", concluida: true },
    { id: 5, texto: "Consolidar o useState no React", concluida: false },
  ];
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "400px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        fontFamily: "sans-serif",
        margin: "20px auto", // Centraliza na tela
      }}
    >
      <h3 style={{ margin: "0 0 20px 0", color: "#333", textAlign: "center" }}>
        Minhas Tarefas Diárias
      </h3>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {/* O .map(): Ele passa por cada tarefa e cospe um <li> */}
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id} // ◄ OBRIGATÓRIO: O React precisa desse ID único
            style={{
              padding: "12px",
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: tarefa.concluida ? "#f9f9f9" : "#fff",
            }}
          >
            {/* Se a tarefa estiver concluída, ela ganha um risco no texto */}
            <span style={{
                textDecoration: tarefa.concluida ? "line-through" : "none",
                color: tarefa.concluida ? '#aaa' : '#333'
            }}>
                {tarefa.texto}
            </span>

            {/* Um selo visual de status */}
            <span style={{
                fontSize: '12px',
              padding: '3px 8px',
              borderRadius: '12px',
              fontWeight: 'bold',
              backgroundColor: tarefa.concluida ? "#e6f4ea" : "#feefe3",
              color: tarefa.concluida ? "#137333" : "#b06000"
            }}>
                {tarefa.concluida ? "Concluída" : "Pendente"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
