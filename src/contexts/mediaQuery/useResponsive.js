import { useContext, useCallback, useMemo } from 'react'
import last from 'lodash/last'

import MediaContext from './mediaContext'

import getResponsiveHelper from './getResponsiveHelper'

const useResponsive = () => {
  const q = useContext(MediaContext)
  const helper = useMemo(() => getResponsiveHelper(q), [q]);
  const getCurrentValue = useCallback((resArr) => {
    const ff = q.findIndex(v => !v)
    return ff === -1 ? last(resArr) : resArr[ff]
  }, [q])
  return {
    ...helper,
    getCurrentValue,
  }
}

export default useResponsive
