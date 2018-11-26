import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export default createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: ${theme.font};
  }

  #___gatsby {
    height: 100%;
  }
`;
