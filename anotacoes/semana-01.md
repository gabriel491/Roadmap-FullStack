# 📝 Anotações de Estudo: Semana 01

Use este modelo para registrar seus aprendizados, códigos práticos, dúvidas e progresso.

---

## 🎯 Metas da Semana

- [x]  Entender a fundo a diferença entre `any`, `unknown`, `void` e `never`.
- [x]  Compreender o uso de Interfaces vs Type Aliases em cenários práticos.
- [x]  Criar componentes e funções reutilizáveis usando Generics com restrições.
- [x]  Configurar um `tsconfig.json` profissional para diferentes cenários.

---

## 📝 Resumos e Conceitos-Chave

### 1. Tipos Avançados no TypeScript

*Escreva com suas próprias palavras a diferença entre `any` e `unknown`, e quando usar `never`:*

> **any vs unknown: 
Any:** O tipo primitivo `any` é usado para se atribuir qualquer tipo de valor a uma variável, como: number, string ou boolean.
O `unknown` diz ao TypeScript: "Eu realmente não sei o que é isso". O inspetor te barra e diz: *"Você só pode mexer nesse dado se me provar primeiro o que ele é"*.
> 

> **void vs never: 
Void:** Executa a função até o fim, mas não retorna nada (retorna `undefined` implicitamente no JS).

**Never:** A função **nunca** atinge o seu ponto final. Isso acontece se ela lançar um erro obrigatoriamente ou se entrar em um loop infinito. É crucial para garantir exaustividade no código.
> 

### 2. Interfaces vs. Type Aliases

*Tabela comparativa ou resumo rápido:*

- **Interface:** A interface serve como um "contrato" ou um molde para o formato que queremos que o objeto final tenha. Utilize para definir a estrutura de objetos públicos, contratos de APIs, serviços e classes. Elas suportam **Declaration Merging** (extensão automática ao declarar interfaces com o mesmo nome), o que é ideal para bibliotecas e plugins.
    - Exemplo: Você pode criar uma interface chamada `Botao`, e mais embaixo no código criar outra chamada `Botao` de novo; o TypeScript vai juntar as duas em uma só
- **Type Alias:** É uma definição **matemática/apelido fechado**. Uma vez definido, ele não muda. Ele é excelente para criar combinações, listas de opções estritas (uniões) ou apelidos para coisas complexas. Utilize para uniões, interseções, tipos primitivos mapeados, tuplas ou lógica de tipos complexos (Mapeamento/Condicionais).

### **📋** Interfaces vs. Type Aliases

| **Critério** | **interface** | **type** |
| --- | --- | --- |
| **Objetos e Componentes Web** | **Recomendado** (Mais performático para o compilador). | Possível, mas menos flexível. |
| **Lista de Opções (`"padrão" | "sucesso"`)** | Não consegue fazer. | **Única opção viável.** |
| **Permite redeclarar e juntar campos** | **Sim** (Declaration Merging). | Não (Gera erro de "Identificador duplicado"). |

### 3. Generics

O generics é uma forma de fazer a função aceitar mais de um tipo de forma dinâmica, mas sem perder a segurança.

*Explique por que Generics são importantes em funções tipadas e o que é o `extends` (restrição):*

> **Sem Generics,** para fazer uma função aceitar qualquer tipo de dado, os desenvolvedores caem na armadilha de usar `any` ou `unknown`
O `extends` serve para aplicar uma **cláusula de restrição** ao seu **Generic**.
> 

---

## 💻 Códigos & Experimentos Práticos

Use blocos de código para fixar a sintaxe estudada nesta semana.

**Tipos Primitivos:**

