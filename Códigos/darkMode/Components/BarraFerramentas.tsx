interface BarraFerramentasProps {
  temaAtual: string;
  alterarTema: (novoTema: string) => void; // ◄ Prop que recebe uma função com argumento
}

export function BarraFerramentas({ temaAtual, alterarTema }: BarraFerramentasProps) {
  return (
    <div style={{
      padding: '15px',
      backgroundColor: temaAtual === 'claro' ? '#e0e0e0' : '#333',
      borderRadius: '8px',
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      transition: 'all 0.3s ease'
    }}>
      <span style={{ color: temaAtual === 'claro' ? '#000' : '#fff', fontWeight: 'bold' }}>
        Escolha o estilo:
      </span>

      {/* Botão Modo Claro */}
      <button 
        onClick={() => alterarTema('claro')} // ◄ Passa 'claro' como argumento para o Pai
        disabled={temaAtual === 'claro'}
        style={{
          padding: '8px 12px',
          cursor: 'pointer',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#fff',
          color: '#000',
          fontWeight: 'bold',
          opacity: temaAtual === 'claro' ? 0.5 : 1
        }}
      >
        ☀️ Claro
      </button>

      {/* Botão Modo Escuro */}
      <button 
        onClick={() => alterarTema('escuro')} // ◄ Passa 'escuro' como argumento para o Pai
        disabled={temaAtual === 'escuro'}
        style={{
          padding: '8px 12px',
          cursor: 'pointer',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          fontWeight: 'bold',
          opacity: temaAtual === 'escuro' ? 0.5 : 1
        }}
      >
        🌙 Escuro
      </button>
    </div>
  );
}