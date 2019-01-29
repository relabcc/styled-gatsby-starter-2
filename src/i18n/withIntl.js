import React, { Component } from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'

import LanguageContext from './LanguageContext'
import { localeData } from './locales'

addLocaleData(localeData)

export default ComposedComponent => {
  class withIntl extends Component {
    constructor(props) {
      super()
      const { pageContext } = props
      const { locale, languages, originalPath } = pageContext

      this.state = {
        locale,
        languages,
        originalPath,
      }
    }

    handleChangeLocale = (locale) => this.setState({ locale }, () => {
      localStorage.setItem('language', locale)
      window.history.pushState(null, null, `/${locale}${this.state.originalPath}`);
    })

    render() {
      return (
        <LanguageContext.Provider value={Object.assign({ changeLocale: this.handleChangeLocale }, this.state)}>
          <LanguageContext.Consumer>
            {language => {
              const locale = language.locale || 'zh-Hant-TW'
              const messages = require(`./locales/${locale}.json`) // eslint-disable-line
              return (
                <IntlProvider locale={locale} messages={messages}>
                  <ComposedComponent {...this.props} />
                </IntlProvider>
              )
            }}
          </LanguageContext.Consumer>
        </LanguageContext.Provider>
      )
    }
  }
  return withIntl
}
