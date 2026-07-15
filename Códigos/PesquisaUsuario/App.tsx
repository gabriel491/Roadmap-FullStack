import { useEffect, useState } from "react";
import { CardUsuario } from "./components/CardUsuario";;

// Precisamos tipar o formato do dado que vem da API para o TypeScript não reclamar
interface UsuarioApi {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  }
}

export function App() {
  // 1. Estado para guardar a lista de usuários que virá da internet (começa vazio)
  const [usuarios, setUsuarios] = useState<UsuarioApi[]>([]);

  // 2. Estado para controlar o "Loading" (começa como verdadeiro)
  const [carregando, setCarregando] = useState(true);

  // Estado para guarda o que o usuário digita na barra de pesquisa
  const [busca, setBusca] = useState('')

  // 3. O useEffect com array VAZIO [] roda APENAS UMA VEZ ao abrir a página
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resposta) => resposta.json()) // Transforma a resposta da internet em JSON (Array)
    .then((dados) => {
      // Quando os dados chegarem
      setUsuarios(dados);     // Guardamos na memória do React
      setCarregando(false);   // Avisamos que parou de carregar
    })
    .catch((erro) => {
      console.error("Deu erro na API!", erro);
      setCarregando(false)      
    })
  }, []) // ◄ ARRAY VAZIO: Super importante para não criar um loop infinito de buscas!

    // ESTADO DERIVADO
    // Em vez de alterar a lista original, nós filtramos ela em tempo real.
    // O .toLowerCase() garante que "Leanne" e "leanne" sejam encontrados.
    const usuariosFiltrados = usuarios.filter((usuario) => usuario.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))

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
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>🌐 Lista de Contatos</h1>
        <p style={{ textAlign: 'center' }}>Estes estão vindo de um servidor externo (JSONPlaceholder).</p>

        {/* 3. A BARRA DE PESQUISA */}
        <input 
          type="text"
          placeholder="🔍 Pesquisar pelo nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)} // Atualiza o estado a cada letra digitada
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            marginBottom: '30px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
          }}
        />

          {carregando ? (
            <div style={{ textAlign: 'center', fontSize: '18px', color: '#0070f3', fontWeight: 'bold' }}>
              ⏳ Buscando usuários na internet...
            </div>
          ): (

          <div>


          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

            {/* 4. ATENÇÃO AQUI: Nós fazemos o .map() na lista FILTRADA, não na */}
            {usuariosFiltrados.map(usuario => (
              <CardUsuario
                key={usuario.id}
                nome={usuario.name}
                email={usuario.email}
                empresa={usuario.company.name}
              />
            ))}
            
            </div>

            {/* 5. Tratamento para quando a busca não encontra ninguém */}
            {usuariosFiltrados.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                <h3>Nenhum usuário encontrado para "{busca}" 😢</h3>
                <p>Tente digitar outro nome.</p>
              </div>
            )}
          </div>
          )}
      </div>
    </div>
  );
}
