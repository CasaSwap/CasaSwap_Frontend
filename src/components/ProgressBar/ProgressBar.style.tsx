// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// types
import { ProgressBarItemProps, ProgressBarWrapperProps } from "./types";
// -------------------------------------------------------
export const ProgressBarWrapper = styled.div<ProgressBarWrapperProps>`
  display: flex;
  height: 5.5px;
  width: 100%;
  background: ${({ $bColor }) => themeGet(`colors.${$bColor}`)};
`;
export const BarItem = styled.div<ProgressBarItemProps>`
  width: ${({ $progress }) => ($progress ? `${$progress}%` : "0%")};
  background: ${({ $iColor }) => themeGet(`colors.${$iColor}`)};
  transition: all 500ms ease-in;
`;
