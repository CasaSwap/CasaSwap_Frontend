import base from "./base";

import {
  Breakpoints,
  FontSizes,
  FontWeights,
  Fonts,
  MediaQueries,
  Radii,
  Shadows,
  Spacing,
  Colors,
  Transitions,
} from "./types";

export interface AppTheme {
  siteWidth: number;
  isDark: boolean;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  radii: Radii;
  fonts: Fonts;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  colors: Colors;
  transition: Transitions;
  shadows: Shadows;
}

export const SITEWIDTH = base.siteWidth;

export { default as light } from "./light";
export { default as dark } from "./dark";

export { default as AppThemeProvider } from "./Provider";
