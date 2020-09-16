import { hslToHex } from '../helpers/colors';

const colors = {
  primary: { h: 256, s: 100, l: 56 },
  primaryAlt: { h: 256, s: 100, l: 50 },
  second: { h: 0, s: 0, l: 99 },
  backgroundPrimary: { h: 57, s: 82, l: 4 },
  backgroundContrast: { h: 0, s: 0, l: 0 },
  highlight: { h: 44, s: 81, l: 67 },
}

const coreTheme = {
  colorPrimary: hslToHex(colors.primary),
  colorPrimaryAlt: hslToHex(colors.primaryAlt),
  colorSecond: hslToHex(colors.second),
  backgroundPrimary: hslToHex(colors.backgroundPrimary),
  backgroundContrast: hslToHex(colors.backgroundContrast),
  colorHighlight: hslToHex(colors.highlight),
  transition: '.5s ease',
  borderRadius: '4px',
  borderThickness: '1px',
  maxWidth: '768px'
}

export { coreTheme };
