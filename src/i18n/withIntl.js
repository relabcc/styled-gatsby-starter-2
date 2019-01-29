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

    handleUpdateLocale = (locale) => this.setState({ locale })

    render() {
      return (
        <LanguageContext.Provider value={Object.assign({ changeLocale: this.handleUpdateLocale }, this.state)}>
          <LanguageContext.Consumer>
            {language => {
              const locale = language.locale || 'zh-Hant-TW'
              console.log(locale)
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
