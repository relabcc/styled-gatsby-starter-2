const path = require('path')
const snakeCase = require('lodash/snakeCase')

const info = require('./package.json')
const { languages } = require('./src/i18n/locales')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.includes('404')) {
    return Promise.resolve()
  }

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
    })

    resolve()
  })
}

exports.onCreateWebpackConfig = ({ stage, actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        APP_NAME: JSON.stringify(snakeCase(info.name).toUpperCase()),
      }),
    ],
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
