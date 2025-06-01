# 💰 ByteBank - Tech Challenge

Este projeto é o resultado do Tech Challenge da Fase 01, consistindo no desenvolvimento do **frontend** de uma aplicação de gerenciamento financeiro. O objetivo é oferecer uma interface intuitiva e funcional para controle de transações financeiras.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Figma](https://www.figma.com/) (para o Design System)

## 📦 Funcionalidades

- Página inicial com saldo e extrato
- Cadastro de nova transação
- Edição de transações existentes
- Exclusão de transações
- Listagem detalhada das transações
- Design responsivo e consistente com Design System

## 📁 Estrutura do Projeto

```
src/
├── app/                  # Configuração principal do Next.js
│   ├── components/       # Componentes reutilizáveis
│   ├── dashboard/        # Página e rota do dashboard financeiro
│   ├── page.tsx          # Página inicial (login)
│   ├── not-found.tsx     # Página para rotas não encontradas
├── constants/            # Constantes globais do projeto
├── context/              # Compartilhamento de estado global
├── data/                 # Mock de dados (simulação)
├── hooks/                # Hooks customizados
├── libs/                 # Bibliotecas utilitárias e funções auxiliares
├── models/               # Modelos e interfaces de dados
├── pages/api             # Rotas de API do Next.js
├── services/             # Serviços para integração com APIs e lógica de negócio
├── types/                # Tipagens compartilhadas
```

## 🧪 Como Executar Localmente

1. Clone o repositório:

```bash
    git clone https://github.com/BrunaABraguin/bytebank.git
```

2. Instale as dependências:

```bash
yarn
```

3. Rode o servidor de desenvolvimento:

```bash
yarn dev
```

4. Acesse: [http://localhost:3000](http://localhost:3000) para visualizar a pagina estática de apresentação

5. Acesse: [http://localhost:3000/dashboard](http://localhost:3000/dashboard) para ser levado ao Dashboard, onde há um usuário de teste disponível.

## 🎥 Vídeo Demonstrativo

O vídeo demonstrativo do fluxo completo da aplicação está disponível no link abaixo:

🔗 [Link para o vídeo Fase 1](https://www.youtube.com/watch?v=z7MupcwsNzM)

👩‍💻 Desenvolvido por

Bruna de Andrade Braguin
