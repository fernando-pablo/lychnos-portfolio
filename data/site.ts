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
};

export const projetos: Projeto[] = [
  {
    nome: "PIB 2026: calendário da igreja",
    problema:
      "A programação anual da igreja ficava espalhada em avisos e grupos, e os membros perdiam eventos importantes.",
    solucao:
      "Aplicativo PWA instalável no celular com o calendário do ano, aniversariantes, compromissos pessoais com lembrete e notificações push enviadas mesmo com o app fechado. Inclui painel administrativo para cadastros, destaques e avisos oficiais.",
    tecnologias: ["React", "PWA", "Supabase", "Edge Functions", "Notificações push"],
    // imagem: "/projetos/pib-2026.jpg",
    linkAoVivo: "https://pib-2026.vercel.app",
  },
  {
    nome: "CheckPro 2.0",
    problema:
      "Inspeções industriais feitas em formulários de papel não deixavam histórico e atrasavam a identificação de falhas.",
    solucao:
      "Sistema de checklist digital por setor e equipamento, com perfis de gestor, PCM e eletricista. Compara as medições com os limites técnicos, gera não conformidades automaticamente e exporta relatórios para Excel.",
    tecnologias: ["React", "Vite", "JavaScript", "SheetJS (Excel)"],
    imagem: "/projetos/checkpro.jpg",
    // linkAoVivo: "https://...",
  },
  {
    nome: "Clínica Vida Plena",
    problema:
      "Clínicas e consultórios perdem pacientes por não aparecerem no Google e por dificultarem o contato.",
    solucao:
      "Modelo de site institucional para clínicas: rápido, pensado para o celular, otimizado para buscas locais e com agendamento direto pelo WhatsApp. Todo o conteúdo fica em um único arquivo, então pode ser adaptado para um novo cliente em pouco tempo.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    // imagem: "/projetos/clinica.jpg",
    // linkAoVivo: "https://...",
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
  "Supabase",
  "Tailwind CSS",
  "Vite",
  "PWA e notificações push",
  "Bancos de dados",
];
