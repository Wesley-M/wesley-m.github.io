const blog = {
  search: 'Procure por algo que você gosta…',
  about: {
    title: 'Sobre Mim',
    content: [
      'Olá! Eu sou um Desenvolvedor Web Full Stack localizado em Campina Grande - PB (Brasil). ',
      'Bacharel em Ciência da Computação pela UFCG. Meus interesses e experiências se concentram em ',
      'análise de dados e desenvolvimento de apps Web. Minhas linguagens de escolha são Javascript, Java, ' +
      'Python and R.',
    ],
  },
  post: {
    publishedAt: 'Publicado em',
    lastUpdated: 'Atualizado',
    readtime: '{{ readtime }} de leitura',
  },
};

const portfolio = {
  hero: {
    occupation: 'Desenvolvedor Web Full Stack',
    hi: 'Olá',
    type: [
      'Vamos criar <highlight>experiências incríveis!</highlight>',
      'Vamos criar <highlight>algo fantástico!</highlight>',
      'Vamos construir uma <highlight>nova Web!</highlight>',
      'Vamos <highlight>resolver</highlight> os <highlight>seus problemas!</highlight>',
    ],
  },
  works: {
    title: 'Projetos',
    explore: 'Explorar',
  },
  skills: {
    title: 'Habilidades',
    languages: 'Linguagens',
    tools: 'Ferramentas',
    frameworks: 'Frameworks',
  },
};

const navigation = {
  blog: 'Blog',
  about: 'Sobre',
  contactMe: 'Contato',
  portfolio: 'Portfolio',
};

export default {
  translation: {
    blog,
    portfolio,
    navigation,
  },
};
