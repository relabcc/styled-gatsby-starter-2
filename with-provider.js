import React from 'react'
import { Global } from '@emotion/react'

import { MediaContextProvider } from './src/contexts/responsive'
import HeaderProvider from './src/contexts/header/Provider'
import globalStyles from './global-styles';

const Providers = ({ element }) =>
  <MediaContextProvider>
    <HeaderProvider>
      <>
        <Global styles={globalStyles} />
        {element}
      </>
    </HeaderProvider>
  </MediaContextProvider>

export default Providers
