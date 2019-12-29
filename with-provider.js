import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { calculateResponsiveState } from 'redux-responsive'

import ThemeProvider from './src/components/ThemeProvider';
import { FirebaseProvider } from './src/services/firebase'
import creatStore from './src/stores/createStore';

const store = creatStore();

class InitialDispatch extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      store.dispatch(calculateResponsiveState(window))
    }
  }

  render() {
    return this.props.children
  }
}

export default ({ element }) => (
  <Provider store={store}>
    <InitialDispatch>
      <FirebaseProvider dispatch={store.dispatch}>
        <ThemeProvider>{element}</ThemeProvider>
      </FirebaseProvider>
    </InitialDispatch>
  </Provider>
)
