import { useState } from 'react';
import { BarraFerramentas } from './Components/BarraFerramentas';

export function App() {
  // A nossa memória agora guarda um texto: 'claro' ou 'escuro'
  const [tema, setTema] = useState('claro');

  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '20px', 
      // 🔮 O Pai usa o seu próprio estado para mudar de cor!
      backgroundColor: tema === 'claro' ? '#f5f7fb' : '#121212', 
      color: tema === 'claro' ? '#000' : '#fff',
      minHeight: '100vh',
      transition: 'all 0.3s ease' // Deixa a mudança de cor suave
    }}>
      
      <h1>🎨 Controlador de Temas</h1>
      <p>O estado do tema está aqui no App.tsx, mas os botões estão em outro componente.</p>

      {/* Passamos o tema atual e a função de alterar para a Barra de Ferramentas */}
      <BarraFerramentas temaAtual={tema} alterarTema={setTema} />

      <div style={{ marginTop: '40px', padding: '20px', border: '1px dashed #888', borderRadius: '8px' }}>
        <h3>Conteúdo da Página</h3>
        <p>Este texto e o fundo reagem instantaneamente quando você clica nos botões acima.</p>
      </div>

    </div>
  );
}