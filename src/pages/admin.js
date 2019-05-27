import React, { createElement } from 'react';
import { Router } from '@reach/router'

import Layout from '../containers/Layout'
import AdminPage from '../containers/AdminPage'
import LoginPage from '../containers/LoginPage'
import LogoutPage from '../containers/LogoutPage'
import { UserIsAuthenticated, UserIsNotAuthenticated } from '../services/firebase/authHelper'

const routes = [
  {
    path: '/admin',
    component: UserIsAuthenticated(AdminPage),
  },
  {
    path: '/admin/login',
    component: UserIsNotAuthenticated(LoginPage),
  },
  {
    path: '/admin/logout',
    component: UserIsAuthenticated(LogoutPage),
  }
];

export default (props) => {
  return (
    <Layout>
      <Router>
        {routes.map(({ path, component }) => createElement(component, { path: `/:locale${path}`, key: path }))}
      </Router>
    </Layout>
  );
}
