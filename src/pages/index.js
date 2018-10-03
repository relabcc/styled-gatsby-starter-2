import React from 'react'

import Layout from '../containers/Layout'
import Container from '../components/Container'
import Box from '../components/Box'
import Text from '../components/Text'
import BackgroundImage from '../components/BackgroundImage'
import Button from '../components/Button'
import Link from '../components/Link'

const IndexPage = () => (
  <Layout>
    <Container>
      <Box py={[0, null, null, '2em']}>
        <Text>Styled Components + Styled System is cool!</Text>
      </Box>
      <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
      <Box mx="-1em">
        <Button mx="1em" is={Link} to="/about">Go to About</Button>
        <Button.secondary mx="1em">Good Button !</Button.secondary>
        <Button mx="1em" disabled>Not Good</Button>
      </Box>
    </Container>
  </Layout>
)

export default IndexPage
