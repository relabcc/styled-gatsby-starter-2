import React from 'react'
import { Provider } from 'react-redux'

import ThemeProvider from './src/components/ThemeProvider'

import createStore from './src/stores/createStore'

const store = createStore()
export default ({ element }) =>
  <Provider store={store}>
    <ThemeProvider>
      {element}
    </ThemeProvider>
  </Provider>
