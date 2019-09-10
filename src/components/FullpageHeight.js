import React, { useState } from 'react';
import sizeMe from 'react-sizeme'
import { useWindowHeight } from '@react-hook/window-size'

import Box from './Box'
import theme from './ThemeProvider/theme'

const HeightAware = sizeMe({ monitorHeight: true, monitorWidth: false })(Box)

const Fullpage = ({ noHeader, children, ...props }) => {
  const [dims, setDims] = useState({})
  const windowHeight = useWindowHeight(720)
  const canFull = windowHeight > dims.height

  return (
    <Box
      height={canFull ? '100vh' : 'auto'}
      mt={!noHeader && `-${theme.headerHeight}`}
      pt={!noHeader && theme.headerHeight}
      {...props}
    >
      <HeightAware onSize={setDims} height={canFull ? '100%' : 'auto'}>
        {children}
      </HeightAware>
    </Box>
  );
};

export default Fullpage;
