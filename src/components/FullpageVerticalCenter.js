import React, { useContext, useMemo } from 'react';
import { useMeasure, useWindowSize } from 'react-use';

import Box from './Box'
import theme, { responsiveCalc } from './ThemeProvider/theme'
import headerContext from '../contexts/header/context'

const Fullpage = ({ children, ...props }) => {
  const { hideHeader } = useContext(headerContext)
  const windowSize = useWindowSize()
  const [measureRef, { height }] = useMeasure()
  const shouldCenter = useMemo(() => height < windowSize.height, [height, windowSize.height])
  return (
    <Box
      height="100vh"
      mt={!hideHeader && responsiveCalc`-${theme.headerHeight}`}
      pt={!hideHeader && theme.headerHeight}
      {...props}
    >
      <Box position="relative" height="100%">
        <Box
          position={shouldCenter ? 'absolute' : 'static'}
          top="50%"
          width="100%"
          transform={shouldCenter && 'translateY(-50%)'}
          ref={measureRef}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
};

export default Fullpage;
