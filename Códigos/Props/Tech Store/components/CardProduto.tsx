import { Button } from "./button";

interface CardProdutoProps {
  nome: string;
  preco: number;
  emOferta: boolean;
  corBotao?: string;
}

export function CardProduto({ nome, preco, emOferta, corBotao }: CardProdutoProps) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "220px",
        backgroundColor: "#fff",
        margin: "15px",
        position: "relative", // Necessário para posicionar a etiqueta de oferta
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "between",
      }}
    >
      {/* 🔮 RENDERIZAÇÃO CONDICIONAL: O operador '&&' faz a tag só 
          aparecer se 'emOferta' for TRUE. Se for FALSE, o React ignora. */}
      {emOferta && (
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "#ff4d4d",
            color: "#fff",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "11px",
            fontWeight: "bold",
          }}
        >
          OFERTA!
        </span>
      )}

      <h3 style={{ color: "#333", margin: "10px 0 5px 0", fontSize: "18px" }}>
        {nome}
      </h3>
      <p
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          color: "#1a1a1a",
          margin: "10px 0 20px 0",
        }}
      >
        R$ {preco.toFixed(2).replace(".", ",")}
      </p>

      <Button text="Comprar" corDeFundo={corBotao} />
    </div>
  );
}
