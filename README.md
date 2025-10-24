# 🛍️ Projeto CaquiCanela E-commerce (Fullstack)

Este repositório contém o código-fonte completo do **CaquiCanela**, um e-commerce de roupas femininas desenvolvido como parte do projeto de extensão do curso de Análise e Desenvolvimento de Sistemas da Católica SC.  
O sistema foi criado para atender às necessidades da empresa **CaquiCanela**, que trabalha com revenda de roupas femininas, oferecendo uma plataforma moderna, intuitiva e segura para suas clientes.

---

## 🧩 Estrutura do Projeto

Este é um **monorepo** que contém as duas aplicações separadas:

```
/
├── /backend/       (Servidor Node.js + Express + Sequelize)
└── /frontend/      (Cliente React + Vite + Tailwind CSS)
└── README.md       (Você está aqui)
```

### 📦 Tecnologias Utilizadas

**Backend**
- Node.js  
- Express  
- Sequelize (ORM)  
- MySQL  
- JWT + Bcrypt  
- Dotenv  

**Frontend**
- React  
- Vite  
- Tailwind CSS  
- Axios  
- React Router DOM  

---

## ⚙️ Como Rodar o Projeto Localmente

Você precisará ter o **Node.js (v18 ou superior)** e o **MySQL** instalados.

Para rodar o projeto completo, abra **dois terminais separados** — um para o backend e outro para o frontend.

---

### 🖥️ 1. Rodando o Backend (API)

No primeiro terminal:

```bash
# 1. Navegue até a pasta do backend
cd backend

# 2. Instale as dependências (apenas na primeira vez)
npm install

# 3. Inicie o servidor
npm start
```

O backend estará disponível em **http://localhost:3000**

---

### 💻 2. Rodando o Frontend (Loja)

No segundo terminal:

```bash
# 1. Navegue até a pasta do frontend
cd frontend

# 2. Instale as dependências (apenas na primeira vez)
npm install

# 3. Inicie o cliente React
npm run dev
```

O frontend estará disponível em **http://localhost:5173**  
(o Vite pode escolher outra porta, verifique no terminal).

O frontend se conecta automaticamente à API em **http://localhost:3000**.

---

## 🧠 Equipe de Desenvolvimento

| Integrante | Responsabilidades |
|-------------|-------------------|
| **Samuel Morsch** | Configuração do ambiente backend, autenticação e integração Express + Sequelize |
| **João Silva** | Modelagem de entidades (User, Product, Stock, Address) e rota de produtos |
| **George Lima** | Implementação de pedidos e pagamentos, e criação do seed de administrador |

---

## 📝 Licença
Este projeto foi desenvolvido exclusivamente para fins acadêmicos, sem fins comerciais.

---

## 💬 Contato
Para dúvidas ou colaborações, entre em contato com a equipe de desenvolvimento pelo e-mail:  
📧 **contato@caquicanela.com**
