const path = require('path')
const { languages } = require('./src/i18n/locales')

const validatePrefixEntry = prefix => {
  if (!prefix.match(/^\//) || !prefix.match(/\/\*$/)) {
    throw Error(
      `Plugin "gatsby-plugin-client-only-paths" found invalid prefix pattern: ${prefix}`
    )
  }
}

// authPrefixes
const authPrefixes = ['/admin/*']

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.includes('404')) {
    return Promise.resolve()
  }

  const re = {}
  authPrefixes.forEach(validatePrefixEntry)

  return new Promise(resolve => {
    const redirect = path.resolve('src/i18n/redirect.js')
    const redirectPage = {
      ...page,
      component: redirect,
      context: {
        languages,
        locale: '',
        routed: false,
        redirectPage: page.path,
      },
    }
    deletePage(page)
    createPage(redirectPage)

    languages.forEach(({ value }) => {
      const localePage = {
        ...page,
        originalPath: page.path,
        path: `/${value}${page.path}`,
        context: {
          languages,
          locale: value,
          routed: true,
          originalPath: page.path,
        },
      }
      createPage(localePage)
      authPrefixes.some(prefix => {
        if (!re[prefix]) {
          // Remove the * from the prefix and memoize
          const trimmedPrefix = prefix.replace(/\*$/, ``)
          re[prefix] = new RegExp(`^${trimmedPrefix}`)
        }

        // Ensure that the path ends in a trailing slash, since it can be removed.
        const path = page.path.match(/\/$/) ? page.path : `${page.path}/`

        if (path.match(re[prefix])) {
          deletePage(localePage)
          localePage.matchPath = `/${value}${prefix.replace(/\*$/, '*')}`
          createPage(localePage)
          return true;
        }
        return false
      })
    })

    return resolve()
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
