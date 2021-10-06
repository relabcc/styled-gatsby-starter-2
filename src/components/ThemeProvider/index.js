import React from 'react';
import { Global } from '@emotion/react'

import globalStyles from './global-styles';

import { MediaContextProvider } from './responsive';

const ReThemeProvider = ({ children }) => (
  <MediaContextProvider>
    <>
      <Global styles={globalStyles} />
      {children}
    </>
  </MediaContextProvider>
);

export default ReThemeProvider
