import { Box, Flex, Heading, useTheme } from '@chakra-ui/react';
import React from 'react'
import Link from 'components/Link';

const Header = ({ siteTitle, ...props }) => {
  const { colorScheme } = useTheme();
  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      alignItems="center"
      zIndex="docked"
      height="header"
      bg={`${colorScheme}.500`}
      {...props}
    >
      <Box px="1em" flex={1}>
        <Heading>
          <Link to="/" color="white">
            {siteTitle}
          </Link>
        </Heading>
      </Box>
    </Flex>
  )
}

export default Header
