const SITE_URL = 'https://jakubjafra.com/'; // TODO

module.exports = {
  siteMetadata: {
    title: 'Devlog',
    author: 'Jakub Jafra',
    description: 'Just another devlog...',
    siteUrl: SITE_URL,
    social: [
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
  ],
};
