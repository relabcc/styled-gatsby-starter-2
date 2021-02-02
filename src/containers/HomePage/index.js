import React from 'react'
import { FaThumbsUp } from 'react-icons/fa';
import { Circle } from '@chakra-ui/react'

import Container from 'components/Container'
import Box from 'components/Box'
import Flex from 'components/Flex'
import Text from 'components/Text'
import BackgroundImage from 'components/BackgroundImage'
import Button from 'components/Button'
import Link from 'components/Link'
import FullpageVerticalCenter from 'components/FullpageVerticalCenter'
import { responsive, Media } from 'components/ThemeProvider/theme';

import Layout from '../Layout';

const IndexPage = () => {
  return (
    <Layout>
      <FullpageVerticalCenter>
        <Container py={responsive(0, '2em')}>
          <Flex alignItems="center">
          <Text fontSize={responsive('1em', '1.5em')} color={responsive('red', 'green')}>
              Styled Components + Styled System 超方便！
              <Media lessThan="tablet">
                Mobile
              </Media>
            </Text>
            <Circle size="2em" bg="primary" color="white" mx="1em" >
              <FaThumbsUp />
            </Circle>
          </Flex>
          <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={16 / 9} />
          <Box mx="-1em">
            <Button m="0.5em" as={Link} to="/about">關於</Button>
            <Button.Secondary m="0.5em" rightIcon={<FaThumbsUp />}>範例Button</Button.Secondary>
            <Button m="0.5em" disabled>不可點</Button>
          </Box>
        </Container>
      </FullpageVerticalCenter>
    </Layout>
  )
}

export default IndexPage
