// @flow

import color from 'color'

import { type Theme } from '../types'
import variables from '../variables'

export default (): Theme => {
  const theme = {
    '.active': {
      //eslint-disable-next-line no-magic-numbers
      borderBottomWidth: variables.borderWidth * 4,
      borderColor: color(variables.inputBorderColor)
        // eslint-disable-next-line no-magic-numbers
        .darken(0.2)
        .hex()
    }
  }

  return theme
}
