import camelCase from 'lodash/camelCase'

import { responsiveIndex } from '../../components/ThemeProvider/theme';

const getResponsiveHelper = q => responsiveIndex.reduce((r, [i, name]) => {
  r[camelCase(`is-${name}`)] = !q[i - 1]
  return r
}, {})

export default getResponsiveHelper
