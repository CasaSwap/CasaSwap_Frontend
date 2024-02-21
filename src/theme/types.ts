export type Breakpoints = string[];

export type MediaQueries = {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

//  {
// 	xxs: 375,
// 	xs: 425,
// 	sm: 581,
// 	md: 768,
// 	lg: 1024,
// 	xl: 1441,
// 	xxl: 1920,
// };

export type Spacing = number[];

export type Transitions = {
  normal: string;
};

export type Fonts = {
  base: string;
  changa: string;
  roboto: string;
  poppins: string;
  inter: string;
  noto: string;
};

export type FontSizes = {
  ms: number;
  xs: number;
  sm: number;
  base: number;
  md: number;
  xl: number;
  "2xl": number;
  "3xl": number;
};

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type FontWeights = {
  thin: number;
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  bolder: number;
  boldest: number;
};

export type Colors = {
  white: string;
  black: string;
  primary: string;
  secondary: string;
  text: string;
  backgroundDisabled: string;
  textDisabled: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
