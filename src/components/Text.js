import React, { forwardRef } from 'react';
import { Text as ChText } from "@chakra-ui/react";
import range from 'lodash/range';
import styled from '@emotion/styled'

const Text = styled(ChText)``

Text.Inline = forwardRef((props, ref) => <Text as="span" {...props} ref={ref} />);
Text.Bold = forwardRef((props, ref) => <Text fontWeight="bold" {...props} ref={ref} />);
Text.Thin = forwardRef((props, ref) => <Text fontWeight="thin" {...props} ref={ref} />);

range(1, 7).forEach((key) => {
  Text[`H${key}`] = forwardRef((props, ref) => (
    <Text
      as={`h${key}`}
      fontSize={`${5 - key}xl`}
      {...props}
      ref={ref}
    />
  ));
});

export default Text
