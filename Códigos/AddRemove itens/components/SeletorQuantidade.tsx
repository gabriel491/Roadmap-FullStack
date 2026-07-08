import { useState } from "react";

export function SeletorQuantidade() {
    const [quantidade, setQuantidade] = useState(1);

    function aumentar() {
        // O prev é o valor anterior da nossa memória, e a gente retorna ele + 1
        setQuantidade(prev => prev + 1);
    }

    function diminuir() {
        // O Math.max garante que a quantidade nunca vai ser menor que 1
        setQuantidade(prev => Math.max(1, prev - 1));
    }
    return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      maxWidth: '200px',
      textAlign: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      fontFamily: 'sans-serif',
      margin: '15px'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>Quantidade</h4>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
        
        {/* Botão de Menos */}
        <button 
          onClick={diminuir}
          disabled={quantidade === 1} // ◄ Fica cinza/desativado se a quantidade for 1
          style={{
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            border: '1px solid #ccc',
            backgroundColor: quantidade === 1 ? '#f5f5f5' : '#fff',
            cursor: quantidade === 1 ? 'not-allowed' : 'pointer',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          -
        </button>

        {/* O número atual da nossa memória */}
        <span style={{ fontSize: '20px', fontWeight: 'bold', minWidth: '30px' }}>
          {quantidade}
        </span>

        {/* Botão de Mais */}
        <button 
          onClick={aumentar}
          style={{
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          +
        </button>

      </div>
    </div>
  );
}