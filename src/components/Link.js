import React, { forwardRef } from 'react';
import { Link as RouterLink } from 'gatsby'
import { Link } from "@chakra-ui/react";

const ReLink = forwardRef(({ to, ...props }, ref) => {
  if (to) {
    return <Link as={p => <RouterLink to={to} {...p} />} ref={ref} {...props} />
  }
  return <Link target="_blank" ref={ref} {...props} />
})

export default ReLink
