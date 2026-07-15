interface CardUsuarioProps {
  nome: string;
  email: string;
  empresa: string;
}

export function CardUsuario({ nome, email, empresa }: CardUsuarioProps) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        width: "250px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        fontFamily: "sans-serif",
      }}
    >
        <div style={{
            backgroundColor: '#e1f5fe',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            color: '#0288d1',
            marginBottom: '10px'
        }}>
            {nome.charAt(0)} {/* Pega a primeira letra do nome */}
        </div>

        <h3 style={{ margin: '0 0 5px 0', color: '#333', fontSize: '18px' }}>{nome}</h3>
        <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>📧 {email}</p>

        <div style={{ fontSize: '12px', color: '#999', borderTop: '1px solid #eee', paddingTop: '10px' }}>🏢 Empresa: <strong>{empresa}</strong></div>
    </div>
  );
}
