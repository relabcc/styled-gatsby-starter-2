import { theme, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { get } from "lodash";

const bp = [0, 30, 48, 62, 80, 96].map(em => em * 16);

const chakraBpNames = ['sm', 'md', 'lg', 'xl', '2xl']
export const breakpoints = chakraBpNames.reduce((bps, name, i) => {
  bps[name] = `${bp[i + 1]}px`
  return bps
}, {})

const font = 'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';
const fonts = {
  heading: font,
  body: font,
  mono: "Menlo, monospace",
}

const primary = 'blue'
const secondary = 'green'
const danger = 'red'

const overrides = {
  fonts,
  colors: {
    ...theme.colors,
    primary: get(theme.colors, `${primary}.500`),
    secondary: get(theme.colors, `${secondary}.500`),
    danger: get(theme.colors, `${danger}.500`),
    text: get(theme.colors, 'black'),
  },
  breakpoints: createBreakpoints(breakpoints),
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
    },
    Container: {
      baseStyle: {
        maxW: 'container.lg',
      },
    },
  },
}

const customTheme = extendTheme(overrides)

export default customTheme
