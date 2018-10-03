import React from 'react'
import { compose } from 'redux';

import Container from '../components/Container'
import Box from '../components/Box'
import Text from '../components/Text'
import BackgroundImage from '../components/BackgroundImage'
import Button from '../components/Button'
import Link from '../components/Link'
import withLayout from '../hoc/withLayout';
import withResponsive from '../hoc/withResponsive';

const IndexPage = ({ browser, projects }) => console.log(projects) || (
  <Container>
    <Box py={[0, null, null, '2em']}>
      <Text>Styled Components + Styled System is cool!</Text>
      <Text>Crrent Breakpoint: {browser.mediaType}</Text>
    </Box>
    <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
    <Box mx="-1em">
      <Button mx="1em" is={Link} to="/about">Go to About</Button>
      <Button.secondary mx="1em">Good Button !</Button.secondary>
      <Button mx="1em" disabled>Not Good</Button>
    </Box>
  </Container>
)

export default compose(withLayout, withResponsive)(IndexPage)
