import React, { useContext, useMemo } from 'react';
import { useMeasure, useWindowSize } from 'react-use';

import Box from './Box'
import { responsiveCalc } from './ThemeProvider/responsive'
import headerContext from '../contexts/header/context'

const Fullpage = ({ children, ...props }) => {
  const { hideHeader, headerHeight } = useContext(headerContext)
  const windowSize = useWindowSize()
  const [measureRef, { height }] = useMeasure()
  const shouldCenter = useMemo(() => height < windowSize.height, [height, windowSize.height])
  return (
    <Box
      height="100vh"
      mt={!hideHeader && responsiveCalc`-${headerHeight}`}
      pt={!hideHeader && headerHeight}
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
