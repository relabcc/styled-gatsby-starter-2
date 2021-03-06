import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, withPrefix } from 'gatsby'

import Box from 'components/Box';
import theme from 'components/ThemeProvider/theme';

import Header from '../Header'

const Layout = ({ children, noHeader }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            url
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { title, description, url } } }) => {
      return (
        <>
          <Helmet>
            <html lang="zh-Hant-TW" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/apple-touch-icon.png')} />
            <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/favicon-32x32.png')} />
            <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/favicon-16x16.png')} />
            <link rel="mask-icon" color="#5bbad" href={withPrefix('/safari-pinned-tab.svg')} />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${url}/fb.png`} />
          </Helmet>
          {!noHeader && <Header height={theme.headerHeight} siteTitle={title} />}
          <Box as="main" pt={!noHeader && theme.headerHeight}>
            {children}
          </Box>
        </>
      );
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
