import { createTheming } from '@callstack/react-theme-provider'
import { Platform } from 'react-native'

export const DEFAULT_THEME = {
  // primary
  primaryColor: '#B1794B',
  primaryColorVariant: '#D0C7BB',
  onPrimaryTextColor: '#FFFFFF',

  // secondary
  // secondaryColor: '#782419',
  // secondaryColorVariant: '#94413D',
  // onSecondaryTextColor: '#FFFFFF',

  // background
  backgroundColor: '#ffffff',
  onBackgroundTextColor: '#000000',

  // surface
  // backgroundSurfaceColor: '#ffffff',
  // onBackgroundSurfaceTextColor: '#000000',

  // error
  // backgroundErrorColor: 'red',
  // onBackgroundErrorTextColor: 'white',

  // font
  fontSize: 18,
  fontFamily: Platform.select({
    ios: 'System',
    android: 'Roboto',
    web: 'Arial',
  }),
}
export type Theme = Partial<typeof DEFAULT_THEME>

const { ThemeProvider, useTheme } = createTheming<Theme>(DEFAULT_THEME)

export { ThemeProvider, useTheme }
