import React, { Component } from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'

import LanguageContext from './LanguageContext'
import { localeData } from './locales'

addLocaleData(localeData)

class LanguageProvider extends Component {
  constructor(props) {
    super()
    const { pageContext } = props
    const { locale, languages } = pageContext

    this.state = {
      locale,
      languages,
    }
  }

  handleChangeLocale = (locale) => {
    const prevLocale = this.state.locale
    this.setState({ locale }, () => {
      localStorage.setItem(`${APP_NAME}_LANG`, locale)
      window.history.pushState(null, null, window.location.pathname.replace(prevLocale, locale));
    })
  }

  render() {
    return (
      <LanguageContext.Provider value={Object.assign({ changeLocale: this.handleChangeLocale }, this.state)}>
        <LanguageContext.Consumer>
          {language => {
            const locale = language.locale || 'zh-Hant-TW'
            const messages = require(`./locales/${locale}.json`) // eslint-disable-line
            return (
              <IntlProvider locale={locale} messages={messages}>
                {this.props.children}
              </IntlProvider>
            )
          }}
        </LanguageContext.Consumer>
      </LanguageContext.Provider>
    )
  }
}
export default LanguageProvider
