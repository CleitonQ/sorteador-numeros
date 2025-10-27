Sorteador de Números
![Sorteador de números](https://github.com/user-attachments/assets/ff7f883b-676a-4212-ac38-f688b282a1b6)

Este projeto é um sorteador de números simples desenvolvido utilizando HTML, CSS e JavaScript. O objetivo é fornecer uma interface interativa onde os usuários podem selecionar um intervalo de números e quantos números deseja sortear. O sistema garantirá que não haja números repetidos e exibirá o resultado de forma dinâmica.

🚀 Funcionalidades

Seleção de Intervalo: O usuário pode definir o intervalo de números com o campo "De" e "Até".

Quantidade de Números: Permite que o usuário escolha quantos números deseja sortear.

Exclusividade dos Números: O sistema garante que não haja números repetidos durante o sorteio.

Validação: O sistema valida se os campos estão preenchidos corretamente e se o intervalo e a quantidade são compatíveis.

Reiniciar: Permite que o usuário reinicie a aplicação para realizar outro sorteio.

📂 Estrutura do Projeto

A estrutura do projeto é a seguinte:
```bash
/SorteadorDeNumeros
│
├── index.html         # Arquivo HTML principal
├── style.css          # Arquivo CSS para o design e layout
├── app.js             # Arquivo JavaScript com a lógica do sorteio
├── /img               # Pasta de imagens (imagens de fundo, ícones, etc.)
│   ├── ia.png         # Imagem do ícone de astronauta
│   └── code.png       # Imagem de fundo com código
│   └── Ruido.png      # Imagem com efeito de fundo
└── README.md          # Documento de descrição do projeto (Este arquivo)
```
🛠️ Tecnologias Utilizadas

HTML5: Para a estruturação da página e os campos de entrada.

CSS3: Para o estilo e o layout responsivo.

JavaScript: Para a lógica de sorteio, validação e manipulação da DOM.

📋 Como Usar
1. Clonar o Repositório

Primeiramente, clone o repositório para sua máquina local utilizando o seguinte comando:
```bash
git clone https://github.com/CleitonQ/sorteador-numeros.git
```
2. Abrir o Projeto

Para visualizar o projeto, basta abrir o arquivo index.html em seu navegador. Não é necessário servidor, pois o projeto é estático.

3. Interagir com o Sorteio

Preencha os campos: Insira o número de sorteios, o valor mínimo e o valor máximo para o sorteio.

Clique em "Sortear": O sistema irá gerar os números exclusivos dentro do intervalo informado.

Clique em "Reiniciar": Para limpar os campos e resultados, e iniciar um novo sorteio.

⚙️ Como Funciona

Validação de Campos: Quando o usuário tenta realizar o sorteio, o sistema verifica se todos os campos estão preenchidos corretamente. Se algum campo estiver vazio, uma mensagem de alerta será exibida.

Geração de Números Aleatórios: Utiliza-se a função Math.random() para gerar números dentro do intervalo definido.

Verificação de Exclusividade: A função garante que os números sorteados não se repitam, verificando a lista de números sorteados antes de adicionar um novo.

Interface Responsiva: O design se adapta automaticamente a diferentes tamanhos de tela, com uma versão simplificada para telas menores.

⚠️ Considerações e Validações

O número de sorteios não pode ser maior do que o intervalo de números definidos, evitando loops ou falhas na execução.

A validação de intervalo e quantidade garante que o sorteio só aconteça quando as condições forem válidas.

🧑‍💻 Contribuição

Contribuições são bem-vindas! Se você deseja melhorar ou adicionar novos recursos, siga os seguintes passos:

Faça um fork deste repositório.

Crie uma branch para sua nova funcionalidade (git checkout -b minha-nova-funcionalidade).

Faça as alterações desejadas e envie suas mudanças (git commit -am 'Adicionando nova funcionalidade').

Faça o push para a branch (git push origin minha-nova-funcionalidade).

Abra um pull request.

## 📇 Créditos

<p align="center">
  Desenvolvido com 💙 por <strong>Cleiton Queiroz</strong>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/cleitonqueiroz-dev" target="_blank">
    <img src="https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/CleitonQ" target="_blank">
    <img src="https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
