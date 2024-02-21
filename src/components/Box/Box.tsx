import shouldForwardProp from "@styled-system/should-forward-prop";
import { styled } from "styled-components";
import {
  background,
  border,
  layout,
  position,
  space,
  color,
} from "styled-system";
import { BoxProps } from "./types";

const Box = styled.div.withConfig({
  shouldForwardProp,
})<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${color}
`;

export default Box;
