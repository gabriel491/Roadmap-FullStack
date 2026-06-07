## `Promise.all`
    
Na Web moderna, a latência de rede (o tempo que um pacote leva para ir do cliente ao servidor e voltar) é o maior gargalo de performance. É aqui que entram os padrões de concorrência com `Promise.all` e `Promise.race`.

### `Promise.all`: Alta Performance e o Efeito Cascata (Waterfall)

Vem para solucionar o problema latência que é causada por códigos que fazem requisições de rede de forma sequencial (uma seguida da outra) quando elas poderiam ser feitas ao mesmo tempo.

```jsx
const produto = await fetch('/api/produto/123').then(res => res.json()); // 400ms
const comentarios = await fetch('/api/produto/123/comentarios').then(res => res.json()); // +400ms
const relacionados = await fetch('/api/produto/123/relacionados').then(res => res.json()); // +400ms
```

**BAD**: Cada requisição espera a anterior terminar para começar.
Se cada uma demorar 400ms, o usuário vai esperar 1.2 segundos para ver a página!

### **A Solução: Concorrência com `Promise.all`**

Com `Promise.all`, nós passamos um array de Promises. O navegador (ou o Node.js) dispara as três requisições HTTP **ao mesmo tempo**. Ele abre múltiplos canais ou reaproveita a mesma conexão via HTTP/2 (Multiplexação).

```tsx
const promise1 = new Promise((resolve, reject) => {
setTimeout(()=> resolve("promise 1 resolvida"), 1000)
});

const promise2 = new Promise((resolve, reject) => {
setTimeout(()=> resolve("promise 2 resolvida"), 500)
});

const promise3 = new Promise((resolve, reject) => {
setTimeout(() => resolve("promise 3 resolvida"), 100)
});

Promise.all( [promise1, promise2, promise3] ).then((messages) => {
console.log(messages)})
```

**GOOD**: As três requisições viajam pela rede simultaneamente.
O tempo total de espera cai para o tempo da requisição mais lenta (apenas ~400ms)!

### 🚨 A Natureza "Tudo ou Nada" (All-or-Nothing)

O `Promise.all` tem um comportamento crítico: **Se apenas uma das Promises falhar (for rejeitada), o `Promise.all` rejeita imediatamente**, ignorando todas as outras que tiveram sucesso.

Se **apenas uma** única Promise falhar (der `reject`), o `Promise.all` cancela a espera pelas outras e executa imediatamente o bloco `.catch`.

## `Promise.allSettled & Promise.race` 

### Exemplo com `Promise.allSettled`

Ao contrário do `Promise.all` (que desiste no primeiro erro), o `allSettled` espera **todas** as promises terminarem (seja com sucesso ou com erro). Ele **nunca** vai para o `.catch` por causa de uma rejeição. Ele te devolve uma array de objetos descrevendo o destino de cada uma.

**Nosso trio de Promises base:**

```jsx
const promise1 = new Promise((resolve) => {
setTimeout(() => resolve("promise 1 resolvida"), 1000); // Demora 1s (Sucesso)
});
const promise2 = new Promise((resolve, reject) => {
setTimeout(() => reject("Erro na promise 2!"), 500);    // Demora 0.5s (Falha)
});
const promise3 = new Promise((resolve) => {
setTimeout(() => resolve("promise 3 resolvida"), 100);  // Demora 0.1s (Sucesso)
});
```

```jsx
Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
    console.log("--- RESULTADO DO ALLSETTLED ---");
    console.log(results);
    });
```

**Resultado:**

```jsx
[
{ "status": "fulfilled", "value": "promise 1 resolvida" },
{ "status": "rejected", "reason": "Erro na promise 2!" },
{ "status": "fulfilled", "value": "promise 3 resolvida" }
]
```

💡 **Por que usar?** É ideal quando você precisa disparar várias requisições que não dependem uma da outra (ex: carregar o menu, carregar o rodapé e carregar o feed). Se o rodapé falhar, você ainda quer mostrar o menu e o feed!

### Exemplo com `Promise.race()`

O `Promise.race` faz jus ao nome: é uma **corrida**. A primeira Promise que terminar (seja terminando com sucesso **OU** terminando com erro) ganha a corrida. O `Promise.race` ignora todas as outras que vierem depois.

**Nosso trio de Promises base:**

```jsx
const promise1 = new Promise((resolve) => {
setTimeout(() => resolve("promise 1 resolvida"), 1000); // Demora 1s (Sucesso)
});
const promise2 = new Promise((resolve, reject) => {
setTimeout(() => reject("Erro na promise 2!"), 500);    // Demora 0.5s (Falha)
});
const promise3 = new Promise((resolve) => {
setTimeout(() => resolve("promise 3 resolvida"), 100);  // Demora 0.1s (Sucesso)
});
```

```jsx
Promise.race([promise1, promise2, promise3])
    .then((winnerMessage) => {
    console.log("--- VENCEDORA DA CORRIDA (.then) ---");
    console.log(winnerMessage);
    })
    .catch((winnerError) => {
    console.log("--- VENCEDORA DA CORRIDA (.catch) ---");
    console.log(winnerError);
    });
```

A **`promise3`** ganha!
Porque ela demora apenas **100ms** para terminar, enquanto a `promise2` demora 500ms e a `promise1` demora 1000ms. Como a `promise3` usou `resolve`, o fluxo vai para o `.then`.

- **O que será impresso no console (após 0.1 segundos):**`promise 3 resolvida`

### 🧠 E se a `promise3` fosse a que falhasse? (Cenário extra do Race)

Se mudássemos o tempo da `promise2` (a que dá erro) para ser a mais rápida de todas (ex: 50ms), **o erro ganharia a corrida**. O fluxo iria direto para o `.catch` e imprimiria `"Erro na promise 2!"` em apenas 50ms.

> 💡 **Por que usar?** O `Promise.race` é excelente para criar *timeouts* de segurança. Você coloca a sua requisição de rede para correr contra uma Promise que dá erro obrigatoriamente em 5 segundos. Se a rede demorar mais de 5 segundos, a Promise de timeout ganha a corrida e você avisa o usuário que a conexão falhou!
> 

| **Método** | **Comportamento** | **O que ele retorna?** |
| --- | --- | --- |
| **`Promise.all`** | Tudo ou Nada (*Fail-fast*) | Array com os dados de sucesso OU o primeiro erro. |
| **`Promise.allSettled`** | Paciente (Espera todo mundo) | Array de objetos contendo o `status` e o `value`/`reason` de cada uma. |
| **`Promise.race`** | O mais rápido vence (Sucesso ou Erro) | Apenas o resultado (ou erro) da primeira que terminar. |
