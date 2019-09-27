import { createTheming } from '@callstack/react-theme-provider'

export const DEFAULT_THEME = {
  primaryColor: 'red',
  primaryColorLLL: 'pink',
  secondaryColor: 'white',
  fontSize: 18,
  fontFamily: 'System',
}
export type Theme = Partial<typeof DEFAULT_THEME>

const { ThemeProvider, useTheme } = createTheming<Theme>(DEFAULT_THEME)

export { ThemeProvider, useTheme }
