import { useState } from "react";

interface FormCursoProps {
    onAdicionarCurso: (nome: string, area: string) => void;
}

export function FormCurso({ onAdicionarCurso}: FormCursoProps) {
    const [nome, setNome] = useState('');
    const [area, setArea] = useState('Front-End')

    function enviarFormulario(e: React.FormEvent) {
        e.preventDefault();
        if (nome.trim() !== '') {
            onAdicionarCurso(nome, area);
            setNome('');
        }
    }

    return(
        <form 
            onSubmit={enviarFormulario} 
            className="bg-white p-5 rounded-lg border border-gray-200 w-full max-w-[440px] mb-8 font-sans shadow-sm"
        >
            <h3 className="mt-0 mb-4 text-gray-800 font-bold text-lg">➕ Adicionar Novo Curso</h3>

            <div className="mb-4">
                <label className="block mb-1 font-bold text-gray-600 text-sm">Nome do Curso:</label>
                <input 
                    type="text" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Ex: Mestre em CSS Grid"
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
            </div>

            <div className="mb-5">
                <label className="block mb-1 font-bold text-gray-600 text-sm">Área:</label>
                <select 
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors bg-white"
                >
                    <option value="Front-End">Front-End</option>
                    <option value="Back-End">Back-End</option>
                    <option value="Design">Design</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </div>

            <button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white border-none py-2 px-4 rounded font-bold cursor-pointer transition-colors"
            >
                Salvar Curso
            </button>
        </form>
    )
}