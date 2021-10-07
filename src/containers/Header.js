import React from 'react'
import Box from '../components/Box';
import Flex from '../components/Flex';
import Text from '../components/Text';
import Link from '../components/Link';

const Header = ({ siteTitle, ...props }) => (
  <Flex
    as="header"
    position="fixed"
    bg="primary"
    top={0}
    left={0}
    right={0}
    alignItems="center"
    zIndex="docked"
    {...props}
  >
    <Box px="1em" flex={1}>
      <Text.H2>
        <Link to="/" color="white">
          {siteTitle}
        </Link>
      </Text.H2>
    </Box>
  </Flex>
)

export default Header
