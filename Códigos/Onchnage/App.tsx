import { CardProduto } from './components/CardProduto';
import { SeletorQuantidade } from './components/SeletorQuantidade';
import { GeradorCracha } from './components/GeradorCracha';

export function App() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#f5f7fb', minHeight: '100vh' }}>
      <h1>🛒 Painel de Testes do useState</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start' }}>
        
        <div>
          <p>Exemplo 2: useState com Números</p>
          <SeletorQuantidade />
        </div>

        <div>
          <p>Exemplo 3: useState com Strings (Texto)</p>
          <GeradorCracha />
        </div>

      </div>
      
      <hr style={{ border: '0', height: '1px', backgroundColor: '#ddd', margin: '30px 0' }} />

      <p>Exemplo 1: useState com Booleanos</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <CardProduto nome="Teclado Mecânico RGB" preco={349.90} emOferta={true} corBotao="#ff4d4d" />
        <CardProduto nome="Mouse Gamer Wireless" preco={199.00} emOferta={false} corBotao="#0070f3" />
      </div>
    </div>
  );
}
