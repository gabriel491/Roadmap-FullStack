import { Card } from './components/Card';
import { CardProduto } from "./components/CardProduto";
import { SeletorQuantidade } from './components/SeletorQuantidade';

export function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#f5f7fb', minHeight: '100vh' }}>
      <h1>🛒 Tech Store</h1>
      <p>useState controlando Números (Quantidade) e Valores Booleanos</p>
      <SeletorQuantidade />
      
      <hr style={{ border: '0', height: '1px', backgroundColor: '#ddd', margin: '30px 0' }} />

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