import { coreTheme } from '../themes/coreTheme';

declare global {
  type Theme = typeof coreTheme;

  interface HSL {
    h: number;
    s: number;
    l: number;
  }
}
