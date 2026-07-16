interface CardUsuarioProps {
  nome: string;
  email: string;
  empresa: string;
}

export function CardUsuario({ nome, email, empresa }: CardUsuarioProps) {
  return (
    // O Tailwind usa a propriedade className em vez de style
    <div className="border border-gray-200 rounded-lg p-4 m-2 w-64 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 font-sans flex flex-col">
      
      <div className="bg-sky-100 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sky-700 mb-3">
        {nome.charAt(0)}
      </div>
      
      <h3 className="m-0 text-lg font-bold text-gray-800 mb-1">{nome}</h3>
      <p className="m-0 text-sm text-gray-500 mb-3">📧 {email}</p>
      
      <div className="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-auto">
        🏢 Empresa: <strong className="text-gray-600">{empresa}</strong>
      </div>

    </div>
  );
}