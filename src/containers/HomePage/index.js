import React from 'react'
import { FaThumbsUp } from 'react-icons/fa';
import { Circle, HStack, Stack, Container } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image';

import Flex from '../../components/Flex'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Link from '../../components/Link'
import FullpageVerticalCenter from '../../components/FullpageVerticalCenter'
import { Media, responsive } from '../../contexts/responsive';

const IndexPage = () => {
  return (
    <FullpageVerticalCenter>
      <Container as={Stack} py={responsive(0, '2em')}>
        <Flex alignItems="center">
          <Text fontSize={responsive('1em', '1.5em')} color={responsive('red.400', 'green.500', 'blue.500', 'purple.500')}>
            Styled Components + Styled System 超方便！
            <Media lessThan="md">
              Mobile
            </Media>
            <Media at="md">
              Tablet
            </Media>
            <Media at="lg">
              Laptop
            </Media>
            <Media greaterThan="lg">
              Desktop
            </Media>
          </Text>
          <Circle size="2em" bg="primary" color="white" mx="1em" >
            <FaThumbsUp />
          </Circle>
        </Flex>
        <StaticImage
          alt="Homepage"
          src="../../images/1920x1080.jpg"
        />
        <HStack spacing="1em">
          <Button as={Link} to="/about">關於</Button>
          <Button.Secondary rightIcon={<FaThumbsUp />}>範例Button</Button.Secondary>
          <Button disabled>不可點</Button>
        </HStack>
      </Container>
    </FullpageVerticalCenter>
  )
}

export default IndexPage
