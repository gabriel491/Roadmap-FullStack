import { CardCurso } from "./components/CardCurso";

export function App() {
  // Nosso array de objetos com as informações dos cursos
  const listaCursos = [
    { id: 1, nome: 'React do Zero ao Avançado', area: 'Front-end', duracao: 40 },
    { id: 2, nome: 'Node.js com TypeScript', area: 'Back-end', duracao: 35 },
    { id: 3, nome: 'Banco de Dados SQL & NoSQL', area: 'Infraestrutura', duracao: 25 },
    { id: 4, nome: 'UX/UI Design para Web', area: 'Design', duracao: 20 },
    { id: 5, nome: "Introdução ao React", area: "Desenvolvimento", duracao: 10 },
    { id: 6, nome: "Componentes em React", area: "Desenvolvimento", duracao: 15 },
    { id: 7, nome: "Gerenciamento de Estado", area: "Desenvolvimento", duracao: 20 },
    { id: 8, nome: "React para Iniciantes", area: "Front-end", duracao: 20 },
  ];
  return (
    <div
      style={{
        fontFamily: 'sans-serif', 
        padding: '20px', 
        backgroundColor: '#f5f7fb', 
        minHeight: '100vh'
      }}
    >
      <h1>🎓 Plataforma de Ensino</h1>
      <p>Gerando componentes customizados dinamicamente a partir de um Array:</p>

      {/* Container flexível para os cards ficarem lado a lado */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* 🔮 O .map() lê os dados e cria um <CardCurso /> para cada item */}
        {listaCursos.map(curso => (
          <CardCurso 
            key={curso.id}
            titulo={curso.nome}
            categoria={curso.area}
            horas={curso.duracao}
          />
        ))}
      </div>
    </div>
  );
}
