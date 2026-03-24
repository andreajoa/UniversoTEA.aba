export const KIWIFY_URL = "https://pay.kiwify.com.br/LNe6rom";

export const UPSELL_URL = "https://pay.kiwify.com.br/FYZiibq";
export const WHATSAPP_GROUP = "https://chat.whatsapp.com/SEU_GRUPO";
export const INSTAGRAM_URL  = "https://www.instagram.com/universo.tea.aba";

// Instagram images for Thank You page
export const INSTAGRAM_CELEBRATION_IMG = "/images/instagram-celebration.jpg";
export const INSTAGRAM_CARD1_IMG = "/images/instagram-card1.jpg";
export const INSTAGRAM_CARD2_IMG = "/images/instagram-card2.jpg";
export const INSTAGRAM_LOGO_IMG = "/images/instagram-logo.jpg";

export const DOWNLOAD_URL   = "https://www.dropbox.com/scl/fo/gwt69qbwcng4vjz0yu4hl/AKqkxlIjURXVrJ11rL-mW4Q?rlkey=mr1qa6ixtb9rqski16sjbcigy&st=92tau44r&dl=0";

export const UPSELL_OFFER = {
  title:       "Rotina ABA em Casa — Programa de 4 Semanas",
  description: "Um guia completo passo a passo para estruturar a rotina de estimulação do seu filho em casa, com cronograma, atividades e registros semanais.",
  originalPrice: "R$97",
  salePrice:     "R$47",
  timer:         5 * 60, // 5 minutos em segundos
  bullets: [
    "🗓️ Cronograma semanal de atividades ABA",
    "📋 Fichas de registro de evolução por semana",
    "🎯 Metas progressivas por nível de desenvolvimento",
    "📱 Versão mobile-friendly para usar na terapia",
    "🎁 Inclui 2 temas bônus extras de pareamento",
  ],
};

export const THEMES = [
  { emoji: "🐾", label: "Animais",        color: "bg-green-100  text-green-700"  },
  { emoji: "🍎", label: "Frutas",         color: "bg-orange-100 text-orange-700" },
  { emoji: "🚗", label: "Transportes",    color: "bg-blue-100   text-blue-700"   },
  { emoji: "🏠", label: "Objetos da Casa",color: "bg-yellow-100 text-yellow-700" },
  { emoji: "🍽️", label: "Alimentos",      color: "bg-red-100    text-red-700"    },
  { emoji: "🧸", label: "Brinquedos",     color: "bg-purple-100 text-purple-700" },
];

export const LEVELS = [
  { stars: "⭐",     level: "Nível 1", desc: "Pareamento Idêntico",    sub: "Mesma imagem"           },
  { stars: "⭐⭐",   level: "Nível 2", desc: "Pareamento Variado",     sub: "Variações da categoria" },
  { stars: "⭐⭐⭐", level: "Nível 3", desc: "Pareamento por Categoria",sub: "Generalização"          },
];

export const TESTIMONIALS = [
  {
    name: "Mariana S.",
    role: "Mãe de criança com TEA — São Paulo",
    text: "Apliquei o Nível 1 de Frutas com meu filho de 4 anos. Em 2 semanas ele estava emparelhando sozinho. Chorei muito de alegria. Vale cada centavo.",
    stars: 5,
  },
  {
    name: "Juliana R.",
    role: "Terapeuta ABA — Belo Horizonte",
    text: "Economizo pelo menos 3 horas por semana que eu gastava fazendo material. A progressão de nível é exatamente o que eu precisava nas minhas sessões.",
    stars: 5,
  },
  {
    name: "Renata M.",
    role: "Professora Inclusiva — Uberlândia",
    text: "Imprimi, laminei e usei na semana seguinte. Meus 3 alunos com TEA adoraram. Material incrível para escola inclusiva.",
    stars: 5,
  },
];

export const FAQS = [
  { q: "É físico ou digital?",               a: "Digital — PDF para baixar e imprimir quantas vezes quiser, em qualquer impressora." },
  { q: "Para qual faixa etária?",             a: "2 a 8 anos. Os 3 níveis permitem adaptar para o desenvolvimento de cada criança." },
  { q: "Preciso ser terapeuta para usar?",    a: "Não! O Guia Bônus explica tudo passo a passo para pais sem formação em ABA." },
  { q: "Funciona em impressora comum?",       a: "Sim, qualquer impressora doméstica ou gráfica. Recomendamos papel A4 ou cartão." },
  { q: "E se não funcionar para meu filho?",  a: "7 dias de garantia total — reembolso imediato sem burocracia, sem perguntas." },
  { q: "Quando recebo o acesso?",             a: "Imediatamente após a confirmação do pagamento, direto no seu e-mail." },
];
