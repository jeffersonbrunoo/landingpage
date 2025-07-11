# 🌐 Landing Page – Conversão de Leads para Produto Digital

Landing page desenvolvida com foco em **alta conversão**, estruturada para integrar um **funil de vendas digital** com oferta principal e estratégia de upsell. O projeto utiliza tecnologias modernas, código otimizado e responsividade total.

---

## 🎯 Objetivo

- Apresentar produto digital com foco em aquisição de leads e conversão de vendas.
- Conduzir o usuário por um funil estruturado com gatilhos mentais (escassez, urgência, prova social).
- Permitir integração com plataformas de pagamento, e-mail marketing e automação de upsell.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18**
- **Next.js** – SSR/SSG para SEO e performance
- **Tailwind CSS** – Estilização utilitária responsiva
- **shadcn/ui** – Componentes de interface acessíveis
- **Framer Motion** – Animações suaves
- **Lucide Icons** – Ícones modernos

### Backend (recomendado para produção)
- Node.js + Express ou Python + Flask (gestão de upsell, webhooks, envio de e-mails)

### Integrações Sugeridas
- **Hotmart / Eduzz / Stripe** – Pagamento + upsell
- **ActiveCampaign / Mailchimp** – Automação de e-mails
- **Google Analytics + Facebook Pixel** – Métricas e remarketing

---

## 🧩 Estrutura da Página

A landing page está dividida em componentes modulares React:

- `HeaderSection`: Hero com CTA duplo
- `ProblemSolutionSection`: Apresentação da dor e da solução
- `PlansComparison`: Tabela de benefícios comparativos
- `SocialProof`: Depoimentos e logos
- `ProductDetails`: Conteúdo de cada plano
- `LimitedOffer`: Contador regressivo + escassez
- `BonusSection`: Apresentação de bônus com valor
- `GuaranteeSection`: Garantia de 7 dias
- `FAQSection`: Perguntas Frequentes com accordion
- `AuthoritySection`: Bio do criador
- `FinalCTA`: Chamada final para conversão
- `UpsellPage`: Página separada para upgrade imediato pós-compra

---

## 📦 Estrutura do Projeto

```
landing-page/
├── public/
│   └── imagens, fontes, favicon
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── index.jsx
│   │   └── upsell.jsx
│   ├── App.jsx
│   └── styles/
├── .env
├── package.json
└── README.md
```

---

## 🚀 Deploy Recomendado

- **Vercel** (SSR + CI/CD)
- **Netlify** (SSG)
- **Render / Railway** (para backend do upsell)
- **Cloudflare Pages** (alternativa gratuita com CDN)

---

## 📈 Métricas Esperadas

- **Conversão página principal:** CTAs nos blocos estratégicos (header, planos, final)
- **Conversão upsell:** Oferta pós-compra com 60% OFF
- **Engajamento e tempo na página:** otimizado por copy e estrutura fluida

---

## ✅ Funcionalidades Implementadas

- Design responsivo mobile-first
- Contador regressivo funcional
- Animações com Framer Motion
- FAQ interativo (accordion)
- Blocos 100% orientados a conversão

---

## 📌 Próximos Passos

- Integração real com plataforma de pagamento
- Webhooks para redirecionamento após compra
- Testes A/B de headline e CTAs
- Configuração de e-mails automáticos pós-conversão

---

## 👨‍💻 Autor

Desenvolvido por [Seu Nome](https://www.linkedin.com/in/seuperfil)  
📩 Contato: seuemail@exemplo.com

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
