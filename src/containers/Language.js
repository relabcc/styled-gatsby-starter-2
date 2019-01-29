import React, { Component } from 'react'

import LanguageContext from '../i18n/LanguageContext';

class Language extends Component {
  static contextType = LanguageContext

  state = {
    value: '',
  }

  componentDidMount() {
    const { locale, detected } = this.context
    this.setState({
      value: locale || detected,
    })
  }

  handleChange = event => {
    const { originalPath, changeLocale } = this.context
    const { value } = event.target

    if (value === this.state.value) {
      return
    }

    this.setState({ value }, () => {
      localStorage.setItem('language', value)
      changeLocale(value);
      window.history.pushState(null, null, `/${value}${originalPath}`);
    })
  }

  render() {
    const { languages } = this.context
    const { value } = this.state

    if (!value) {
      return null
    }

    return (
      <select value={value} onChange={this.handleChange}>
        {languages.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    )
  }
}

export default Language
