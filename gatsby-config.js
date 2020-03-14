const hostname = 'relabcc.github.io';
const pathPrefix = 'styled-gatsby-starter-2';

module.exports = {
  siteMetadata: {
    title: 'Styled Gatsby Starter',
    description: 'Styled Components + Styled System is cool!',
    url: `https://${hostname}/${pathPrefix}`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Styled Gatsby Starter',
        short_name: 'Starter',
        start_url: '/',
        'theme_color': '#ffffff',
        'background_color': '#ffffff',
        display: 'minimal-ui',
        icon: 'static/android-chrome-512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-bundle-stats',
  ],
  pathPrefix,
}
