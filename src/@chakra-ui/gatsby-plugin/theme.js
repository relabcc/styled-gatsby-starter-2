import { theme, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"
import breakpoints from "contexts/responsive/breakpoints";
import get from "lodash/get";

const font = 'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';
const fonts = {
  heading: font,
  body: font,
  mono: "Menlo, monospace",
}

const colorScheme = 'blue';

const overrides = {
  fonts,
  colors: {
    ...theme.colors,
    text: get(theme.colors, 'black'),
  },
  breakpoints: createBreakpoints(breakpoints),
  sizes: {
    header: '4em',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme,
      },
    },
    Container: {
      baseStyle: {
        maxW: 'container.lg',
      },
    },
  },
  colorScheme,
}

const customTheme = extendTheme(overrides)

export default customTheme
