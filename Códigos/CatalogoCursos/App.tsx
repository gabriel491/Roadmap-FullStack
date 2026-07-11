import { useState } from "react";
import { CardCurso } from "./components/CardCurso";

export function App() {
  // Nosso array de objetos com as informações dos cursos
  const [cursos, setCursos] = useState([
    { id: 1, nome: 'React do Zero ao Avançado', area: 'Front-end', duracao: 40 },
    { id: 2, nome: 'Node.js com TypeScript', area: 'Back-end', duracao: 35 },
    { id: 3, nome: 'Banco de Dados SQL & NoSQL', area: 'Infraestrutura', duracao: 25 },
    { id: 4, nome: 'UX/UI Design para Web', area: 'Design', duracao: 20 },
    { id: 5, nome: "Introdução ao React", area: "Desenvolvimento", duracao: 10 },
    { id: 6, nome: "Componentes em React", area: "Desenvolvimento", duracao: 15 },
    { id: 7, nome: "Gerenciamento de Estado", area: "Desenvolvimento", duracao: 20 },
    { id: 8, nome: "React para Iniciantes", area: "Front-end", duracao: 20 },
  ]);

  function removerCurso(idAlvo: number) {
    // O filter cria uma lista NOVA contendo apenas os itens que têm o ID DIFERENTE do idAlvo    
    const listaFiltrada = cursos.filter(cursos => cursos.id != idAlvo)

    // Atualizamos a memória do React com a nova lista
    setCursos(listaFiltrada)
  }

  return (
    <div
      style={{
        fontFamily: 'sans-serif', 
        padding: '20px', 
        backgroundColor: '#f5f7fb', 
        minHeight: '100vh'
      }}
    >
      <h1>🎓 Gerenciador de Catálogo: {cursos.length} cursos</h1>
      <p>Clique em "Excluir Curso" para ver a lista se reorganizar e recalcular tudo em tempo real:</p>

        {/* Se a lista ficar vazia, mostramos uma mensagem amigável */}  
        {cursos.length === 0 && (
          <p style={{ color: '#ff4d4d', fontWeight: 'bold' }}>⚠️ Nenhum curso no catálogo!</p>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* 3. O .map() agora lê o nosso ESTADO 'cursos' */}
        {cursos.map(curso => (
          <CardCurso 
            id={curso.id}
            key={curso.id}
            titulo={curso.nome}
            categoria={curso.area}
            horas={curso.duracao}
            onExcluir={removerCurso} // ◄ Passamos a função de deletar para o card
          />
        ))}
      </div>
    </div>
  );
}
