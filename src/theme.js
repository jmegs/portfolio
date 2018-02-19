// theme.js

// breakpoint values
// export const breakpoints = { s: '720px', m: '1280px', l: '1440px' }
export const breakpoints = ['45em', '80em', '90em']
export const space = [0, 8, 16, 24, 32, 48, 56, 64]

export const font =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

export const mono = 'iA, "SF Mono", monospace'

export const weights = [300, 500]

export const lineHeights = {
  none: 1,
  tight: 1.25,
  normal: 1.5,
  loose: 2,
}
export const colors = {
  black: '#141414',
  white: '#fff',
  lightGrey: '#f9f9f9',
}

export const shadows = {
  none: 'none',
  small: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)',
  medium: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)',
}

export default {
  breakpoints,
  space,
  font,
  mono,
  weights,
  lineHeights,
  colors,
  shadows,
}
