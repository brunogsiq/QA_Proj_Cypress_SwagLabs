```markdown
# Documentação do Projeto

Este documento fornece informações detalhadas sobre a instalação e utilização do Cypress em conjunto com as dependências waitUntil e Mochawesome. Também inclui um breve descritivo sobre o site [SauceDemo](https://www.saucedemo.com/v1/).

## 1. Instalação do Cypress

O Cypress é uma ferramenta de teste de front-end moderna e poderosa que permite escrever, executar e depurar testes de forma fácil e eficiente.

Para instalar o Cypress em seu projeto, siga os seguintes passos:

```bash
npm install cypress --save-dev
```

Após a instalação, você pode inicializar o Cypress executando o comando `npx cypress open` no terminal. Isso criará a estrutura de diretórios necessária e abrirá a interface do usuário do Cypress, onde você pode começar a escrever seus testes.

## 2. Instalação da Dependência waitUntil

O Cypress não possui uma funcionalidade de espera embutida, o que pode ser uma limitação ao lidar com testes que dependem de elementos dinâmicos na página. Para contornar isso, é comum utilizar a dependência [waitUntil](https://www.npmjs.com/package/cypress-wait-until) para esperar por condições específicas em seus testes.

Para instalar o waitUntil, execute o seguinte comando:

```bash
npm install cypress-wait-until --save-dev
```

Após a instalação, você pode importar e utilizar a função `waitUntil` nos seus testes Cypress para aguardar até que uma condição seja atendida antes de continuar.

## 3. Instalação da Dependência Mochawesome

Para relatórios mais detalhados e amigáveis, você pode utilizar a dependência [Mochawesome](https://www.npmjs.com/package/mochawesome) em conjunto com o Cypress. Mochawesome gera relatórios HTML interativos e visualmente atraentes que fornecem insights detalhados sobre os resultados dos testes.

Para instalar o Mochawesome, execute o seguinte comando:

```bash
npm install --save-dev mochawesome
```

Após a instalação, você pode configurar o Cypress para gerar relatórios Mochawesome e personalizar a aparência e o conteúdo dos relatórios conforme necessário.

## 4. Breve Descritivo sobre o SauceDemo

O [SauceDemo](https://www.saucedemo.com/v1/) é um site de demonstração projetado para testes automatizados. Ele oferece uma variedade de funcionalidades e casos de teste para ajudar no aprendizado e prática de automação de testes.

O site inclui recursos como login de usuário, navegação por páginas, adição de itens ao carrinho, check-out de pedidos, entre outros, tornando-o um ambiente adequado para testes de software em diferentes cenários.

Além disso, o SauceDemo oferece suporte para integração com várias ferramentas de automação de testes, como o Cypress, facilitando a execução de testes automatizados em diferentes ambientes e navegadores.

```
```

Mensagem teste - Deverá ser apagada após documentação completa
