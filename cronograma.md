# 📅 Cronograma Semanal de Estudos (Semanas 01 a 15)

Utilize este arquivo para acompanhar seu progresso diário e semanal. Marque as caixas de seleção (`[ ]` para `[x]`) conforme avança pelos tópicos e projetos.

---

## 🛠️ Módulo 1: Transição para TypeScript e ES6+ Avançado (Semanas 01 a 03)

### 🎯 Objetivo do Módulo
Adquirir fluência em tipagem estática e recursos modernos/metaprogramação do JavaScript (ES6+), preparando-se para criar códigos mais robustos, legíveis e de fácil manutenção.

---

### 📆 Semana 01: TypeScript Avançado & Configuração
*   [x] **Tipagem Estática Avançada**
    *   [x] Revisão profunda de tipos primitivos.
    *   [x] Diferenças e aplicações práticas de `any`, `unknown`, `void` e `never`.
*   [x] **Modelagem de Tipos e Contratos**
    *   [x] Interfaces vs. Type Aliases: diferenças cruciais e quando utilizar cada um.
    *   [x] Definição de contratos para objetos, funções e classes.
*   [x] **Generics & Reutilização**
    *   [x] Criação de funções e componentes genéricos e tipados.
    *   [x] Restrições em Generics (`extends`).
*   [ ] **Decorators & Arquitetura**
    *   [ ] Conceito e introdução prática de Decorators para validação e injeção de dependências.
*   [ ] **Módulos, Namespaces e Infraestrutura**
    *   [ ] Organização de código em projetos de grande porte.
    *   [ ] Configuração minuciosa do `tsconfig.json` (otimizações para Node.js, Browsers e ambientes de testes).

---

### 📆 Semana 02: ES6+ Avançado & Metaprogramação
*   [x] **Padrões de Concorrência e Erros**
    *   [x] Promises e Async/Await avançados.
    *   [x] Orquestração paralela com `Promise.all` e `Promise.race`.
    *   [x] Tratamento robusto de erros com blocos `try/catch` assíncronos.
*   [x] **Manipulação Estruturada de Dados**
    *   [x] Destructuring avançado de objetos e arrays (com valores padrão e renomeação).
    *   [x] Spread e Rest operators em funções, arrays e objetos.
*   [ ] **Controle e Metaprogramação**
    *   [x] Iterators e Generators: funcionamento lógico e casos de uso práticos.
    *   [x] Proxies e API Reflect: interceptação de operações e metaprogramação de objetos.
*   [x] **Módulos Modernos**
    *   [x] Importação/exportação nomeada e padrão.
    *   [x] Dynamic Imports (`import()`) para carregamento sob demanda.

---

### 📆 Semana 03: Projeto Prático - Refatoração para TypeScript
*   [ ] **Seleção do Projeto**
    *   [ ] Escolher um projeto Frontend existente em JavaScript puro (pessoal ou open-source simples).
*   [ ] **Migração e Estruturação**
    *   [ ] Configurar TypeScript e organizar pastas em módulos bem definidos.
    *   [ ] Implementar tipagem completa para funções, variáveis, parâmetros e retornos.
*   [ ] **Aplicação de Conceitos**
    *   [ ] Criar interfaces/types para contratos de dados (APIs e estado).
    *   [ ] Implementar no mínimo um utilitário genérico (ex: Wrapper tipado para Fetch API).
    *   [ ] Refatorar operações assíncronas para `async/await`.
*   [ ] **Qualidade e Documentação**
    *   [ ] Instalar o Jest e criar os primeiros testes unitários básicos para as funções tipadas.
    *   [ ] Criar um `README.md` explicativo detalhando as decisões arquiteturais e os benefícios obtidos com a refatoração.
    *   [ ] Subir para o GitHub.

---

## ⚛️ Módulo 2: Ecossistema Front-End Profissional React (Semanas 04 a 07)

