/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable prettier/prettier */
import 'styled-components'

import THEME from '.'

declare module 'styled-components' {
  type ThemeType = typeof THEME

  export interface DefaultTheme extends ThemeType { }
}
