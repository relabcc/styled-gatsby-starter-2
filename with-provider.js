import React from 'react'
import { Provider } from 'react-redux'

import ThemeProvider from './src/components/ThemeProvider';
import { FirebaseProvider } from './src/services/firebase'
import creatStore from './src/stores/createStore';
import MediaQueryProvider from './src/contexts/mediaQuery/MediaProvider'

const store = creatStore();

export default ({ element }) =>
  <Provider store={store}>
    <FirebaseProvider dispatch={store.dispatch}>

      <ThemeProvider>
        <MediaQueryProvider>
          {element}
        </MediaQueryProvider>
      </ThemeProvider>
    </FirebaseProvider>
  </Provider>
