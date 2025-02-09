# Ignite Feed

### Objetivo

Projeto desenvolvido para treinar e apronfundar meus conhecimentos em React, entendendo melhor o ambiente e as melhores práticas dessa biblioteca. Essa base será fundamental para, futuramente, explorar e compreender o impacto e os conceitos do Next.js.

### Tecnologias Utilizadas

- **Vite**
  Como se trata de uma aplicação Single Page Application (SPA), o projeto foi criado com o Vite. Essa ferramenta elimina a necessidade de utilizar bundlers ou compiladores complexos, pois aproveita os módulos ES nativos dos navegadores, tornando a aplicação mais rápida, leve e performática.

- **date-fns**
  Para manipulação de datas, utilizamos a biblioteca date-fns, que oferece funções simples e eficientes para trabalhar com datas em JavaScript.

### Funcionalidades

- **Comentar**

##### 1. Estados do Componente:

-`comments`: Armazena a lista de comentários. -`newCommentText`: Armazena o texto do novo comentário enquanto o usuário digita.

##### 2. Função `handleCreateNewPost`:

-Quando o usuário submete o formulário, esta função é chamada. Ela adiciona um novo comentário a lista de comentários e limpa o campo de texto.

##### 3. Função `handleNewCommentChange`:

-Atualiza o estado `newCommentText` sempre que o usuário digita no campo de texto.

[Deploy na Vercel](https://ignite-feed-six-opal.vercel.app/)
