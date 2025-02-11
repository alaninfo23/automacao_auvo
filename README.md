# Automação de Testes Web

Este repositório contém uma prova de conceito (POC) de automação de testes para validar o fluxo de cadastro e pesquisa de produtos em um site de e-commerce fictício [Sauce Demo](https://www.saucedemo.com/). O projeto foi implementado utilizando o Playwright para automação de testes em JavaScript, com a arquitetura Page Object Model (POM) para uma estrutura modular e manutenível.

## Fluxo de Testes

O fluxo de testes automatizados cobre os seguintes passos no site de e-commerce:

1. **Login**: Fazer login na aplicação com credenciais padrão fornecidas.
2. **Navegação e Pesquisa**: Navegar até a seção de produtos e realizar uma pesquisa.
3. **Validação do Produto**: Selecionar um produto, verificar o título, preço e descrição.
4. **Adicionar ao Carrinho e Checkout**: Adicionar o produto ao carrinho, acessar o carrinho e seguir até a tela de checkout.
5. **Finalização de Pedido**: Preencher os dados de checkout e finalizar o pedido.

## Tecnologias Utilizadas

- **Playwright**: Ferramenta de automação para testes web.
- **JavaScript**: Linguagem de programação utilizada.
- **Node.js**: Ambiente de execução para o projeto.
- **Page Object Model (POM)**: Arquitetura de testes para manter a organização e facilitar a manutenção dos testes.

## Requisitos

- **Node.js**: Para executar o projeto.
- **Playwright**: Para automação dos testes.
- **Git**: Para versionamento do código.

## Estrutura do Projeto

A estrutura do projeto foi organizada seguindo a arquitetura Page Object Model (POM), onde a navegação e as interações com os elementos da página são encapsuladas em objetos, tornando o código mais modular e reutilizável.

### Estrutura de Diretórios

- **node_modules**: Contém todas as dependências instaladas pelo npm.
- **pages**: Contém os arquivos do Page Object Model (POM), onde cada arquivo representa uma página do site, com métodos para interação com os elementos dessa página.
- **test-results**: Pasta onde ficam armazenados os resultados dos testes, incluindo o arquivo `.last-run.json` com dados sobre a última execução.
- **tests**: Contém os scripts de teste que validam o fluxo de cadastro e compra de produtos.
- **package.json**: Arquivo de configuração que gerencia as dependências e scripts do projeto.
- **README.md**: Este arquivo de documentação que fornece informações sobre o projeto.

## Como Configurar e Executar o Projeto

1. Clonar o repositório
Clone este repositório para o seu ambiente local:
git clone https://github.com/alaninfo23/automacao-auvo.git
cd automacao-auvo

3. Instalar Dependências
Instale as dependências do projeto utilizando o npm:
npm install

4. Executar os Testes
Para rodar os testes, use o comando abaixo:
npx playwright test --headed
O parâmetro --headed permite que os testes sejam executados com uma interface gráfica, para que você possa acompanhar as interações em tempo real.

5. Executar Testes de Forma Específica
Se desejar executar um teste específico, você pode indicar o arquivo de teste:
npx playwright test tests/cadastroECompra.spec.js --headed

Fluxo de Execução dos Testes
Login: O primeiro passo dos testes é realizar o login com as credenciais padrão:

Usuário: standard_user
Senha: secret_sauce
Navegação e Pesquisa: O sistema navega até a seção de produtos e realiza uma pesquisa para validar a visibilidade dos produtos.

Validação do Produto: Um produto é selecionado aleatoriamente da lista e as informações de título, preço e descrição são validadas.

Adicionar ao Carrinho: O produto selecionado é adicionado ao carrinho de compras.

Checkout: Após adicionar o produto ao carrinho, o sistema segue para a página de checkout, onde os dados de endereço e pagamento são preenchidos.

Finalização de Pedido: O pedido é finalizado e o teste valida a conclusão do fluxo.

5. Suposições e Decisões
Página de login: Assume-se que as credenciais standard_user e secret_sauce são válidas para realizar o login no site.
Seletores: Os seletores dos elementos HTML são baseados na estrutura da página do site de teste Sauce Demo.
Ambiente de Teste: O teste foi realizado no site público, sem a necessidade de configuração de ambiente adicional.
Conclusão
Este projeto de automação de testes com Playwright cobre o fluxo completo de compra de um produto em um site de e-commerce fictício. A utilização da arquitetura Page Object Model (POM) permite uma estrutura de código modular e fácil de manter, além de ser robusta o suficiente para expandir os testes no futuro.

Link do Repositório
O código pode ser encontrado no repositório público do GitHub:

https://github.com/alaninfo23/automacao-auvo

Autor: Jose Alan dos Santos Rocha
Data: 09/12/2024
