<div align="center">
    <img src="https://github.com/user-attachments/assets/c3140c4f-db0a-41f5-944a-88a66ed6f234" width="250" height="150">
</div>

# 🌍  QueryStudy - Estudo de Query

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=ORANGE&style=for-the-badge)

![Badge PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Badge JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Badge CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![Badge License](http://img.shields.io/static/v1?label=LICENSE&message=MIT&color=BLUE&style=for-the-badge)

## 📝 Descrição do Projeto

O QueryStudy é uma ferramenta focada na memorização prática de comandos de query, como SQL. Seu objetivo é facilitar revisões rápidas para o dia a dia e entrevistas técnicas.A plataforma oferece comandos organizados e exemplos diretos, sem excesso de teoria e utiliza a repetição espaçada.Isso torna o estudo mais eficiente e alinhado às necessidades do mercado.

## 🎟 Em Funcionamento:

<div align="center">
        <img src="https://github.com/user-attachments/assets/c3140c4f-db0a-41f5-944a-88a66ed6f234" width="250" height="150">
</div>

## 🧑‍🦯 Acessibilidade ao Usuário:

* **🌓 Modo Escuro (Dark Mode):** Permite melhor conforto visual, reduzindo o cansaço dos olhos em ambientes com pouca luz.
* **👁️ Mudança da Fonte:**  Possibilita ajustar a tipografia para facilitar a leitura, atendendo diferentes necessidades visuais.

## 🛠️ Tecnologias Utilizadas

* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5**
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3**
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript**
* ![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white) **PHP**
* ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=flat&logo=mysql&logoColor=white) **MySQL**
* ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) **Docker**

## 📂 Estrutura do Projeto

```bash
QUERYSTUDY/
├── database/                 # Configuração do banco
│   └── init.sql              # Script SQL para criar tabelas iniciais
├── src/                      # Código fonte principal
│   ├── .Assets/              # Recursos visuais e estilos
│   │   ├── icon/             # Ícones do sistema (SVG)
│   │   ├── img/              # Imagens gerais
│   │   │   └── personas/     # Ilustrações (avatares unDraw)
│   │   ├── js/               # Lógica do Frontend (botões, temas)
│   │   └── style/            # Folhas de estilo (CSS)
│   ├── App/                  # Lógica do Backend (PHP)
│   │   ├── Models/           # Modelos de dados (ex: User.php)
│   │   └── DataBase.php      # Classe de conexão com o banco
│   └── index.html            # Tela principal
├── .ENV                      # Variáveis de ambiente
├── docker-compose.yml        # Orquestrador dos containers
├── dockerfile                # Receita da imagem Docker
└── README.md                 # Documentação