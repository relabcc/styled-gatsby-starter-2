import React from 'react'
import { FaThumbsUp } from 'react-icons/fa';

import Layout from '../containers/Layout';
import Container from '../components/Container'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Circle from '../components/Circle'
import Text from '../components/Text'
import BackgroundImage from '../components/BackgroundImage'
import Button from '../components/Button'
import Link from '../components/Link'
import VerticalCenter from '../components/VerticalCenter'
import { mobileOrDesktop } from '../components/ThemeProvider/theme';

const IndexPage = () => (
  <Layout>
    <VerticalCenter>
      <Container py={mobileOrDesktop(0, '2em')}>
        <Flex>
          <Text>
            Styled Components + Styled System is cool!
          </Text>
          <Circle width="2em" bg="blue" color="white" display="inline-block" mx="1em" verticalAlign="middle">
            <FaThumbsUp />
          </Circle>
        </Flex>
        <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
        <Box mx="-1em">
          <Button m="0.5em" is={Link} to="/about">Go to About</Button>
          <Button.secondary m="0.5em">Good Button !</Button.secondary>
          <Button m="0.5em" disabled>Not Good</Button>
        </Box>
      </Container>
    </VerticalCenter>
  </Layout>
)

export default IndexPage
