const hostname = 'relabcc.github.io';

module.exports = {
  siteMetadata: {
    title: 'Styled Gatsby Starter',
    description: 'Gatsby Chakra UI is cool!',
    siteUrl: `https://${hostname}`,
  },
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
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
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
      },
    }
  ],
}
