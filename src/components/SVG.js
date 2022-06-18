import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';

const SVG = ({
  viewBox,
  children,
  ...props
}) => {
  return <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    {...props}
  >
    {children}
  </Box>
}

SVG.propTypes = {
  viewBox: PropTypes.string,
  children: PropTypes.node.isRequired,
};

SVG.defaultProps = {
  display: 'inline-block',
}

SVG.displayName = 'SVG';

export default SVG;
