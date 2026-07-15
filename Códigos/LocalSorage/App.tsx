import { useEffect, useState } from "react";
import { CardCurso } from "./components/CardCurso";
import { FormCurso } from "./components/FormCurso";

export function App() {
  // Nosso array de objetos com as informações dos cursos
  const [cursos, setCursos] = useState(() => {
  // 1. Vai até o "armário" do navegador (localStorage) e procura pela chave "meus_cursos"
    const dadosSalvos = localStorage.getItem("meus_cursos");
    
    // 2. Se achar alguma coisa lá
    // Transforma o texto que estava salvo de volta em um array de verdade
    // 3. Se não achar nada (é a primeira vez do usuário no site)
    // retorna a lista padrão de cursos
    return dadosSalvos ? JSON.parse(dadosSalvos) : [
    { id: 1, nome: 'React do Zero ao Avançado', area: 'Front-end', duracao: 40 },
    { id: 2, nome: 'Node.js com TypeScript', area: 'Back-end', duracao: 35 },
    { id: 3, nome: 'Banco de Dados SQL & NoSQL', area: 'Infraestrutura', duracao: 25 },
    { id: 4, nome: 'UX/UI Design para Web', area: 'Design', duracao: 20 },
    { id: 5, nome: "Introdução ao React", area: "Desenvolvimento", duracao: 10 },
    { id: 6, nome: "Componentes em React", area: "Desenvolvimento", duracao: 15 },
    { id: 7, nome: "Gerenciamento de Estado", area: "Desenvolvimento", duracao: 20 },
    { id: 8, nome: "React para Iniciantes", area: "Front-end", duracao: 20 },
    ]
});

  // ESTADOS DERIVADOS (Apenas variáveis calculadas em tempo de execução)
  const totalCursos = cursos.length;
  // O .reduce soma a duração de cada curso começando em 0
  const totalHoras = cursos.reduce((acumulador, curso) => acumulador + curso.duracao, 0);
  // Filtra quantos são Front-End e pega o tamanho da nova lista
  const totalFrontEnd = cursos.filter(curso => curso.area.toLowerCase() === 'front-end').length;

  useEffect(() => {
    // 1. Pega a lista de cursos (que é um array de objetos) e transforma em texto (string)
    // 2. Guarda esse texto no "armário" (localStorage) sob o nome "meus_cursos"
    localStorage.setItem("meus_cursos", JSON.stringify(cursos))

    // Renomeia o titulo da página de acordo com a quantidade de cursos 
    document.title = `Painel (${cursos.length} cursos)`;
    
  }, [cursos]) // toda vez que 'cursos' mudar ele vai rodar esse código

  // Recebe os dados do formulário e injeta na lista
  function adicionarCurso(nomeDigitado: string, areaSelecinada: string) {
    const novoCurso = {
      id: Date.now(), // Gera um ID único baseado no tempo atual
      nome: nomeDigitado,
      area: areaSelecinada,
      duracao: Math.floor(Math.random() * 30) + 10 // Gera horas aleatórias entre 10 e 40 só para preencher
    }

    // Atualiza o estado criando um Array novo com o item adicionado
    setCursos([...cursos, novoCurso])
  }

  function removerCurso(idAlvo: number) {
    // O filter cria uma lista NOVA contendo apenas os itens que têm o ID DIFERENTE do idAlvo    
    const listaFiltrada = cursos.filter(cursos => cursos.id != idAlvo)

    // Atualizamos a memória do React com a nova lista
    setCursos(listaFiltrada)
  }

  // Limpa tudo com confirmação de segurança
  function limparCatalogo() {
    const confirmou = window.confirm("Tem certeza que deseja apagar todos os cursos?")

    if (confirmou) {
      setCursos([]) // Esvazia o array. o useEfect fará o resto
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        fontFamily: 'sans-serif', 
        padding: '20px', 
        backgroundColor: '#f5f7fb', 
        minHeight: '100vh'
      }}
    >
        <h1>🎓 Painel do Administrador ({cursos.length} cursos)</h1>

        {/* 🔮 NOVO BOTÃO: Só aparece se houver pelo menos 1 curso na lista */}
        {cursos.length > 0 && (
          <button
            onClick={limparCatalogo}
            style={{
              backgroundColor: 'transparent',
              color: '#ff4d4d',
              border: '1px solid #ff4d4d',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              height: 'fit-content',
              marginBottom: "10px",
            }}
          >
            ⚠️ Limpar Catálogo
          </button>
        )}

        {/* 📊 Painel de Estatísticas com os Estados Derivados */}
        <div style={{
          display: 'flex', 
          gap: '20px', 
          marginBottom: '30px', 
          backgroundColor: '#fff', 
          padding: '15px', 
          borderRadius: '8px', 
          border: '1px solid #e0e0e0'
        }}>
          <div>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Total de Cursos</p>
            <strong style={{ fontSize: '20px', color: '#0070f3' }}>{totalCursos}</strong>
          </div>
        
          <div style={{ borderLeft: '1px solid #eee', paddingLeft: '20px' }}>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Carga Horária</p>
            <strong style={{ fontSize: '20px', color: '#28a745' }}>{totalHoras}</strong>
          </div>

          <div style={{ borderLeft: '1px solid #eee', paddingLeft: '20px' }}>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Cursos de Front End</p>
            <strong style={{ fontSize: '20px', color: '#6f42c1' }}>{totalFrontEnd}</strong>
          </div>
        </div>

        {/* 1. Renderizamos o formulário passando a função de adicionar */}
        <FormCurso onAdicionarCurso={adicionarCurso} />


        {/* Se a lista ficar vazia, mostramos uma mensagem amigável */}  
        {cursos.length === 0 && (
          <p style={{ color: '#ff4d4d', fontWeight: 'bold' }}>⚠️ Nenhum curso no catálogo!</p>
        )}

        <div style={{ display: 'flex', justifyContent: "center", flexWrap: 'wrap' }}>
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