- **Any vs unknown:**
    
    ```tsx
    function processarDadoSeguro(dado: unknown) {
      // ❌ O TypeScript vai dar erro de compilação na linha abaixo se você tentar fazer direto:
      // console.log(dado.toUpperCase()); // Erro: 'dado' é do tipo 'unknown'.
    
      //  A forma correta: Você faz uma checagem (Inspeciona a caixa)
      if (typeof dado === "string") {
        // Aqui dentro do 'if', o TypeScript assume 100% que 'dado' é uma string!
        console.log(dado.toUpperCase()); // ✅ Funciona perfeitamente e com segurança.
      } else if (typeof dado === "number") {
        // Aqui dentro, o TypeScript sabe que é um número
        console.log(dado * 2); // ✅ Funciona com segurança.
      } else {
        console.log("Não é um texto e nem um número. Não vou mexer para não quebrar o app.");
      }
    }
    
    processarDadoSeguro("felipe"); // Printa: FELIPE
    processarDadoSeguro(10);       // Printa: 20
    ```
    
    ```tsx
    // A variável do tipo any recebe qualquer tipo de valor
    const myVar: any = () => {} || number 
    ```
    
- **void vs never:**
    
    ```tsx
    // Uso prático de 'never' para Exhaustiveness Checking
    type HttpMethods = 'GET' | 'POST' | 'PUT';
    
    function handleRequest(method: HttpMethods) {
      switch (method) {
        case 'GET': return 'Buscando dados...';
        case 'POST': return 'Criando recurso...';
        case 'PUT': return 'Atualizando recurso...';
        default:
          // Se um novo método for adicionado ao tipo HttpMethods e esquecermos aqui,
          // o compilador acusará erro nesta linha apontando que o tipo não é 'never'.
          const _exhaustiveCheck: never = method;
          return _exhaustiveCheck;
      }
    }
    ```
    
- **Tipagem**
    
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
    
- **Interface, Extends e Type**
    
    ### interface (Contratos de Objetos Extensíveis)
    
    Interfaces são perfeitas para modelar coisas do mundo real na web, como elementos do DOM ou configurações de componentes que podem crescer ou ser estendidos.
    
    ```tsx
    // Definimos a estrutura básica de um componente de botão na Web
    interface BotaoWeb {
      label: string;
      corDeFundo: string;
    }
    
    // ⚠️ O Superpoder da Interface: Declaration Merging (União automática)
    // Imagine que outra parte do seu código (ou uma biblioteca externa) precisa injetar uma propriedade nova
    interface BotaoWeb {
      onClick: () => void;
    }
    
    // O TypeScript junta as duas automaticamente! O objeto abaixo OBRIGATORIAMENTE precisa dos 3 campos:
    const meuBotao: BotaoWeb = {
      label: "Enviar",
      corDeFundo: "#0070f3",
      onClick: () => console.log("Clicou!")
    };
    ```
    
    ### Herdando propriedades de outra Interface (`extends`)
    
    Interfaces se estendem de forma muito limpa e legível, igualzinho à herança de classes.
    
    ```tsx
    interface ElementoHTML {
      id: string;
      className: string;
    }
    
    // Criamos um contrato novo herdando o anterior
    interface InputTexto extends ElementoHTML {
      placeholder: string;
      value: string;
    }
    ```
    
    ### Quando usar `type` (Uniões, Opções e Apelidos Estritos)
    
    O `type` brilha onde a `interface` simplesmente não consegue operar: na criação de **regras de negócio baseadas em opções**, uniões e tipos primitivos combinados. Eles são fechados (não aceitam *Declaration Merging*).
    
    ### Exemplo A: Lista de opções (Union Types)
    
    Imagine definir quais tipos de eventos de clique ou quais "temas" seu site aceita.
    
    ```tsx
    // Aqui não faz sentido usar interface. É uma lista estrita de opções.
    type TemaSite = "dark" | "light" | "high-contrast";
    
    type StatusRequisicaoWeb = "carregando" | "sucesso" | "erro-404" | "erro-500";
    
    // O compilador te protege contra erros de digitação:
    const temaAtual: TemaSite = "dark"; // Se digitar "azul", dá erro de compilação.
    ```
    
    ### Exemplo B: Interseção (Juntando tipos diferentes com `&`)
    
    Em vez de herdar com `extends`, o `type` faz uma junção matemática usando o operador `&`.
    
    ```tsx
    type Usuario = { name: string };
    type Admin = { privileges: string[] };
    
    // Criando um novo tipo que é a junção dos dois
    type UsuarioAdmin = Usuario & Admin;
    ```
    
