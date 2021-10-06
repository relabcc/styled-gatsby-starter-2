import React from 'react';
import { Button as ChButton } from "@chakra-ui/react";

import Link from './Link'

const Button = ({ href, ...props }) => {
  if (href) return <ChButton as={p => <Link {...p} href={href} />} {...props} />
  return <ChButton {...props} />
}

Button.defaultProps = {
  colorScheme: 'blue',
}

Button.Secondary = props => (
  <Button colorScheme="green" {...props} />
)

Button.Danger = props => (
  <Button colorScheme="red" {...props} />
)

export default Button
