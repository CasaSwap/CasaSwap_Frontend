import { DefaultTheme } from "styled-components";
import base, { baseColor } from "@/theme/base";
import darkColor from "./colors";

const theme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: {
    ...baseColor,
    ...darkColor,
  },
};

export default theme;
