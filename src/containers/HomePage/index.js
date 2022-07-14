import React from 'react'
import { FaThumbsUp } from 'react-icons/fa';
import { Circle, Stack, Container, Flex, Text, ButtonGroup, Center } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image';

import Button from 'components/Button'
import { Media } from 'contexts/responsive';

const IndexPage = () => {
  return (
    <Center>
      <Container as={Stack} py={{ md: 8 }} spacing={4}>
        <Flex alignItems="center">
          <Text
            fontSize={{ base: '1em', md: '1.5em' }}
            color={{
              base: 'red.400',
              md: 'green.500',
              lg: 'blue.500',
              xl: 'purple.500',
            }}
          >
            Ggatsby + Chakra UI 超方便！
            <Media lessThan="md">
              Mobile {`(< md)`}
            </Media>
            <Media at="md">
              Tablet {`(@ md)`}
            </Media>
            <Media at="lg">
              Laptop {`(@ lg)`}
            </Media>
            <Media greaterThan="lg">
              Desktop {`(> lg)`}
            </Media>
          </Text>
          <Circle size="2em" bg="blue.500" color="white" mx="1em" >
            <FaThumbsUp />
          </Circle>
        </Flex>
        <StaticImage
          alt="Homepage"
          src="../../images/1920x1080.jpg"
        />
        <ButtonGroup spacing="1em" size="lg">
          <Button to="/about">關於</Button>
          <Button variant="outline" rightIcon={<FaThumbsUp />}>Outline</Button>
          <Button isDisabled>不可點</Button>
        </ButtonGroup>
      </Container>
    </Center>
  )
}

export default IndexPage
