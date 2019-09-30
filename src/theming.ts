import { createTheming } from '@callstack/react-theme-provider'
import { Platform } from 'react-native'

export const DEFAULT_THEME = {
  primaryColor: '#B1794B',
  primaryColorVariant: '#D0C7BB',
  backgroundColor: '#ffffff',
  onBackgroundTextColor: '#000000',
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