- **tsconfig.json**
    
    ```json
    {
      "compilerOptions": {
        /* 📦 Gestão de Módulos e Alvo (Moderno e Rápido) */
        "target": "ESNext",
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "esModuleInterop": true,
        "verbatimModuleSyntax": true, /* Excelente escolha sua */
        
        /* 🏛️ Definição do Ambiente (Ajustado) */
        "lib": ["ESNext", "DOM"], /* Mantenha o DOM apenas se houver código client-side */
        "skipLibCheck": true,
        
        /* 🚨 Qualidade e Rigor Técnico (O que você acertou) */
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noEmitOnError": true, /* Ótimo: impede que JS quebrado seja gerado se houver erro de TS */
        
        /* 🔒 Segurança Extra da V8 Engine (Adicionado pelo Líder) */
        "noImplicitReturns": true,       /* Garante que todas as funções retornem algo previsível */
        "noFallthroughCasesInSwitch": true, /* Evita bugs de lógica em switch-cases */
        "forceConsistentCasingInFileNames": true, /* Evita quebras de build entre Windows e Linux na CI/CD */
    
        /* 📂 Estrutura de Pastas */
        "rootDir": "./src",
        "outDir": "./build"
      },
      /* Ajuste de segurança nos paths de inclusão */
      "include": ["src/**/*"], 
      "exclude": ["node_modules", "build", "**/*.spec.ts"]
    }
    ```
    
- **Generics**
    
    ### ⚡ A Solução Elegante com Generics (`<T>`)
    
    A letra `T` (ou qualquer outro nome entre os sinais de menor e maior) funciona como uma **variável de tipo**. O TypeScript captura o tipo do dado no momento em que você passa o argumento para a função.
    
    A função abaixo adiciona uma propriedade de "ID" (identificador) a qualquer objeto que passarmos para ela.
    
    ```tsx
    // 1. Declaramos o <T> para dizer que a função é Genérica
    // 2. Dizemos que o 'objetoOriginal' é do tipo T
    // 3. O retorno será o tipo T combinado (&) com um ID numérico
    function gerarId<T>(objetoOriginal: T) {
      const idGerado = Math.floor(Math.random() * 1000);
      
      return {
        ...objetoOriginal,
        id: idGerado
      };
    }
    ```
    
    Agora veja como o TypeScript se comporta de forma inteligente quando você passa dados diferentes para a mesma função. Você não precisa dizer para a função o que está passando; ela **deduz (infere)** sozinha.
    
    ```tsx
    // Cenário A: Passando um Usuário do seu site
    const usuarioItem = { nome: "Felipe", papel: "Admin" };
    
    // O TypeScript inspeciona 'usuarioItem' e define na hora: T = { nome: string, papel: string }
    const usuarioComId = gerarId(usuarioItem);
    
    // ⚡ Olha o ganho de produtividade e segurança:
    console.log(usuarioComId.nome);  // ✅ O VS Code te dá autocomplete!
    console.log(usuarioComId.id);    // ✅ Ele sabe que o ID existe ali dentro.
    ```
    
    Se usarmos a **mesma** função para um produto do e-commerce:
    
    ```tsx
    // Cenário B: Passando um Produto
    const produtoItem = { titulo: "Teclado Mecânico", preco: 299 };
    
    // O TypeScript inspeciona e redefine para essa chamada: T = { titulo: string, preco: number }
    const produtoComId = gerarId(produtoItem);
    
    console.log(produtoComId.titulo); // ✅ Autocomplete perfeito do produto!
    console.log(produtoComId.id);     // ✅ O ID também está rastreado aqui.
    ```
    