### 🎯 Objetivo do Módulo
Dominar recursos avançados do React, técnicas de otimização de performance, padrões de componentes corporativos, infraestrutura de build e melhores práticas de SEO/Acessibilidade.

---

### 📆 Semana 04: React Avançado - Estado & Custom Hooks
*   [ ] **Custom Hooks**
    *   [ ] Criação de hooks customizados para encapsular e reutilizar lógica de estado e efeitos.
    *   [ ] Separação clara de responsabilidades (View vs. Controller logic).
*   [ ] **Arquitetura de Estado Global**
    *   [ ] Context API: quando usar e boas práticas para evitar renderizações desnecessárias.
    *   [ ] Bibliotecas de Estado Global leve: Introdução e prática com **Zustand** (ou Jotai/Redux) para aplicações complexas.
    *   [ ] Comparativo técnico de ferramentas de gerenciamento de estado.

---

### 📆 Semana 05: Performance, Padrões de Componentes & Resiliência
*   [ ] **Renderização Otimizada**
    *   [ ] Uso consciente de `React.memo`, `useCallback` e `useMemo`.
    *   [ ] Profiling de renderização para identificar gargalos de performance.
*   [ ] **Padrões de Componentes Profissionais**
    *   [ ] Higher-Order Components (HOCs).
    *   [ ] Render Props.
    *   [ ] Compound Components (ex: Tabs, Selects modulares).
*   [ ] **Resiliência e Arquitetura de Erros**
    *   [ ] Implementação de **Error Boundaries** para captura e exibição amigável de falhas no app.
*   [ ] **Fundamentos de SSR e SSG**
    *   [ ] Introdução teórica aos conceitos de Server-Side Rendering (SSR) e Static Site Generation (SSG) no ecossistema Next.js/Remix (foco no "porquê" e "como", sem codificação profunda de backend).

---

### 📆 Semana 06: Bundlers, Carregamento, SEO e Acessibilidade (A11y)
*   [ ] **Otimização com Bundlers**
    *   [ ] Configuração e entendimento prático do **Vite** e Webpack.
    *   [ ] Otimizações de build: Tree-Shaking e Code Splitting.
*   [ ] **Performance de Carregamento**
    *   [ ] Otimização avançada de imagens e fontes.
    *   [ ] Lazy Loading de rotas (`React.lazy` + `Suspense`) e carregamento tardio de componentes pesados.
*   [ ] **SEO Técnico**
    *   [ ] Implementação dinâmica de Meta Tags, dados estruturados (JSON-LD), geração de Sitemaps e arquivo `robots.txt`.
*   [ ] **Acessibilidade (A11y)**
    *   [ ] Semântica HTML correta, uso correto de atributos ARIA e suporte a navegação por teclado.
    *   [ ] Execução de testes de acessibilidade automáticos (ex: Lighthouse, axe-core).

---

### 📆 Semana 07: Projeto Prático - Dashboard Interativo com React e Otimizações
*   [ ] **Desenvolvimento do Dashboard**
    *   [ ] Criar um dashboard interativo que consome dados de uma API pública (criptomoedas, clima ou notícias).
*   [ ] **Arquitetura de Componentes**
    *   [ ] Criar biblioteca interna de componentes utilizando custom hooks e compound components.
*   [ ] **Implementação das Otimizações**
    *   [ ] Configurar gerenciamento global com Zustand ou Context API (ex: gerenciar tema, filtros e dados caching).
    *   [ ] Aplicar lazy loading de rotas, `React.memo`, `useCallback` e `useMemo`.
    *   [ ] Otimizar o build com Vite utilizando Code Splitting e Tree-Shaking.
*   [ ] **Acessibilidade e SEO**
    *   [ ] Garantir acessibilidade completa e SEO básico funcional.
*   [ ] **Documentação**
    *   [ ] Redigir `README.md` detalhando as estratégias de otimização de performance adotadas e os resultados no Lighthouse. Subir para o GitHub.

---

## 🧪 Módulo 3: Integração, Testes e Qualidade (Semanas 08 a 11)

