# PathFindr - Landing Page

<div align="center">

![PathFindr Logo](public/Footer/PathFindr.png)

**Plataforma que une bem-estar emocional e evolução de carreira em um só lugar**

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-green)](https://greensock.com/gsap/)

</div>

---

## 📋 Sobre o Projeto

O **PathFindr** é uma plataforma inovadora que conecta desenvolvimento profissional e bem-estar emocional, oferecendo uma experiência personalizada para profissionais que buscam equilibrar crescimento na carreira com saúde mental.

Esta landing page foi desenvolvida para apresentar a solução de forma atrativa e interativa, utilizando animações fluidas e um design moderno que reflete os valores da plataforma.

## 🎯 Propósito da Solução

O PathFindr foi criado para resolver um problema comum no mercado de trabalho atual: a dificuldade de profissionais em encontrar um equilíbrio entre desenvolvimento de carreira e bem-estar emocional. A plataforma oferece:

- **Equilíbrio entre capacitação e bem-estar**: Materiais curtos e práticos que cabem na rotina profissional
- **Inteligência Artificial aplicada**: Ferramentas de IA para potencializar entregas e acelerar resultados
- **Capacitação profissional**: Conteúdos estruturados para desenvolvimento de soft e hard skills
- **Guia de mudança de carreira**: Suporte completo para transições profissionais

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React com App Router para renderização otimizada
- **TypeScript** - Tipagem estática para maior segurança e manutenibilidade
- **Tailwind CSS** - Framework CSS utility-first para estilização rápida e responsiva
- **GSAP3 (GreenSock)** - Biblioteca de animações de alta performance
  - ScrollTrigger - Animações baseadas em scroll
  - Timeline - Controle preciso de sequências animadas

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Compatibilidade cross-browser

## 📁 Estrutura do Projeto

```
pathfindr-gs/
├── app/
│   ├── components/          # Componentes React organizados por seção
│   │   ├── DecorativeCharacters/
│   │   ├── DownloadButtons/
│   │   ├── Feedbacks/      # Seção de depoimentos com animação de carta
│   │   ├── Footer/         # Rodapé com blur progressivo
│   │   ├── Hero/           # Seção principal
│   │   ├── MainFrame/
│   │   ├── Navbar/         # Navegação principal
│   │   ├── Planos/         # Seção de planos e preços
│   │   └── Sobre/          # Seção sobre com modais interativos
│   ├── constants/          # Constantes e configurações
│   │   └── images.ts       # Centralização de paths de imagens
│   ├── hooks/              # Custom hooks para animações
│   │   ├── useHeroAnimations.ts
│   │   ├── useSobreAnimations.ts
│   │   ├── usePlanosAnimations.ts
│   │   └── useFeedbacksAnimations.ts
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx            # Página inicial
├── public/                 # Assets estáticos
│   ├── decorative/         # Elementos decorativos
│   ├── feedbacks/          # Imagens de depoimentos
│   ├── Footer/             # Assets do rodapé
│   ├── hero/               # Imagens da seção hero
│   ├── modal-sobre/        # Ícones e logos dos modais
│   ├── navbar/             # Logos de app stores
│   ├── planos/             # Cards de planos
│   └── sobre/              # Assets da seção sobre
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Funcionalidades Principais

### 1. Hero Section
- Animação de entrada suave para elementos principais
- Gradiente linear personalizado
- Botões de download para App Store e Google Play
- Elementos decorativos animados

### 2. Seção Sobre
- **4 Cards interativos** com modais informativos:
  - Equilíbrio de capacitação e bem-estar
  - Inteligência Artificial aplicada
  - Capacitação profissional
  - Guia de mudança de carreira
- **Modais dinâmicos** com cores personalizadas por tema
- Animações de scroll para revelação de conteúdo
- Layout responsivo com grid adaptativo

### 3. Seção Planos
- Cards de planos (Start, PathFindr, Enterprise)
- Animações de entrada escalonadas
- Design visual atraente com imagens dos planos

### 4. Seção Feedbacks
- **Animação única de carta abrindo**:
  - Carta fechada que se abre com scroll
  - Card de depoimento emergindo da carta
  - Transição suave para carrossel de depoimentos
- Carrossel interativo com 5 depoimentos
- Navegação por setas e arrastar (drag)
- Layout em curva (smile) para os cards

### 5. Footer
- Efeito de blur progressivo no logo PathFindr
- Links de navegação e contato
- Redes sociais
- Design minimalista e elegante

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

## 🎬 Animações e Performance

### Otimizações Implementadas
- **Code Splitting**: Componentes carregados sob demanda com `React.lazy` e `Suspense`
- **Image Optimization**: Uso do componente `next/image` para otimização automática
- **Memoization**: Componentes memoizados para evitar re-renders desnecessários
- **Lazy Loading**: Imagens carregadas apenas quando visíveis
- **ScrollTrigger Refresh**: Animações re-inicializam corretamente após reload

### Animações GSAP
- Animações baseadas em scroll com `ScrollTrigger`
- Timelines complexas para sequências coordenadas
- Easing functions personalizadas para movimentos naturais
- Performance otimizada com `will-change` CSS

## 🎯 Seções da Landing Page

1. **Hero** - Apresentação principal com CTA
2. **Sobre** - Informações sobre a plataforma e recursos
3. **Planos** - Opções de assinatura disponíveis
4. **Feedbacks** - Depoimentos de usuários reais
5. **Footer** - Informações de contato e links

## 📄 Licença

Este projeto é privado e desenvolvido para fins acadêmicos.

---

<div align="center">

**Desenvolvido com ❤️ para o case PathFindr**

</div>