- **Generics com Extends**
    
    ### Exemplo Prático na Web: Componente de Formulário
    
    Imagine uma função utilitária que precisa ler a propriedade `length` (comprimento) de qualquer dado que o usuário envie (pode ser uma string, um array ou um objeto customizado com essa propriedade).
    
    Se usarmos apenas `<T>`, o TypeScript vai dar erro dizendo: *"Ei, eu não sei se o tipo T tem a propriedade length"*. Usamos o `extends` para resolver isso.
    
    ```tsx
    // Criamos um contrato base obrigatório
    interface TemComprimento {
      length: number;
    }
    
    // Lemos: "O tipo T pode ser qualquer coisa, DESDE QUE possua o que está em TemComprimento"
    function logarComprimento<T extends TemComprimento>(item: T): void {
      console.log(`O comprimento deste elemento é: ${item.length}`);
    }
    
    // ✅ Funciona: String tem a propriedade .length nativa
    logarComprimento("Olá Mundo"); 
    
    // ✅ Funciona: Array tem a propriedade .length nativa
    logarComprimento([1, 2, 3, 4]); 
    
    // ✅ Funciona: Objeto customizado que criamos com a propriedade length
    logarComprimento({ name: "Felipe", length: 1 }); 
    
    // ❌ ERRO DE COMPILAÇÃO: Número não tem .length! O TS bloqueia antes de ir para produção.
    // logarComprimento(123);
    ```
    

---

## ❓ Dúvidas & Pontos de Atenção

Anote aqui o que foi mais difícil ou as dúvidas que surgiram para pesquisar depois.

1. *Dúvida 1:* ...

1. ***Ponto de Atenção:*** Lembre-se de ativar `"strict": true` no `tsconfig.json` para garantir o máximo de segurança de tipos!
2. ***Ponto de Atenção:*** Não é recomendado utilizar o tipo `any`, porque ele é menos seguro.
3. ***Ponto de Atenção:*** Muitos juniores usam `type` para absolutamente tudo porque "parece mais moderno". O problema é que, ao construir aplicações web grandes ou bibliotecas, o `type` gera mensagens de erro de compilação muito mais densas e difíceis de ler no VS Code em comparação com as `interface`s, além de não permitir que outros desenvolvedores estendam suas configurações.
****

---

## 🔗 Links Úteis

- TypeScript Playground
- Meu repositório de exercícios

---

## 🚀 Progresso do Desafio da Semana

*Descreva como foi a aplicação prática dos conceitos estudados (ex: configuração do tsconfig, criação de tipos complexos no seu projeto de estudo):*

