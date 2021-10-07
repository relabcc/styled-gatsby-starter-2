import { css } from '@emotion/react'
import "focus-visible/dist/focus-visible"

import { mediaStyle } from './src/contexts/responsive'

export default css`
  body {
    min-width: 100%;
    min-height: 100%;
  }

  ${mediaStyle}
`;
