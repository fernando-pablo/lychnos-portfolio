# Portfólio Lychnos Tech

Site de portfólio feito com Next.js e TypeScript.

## 1. Rodar no seu computador

Você precisa do Node.js 18 ou mais novo (baixe em nodejs.org).

```bash
npm install
npm run dev
```

Abra http://localhost:3000 no navegador.

## 2. Mudar textos, projetos e links

Tudo fica no arquivo `data/site.ts`. Lá você muda:

- nome, WhatsApp, e-mail, LinkedIn e GitHub
- o título e a apresentação do topo
- os projetos, serviços, etapas e tecnologias

### Adicionar print de um projeto

1. Coloque a imagem na pasta `public/projetos` (ex: `checklist.png`).
2. No projeto, em `data/site.ts`, adicione: `imagem: "/projetos/checklist.png",`
3. Se tiver link, adicione também `linkAoVivo` e/ou `linkCodigo`.

Use prints com dados de exemplo, nunca com dados reais de clientes.

## 3. Publicar de graça na Vercel

1. Crie um repositório no GitHub (ex: `portfolio`) e envie esta pasta:
   ```bash
   git init
   git add .
   git commit -m "Primeira versão do portfólio"
   git branch -M main
   git remote add origin https://github.com/fernando-pablo/portfolio.git
   git push -u origin main
   ```
2. Entre em vercel.com e faça login com o GitHub.
3. Clique em **Add New > Project**, escolha o repositório e clique em **Deploy**.
4. Em cerca de 1 minuto o site estará no ar, com um endereço `.vercel.app`.

Cada vez que você fizer `git push`, a Vercel atualiza o site sozinha.

### Domínio próprio (opcional)

Registre um domínio no registro.br (ex: `lychnostech.com.br`) e adicione em
**Vercel > seu projeto > Settings > Domains**, seguindo as instruções da tela.
