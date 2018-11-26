import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css';

import GlobalStyles from './global-styles';

import theme from './theme';
import Box from '../Box';

export default (props) => (
  <ThemeProvider theme={theme}>
    <Box height="100%">
      <Box height="100%" fontSize={[14, null, 16]} {...props} />
      <GlobalStyles />
    </Box>
  </ThemeProvider>
);
