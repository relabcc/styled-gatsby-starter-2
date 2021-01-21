import React from 'react'

import ThemeProvider from './src/components/ThemeProvider'

export default ({ element }) =>
  <ThemeProvider>
    {element}
  </ThemeProvider>
