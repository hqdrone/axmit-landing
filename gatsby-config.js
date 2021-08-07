const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`
});

module.exports = {
  siteMetadata: {
    siteUrl: 'http://dev.lml.axmit.com',
    title: 'Last Mile',
    description: 'Last Mile',
    author: `Axmit`
  },
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-typescript']
};
