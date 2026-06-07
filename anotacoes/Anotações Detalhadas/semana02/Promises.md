# Promises em JavaScript

* **O que é:** No JS, uma `Promise` é um objeto retornado por uma classe/função construtora.
* **Quando usar:** Ela é utilizada quando realizamos operações assíncronas — ou seja, ações que não sabemos exatamente quanto tempo irão demorar para serem concluídas (ex: requisições de API, leitura de arquivos, timers).
* **Funções `async`:** Toda função que recebe a palavra-chave `async` antes de sua definição passa a retornar automaticamente uma `Promise`.

> ### Os 4 Estágios de uma Promise:
> 
> 
> * **Pending (Pendente):** Estado inicial, assim que o objeto da promessa é criado e está executando.
> * **Fulfilled (Realizada):** A promessa foi concluída com sucesso.
> * **Rejected (Rejeitada):** A promessa falhou ou houve um erro.
> * **Settled (Estabelecida):** O estado final da promessa, quando ela foi concluída (seja com sucesso ou com erro).
> 
> 

---

### Estrutura básica e o Construtor

Como argumento da `Promise`, passamos uma função de callback (conhecida como *executor*). Essa função recebe dois parâmetros automáticos:

1. `resolve`: Função chamada quando a promessa é concluída com sucesso.
2. `reject`: Função chamada quando a promessa falha.

> 💡 **Nota:** Os nomes `resolve` e `reject` são apenas convenções comuns, você pode alterá-los, mas mantê-los ajuda na leitura do código.

No exemplo abaixo, corrigi a sintaxe do número decimal, pois no JavaScript usamos ponto (`.`) em vez de vírgula (`,`):

```jsx
var venderLivro = new Promise(function(vendido, naoVendido){
    // Corrigido de 40,00 para 40.00
    vendido("R$ " + 40.00); 
});

console.log(venderLivro);

```

---

### Manipulando o Sucesso com `.then()`

Para capturar o valor retornado por uma promessa quando ela é resolvida com sucesso, utilizamos o método `.then()`. Passamos uma função para dentro dele, e o parâmetro dessa função conterá o valor enviado pelo `resolve`.

Se dermos apenas um `console.log(venderLivro)` logo após criá-la (sem esperar), o JS exibirá a promessa com o status de `<pending>`.

```jsx
var venderLivro = new Promise(function(vendido, naoVendido){
    setTimeout(function (){
        var books = ["Herdeiros de Atlântida", "A Batalha do Apocalipse", "A Maldição do Titã"];
        vendido(books);
    }, 5000);
});

venderLivro.then(function (concluido){
    console.log(concluido); // Executa após 5 segundos
});

```

---

### Manipulando Erros com `.catch()`

Para capturar falhas ou rejeições, encadeamos o método `.catch()`. Ele captura o que foi enviado através da função `reject`.

No seu exemplo original do Uber, havia uma pequena distração: se `aceitar` fosse falso, o código executava um `resolve('Pedido Negado')`. O correto para simular o erro é usar o `reject`:

```jsx
let aceitar = false;

console.log('Pedir uber');

const promessa = new Promise((resolve, reject) => {
    if(aceitar) {
        return resolve('Carro Chegou!!!');
    }
    // Corrigido: Usando reject para o caso de erro/negação
    return reject('Pedido Negado :C'); 
});

console.log('Aguardando');

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('Pedido Finalizado'));

```
