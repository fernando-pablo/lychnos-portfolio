// ============================================================
// TODO O CONTEÚDO DO SITE FICA AQUI.
// Para mudar textos, projetos ou links, edite só este arquivo.
// ============================================================

export const site = {
  nome: "Fernando Pablo",
  marca: "Lychnos Tech",
  cidade: "Jaíba, Minas Gerais",

  // Número com DDI 55 + DDD + número, só dígitos
  whatsapp: "5538984081191",
  mensagemWhatsapp:
    "Olá, Fernando! Vi seu portfólio e quero conversar sobre um projeto.",
  email: "fernandopablo89@outlook.com",
  linkedin: "https://www.linkedin.com/in/fernandopablogomes",
  github: "https://github.com/fernando-pablo",

  slogan: "Tecnologia que ilumina ideias e transforma processos",
  titulo: "Tiro ideias do papel com sites, sistemas web e automações sob medida.",
  apresentacao:
    "Sou Fernando Pablo, desenvolvedor full stack e fundador da Lychnos Tech. Crio soluções que organizam processos e economizam tempo para empresas, instituições e empreendedores de todo o Brasil.",
};

export type Projeto = {
  nome: string;
  problema: string;
  solucao: string;
  tecnologias: string[];
  // Coloque o print em /public/projetos e escreva o caminho, ex: "/projetos/checklist.png"
  imagem?: string;
  linkAoVivo?: string;
  linkCodigo?: string;
  // Aviso para projetos privados, ex: "Projeto privado, em uso pela igreja"
  selo?: string;
  // Texto do botão do link (padrão: "Abrir o projeto")
  rotuloLink?: string;
};

export const projetos: Projeto[] = [
  {
    nome: "Pertim Shop",
    problema:
      "Pequenos comércios recebem pedidos pelo WhatsApp de um jeito bagunçado, com informação faltando e a conta feita na mão.",
    solucao:
      "Plataforma de pedidos que atende várias lojas num sistema só. Cada comércio tem o seu link e o seu visual, com carrinho, busca que entende erros de digitação e o pedido chegando pronto no WhatsApp. No painel, o lojista acompanha os pedidos e cuida dos produtos e do estoque. Faça um pedido na demonstração e entre na área do lojista com um clique.",
    tecnologias: ["Next.js", "Nest.js", "PostgreSQL", "Redis", "Docker"],
    imagem: "/projetos/pertim-shop.jpg",
    linkAoVivo: "https://pertim-shop.vercel.app",
    rotuloLink: "Ver demonstração",
    linkCodigo: "https://github.com/fernando-pablo/pertim-shop",
  },
  {
    nome: "Calendário digital para igrejas",
    problema:
      "A programação da igreja ficava espalhada em avisos e grupos, e os membros perdiam eventos importantes.",
    solucao:
      "App instalável no celular com calendário, aniversariantes, lembretes e avisos por notificação, além de painel administrativo. Já em uso real pela Primeira Igreja Batista em Jaíba.",
    tecnologias: ["React", "PWA", "Supabase", "Notificações push"],
    imagem: "/projetos/calendario-demo.jpg",
    // O app da igreja é privado; o link abre a demonstração com dados fictícios.
    selo: "Demonstração com dados fictícios. O app original é privado.",
    linkAoVivo: "https://calendario-igreja-demo-un3i.vercel.app",
    rotuloLink: "Ver demonstração",
    // O código aberto é o da demonstração, não o do app da igreja.
    linkCodigo: "https://github.com/fernando-pablo/calendario-igreja-demo",
  },
  {
    nome: "CheckPro 2.0",
    problema:
      "Inspeções industriais feitas em formulários de papel não deixavam histórico e atrasavam a identificação de falhas.",
    solucao:
      "Sistema de checklist digital com perfis de gestor, PCM e eletricista. Compara as medições com os limites técnicos, gera não conformidades com foto automaticamente, mostra gráficos de conformidade e temperatura e emite relatórios em PDF e Excel. Entre na demonstração com um clique.",
    tecnologias: ["React", "Vite", "React Router", "Gráficos SVG", "SheetJS (Excel)"],
    imagem: "/projetos/checkpro.jpg",
    linkAoVivo: "https://checkpro-demo.vercel.app",
    linkCodigo: "https://github.com/fernando-pablo/checkpro-demo",
  },
  {
    nome: "Modelo de site para clínicas",
    problema:
      "Clínicas e consultórios perdem pacientes por não aparecerem no Google e por dificultarem o agendamento.",
    solucao:
      "Site modelo que se adapta a clínica médica, odontologia, psicologia e estética. Mostra a equipe por especialidade, os próximos horários livres e um agendamento por horário, com convênio, que envia o pedido pronto para o WhatsApp da recepção.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    imagem: "/projetos/clinica.jpg",
    linkAoVivo: "https://modelo-site-clinicas.vercel.app",
    linkCodigo: "https://github.com/fernando-pablo/modelo-site-clinicas",
  },
];

export const servicos = [
  {
    nome: "Sites",
    descricao:
      "Sites institucionais e páginas de venda rápidos, bonitos no celular e fáceis de encontrar no Google.",
  },
  {
    nome: "Sistemas web",
    descricao:
      "Ferramentas sob medida para organizar a rotina da sua empresa: cadastros, controles, agendas e painéis.",
  },
  {
    nome: "Automações e PWAs",
    descricao:
      "Tarefas repetitivas feitas pelo sistema e aplicativos que funcionam no celular sem precisar de loja.",
  },
];

export const etapas = [
  {
    nome: "Conversa",
    descricao: "Você me conta o que precisa e eu entendo como funciona o seu dia a dia.",
  },
  {
    nome: "Proposta",
    descricao: "Envio o escopo, o prazo e o valor, tudo por escrito e sem surpresas.",
  },
  {
    nome: "Desenvolvimento",
    descricao: "Mostro o andamento com frequência para você acompanhar e ajustar.",
  },
  {
    nome: "Entrega e suporte",
    descricao: "Publico o projeto, explico como usar e continuo disponível depois.",
  },
];

export const tecnologias = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Nest.js",
  "Supabase",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Tailwind CSS",
  "Vite",
  "PWA",
  "Notificações push",
  "Bancos de dados",
];