### 🎯 Objetivo do Módulo
Aprofundar-se no consumo avançado de dados, testes automatizados robustos, conceitos de segurança corporativa no frontend e fluxos automatizados de integração contínua (CI/CD).

---

### 📆 Semana 08: Consumo de APIs REST Avançado & Autenticação
*   [ ] **Consumo Avançado de APIs**
    *   [ ] Padrões de consumo usando Fetch API e Axios.
    *   [ ] Tratamento centralizado de erros de rede e mecanismos de Retry.
    *   [ ] Caching de dados e revalidação em background usando **React Query** (TanStack Query) ou **SWR**.
*   [ ] **Autenticação e Autorização (Frontend)**
    *   [ ] Fluxos e arquiteturas com OAuth2, tokens JWT e API Keys.
    *   [ ] Armazenamento seguro de tokens no frontend (cookies HttpOnly vs. LocalStorage com mitigação de XSS).

---

### 📆 Semana 09: GraphQL na Prática
*   [ ] **Fundamentos de GraphQL**
    *   [ ] Compreensão conceitual e prática de GraphQL comparado ao REST.
    *   [ ] Escrita e execução de **Queries**, **Mutations** e **Subscriptions**.
*   [ ] **Consumo de GraphQL no React**
    *   [ ] Configuração e uso de clientes GraphQL populares: **Apollo Client** (ou Relay).
    *   [ ] Caching e otimização de queries com Apollo.

---

### 📆 Semana 10: Testes Automatizados no Frontend
*   [ ] **Testes Unitários com Jest**
    *   [ ] Configuração do ecossistema de testes.
    *   [ ] Matchers, criação de Mocks, Spies e testes de Snapshot.
*   [ ] **React Testing Library (RTL)**
    *   [ ] Testes focados na experiência do usuário final.
    *   [ ] Testar a renderização de componentes, interações de formulários e Custom Hooks.
*   [ ] **Testes de Integração & Estratégias**
    *   [ ] Testar fluxos completos simulando chamadas de APIs (usando MSW - Mock Service Worker).
    *   [ ] Entendimento da Pirâmide de Testes e prática introdutória de TDD (Test-Driven Development).

---

### 📆 Semana 11: Qualidade, Segurança & Projeto Prático (E-commerce Frontend)
*   [ ] **Segurança no Frontend (OWASP Top 10 Web)**
    *   [ ] Compreender vulnerabilidades como Injeção, XSS (Cross-Site Scripting), CSRF (Cross-Site Request Forgery) e quebras de autenticação, aplicando prevenção ativa no frontend.
*   [ ] **Design Systems e Consistência**
    *   [ ] Consumo prático de Design Systems existentes (Material UI, Tailwind, Ant Design).
    *   [ ] Criação de Design Tokens básicos para consistência visual.
*   [ ] **Qualidade e Automação (CI/CD)**
    *   [ ] Configuração rigorosa de ESLint e Prettier para padronização.
    *   [ ] Introdução ao CI/CD: Criar uma pipeline no GitHub Actions para automatizar testes e linters a cada push.
*   [ ] **Projeto Prático: E-commerce Simplificado**
    *   [ ] Desenvolver a interface de um e-commerce (listagem, carrinho de compras e checkout) consumindo API REST (ou GraphQL opcional).
    *   [ ] Implementar fluxo de autenticação simulado (JWT).
    *   [ ] Obter alta cobertura de testes unitários e de integração com RTL/Jest.
    *   [ ] Aplicar sanitização de inputs contra XSS.
    *   [ ] Documentar tudo no `README.md` (ênfase na cobertura de testes e segurança). Subir para o GitHub.

---

## 🪓 Módulo 4: O Lado Back-End - Integração Eficiente (Semanas 12 a 15)

### 🎯 Objetivo do Módulo
Desenvolver habilidades sólidas no desenvolvimento backend utilizando Node.js, Express e MongoDB. Aprender a criar APIs RESTful completas, seguras, performáticas e integrá-las de forma perfeita ao ecossistema frontend.

