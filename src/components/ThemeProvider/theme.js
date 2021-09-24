import { theme, extendTheme } from "@chakra-ui/react";
import { createMedia } from "@artsy/fresnel"
import { isArray, isNil, get } from "lodash";
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = [0, 30, 48, 62, 80, 96].map(em => em * 16);

const chakraBpNames = ['sm', 'md', 'lg', 'xl', '2xl']
const chakraBps = chakraBpNames.reduce((bps, name, i) => {
  bps[name] = `${breakpoints[i + 1]}px`
  return bps
}, {})

export const responsiveIndex = [
  // [1, 'mini-mobile'],
  [2, 'mobile'],
  [3, 'tablet'],
  [4, 'laptop'],
  [5, 'desktop'],
]

const mediaBreak = responsiveIndex.reduce((obj, [i, name], j) => {
  obj[name] = j ? breakpoints[i - 1] : 0
  return obj
}, {})

const responsiveMap = breakpoints.map((_, i) => {
  const id = responsiveIndex.findIndex(([ri]) => ri > i)
  return id >= 0 ? id : responsiveIndex.length
})

const AppMedia = createMedia({ breakpoints: mediaBreak })
export const mediaStyle = AppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = AppMedia

const handleCalc = (syn, a) => isNil(a) ? null : [syn[0], a, syn[1]].join('')

export const responsiveCalc = (syn, resArr) => {
  return isArray(resArr) ? resArr.map(a => handleCalc(syn, a)) : handleCalc(syn, resArr)
}

export const responsive = (...args) => {
  const argsLen = args.length
  if (argsLen <= 1) return args[0]
  return breakpoints.map((_, i) => get(args, [responsiveMap[i]], null))
};

export const mobileOrDesktop = responsive

export const containerWidth = responsive("26em", "44em", "58em", "76em");
export const containerPadding = responsive('1em', '2em')

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
  breakpoints: createBreakpoints(chakraBps),
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
    },
  },
}

const customTheme = extendTheme(overrides)

export default customTheme
