import { useMemo } from 'react';
import get from 'lodash/get'

const useWebpImage = (src) => {
  const canUseWebp = typeof window === 'undefined' ? false : get(window, 'Modernizr.webp')

  const pic = useMemo(() => {
    if (!Array.isArray(src)) return null
    return canUseWebp ? src[0] : src[1];
  }, [canUseWebp, src])

  return pic
}

export default useWebpImage
