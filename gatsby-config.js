require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const hostname = 'relabcc.github.io';
const pathPrefix = 'styled-gatsby-starter-2';

module.exports = {
  siteMetadata: {
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
        "theme_color": "#ffffff",
        "background_color": "#ffffff",
        display: 'minimal-ui',
        icon: 'static/android-chrome-512x512.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // your wordpress source
        baseUrl: process.env.WORDPRESS_URL,
        protocol: 'https',
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
    'gatsby-plugin-offline',
  ],
  pathPrefix,
}
