import React, { forwardRef } from 'react';
import { Box as ChBox } from "@chakra-ui/react";
import styled from '@emotion/styled'

const Box = styled(ChBox)``

export default Box

Box.Inline = forwardRef((props, ref) => <Box as="span" display="inline-block" verticalAlign="middle" {...props} ref={ref} />);
Box.Absolute = forwardRef((props, ref) => <Box position="absolute" {...props} ref={ref} />);
Box.FullAbs = forwardRef((props, ref) => <Box.Absolute top="0" left="0" right="0" bottom="0" {...props} ref={ref} />)
Box.Relative = forwardRef((props, ref) => <Box position="relative" {...props} ref={ref} />)
Box.Fixed = forwardRef((props, ref) => <Box position="fixed" {...props} ref={ref} />)
Box.Invisible = forwardRef((props, ref) => <Box.Absolute width="0" height="0" overflow="hidden" opacity="0" {...props} ref={ref} />)
