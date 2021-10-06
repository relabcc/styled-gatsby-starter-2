import React, { forwardRef, useContext } from 'react';
import { useWindowSize } from 'react-use';

import Box from './Box'
import { responsiveCalc } from './ThemeProvider/responsive'
import headerContext from '../contexts/header/context'

const Fullpage = forwardRef(({ children, ...props }, ref) => {
  const { hideHeader, headerHeight } = useContext(headerContext)
  const windowSize = useWindowSize()
  return (
    <Box
      height={`${windowSize.height}px`}
      mt={!hideHeader && (!props.position || props.position === 'relative') && responsiveCalc`-${headerHeight}`}
      pt={!hideHeader && headerHeight}
      top={!hideHeader && props.position === 'fixed' && headerHeight}
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  )
});

export default Fullpage;