> *Escreva aqui o progresso do seu projeto prático ou desafios resolvidos.*
> 
- **Desafio da Semana**
    
    ## 🧠 Seu Desafio de Código: Semana 01
    
    ### Contexto do Cenário
    
    Você está construindo o **Gateway de Telemetria** de uma infraestrutura de rede. Esse gateway recebe conexões de diferentes tipos de dispositivos através de requisições HTTP (Payload em formato JSON).
    O payload pode vir de um **Roteador** (que envia dados de tráfego de pacotes) ou de um **Servidor** (que envia consumo de CPU e Memória). O payload vem tipado inicialmente como `unknown` devido à natureza dinâmica da rede.
    
    ### O Desafio
    
    Escreva um arquivo TypeScript que implemente estritamente o Clean Code e a tipagem avançada que discutimos:
    
    1. Crie as interfaces `RouterMetrics` (campos: `throughputMbps: number`, `droppedPackets: number`) e `ServerMetrics` (campos: `cpuUsagePercentage: number`, `ramUsageGb: number`).
    2. Crie um tipo unificado `DevicePayload` que contenha campos comuns (`deviceId: string`, `timestamp: number`) e uma propriedade chamada `metrics` que pode ser um dos dois tipos criados acima.
    3. Crie **Type Guards customizados** para validar se o payload recebido (que chega como `unknown`) é um payload válido e diferencie se ele pertence a um Roteador ou a um Servidor.
    4. Crie uma função `handleDeviceTelemetry(payload: unknown): string` que utilize os seus Type Guards. Se for um Roteador, retorne uma string formatada simulando o log de rede. Se for um Servidor, faça o mesmo. Se o payload for inválido, use o tipo `never` ou lance uma exceção apropriada.
    
    **Como responder:** Escreva o código completo em TypeScript respondendo a este prompt. Assim que você postar a solução, farei o Code Review e abriremos os tópicos da **Semana 02**. Está pronto? Mãos à obra.
    
    - **Código**
        
        ### **Função** `isRouterMetrics`:
        
        #### Linha 1:
        
        - **`(metrics: unknown)`**: O parâmetro que a função recebe se chama `metrics`. O tipo dele é `unknown` (desconhecido), o que significa que pode ser qualquer coisa que veio da rede.
        - **`: metrics is RouterMetrics`**: Aqui está o segredo do **Type Guard**. Em vez de dizer que a função retorna apenas um `boolean` comum, você está dizendo ao compilador do TypeScript: *"Se esta função retornar `true`, você pode ter certeza de que o objeto `metrics` que eu te passei é do tipo `RouterMetrics`"*.
        
        #### Linha 2:
        
        - **`(metrics as RouterMetrics)`**: Isso é um **Type Assertion** (afirmação de tipo). Como `metrics` é `unknown`, o TypeScript não deixa você acessar nenhuma propriedade dele. Com o `as RouterMetrics`, você diz: *"TypeScript, finja por um segundo que este objeto é um RouterMetrics para eu poder testar uma coisa"*.
        - **`.throughputMbps !== undefined`**: Aqui você acessa a propriedade e checa: *"Essa propriedade existe e é diferente de `undefined`?"*. Se ela existir no objeto real, essa parte se torna `true`.
        
        ### Função `isServerMetrics`
        
        - Ao usar `typeof metrics === 'object'`, `metrics != null` e o operador `'propriedade' in metrics`, você garantiu que o código nunca vai quebrar, mesmo que o dado que venha da rede seja algo completamente bizarro (como uma string ou um número).
        
        ```tsx
        interface RouterMetrics {
            throughputMbps: number;
            droppedPackets: number;
        }
        
        interface ServerMetrics {
            cpuUsagePercent: number;
            ramUsageGb: number;
        }
        
        type DevicePayload = {
            deviceId: string;
            timestamp: number;
            metrics: RouterMetrics | ServerMetrics;
        }
        
        function isRouterMetrics(metrics: unknown): metrics is RouterMetrics {
            return (metrics as RouterMetrics).throughputMbps !== undefined &&
             (metrics as RouterMetrics).droppedPackets !== undefined;
        }
        
        function isServerMetrics(metrics: unknown): metrics is ServerMetrics{
            // Primeiro checa se é um objeto válido, depois checa se as chaves existem nele
            return typeof metrics === 'object' && metrics != null &&
            'cpuUsagePercent' in metrics && 
            'ramUsageGb' in metrics;
        }
        
        function isDevicePayload(payload: unknown): payload is DevicePayload {
            return typeof payload === 'object' && payload != null &&
            'deviceId' in payload &&
            'timestamp' in payload &&
            'metrics' in payload
        }
        
        function handleDeviceTelemetry(payload: unknown): string {
            if (!isDevicePayload(payload)) {
                throw new Error('Payload inválido');
            }
        
            if (isRouterMetrics(payload.metrics)) {
                return `Roteador ${payload.deviceId} - Throughput: ${payload.metrics.throughputMbps} Mbps`
            }
        
            if (isServerMetrics(payload.metrics)) {
                return `Servidor ${payload.deviceId} - CPU: ${payload.metrics.cpuUsagePercent}%, RAM: 
                ${payload.metrics.ramUsageGb} GB`
            }
        
            // Tratamento caso o payload seja válido, mas as métricas não sejam reconhecidas
            throw new Error('Métricas inválidas');
        
        }
        ```
        