---

### 📆 Semana 12: Node.js & Express Avançado
*   [ ] **Arquitetura de APIs com Express**
    *   [ ] Criação e orquestração de **Middlewares personalizados** (para autenticação, autorização, logging e validação).
    *   [ ] Roteamento avançado estruturado em módulos, parâmetros de rota e query strings.
*   [ ] **Tratamento de Erros e Validação**
    *   [ ] Criação de um middleware de tratamento de erros centralizado para respostas HTTP consistentes.
    *   [ ] Validação de dados (payloads de requisição) utilizando bibliotecas como **Joi** ou **Yup**.
*   [ ] **Segurança no Backend**
    *   [ ] Configuração correta de CORS (Cross-Origin Resource Sharing).
    *   [ ] Implementação segura de autenticação JWT e autorização baseada em cargos (RBAC).
    *   [ ] Prevenção de ameaças OWASP Top 10 (SQL Injection, NoSQL Injection, Broken Authentication).
    *   [ ] Proteção contra Brute Force e implementação de **Rate Limiting**.

---

### 📆 Semana 13: MongoDB Avançado com Mongoose
*   [ ] **Modelagem de Dados Relacional e Não-Relacional**
    *   [ ] Criação de esquemas (Schemas) estruturados e validados com **Mongoose**.
    *   [ ] Relacionamentos eficientes entre coleções via referências (`populate`) e subdocumentos.
*   [ ] **Consultas Avançadas e Performance**
    *   [ ] Utilização do **Aggregation Pipeline** para consultas complexas, filtros encadeados e relatórios analíticos.
    *   [ ] Criação e gestão de Índices (Indexes) para otimização de buscas no banco de dados.
*   [ ] **Transações**
    *   [ ] Entendimento conceitual e aplicação prática de transações para garantir atomicidade de operações sensíveis (ex: criação de pedido + redução de estoque).

---

### 📆 Semana 14: Comunicação Eficiente, Protocolos & Otimizações
*   [ ] **Eficiência na Comunicação**
    *   [ ] Otimização de payloads: paginação avançada, seleção específica de campos retornados (`select`) e compressão de respostas.
*   [ ] **Comunicação em Tempo Real**
    *   [ ] Introdução conceitual e prática aos **WebSockets** (Socket.io ou ws) para notificações e chats rápidos.
*   [ ] **Protocolo HTTP/HTTPS a Fundo**
    *   [ ] Aprofundamento em cabeçalhos cruciais (`Cache-Control`, `ETag`, `Content-Security-Policy`).
    *   [ ] Uso correto de códigos de status HTTP (Status Codes) e configuração de conexões HTTPS seguras.

---

### 📆 Semana 15: Projeto Prático - API Completa e Integração Fullstack
*   [ ] **Desenvolvimento do Backend**
    *   [ ] Desenvolver uma API RESTful modular completa em Node.js, Express e MongoDB para servir o projeto de E-commerce do Módulo 3.
    *   [ ] Implementar rotas de autenticação JWT, gestão de produtos, carrinho/pedidos e controle de acesso (admin vs user).
    *   [ ] Aplicar validação rigorosa com Joi e tratamento centralizado de erros.
    *   [ ] Implementar Aggregation Pipelines para relatórios do dashboard (ex: produtos mais vendidos).
*   [ ] **Testes de Integração de API**
    *   [ ] Criar testes robustos para as rotas da API utilizando **Supertest** e Jest.
*   [ ] **Integração Fullstack**
    *   [ ] Conectar a interface do E-commerce criada no Módulo 3 a esta nova API real.
*   [ ] **Documentação e Encerramento**
    *   [ ] Criar um `README.md` detalhando toda a arquitetura de banco de dados, design da API (endpoints), estratégias de segurança implementadas e cobertura de testes.
    *   [ ] Publicar repositórios finais no GitHub e celebrar a conclusão do roteiro! 🎓
