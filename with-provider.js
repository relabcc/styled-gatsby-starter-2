import React from 'react'
import { Provider } from 'react-redux';

import ThemeProvider from './src/components/ThemeProvider';
import creatStore from './src/stores/createStore';
import LangaugeProvider from './src/i18n/LanguageProvider'

export default ({ element }) => (
  <Provider store={creatStore()}>
    <LangaugeProvider>
      <ThemeProvider>{element}</ThemeProvider>
    </LangaugeProvider>
  </Provider>
)
