import { Card } from './components/Card';
import { CardProduto } from "./components/CardProduto";

export function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#f5f7fb', minHeight: '100vh', minWidth: '100vw' }}>
      <h1>🛒 Tech Store</h1>
      <p>Treinando passagem de múltiplos tipos de dados através das Props:</p>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Card 
        titulo="XABLAU"
        descricao="O TypeScript adiciona segurança ao seu código JavaScript"
        corBotao="#28a745"
        />

        {/* Produto 1: Tem oferta (true) e preço quebrado */}
        <CardProduto 
          nome="Teclado Mecânico RGB" 
          preco={349.90} 
          emOferta={true} 
          corBotao="#ff4d4d"
        />
        {/* Produto 2: Não está em oferta (false), a etiqueta vermelha vai sumir */}
        <CardProduto 
          nome="Mouse Gamer Wireless" 
          preco={199.00} 
          emOferta={false} 
          corBotao="#0070f3"
        />

        {/* Produto 3: Em oferta com outra cor de botão */}
        <CardProduto 
          nome="Headset Surround 7.1" 
          preco={450.00} 
          emOferta={true} 
          corBotao="#28a745"
        />

      </div>
    </div>
  );
}