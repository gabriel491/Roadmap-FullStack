import { useState } from "react";
import { Button } from "./button";

interface CardProdutoProps {
  nome: string;
  preco: number;
  emOferta: boolean;
  corBotao?: string;
}

export function CardProduto({ nome, preco, emOferta, corBotao }: CardProdutoProps) {
  const [noCarrinho, setNoCarrinho] = useState(false)

  function gerenciarClique() {
    setNoCarrinho(!noCarrinho);
  }

  return (
    <div
      style={{
      border: noCarrinho ? '2px solid #28a745' : '1px solid #e0e0e0', // ◄ Fica verde se estiver no carrinho
      borderRadius: '12px',
      padding: '20px',
      maxWidth: '220px',
      backgroundColor: '#fff',
      margin: '15px',
      position: 'relative', // Necessário para posicionar a etiqueta de oferta
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      fontFamily: 'sans-serif',
      transition: 'all 0.3s ease'
      }}
    >
      {/* 🔮 RENDERIZAÇÃO CONDICIONAL: O operador '&&' faz a tag só 
          aparecer se 'emOferta' for TRUE. Se for FALSE, o React ignora. */}
      {emOferta && (
        <span
          style={{
            position: 'absolute', top: '10px', right: '10px',
            backgroundColor: '#ff4d4d', color: '#fff',
            padding: '4px 8px', borderRadius: '4px',
            fontSize: '11px', fontWeight: 'bold'
          }}
        >
          OFERTA!
        </span>
      )}


      
      <h3 style={{ color: '#333', margin: '10px 0 5px 0', fontSize: '18px' }}>{nome}</h3>
      
      <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a1a1a', margin: '10px 0 20px 0' }}>
        R$ {preco.toFixed(2).replace('.', ',')}
      </p>

      <Button 
      text={ noCarrinho ? "Remover do Carrinho" : "Adicionar ao Carrinho" } 
      corDeFundo={ noCarrinho ? "#ff4d4d" : corBotao } 
      onClick={gerenciarClique} />
    </div>
  );
}
