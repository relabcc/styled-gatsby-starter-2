import React from 'react';
import { Button as ChButton, forwardRef } from "@chakra-ui/react";

import Link from './Link'

const Button = forwardRef(({ href, to, ...props }, ref) => {
  if (href || to) return <ChButton as={p => <Link {...p} href={href} to={to} ref={ref} />} {...props} />
  return <ChButton ref={ref} {...props} />
})

export default Button
