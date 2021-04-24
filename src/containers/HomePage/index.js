import React from 'react'
import { FaThumbsUp } from 'react-icons/fa';
import { Circle, HStack } from '@chakra-ui/react'

import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Text from '../../components/Text'
import BackgroundImage from '../../components/BackgroundImage'
import Button from '../../components/Button'
import Link from '../../components/Link'
import FullpageVerticalCenter from '../../components/FullpageVerticalCenter'
import { responsive, Media } from '../../components/ThemeProvider/theme';

import Counter from '../Counter';
import Layout from '../Layout';

const IndexPage = () => {
  return (
    <Layout>
      <FullpageVerticalCenter>
        <Container py={responsive(0, '2em')}>
          <Flex alignItems="center">
          <Text fontSize={responsive('1em', '1.5em')} color={responsive('red', 'green', 'blue')}>
              Styled Components + Styled System 超方便！
              <Media at="mobile">
                Mobile
              </Media>
              <Media at="tablet">
                Tablet
              </Media>
              <Media at="laptop">
                Laptop
              </Media>
              <Media greaterThan="laptop">
                Desktop
              </Media>
            </Text>
            <Circle size="2em" bg="primary" color="white" mx="1em" >
              <FaThumbsUp />
            </Circle>
          </Flex>
          <Counter />
          <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={16 / 9} />
          <HStack spacing="1em">
            <Button as={Link} to="/about">關於</Button>
            <Button.Secondary rightIcon={<FaThumbsUp />}>範例Button</Button.Secondary>
            <Button disabled>不可點</Button>
          </HStack>
        </Container>
      </FullpageVerticalCenter>
    </Layout>
  )
}

export default IndexPage
