import { createTheme, rem } from '@mantine/core'

export const theme = createTheme({
  fontFamily: 'Roboto, sans-serif',
  headings: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '700',
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
    xxl: '120em',
  },
  black: '#2e2e2e',
  colors: {
    light: [
      '#fbf3f5',
      '#e8e8e8',
      '#cdcdcd',
      '#b2b2b2',
      '#9a9a9a',
      '#8b8b8b',
      '#848484',
      '#717171',
      '#656565',
      '#2e2e2e',
    ],
  },
})
