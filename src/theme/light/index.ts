import { DefaultTheme } from "styled-components";
import base, { baseColor } from "@/theme/base";
import lightColor from "./colors";

const theme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: {
    ...baseColor,
    ...lightColor,
  },
};
export default theme;
