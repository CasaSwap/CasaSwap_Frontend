// types
import { HTMLAttributes } from "react";
import {
  SpaceProps,
  TypographyProps,
  DisplayProps,
  LayoutProps,
  FlexboxProps,
} from "styled-system";

export const tags = {
  p: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  a: "a",
  span: "span",
};

export type Tags = keyof typeof tags;

export interface TextProps
  extends SpaceProps,
    TypographyProps,
    DisplayProps,
    FlexboxProps,
    LayoutProps,
    HTMLAttributes<HTMLParagraphElement> {
  as?: Tags;
  pointered?: boolean;
  bgColor?: string | undefined;
  tDecorations?: "line-through" | "initial" | "underline";
  $hColor?: string | undefined;
  $textTransform?: "uppercase" | "lowercase" | "capitalize";
  href?: string;
}
