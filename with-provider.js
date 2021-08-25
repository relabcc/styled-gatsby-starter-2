import React from 'react'

import ThemeProvider from './src/components/ThemeProvider'
import HeaderProvider from './src/contexts/header/Provider'

const Providers = ({ element }) =>
  <ThemeProvider>
    <HeaderProvider>
      {element}
    </HeaderProvider>
  </ThemeProvider>

export default Providers
