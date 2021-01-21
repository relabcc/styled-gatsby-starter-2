import { useMemo } from 'react';
import { get, isArray } from 'lodash'

const useWebpImage = (src) => {
  const canUseWebp = get(window, 'Modernizr.webp')

  const pic = useMemo(() => {
    if (!isArray(src)) return null
    return canUseWebp ? src[0] : src[1];
  }, [canUseWebp, src])

  return pic
}

export default useWebpImage
