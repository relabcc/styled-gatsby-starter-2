import React, { forwardRef, useContext } from 'react';
import { useWindowSize } from 'react-use';

import Box from './Box'
import theme, { responsiveCalc } from './ThemeProvider/theme'
import headerContext from '../contexts/header/context'

const Fullpage = forwardRef(({ children, ...props }, ref) => {
  const { hideHeader } = useContext(headerContext)
  const windowSize = useWindowSize()
  return (
    <Box
      height={`${windowSize.height}px`}
      mt={!hideHeader && (!props.position || props.position === 'relative') && responsiveCalc`-${theme.headerHeight}`}
      pt={!hideHeader && theme.headerHeight}
      top={!hideHeader && props.position === 'fixed' && theme.headerHeight}
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  )
});

export default Fullpage;
