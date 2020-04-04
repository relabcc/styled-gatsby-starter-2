import React from 'react';
import { Audio } from 'svg-loaders-react'

import Box from './Box';

const Loading = (props) => (
  <Box {...props}>
    <Audio
      width="100%"
      fill="currentColor"
    />
  </Box>
);

Loading.defaultProps = {
  color: 'primary',
};

export default Loading;
