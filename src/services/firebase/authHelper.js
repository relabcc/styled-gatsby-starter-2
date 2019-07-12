import React, { PureComponent } from 'react'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';
import { navigate } from 'gatsby';

import { selectFirebaseState, selectFirebase } from './selectors';
import FullpageLoading from '../../components/FullpageLoading';
import LanguageContext from '../../i18n/LanguageContext';

class Redirect extends PureComponent {
  componentDidMount() {
    const { to, firebase, auth } = this.props
    const { locale } = this.context;
    if (auth && auth.isLoaded && !auth.isEmpty) {
      firebase.logout().then(() => navigate(`/${locale}${to}`))
    } else {
      navigate(`/${locale}${to}`);
    }
  }

  render() {
    return null
  }
}

Redirect.contextType = LanguageContext

const FirebaseRedirect = selectFirebase(['auth'])(Redirect);

const authenticatingSelector = (state) => {
  const { auth, profile, isInitializing } = selectFirebaseState(state);
  return isInitializing === true || !auth.isLoaded || !profile.isLoaded;
};

export const UserIsAuthenticated = connectedAuthWrapper({
  wrapperDisplayName: 'UserIsAuthenticated',
  authenticatingSelector,
  authenticatedSelector: (state) => {
    const { auth, profile } = selectFirebaseState(state);
    return !auth.isEmpty && profile.valid;
  },
  AuthenticatingComponent: FullpageLoading,
  FailureComponent: () => <FirebaseRedirect to="/admin/login" />
});

export const UserIsNotAuthenticated = connectedAuthWrapper({
  wrapperDisplayName: 'UserIsNotAuthenticated',
  authenticatingSelector,
  authenticatedSelector: (state) => {
    const { auth } = selectFirebaseState(state);
    return auth.isEmpty;
  },
  AuthenticatingComponent: FullpageLoading,
  FailureComponent: () => <Redirect to="/" />
});
