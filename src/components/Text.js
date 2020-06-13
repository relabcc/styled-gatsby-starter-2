import React from 'react';
import styled from 'styled-components';
import range from 'lodash/range';
import {
  typography,
  space,
  color,
  display,
  position,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop'

import blacklist from './utils/blacklist';
import injectProps from './utils/injectProps';
import isToAs from './utils/isToAs'

const Text = isToAs(styled.p.withConfig({ shouldForwardProp })`
  margin-top: 0;
  margin-bottom: 0;
  ${typography}
  ${display}
  ${space}
  ${color}
  ${position}
  ${injectProps('textTransform')}
`);

Text.defaultProps = {
  fontSize: '1em',
  // lineHeight: 1.5,
  blacklist,
};

Text.inline = (props) => <Text as="span" {...props} />;
Text.bold = (props) => <Text fontWeight="bold" {...props} />;
Text.thin = (props) => <Text fontWeight="200" {...props} />;

range(1, 7).forEach((key) => {
  Text[`H${key}`] = (props) => (
    <Text
      as={`h${key}`}
      fontSize={`${1 + ((6 - key) * 0.125)}em`}
      {...props}
    />
  );
});

Text.displayName = 'Text';

export default Text;
