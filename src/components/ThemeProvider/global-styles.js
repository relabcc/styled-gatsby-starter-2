import { css } from '@emotion/react'
import { mediaStyle } from './theme'

export default css`
  body {
    min-width: 100%;
    min-height: 100%;
  }

  img {
    width: 100%;
  }

  ${mediaStyle}
`;
