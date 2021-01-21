import React, { useContext } from 'react';

import Box from './Box'
import theme, { responsiveCalc } from './ThemeProvider/theme'
import headerContext from '../contexts/header/context'

const Fullpage = ({ children, ...props }) => {
  const { hideHeader } = useContext(headerContext)

  return (
    <Box
      height="100vh"
      mt={!hideHeader && responsiveCalc`-${theme.headerHeight}`}
      pt={!hideHeader && theme.headerHeight}
      {...props}
    >
      <Box position="relative" height="100%">
        <Box
          position="absolute"
          top="50%"
          width="100%"
          transform="translateY(-50%)"
        >

          {children}
        </Box>
      </Box>
    </Box>
  )
};

export default Fullpage;
