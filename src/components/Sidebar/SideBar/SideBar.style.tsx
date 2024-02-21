// styled system
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// utils
import { _withUnit } from "@/utils/helper";

// type
import { SideBarStyledProps } from "./types";

// --------------------------------------------------------

export const LayoutWrapper = styled.div<SideBarStyledProps>`
  position: relative;
  /* @dev */
  /* if you want to shift the whole layout with Sidebar you can enable following code */
  /* left: ${({ $isOpened }) => ($isOpened ? 250 : 0)}px; */
`;
export const SideBarWrapper = styled.div<SideBarStyledProps>`
  display: block !important;
  position: fixed;
  top: 0;
  left: 0;
  /* transform: translate(${({ $isOpened }) => ($isOpened ? 0 : -102)}%); */
  transform: ${({ $isOpened, direction }) =>
    direction == "horizontal"
      ? `translate(${$isOpened ? 0 : -102}%)`
      : `translateY(${$isOpened ? 0 : -102}%)`};
  width: ${({ $rWidth }) => ($rWidth ? _withUnit($rWidth) : 0)};
  height: ${({ $rHeight }) => ($rHeight ? _withUnit($rHeight) : "100vh")};
  transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  background: ${({ $bg }) =>
    css`
      ${themeGet(`${$bg}`)}
    `};

  box-shadow: 0 0 5px 0 rgb(50 50 50 / 75%);
  overflow-y: auto;
  z-index: 101;
`;
export const OverLayer = styled.div<SideBarStyledProps>`
  transition: all 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: ${({ $isOpened }) => ($isOpened ? 0.15 : 0)};
  visibility: ${({ $isOpened }) => ($isOpened ? "visible" : "hidden")};
  z-index: 100;
`;
