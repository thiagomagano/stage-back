# Apresentação do Case - Stage

## Resumo Geral

Achei o desafio muito massa e desafiador, consegui aprender bastante com ele,  embora tenha rolado uma frustração por não conseguir realizar a entrega completa no prazo, acho que o saldo final é positivo.

## Porque da Stack?

- **Nest.js**: Vinha estudando Java e Spring e esse me pareceu o Framework mais semelhante no estilo de arquitetura. queria testar e desenvolver com ele.
- **Next.js**: Acho que todos projetos atualmente React utilizam o next pelas inúmeras conveniências que o Framework traz.
- **Typeorm**: É uma das integrações do NESTJs, como já tinha trabalhado com prisma, escolhi uma coisa nova pra aprender tbm.
- **Mysql**: Nostalgia kkk Só pra fugir do padrão que atualmente é o Postgres.
- **Jest**: Também é o Padrão pra testes no Javascript. Também nunca tinha me aprofundado.
## Como Encarei o Problema

- O backend achei que seria o mais simples por serem poucas unidades para realizar o CRUD
- Fiquei um pouco em dúvida de como modelar os dados no banco de dados, pq pedia parar ser uma única entidade para Processo e SubProcesso
- Eu Acabei escolhendo fazer com duas Tabelas separadas, como processo pai e etapas para concluir esse processo.
- No front eu achei que seria bem complexo de desenhar os fluxos na cadeia correta e de como o usuário interagiria nesse processo 
- cogitei usar o estilo de fluxogramas BPMN e achei a biblioteca do React Flow bem massa para esse tipo de Abordagem mas fiquei sem tempo para implementar uma solução satisfatória


- Considerei utilizar o React flow no Front, uma biblioteca bem massa para desenhar nós e suas ligação na tela.
- Mas decidi fazer primeiro o backend e em fazer o CRUD das entidades
- Porém apanhei bastante para integrar todas as soluções novas como modelar o banco via entidades no Typeorm, como utilizar os módulos no NESTJS e como criar mocks para fazer teste de unidade a aplicação
- Aí surgiram inúmeros BUGS que consumiram a maior parte do meu tempo
- Após conseguir me livrar da maioria e conseguir fazer o CRUD da forma mais simples para todas entidades, fui pro frontend
- No front-end mais dificuldades com os React Server Components

## O Processo

- Basicamente, surgia o problema, ex "Como implementar criar uma Rota", e eu seguia os seguintes passos:
- Ler documentação oficial 
- Ler os exemplos de implemetação no Github de como outras pessoas fazem isso
- Perguntar ao GPT ou Gemini (ou os dois) como ele resolveria essa questão.
- Quando surgia um bug:
- Jogar o erro no Google
- Entrar no primeiro link do stackoverflow e ler o problema e tentar solucionar.
- Acho que esse é o ciclo de toda nova funcionalidade e que me utilizei pra desenvolver esse desafio.

## Principais Aprendizados

- Gostei muito do **NestJS** de uma forma geral em como tudo é modular e todos arquivos parecem ter o seu papel.
- Utilização dos **Patterns**, como Services, Repositores, Controllers, DTOs. Nunca tinha desenvolvido utilizando isso e achei muito massa, preciso ler mais sobre o assunto.
- Testes, aprendi a fazer testes de unidades bem legais, a criar mocks para testar services sem utilizar o banco, até um pouco de e2e, criar um banco de docker só pra esses tipos de testes. Uma pena que perdi tempo dms com isso e dps tive que praticamente abandonar os desfez pra resolver o problema proposto.
- TypeORM embora tenha sido um pé no sapato
- Testar Endpoints utilizando Insômnia
- Docker e Docker-Compose


## Principais Erros

- Perder MT tempo com bugs de framework, integrações, compilação de Typescript
- Perder MT tempo com testes unitário simples, precisava aprender como fazia e no NEST tem uma camada a mais de mock, oq dificulta bastante perde MT tempo nisso.
- Falta de organização, utilizei poucos guias de To-do ou Trello, acho que me ajudaria mais se eu criasse um fluxo melhor pra isso.
- Acho que as vezes eu perdia o foco da resolução do problema pra fazer um pouco de "over Engineering" em algumas situações precisaria ser mais pragmático.
- Fazer uma implementação simples primeiro e dps ir incrementando.

## O que eu faria diferente 

- Faria primeiro a implementação mais simples possível, tanto Front, quanto no back.
- Como era uma aplicação com o mais complexo sendo no Front, talvez começar por ela seria melhor e ter uma resultado mais satisfatória.
- Perderia menos tempo debugando manualmente erros de frameworks e ORM.

## Considerações Finais

Em resumo, eu apanhei bastante, me frustrei, tive muitos "Skill Issues", me senti sem capacidade em um momento, mas em outro me senti o melhor do mundo. Mas serviu como um bom aprendizado e eu saio muito maior do que quando comecei esse projeto. Foram só 4 dias, mas foram 4 dias intensos, de Suor e Lágrimas em busca de um objetivo que é me tornar um desenvolvedor melhor e isso eu atingi.