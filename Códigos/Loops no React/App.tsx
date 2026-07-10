import { ListaTarefas } from "./components/ListaTarefas";

export function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>🔄 Aprendendo Loops no React</h1>
      <p style={{ textAlign: "center", color: "#666" }}>
        Transformando um Array de objetos em elementos visuais usando o método
        .map()
      </p>

      <ListaTarefas />
    </div>
  );
}
