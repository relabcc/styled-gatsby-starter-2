import React from 'react'

import ThemeProvider from './src/components/ThemeProvider'
import MediaQueryProvider from './src/contexts/mediaQuery/MediaProvider'

export default ({ element }) =>
  <ThemeProvider>
    <MediaQueryProvider>
      {element}
    </MediaQueryProvider>
  </ThemeProvider>
