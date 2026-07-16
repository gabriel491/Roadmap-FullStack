import { useState, useEffect } from "react";
import { CardUsuario } from "./components/CardUsuario";

interface UsuarioAPI {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export function App() {
  const [usuarios, setUsuarios] = useState<UsuarioAPI[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setUsuarios(dados);
        setCarregando(false);
      })
      .catch((erro) => {
        console.error("Deu erro na API!", erro);
        setCarregando(false);
      });
  }, []);

  const usuariosFiltrados = usuarios.filter((usuario) => 
    usuario.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    // min-h-screen garante que o fundo cubra a tela toda, bg-slate-50 é um cinza bem claro
    <div className="min-h-screen bg-slate-50 font-sans p-5 md:p-8">
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
          🌐 Lista de Contatos
        </h1>
        
        <input 
          type="text" 
          placeholder="🔍 Pesquisar pelo nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-200 text-base mb-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />

        {carregando ? (
          <div className="text-center text-xl font-bold text-blue-500 py-10 animate-pulse">
            ⏳ Buscando usuários na internet...
          </div>
        ) : (
          <div>
            {/* O flex-wrap e justify-center garantem que os cards se adaptem ao tamanho da tela */}
            <div className="flex flex-wrap justify-center gap-2">
              {usuariosFiltrados.map(usuario => (
                <CardUsuario 
                  key={usuario.id}
                  nome={usuario.name}
                  email={usuario.email}
                  empresa={usuario.company.name}
                />
              ))}
            </div>

            {usuariosFiltrados.length === 0 && (
              <div className="text-center p-10 text-gray-500">
                <h3 className="text-xl mb-2">Nenhum usuário encontrado para "{busca}" 😢</h3>
                <p>Tente digitar outro nome.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}