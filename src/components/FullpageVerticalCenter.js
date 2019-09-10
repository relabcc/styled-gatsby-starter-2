import React, { useState } from 'react';
import sizeMe from 'react-sizeme'
import { useWindowHeight } from '@react-hook/window-size'

import Box from './Box'
import theme from './ThemeProvider/theme'

const HeightAware = sizeMe({ monitorHeight: true, monitorWidth: false })(Box)

const Fullpage = ({ noHeader, children, ...props }) => {
  const [dims, setDims] = useState({})
  const windowHeight = useWindowHeight(720)
  const cantFull = windowHeight > dims.height
  console.log(dims.height, windowHeight + 1)
  console.log(dims.height > windowHeight + 1)
  console.log(cantFull)

  return (
    <Box
      height={cantFull ? '100vh' : 'auto'}
      mt={!noHeader && `-${theme.headerHeight}`}
      pt={!noHeader && theme.headerHeight}
      {...props}
    >
      <Box position="relative" height={cantFull ? '100%' : 'auto'}>
        <Box
          position={cantFull && 'absolute'}
          top={cantFull ? '50%' : 0}
          width={1}
          transform={cantFull && 'translateY(-50%)'}
        >
          <HeightAware onSize={setDims}>
            {children}
          </HeightAware>
        </Box>
      </Box>
    </Box>
  );
};

export default Fullpage;
