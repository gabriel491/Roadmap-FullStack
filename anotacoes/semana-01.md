# Roadmap Desenvolvedor FullStack

# 📝 Anotações de Estudo: Semana 01

Use este modelo para registrar seus aprendizados, códigos práticos, dúvidas e progresso.

---

## 🎯 Metas da Semana

- [ ]  Entender a fundo a diferença entre `any`, `unknown`, `void` e `never`.
- [ ]  Compreender o uso de Interfaces vs Type Aliases em cenários práticos.
- [ ]  Criar componentes e funções reutilizáveis usando Generics com restrições.
- [ ]  Configurar um `tsconfig.json` profissional para diferentes cenários.

---

## 📝 Resumos e Conceitos-Chave

### 1. Tipos Avançados no TypeScript

*Escreva com suas próprias palavras a diferença entre `any` e `unknown`, e quando usar `never`:*

> **any vs unknown:** ...
**void vs never:** ...
> 

O tipo primitivo `any` é usado para se atribuir qualquer tipo de valor a uma variável, como: number, string ou boolean.

### 2. Interfaces vs. Type Aliases

*Tabela comparativa ou resumo rápido:*

- **Interface:** ... *(ideal para ...)*
- **Type Alias:** ... *(ideal para ...)*

### 3. Generics

*Explique por que Generics são importantes em funções tipadas e o que é o `extends` (restrição):*

> ...
> 

---

## 💻 Códigos & Experimentos Práticos

Use blocos de código para fixar a sintaxe estudada nesta semana.

- **Tipos Primitivos:**
    
    ```tsx
    // A variável do tipo any recebe qualquer tipo de valor
    const myVar: any = () => {} || number 
    ```
    
    o trecho `: number`, após o parênteses de declaração da variável quer dizer que estamos definindo o tipo do retorno da função.
    
    ```tsx
    function greet(a: number, b: number): number{
     return a + b;
    }
    
    greet(5, 10
    
    ```
    
    ```tsx
    const myName = "gabs"
    // a interrogação torna o parâmetro opcional, ou seja, ele pode ser passado ou não, e o tipo do parâmetro passa a ser string | undefined
    function greet(name: string, age?: number){
        return name;
    }
    
    greet(myName)
    ```
    

```tsx
// Exemplo 01: Função genérica com restrição (extends)
function mergeObjects<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const resultado = mergeObjects({ nome: "Antigravity" }, { versao: 2 });
console.log(resultado.nome); // Autocompletado e tipado!
```

```tsx
// Exemplo 02: Interface vs Type Alias
interface User {
  id: string;
  name: string;
}

type UserWithRole = User & {
  role: 'admin' | 'user';
};
```

---

## ❓ Dúvidas & Pontos de Atenção

Anote aqui o que foi mais difícil ou as dúvidas que surgiram para pesquisar depois.

1. *Dúvida 1:* ...

1. ***Ponto de Atenção:*** Lembre-se de ativar `"strict": true` no `tsconfig.json` para garantir o máximo de segurança de tipos!
2. ***Ponto de Atenção:*** Não é recomendado utilizar o tipo `any`.

---

## 🔗 Links Úteis

- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Meu repositório de exercícios](https://github.com/)

---

## 🚀 Progresso do Desafio da Semana

*Descreva como foi a aplicação prática dos conceitos estudados (ex: configuração do tsconfig, criação de tipos complexos no seu projeto de estudo):*

> *Escreva aqui o progresso do seu projeto prático ou desafios resolvidos.*
>
