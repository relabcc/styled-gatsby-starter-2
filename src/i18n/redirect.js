import React, { PureComponent } from 'react'
import { withPrefix } from 'gatsby'
import browserLang from 'browser-lang'
import { languages } from './index'

class Redirect extends PureComponent {
  constructor(props) {
    super(props)
    const langKeys = languages.map(language => language.value)
    const { redirectPage } = props.pageContext

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const detected =
        window.localStorage.getItem(`${APP_NAME}_LANG`) ||
        browserLang({
          languages: langKeys,
          fallback: 'zh-Hant-TW',
        })

      const newUrl = withPrefix(`/${detected}${redirectPage}`)
      window.localStorage.setItem(`${APP_NAME}_LANG`, detected)
      window.location.replace(newUrl)
    }
  }

  render() {
    return <div />
  }
}

export default Redirect
