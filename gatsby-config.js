const SITE_URL = 'https://jakubjafra.com/'; // TODO

module.exports = {
  siteMetadata: {
    title: 'Devlog',
    author: 'Jakub Jafra',
    description: 'Just another devlog...',
    siteUrl: SITE_URL,
    social: [
      {
        name: 'email',
        url: 'mailto:jakub.jafra@gmail.com',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/jakub-jafra-355150a4/',
      },
      {
        name: 'github',
        url: 'https://github.com/jakubjafra',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-blog',
      options: {},
    },
    'gatsby-plugin-mailgo',
  ],
};
