import React from 'react';
import Wave from 'better-react-spinkit/dist/Wave';

import Box from './Box';

const Loading = (props) => (
  <Box {...props}>
    <Wave
      color="currentColor"
      size={36}
      gutterWidth={2}
    />
  </Box>
);

Loading.defaultProps = {
  color: 'blue',
};

export default Loading;
