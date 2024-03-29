import styled, { createGlobalStyle } from "styled-components";
import { get } from "styled-system";
import css from "@styled-system/css";

export const InjectRTL = styled.div`
  ${({ lang }) =>
    (lang === "ar" || lang === "he") && "font-family: 'Cairo', sans-serif;"}
`;

// @ts-ignore
export const GlobalStyle = createGlobalStyle(({ theme }) =>
  css({
    "*, *::before, *::after": {
      boxSizing: "border-box",
      outline: "none !important",
    },
    "*": {
      margin: 0,
      padding: 0,
    },
    "#__next": {
      width: "100%",
      height: "100%",
    },
    html: {
      scrollBehavior: "smooth",
      overflowX: "hidden",
      display: "flex",
      justifyContent: "center",
    },
    body: {
      position: "relative",
      color: get(theme, "colors.theme.black"),
      background: get(theme, "colors.theme.white"),
      fontSize: "sm",
      transition: get(theme, "transition.normal"),
      fontFamily: get(theme, "fonts.base"),
      scrollBehavior: "smooth",
      WebkitTextSizeAdjust: "100%",
      WebkifontFamilySmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      width: "100%",
      button: {
        "-moz-user-select": "none",
        "-khtml-user-select": "none",
        "-webkit-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
      },
      maxWidth: "1920px",
    },
    "::-webkit-scrollbar": {
      width: "3px",
    },
    "::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px grey",
      borderRadius: "10px",
    },
    " ::-webkit-scrollbar-thumb": {
      background: get(theme, "colors.primary"),
      borderRadius: "6px",
    },
    h1: {
      color: get(theme, "colors.theme.black"),
      fontSize: "3xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h2: {
      color: get(theme, "colors.theme.black"),
      fontSize: "2xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h3: {
      color: get(theme, "colors.theme.black"),
      fontSize: "xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h4: {
      color: get(theme, "colors.theme.black"),
      fontSize: "xl",
      fontWeight: "medium",
      zIndex: 10,
      margin: 0,
    },
    h5: {
      color: get(theme, "colors.theme.black"),
      fontSize: "md",
      fontWeight: "medium",
      zIndex: 10,
      margin: 0,
    },
    h6: {
      fontSize: "base",
      fontWeight: "medium",
      zIndex: 10,
      margin: 0,
    },

    "p,span,button,li,div": {
      margin: 0,
      transition: get(theme, "transition.normal"),
    },

    a: {
      textDecoration: "none",
      color: "inherit",
      cursor: "pointer",
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    li: {
      listStyle: "none",
    },
    pre: {
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    button: {
      appearance: "none",
    },
    img: {
      maxWidth: "100%",
    },

    // custom

    ".noscroll": {
      "::-webkit-scrollbar": {
        width: "0px",
        height: "0px",
      },
    },
    "#nprogress": {
      pointerEvents: "none",
    },
    "#nprogress .bar": {
      top: "0",
      left: "0",
      height: "2px",
      width: "100%",
      position: "fixed",
      zIndex: "9999",
      background: get(theme, "colors.primary"),
      boxShadow: `0 0 2px ${get(theme, "colors.primary")}`,
    },
    "#nprogress .peg": {
      right: "0",
      opacity: "1",
      width: "100px",
      height: "100%",
      display: "block",
      position: "absolute",
      transform: "rotate(3deg) translate(0px, -4px)",
      boxShadow: `0 0 10px ${get(theme, "colors.primary")}, 0 0 5px ${get(
        theme,
        "colors.primary"
      )}`,
    },
    ...theme.globals,
  })
);
