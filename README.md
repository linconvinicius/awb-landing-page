# 🚀 AWB Digital - Landing Page

Landing page premium para agência de desenvolvimento de software com design futurista, modo escuro, animações suaves e sistema completo de envio de e-mails.

![AWB Digital](https://img.shields.io/badge/AWB-Digital-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Desenvolvimento](#-desenvolvimento)
- [Deploy](#-deploy)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Licença](#-licença)

## 🎯 Sobre o Projeto

Landing page moderna e responsiva desenvolvida para a AWB Digital, uma agência especializada em desenvolvimento de software, automação com N8N, e soluções Low-Code/No-Code. O projeto apresenta um design premium com foco em conversão e experiência do usuário.

### ✨ Destaques

- 🎨 Design futurista com glassmorphism e gradientes
- 🌙 Modo escuro elegante
- ✉️ Sistema completo de envio de e-mails via Gmail SMTP
- 📊 Calculadora de orçamento interativa
- 🎭 Animações suaves com Framer Motion
- 📱 Totalmente responsivo
- ⚡ Performance otimizada com Vite
- 🔒 Variáveis de ambiente seguras

## 🎁 Funcionalidades

### 1. **Hero Section**
- Apresentação impactante com código animado
- Call-to-actions estratégicos
- Efeitos de blur e gradientes

### 2. **Marquee de Parceiros**
- Carrossel infinito de tecnologias
- Logos animados com hover effects
- Integração com CDN de ícones

### 3. **Seção de Serviços**
- Cards interativos com hover effects
- Grid responsivo
- Badges de tecnologias

### 4. **Calculadora de Orçamento**
- Simulador interativo de investimento
- Tipos de projeto: Landing Page, SaaS, Mobile App, Automação/IA
- Cálculo dinâmico baseado em:
  - Complexidade do projeto
  - Número de telas/rotas
  - Integrações adicionais
  - Urgência de entrega
- Detalhamento completo de custos

### 5. **Modal de Contato**
- Formulário completo com validação
- Integração com dados da simulação
- Envio de e-mail via API
- Feedback visual de sucesso/erro
- Estados de loading

### 6. **Sistema de E-mail**
- Envio via Gmail SMTP com Nodemailer
- Template HTML responsivo
- Suporte a dados da simulação
- Configuração via variáveis de ambiente
- API serverless para Vercel

## 🛠 Tecnologias

### Frontend
- **React 19.2** - Biblioteca JavaScript para interfaces
- **TypeScript 5.8** - Superset tipado do JavaScript
- **Vite 6.2** - Build tool e dev server ultra-rápido
- **Framer Motion 11** - Biblioteca de animações
- **Lucide React** - Ícones modernos e customizáveis

### Backend/API
- **Nodemailer 7.0** - Envio de e-mails via SMTP
- **Express 5.2** - Framework web (para desenvolvimento local)
- **Dotenv** - Gerenciamento de variáveis de ambiente
- **CORS** - Controle de acesso HTTP

### Styling
- **CSS Modules** - Estilos com escopo local
- **Tailwind-like utilities** - Classes utilitárias customizadas
- **Glassmorphism** - Efeitos de vidro fosco
- **CSS Grid & Flexbox** - Layouts responsivos

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Conta Gmail com senha de aplicativo configurada

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/awb-landing-page.git
cd awb-landing-page
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Crie o arquivo .env na raiz do projeto
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:
```env
GMAIL_USER=seu-email@gmail.com
GMAIL_PASS=sua-senha-de-aplicativo
GMAIL_TO=email-destino@gmail.com
```

> ⚠️ **Importante**: Use uma [senha de aplicativo do Gmail](https://support.google.com/accounts/answer/185833), não sua senha normal!

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Configurações de E-mail
GMAIL_USER=seu-email@gmail.com          # E-mail que enviará as mensagens
GMAIL_PASS=xxxx xxxx xxxx xxxx          # Senha de aplicativo do Gmail (16 caracteres)
GMAIL_TO=destino@empresa.com            # E-mail(s) que receberá(ão) os contatos
```

> 💡 **Dica**: Para enviar para múltiplos e-mails, separe-os com vírgula:
> ```env
> GMAIL_TO=email1@empresa.com,email2@empresa.com,email3@empresa.com
> ```

### Como obter a senha de aplicativo do Gmail

1. Acesse [myaccount.google.com](https://myaccount.google.com)
2. Vá em **Segurança** → **Verificação em duas etapas** (ative se necessário)
3. Role até **Senhas de app**
4. Selecione **Outro (nome personalizado)** → Digite "Seu Projeto"
5. Copie a senha de 16 caracteres gerada
6. Cole no arquivo `.env` como `GMAIL_PASS`

## 🚀 Desenvolvimento

### Scripts disponíveis

```bash
# Iniciar servidor de desenvolvimento (Frontend)
npm run dev

# Iniciar servidor de API (Backend - com auto-restart)
npm run dev:api

# OU manualmente sem auto-restart:
node dev-server.js

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

> ⚠️ **Importante para desenvolvimento local**: 
> Para testar o envio de e-mails localmente, você precisa rodar **dois servidores**:
> 1. **Terminal 1**: `npm run dev` (Frontend na porta 3000)
> 2. **Terminal 2**: `npm run dev:api` (API na porta 3001 com auto-restart)
>
> O Vite fará proxy das requisições `/api/*` para o servidor de desenvolvimento.
>
> 💡 **Vantagem do nodemon**: O servidor reinicia automaticamente quando você altera:
> - `dev-server.js`
> - Arquivos em `api/`
> - Arquivo `.env`

### Estrutura de componentes

```
src/
├── components/
│   ├── ContactModal.tsx      # Modal de contato com formulário
│   ├── Footer.tsx            # Rodapé da página
│   ├── Navbar.tsx            # Barra de navegação
│   ├── PartnersMarquee.tsx   # Carrossel de parceiros
│   ├── ProjectEstimator.tsx  # Calculadora de orçamento
│   ├── ServiceCard.tsx       # Card de serviço
│   └── TestimonialCard.tsx   # Card de depoimento
├── data/
│   ├── partners.ts           # Dados dos parceiros/tecnologias
│   ├── services.ts           # Dados dos serviços
│   └── testimonials.ts       # Dados dos depoimentos
├── hooks/
│   └── useReveal.ts          # Hook para animações de scroll
├── lib/
│   └── utils.ts              # Funções utilitárias
├── App.tsx                   # Componente principal
├── index.tsx                 # Entry point
├── index.css                 # Estilos globais
└── types.ts                  # Definições de tipos TypeScript
```

## 🌐 Deploy

### Deploy na Vercel (Recomendado)

1. **Instale a CLI da Vercel**
```bash
npm i -g vercel
```

2. **Faça login**
```bash
vercel login
```

3. **Configure as variáveis de ambiente**

No painel da Vercel:
- Vá em **Settings** → **Environment Variables**
- Adicione as variáveis:
  - `GMAIL_USER`
  - `GMAIL_PASS`
  - `GMAIL_TO`

4. **Deploy**
```bash
vercel --prod
```

### Deploy manual

1. **Build do projeto**
```bash
npm run build
```

2. **Upload da pasta `dist/`**

Faça upload da pasta `dist/` para seu servidor web.

3. **Configure a API**

A pasta `api/` contém as serverless functions. Se não estiver usando Vercel, você precisará configurar um servidor Express separado.

## 📁 Estrutura do Projeto

```
awb-landing-page/
├── api/                      # Serverless functions (Vercel)
│   └── send-email.js         # Endpoint de envio de e-mail
├── src/                      # Código fonte
│   ├── components/           # Componentes React
│   ├── data/                 # Dados estáticos
│   ├── hooks/                # Custom hooks
│   ├── lib/                  # Utilitários
│   ├── App.tsx               # Componente raiz
│   ├── index.tsx             # Entry point
│   ├── index.css             # Estilos globais
│   └── types.ts              # Tipos TypeScript
├── .env                      # Variáveis de ambiente (não commitado)
├── .gitignore                # Arquivos ignorados pelo Git
├── index.html                # HTML principal
├── package.json              # Dependências e scripts
├── tsconfig.json             # Configuração TypeScript
├── vite.config.ts            # Configuração Vite
└── README.md                 # Este arquivo
```

## 🔒 Segurança

- ✅ Variáveis de ambiente não são commitadas (`.env` no `.gitignore`)
- ✅ Senhas de aplicativo do Gmail (não senha real)
- ✅ CORS configurado para produção
- ✅ Validação de formulários no frontend
- ✅ Sanitização de dados antes do envio

## 🐛 Troubleshooting

### E-mail não está sendo enviado

1. Verifique se as variáveis de ambiente estão corretas
2. Confirme que está usando uma senha de aplicativo, não a senha normal
3. Verifique se a verificação em duas etapas está ativada no Gmail
4. Confira os logs do console para erros específicos

### Build falha

1. Limpe o cache: `rm -rf node_modules package-lock.json`
2. Reinstale: `npm install`
3. Tente novamente: `npm run build`

### Página em branco após deploy

1. Verifique se o `base` no `vite.config.ts` está correto
2. Confirme que todas as variáveis de ambiente foram configuradas na Vercel
3. Verifique os logs de build na Vercel

## 📝 Licença

Este projeto é propriedade da **AWB Digital**. Todos os direitos reservados.

---

<div align="center">

**Desenvolvido com 💙 por [AWB Digital](https://awb-landing-page.vercel.app/)**

*Elevando o padrão de desenvolvimento de software no Brasil*

</div>
