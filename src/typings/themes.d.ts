import { coreTheme } from '../themes/coreTheme';

declare global {
  type Theme = typeof coreTheme;
}
