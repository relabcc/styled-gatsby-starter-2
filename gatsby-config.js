const hostname = 'relabcc.github.io';
const pathPrefix = 'styled-gatsby-starter-2';

module.exports = {
  siteMetadata: {
    title: 'Styled Gatsby Starter',
    description: 'Styled Components + Styled System is cool!',
    siteUrl: `https://${hostname}/${pathPrefix}`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/android-chrome-512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: './src/images',
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  ],
  pathPrefix,
}
