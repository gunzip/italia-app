// @flow

import { type Theme } from '../types'
import variables from '../variables'

export default (): Theme => {
  const theme = {
    '.big': {
      fontSize: variables.iconBigFontSize
    },

    '.success': {
      color: variables.brandSuccess
    }
  }

  return theme
}
