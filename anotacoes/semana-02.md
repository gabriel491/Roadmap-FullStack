# 📝 Anotações de Estudo: Semana 02 - ES6+ Avançado & Metaprogramação

Use este modelo para registrar seus aprendizados, códigos práticos, dúvidas e progresso.

---

## 🎯 Metas da Semana

- [x]  Padrões de Concorrência e Erros
- [ ]  Manipulação Estruturada de Dados
- [ ]  Controle e Metaprogramação
- [ ]  Módulos Modernos

---

## 📝 Resumos e Conceitos-Chave

### 1. Padrões de Concorrência e Erros

*Detalhes sobre: Promises e Async/Await avançados, podem ser encontrados no arquivo **Promises** na aba **Anotações Detalhadas.***

> **Estudar**
> 

*Detalhe sobre: Orquestração paralela com `Promise.all` e `Promise.race`.*

> 
> 
> 
> **`Promise.all`:** Executa múltiplas Promises em paralelo e adota a política de "tudo ou nada" (*fail-fast*). Retorna uma array com todos os sucessos, mas falha e vai direto para o `.catch` imediatamente se *uma única* Promise for rejeitada.
> 
> - **`Promise.allSettled`:** Mais resiliente, espera todas as Promises terminarem (seja com sucesso ou erro) e retorna uma array detalhando o status individual de cada uma, sem nunca quebrar o fluxo.
> - **`Promise.race`:** Uma corrida literal de performance. Retorna o resultado (ou erro) da primeira Promise que terminar, ignorando completamente o desfecho das demais. Muito utilizado para criar mecanismos de *timeout*.

*Detalhe sobre: Tratamento robusto de erros com blocos `try/catch` assíncronos.*

> Para capturar erros em funções `async/await`, o uso do bloco `try/catch` é indispensável. Sem ele, rejeições de Promises que acontecem de forma assíncrona geram o erro fatal *Unhandled Promise Rejection*. Um tratamento robusto envolve diferenciar erros previsíveis de infraestrutura (como falhas de rede) de erros de lógica, tratando o fluxo sem derrubar a aplicação.
> 

### 2. Manipulação Estruturada de Dados

*Detalhe sobre: Destructuring avançado de objetos e arrays (com valores padrão e renomeação).*

> ...
> 

*Detalhe sobre: Spread e Rest operators em funções, arrays e objetos.*

> ...
> 

### 3. Controle e Metaprogramação

*Detalhe sobre: Iterators e Generators: funcionamento lógico e casos de uso práticos.*

> ...
> 

*Detalhe sobre: Proxies e API Reflect: interceptação de operações e metaprogramação de objetos.*

> ...
> 

### 4. Módulos Modernos

*Detalhe sobre: Importação/exportação nomeada e padrão.*

> ...
> 

*Detalhe sobre: Dynamic Imports (`import()`) para carregamento sob demanda.*

> ...
> 

---

## 💻 Códigos & Experimentos Práticos

Use blocos de código para fixar a sintaxe estudada nesta semana.

### Evitando Gargalos desnecessários com o `await`

Quando aplicamos o `await` em operações que **não dependem uma da outra**, criamos um gargalo conhecido como **Cascata Assíncrona Desnecessária** (ou bloqueio sequencial).

```jsx
// ❌ CÓDIGO COM GARGALO (Sequencial)
async function carregarPerfil(userId) {
  const usuario = await buscarUsuario(userId);      // Demora 300ms
  const posts = await buscarPosts(userId);          // Demora 400ms
  const configuracoes = await buscarConfig(userId); // Demora 200ms

  return { usuario, posts, configuracoes };
}
```

### O que acontece por debaixo dos panos?

O Node.js/JavaScript vai iniciar a busca do usuário. O `await` diz ao motor: *"Pare aqui e não faça mais nada nesta função até que o banco responda"*.

**Tempo total de execução:** $300 + 400 + 200 = \mathbf{900ms}$.

### O Cenário Ideal: Concorrência em Paralelo

Como as consultas são independentes, o banco de dados tem capacidade de processar as três requisições **ao mesmo tempo**. Nós só precisamos disparar todas de uma vez e esperar que todas terminem.

É aqui que entra a orquestração com `Promise.all`:

```jsx
//  CÓDIGO OTIMIZADO (Paralelo)
async function carregarPerfilOtimizado(userId){
  // Disparamos as três promessas ao mesmo tempo (SEM await na frente delas)
  const promessaUsuario = buscarUsuario(userId);
  const promessaPosts = buscarPosts(userId);
  const promessaConfig = buscarConfig(userId);

  // Agora sim, esperamos todas terminarem juntas
  const [usuario, posts, configuracoes] = await Promise.all([
    promessaUsuario,
    promessaPosts,
    promessaConfig
  ]);

  return { usuario, posts, configuracoes };
}
```

**O que acontece agora?**
O JavaScript dispara as três requisições para o banco de dados quase instantaneamente (no mesmo pulso do Event Loop). O banco processa as três em paralelo.
O tempo total da função será determinado **apenas pela promessa mais demorada**.
**Tempo total de execução:** $\max(300, 400, 200) = \mathbf{400ms}$.

### 📐 Regra de Ouro para o seu código

Sempre que for escrever a palavra `await`, faça a si mesmo a seguinte pergunta:

> *"Eu preciso do resultado da linha de cima para conseguir executar a linha de baixo?"*
> 
- Se a resposta for **Sim** (ex: preciso do ID do usuário para buscar os posts dele), use `await` normalmente.
- Se a resposta for **Não** (ex: buscar posts e buscar produtos da loja), guarde as Promises em variáveis e use `Promise.all()`.

---

## ❓ Dúvidas & Pontos de Atenção

Anote aqui o que foi mais difícil ou as dúvidas que surgiram para pesquisar depois.

1. *Dúvida 1:* ...
2. *Ponto de Atenção:* ...

---

## 🔗 Links Úteis

- Documentação Oficial
- Meu repositório de exercícios

---

## 🚀 Progresso da Semana ou Projeto

*Descreva como foi a aplicação prática dos conceitos estudados:*

> *Escreva aqui o progresso ou desafios resolvidos.*
>
