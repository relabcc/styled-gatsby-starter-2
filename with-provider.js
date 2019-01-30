import React from 'react'

import ThemeProvider from './src/components/ThemeProvider'
import LangaugeProvider from './src/i18n/LanguageProvider'

export default ({ element }) =>
  <LangaugeProvider>
    <ThemeProvider>{element}</ThemeProvider>
  </LangaugeProvider>
