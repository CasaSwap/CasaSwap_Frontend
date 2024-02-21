// styled system
import styled, { DefaultTheme } from "styled-components";
import { space, typography, layout, display, flexbox } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

// types
import { TextProps } from "../types";
// utils
import getThemeValue from "@/utils/getThemeValue";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(theme, `colors.${color}`, color);
};

const getHoverColor = ({ $hColor, theme }: ThemedProps) => {
  return getThemeValue(theme, `colors.${$hColor}`, $hColor);
};

const getBGColor = ({ bgColor, theme }: ThemedProps) => {
  return getThemeValue(theme, `colors.${bgColor}`, bgColor);
};

// -------------------------------------------------------
const TextWrapper = styled.p.withConfig({
  shouldForwardProp,
})<TextProps>`
  color: ${getColor};
  line-height: 1.5;
  ${({ pointered }) => pointered && `cursor: pointer;`}
  ${({ bgColor, theme }) =>
    bgColor &&
    `background: ${getBGColor({
      bgColor,
      theme,
    })};
		-webkit-background-clip: text; 
		-webkit-text-fill-color: transparent;`}
	${({ $textTransform }) =>
    $textTransform && `text-transform: ${$textTransform};`}
	${({ tDecorations }) => tDecorations && `text-decoration: ${tDecorations};`}
  ${space}
  ${flexbox}
  ${display}
  ${typography}
  ${layout}
  &:hover {
    color: ${getHoverColor};
  }
`;

export default TextWrapper;
