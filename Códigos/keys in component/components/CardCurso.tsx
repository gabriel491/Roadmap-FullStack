interface CardCursoProps {
    titulo: string;
    categoria: string;
    horas: number;
}

export function CardCurso({titulo, categoria, horas}: CardCursoProps) {
    return (
        <div style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px',
            width: '200px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
            fontFamily: 'sans-serif'
        }}>

            <span style={{
                fontSize: '11px',
                backgroundColor: '#e1f5fe',
                color: '#0288d1',
                padding: '3px 8px',
                borderRadius: '4px',
                fontWeight: 'bold'
            }}>
                {categoria}
            </span>

            <h3 style={{ margin: '10px 0 15px 0', color: '#333', fontSize: '18px' }}>
                {titulo}
            </h3>

            <div style={{ fontSize: '13px', color: '#777' }}>
                ⏱️ Duração: <strong>{horas}h</strong>
            </div>

        </div>
    )
}