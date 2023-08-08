const blog = {
  search: 'Search for a topic you like…',
  about: {
    title: 'About Me',
    content: [
      'I am full stack developer based on Campina Grande - PB (Brazil). I\'ve graduated',
      'from UFCG and my main interests are Fullstack development and Data Analysis. ',
      'My languages of choice are Javascript, Java, Python and R.',
    ],
  },
  post: {
    publishedAt: 'Published at',
    lastUpdated: 'Last updated',
    readtime: '{{ readtime }} read',
  },
};

const portfolio = {
  hero: {
    occupation: 'Full Stack Web Developer',
    hi: 'Hi',
    type: [
      'Let\'s create <highlight>awesome experiences!</highlight>',
      'Let\'s create <highlight>something fancy!</highlight>',
      'Let\'s build a <highlight>new Web!</highlight>',
      'Let\'s <highlight>solve</highlight> your <highlight>problems!</highlight>',
    ],
  },
  works: {
    title: 'Projects',
    explore: 'Explore',
  },
  skills: {
    title: 'Skills',
    languages: 'Languages',
    tools: 'Tools',
    frameworks: 'Frameworks',
  },
};

const navigation = {
  blog: 'Blog',
  about: 'About',
  contactMe: 'Contact Me',
  portfolio: 'Portfolio',
};

export default {
  translation: {
    blog,
    portfolio,
    navigation,
  },
};

