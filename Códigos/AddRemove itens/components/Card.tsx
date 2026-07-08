import { Button } from "./button";

interface CardProps {
  titulo: string;
  descricao: string;
  corBotao?: string;
}

export function Card({ titulo, descricao, corBotao }: CardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "300px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        margin: "10px",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ marginTop: 0, color: "#333" }}>{titulo}</h2>
      <p style={{ color: "#666", lineHeight: "1.5" }}>{descricao}</p>

      {/* Usamos o seu botão aqui dentro! */}
      <Button text="Acessar Conteúdo" corDeFundo={corBotao} />
    </div>
  );
}
