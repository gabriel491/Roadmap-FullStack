import { useState } from "react";
import { Header } from "./components/Header";
import { CardSimples } from "./components/CardSimples";

export function App() {
  const [quantidade, setQuantidade] = useState(0);

  function adicionarItem() {
    setQuantidade((prevQuantidade) => prevQuantidade + 1);
  }

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      {/* 1. Passamos o valor da memória para o Header */}
      <Header totalItens={quantidade} />

      <p style={{ marginTop: '20px', color: '#666' }}>
        Clique nos botões abaixo e veja o contador lá no Header atualizar em
        tempo real!
      </p>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* 2. Passamos a função adicionarItem para cada card */}
        <CardSimples nome="Smartphone S24" aoComprar={adicionarItem} />
        <CardSimples nome="Notebook Nitro 5" aoComprar={adicionarItem} />
        <CardSimples nome="Monitor UltraWide" aoComprar={adicionarItem} />
      </div>

    </div>
  );
}
