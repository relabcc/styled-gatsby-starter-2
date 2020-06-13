import React from 'react';
import styled, { css } from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  letterSpacing,
  display,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop'
import { Link as GatsbyLink } from 'gatsby';

import { customColor } from './utils/getColor';

const linkStyle = css`
  ${fontSize}
  ${space}
  ${color}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${display}
  text-decoration: none;
  ${({ disabled }) => disabled && `
    pointer-events: none;
  `}
  &:hover {
    ${customColor('hoverColor')};
  }
`;

const NomalLink = styled.a.withConfig({ shouldForwardProp })`
  ${linkStyle}
`;

const GatsbyStyledLink = styled(GatsbyLink).withConfig({ shouldForwardProp })`
  ${linkStyle}
`;

const Link = ({ to, button, ...props }) => {
  if (to) {
    return (
      <GatsbyStyledLink to={to} {...props} />
    );
  }
  return (
    <NomalLink
      as="a"
      target="_blank"
      { ...props }
    />
  );
};

Link.displayName = 'Link';

Link.defaultProps = {
  fontWeight: 'bold',
};

export default Link;
