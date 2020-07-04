import React from 'react'
import { Provider } from 'react-redux'

import ThemeProvider from './src/components/ThemeProvider'
import MediaQueryProvider from './src/contexts/mediaQuery/MediaProvider'

import createStore from './src/stores/createStore'

const store = createStore()
export default ({ element }) =>
  <Provider store={store}>
    <ThemeProvider>
      <MediaQueryProvider>
        {element}
      </MediaQueryProvider>
    </ThemeProvider>
  </Provider>