- **Desafio 2**
    
    Você está criando um **Wrapper de Resposta de API** para o seu frontend. As respostas da API sempre vêm em um formato padrão do backend, mas o conteúdo dos dados (`data`) muda dependendo da página que está chamando.
    
    1. Crie uma interface genérica chamada `ApiResponse<T>` que tenha três propriedades:
        - `status`: um número (ex: 200, 400).
        - `success`: um boolean.
        - `data`: que deve ser do tipo genérico `T`.
    2. Crie uma restrição: o seu tipo `T` **deve obrigatoriamente** ser um objeto (dica: `<T extends object>`).
    3. Crie uma função chamada `parseApiResponse<T extends object>(response: unknown): ApiResponse<T>`.
        - Ela deve receber uma resposta do tipo `unknown` (simulando o dado bruto que veio da rede).
        - Dentro dela, use um Type Guard simples para garantir que a `response` é um objeto válido, que possui as propriedades `status` e `data`.
        - Se for válido, retorne o dado tipado como `ApiResponse<T>`. Se for inválido, lance um erro.
    
    ```tsx
    // Criamos uma interface genérica. O <T extends object> significa que quem usar
    // essa interface DEVE passar um tipo que seja um objeto (não pode ser número, string, etc.)
    interface ApiResponse<T extends object> {
      status: number;
      success: boolean;
      data: T; // O dado interno assume o tipo que passarmos para T
    }
    
    // Type Guard para validar se um valor é do tipo ApiResponse
    // Esta função recebe um valor 'unknown' e avisa o TypeScript: "se eu retornar true,
    // significa que esse valor é um objeto com as propriedades status e data".
    
    // A função parseadora também é genérica <T extends object> para poder repassar esse tipo para a interface.
    function parseApiResponse<T extends object>(response: unknown): ApiResponse<T> {
      
      // Implementação do Type Guard para validar a estrutura do objeto
      // Checamos se a resposta existe, se é um objeto e se não é nula
      if (typeof response === 'object' && response !== null) {
        
        // Verificamos se as propriedades obrigatórias do contrato existem no objeto
        if ('status' in response && 'data' in response && 'success' in response) {
          
          // Se passou em todas as checagens, fazemos o Type Assertion seguro.
          // O compilador agora aceita porque nós inspecionamos o dado antes.
          return response as ApiResponse<T>;
        }
      }
      throw new Error("Resposta inválida: não é um objeto ou não tem as propriedades necessárias.");
    }
    
    // --- EXEMPLO DE USO ---
    // Definimos o contrato do que esperamos receber para um Usuário
    interface User {
      id: number;
      name: string;
    }
    
    // Simulamos um dado bruto que acabou de chegar de um fetch() da internet
    const dadoBrutoDoServidor = {
      status: 200,
      success: true,
      data: {
        id: 1,
        name: "Gabriel",
      },
    };
    
    // O TypeScript vai olhar lá dentro e garantir que 'respostaFormatada.data' é um 'User'.
    // Chamando a função e dizendo que o 'T' deve ser o tipo 'User'
    const respostaFormatada = parseApiResponse<User>(dadoBrutoDoServidor);
    
    // Agora o TypeScript sabe exatamente o que tem dentro de 'data'!
    // A partir daqui, você tem total segurança e autocomplete no seu editor:
    console.log(respostaFormatada.success);   // Imprime: true
    console.log(respostaFormatada.data.name); // Imprime: "Gabriel"
    
    ```
