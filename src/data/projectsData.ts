export interface Project {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  gallery: string[];
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
  projects: Project[];
}

export const categoriesData: Category[] = [
  {
    name: 'Varejo',
    slug: 'varejo',
    image: 'https://picsum.photos/seed/retail/1200/800',
    description: 'Soluções tecnológicas inovadoras para o setor de varejo, transformando a experiência de compra do cliente com interatividade e dados.',
    projects: [
      {
        id: 'varejo-proj-1',
        title: 'Totem Interativo para Lojas de Departamento',
        coverImage: 'https://images.unsplash.com/photo-1556742111-a3297a0e5d52?w=800',
        description: 'Desenvolvemos um totem interativo que permite aos clientes navegar pelo catálogo, verificar o estoque em tempo real e receber recomendações personalizadas.',
        gallery: [
          'https://images.unsplash.com/photo-1556742111-a3297a0e5d52?w=800',
          'https://images.unsplash.com/photo-1560253023-3350c72437a4?w=800',
          'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800',
        ],
      },
      {
        id: 'varejo-proj-2',
        title: 'Vitrine Digital com Realidade Aumentada',
        coverImage: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=800',
        description: 'Uma vitrine que ganha vida. Clientes podem usar seus smartphones para ver produtos em 3D e experimentar diferentes combinações de roupas virtualmente.',
        gallery: [
          'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=800',
          'https://images.unsplash.com/photo-1558502924-e4a444f42f1c?w=800',
        ],
      },
      {
        id: 'varejo-proj-3',
        title: 'Sistema de Pagamento por Reconhecimento Facial',
        coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
        description: 'Agilize o checkout com uma solução de pagamento segura e inovadora que utiliza reconhecimento facial, eliminando filas e melhorando a experiência do cliente.',
        gallery: [
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
        ],
      },
    ],
  },
  {
    name: 'Experiência',
    slug: 'experiencia',
    image: 'https://picsum.photos/seed/experience/1200/800',
    description: 'Crie momentos inesquecíveis. Nossas tecnologias imersivas e interativas são projetadas para engajar e cativar seu público.',
    projects: [
      {
        id: 'exp-proj-1',
        title: 'Instalação de Arte Imersiva',
        coverImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800',
        description: 'Uma jornada sensorial através de luzes, sons e projeções que reagem à presença e ao movimento dos visitantes, criando uma experiência única a cada interação.',
        gallery: [
          'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800',
          'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800',
        ],
      },
      {
        id: 'exp-proj-2',
        title: 'Game de Realidade Virtual para Marca',
        coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?w=800',
        description: 'Desenvolvemos um jogo de VR que transporta os usuários para o universo da marca, permitindo uma interação profunda e memorável com seus produtos e valores.',
        gallery: [
          'https://images.unsplash.com/photo-1550745165-9bc0b252726a?w=800',
        ],
      },
      {
        id: 'exp-proj-3',
        title: 'Concerto com Holografia',
        coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
        description: 'Produzimos um show inesquecível onde artistas e elementos visuais holográficos interagiram no palco, quebrando as barreiras entre o real e o digital.',
        gallery: [
          'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
        ],
      },
    ],
  },
  {
    name: 'Eventos',
    slug: 'eventos',
    image: 'https://picsum.photos/seed/events/1200/800',
    description: 'De corporativos a lançamentos de produtos, oferecemos um arsenal tecnológico para fazer do seu evento um sucesso absoluto.',
    projects: [
      {
        id: 'eventos-proj-1',
        title: 'Credenciamento Inteligente com RFID',
        coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
        description: 'Sistema de credenciamento que utiliza pulseiras RFID para controle de acesso, pagamentos cashless e coleta de dados, otimizando a gestão e a experiência do participante.',
        gallery: [
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
        ],
      },
      {
        id: 'eventos-proj-2',
        title: 'App Interativo para Conferência',
        coverImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
        description: 'Um aplicativo móvel para participantes com agenda, mapas, networking, enquetes ao vivo e gamificação, aumentando o engajamento e a conectividade.',
        gallery: [
          'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
        ],
      },
      {
        id: 'eventos-proj-3',
        title: 'Palco com Projeção Mapeada',
        coverImage: 'https://images.unsplash.com/photo-1495754149474-e54c07932677?w=800',
        description: 'Transformamos a cenografia do palco com projeções mapeadas que criaram ambientes dinâmicos e visuais espetaculares, sincronizados com a apresentação.',
        gallery: [
          'https://images.unsplash.com/photo-1495754149474-e54c07932677?w=800',
        ],
      },
    ],
  },
  {
    name: 'Expo',
    slug: 'expo',
    image: 'https://picsum.photos/seed/expo/1200/800',
    description: 'Destaque-se em feiras e exposições com stands interativos, realidade aumentada e soluções que atraem e retêm a atenção dos visitantes.',
    projects: [
      {
        id: 'expo-proj-1',
        title: 'Stand com Piso Interativo',
        coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
        description: 'Um piso que reage aos passos dos visitantes, exibindo conteúdos, jogos e informações sobre a marca, criando um ponto de atração e engajamento.',
        gallery: [
          'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
        ],
      },
      {
        id: 'expo-proj-2',
        title: 'Catálogo de Produtos em Realidade Aumentada',
        coverImage: 'https://images.unsplash.com/photo-1529312-19439b49433f?w=800',
        description: 'Permita que os visitantes visualizem seus produtos em 3D e em escala real no ambiente do stand através de tablets ou smartphones.',
        gallery: [
          'https://images.unsplash.com/photo-1529312-19439b49433f?w=800',
        ],
      },
      {
        id: 'expo-proj-3',
        title: 'Coleta de Leads com Gamificação',
        coverImage: 'https://images.unsplash.com/photo-1554224155-1696413565d3?w=800',
        description: 'Um jogo rápido e divertido no stand que incentiva os visitantes a deixarem seus contatos em troca de brindes ou da participação em um sorteio.',
        gallery: [
          'https://images.unsplash.com/photo-1554224155-1696413565d3?w=800',
        ],
      },
    ],
  },
  {
    name: 'Plataformas',
    slug: 'plataformas',
    image: 'https://picsum.photos/seed/platforms/1200/800',
    description: 'Desenvolvemos plataformas digitais customizadas para eventos virtuais e híbridos, conectando pessoas onde quer que estejam.',
    projects: [
      {
        id: 'plataformas-proj-1',
        title: 'Plataforma de Evento Virtual 3D',
        coverImage: 'https://images.unsplash.com/photo-1611095790444-1dfa3c03e97a?w=800',
        description: 'Uma plataforma web que recria o ambiente de um evento físico em 3D, com stands, auditórios e áreas de networking virtuais.',
        gallery: [
          'https://images.unsplash.com/photo-1611095790444-1dfa3c03e97a?w=800',
        ],
      },
      {
        id: 'plataformas-proj-2',
        title: 'Sistema de Gestão de Inscrições',
        coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
        description: 'Uma solução completa para gerenciar inscrições, pagamentos, emissão de certificados e comunicação com os participantes de forma automatizada.',
        gallery: [
          'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
        ],
      },
      {
        id: 'plataformas-proj-3',
        title: 'Hub de Conteúdo On-demand',
        coverImage: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800',
        description: 'Uma plataforma para hospedar e disponibilizar as gravações de palestras e materiais de eventos, criando um ativo de conteúdo perpétuo para a marca.',
        gallery: [
          'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800',
        ],
      },
    ],
  },
];
