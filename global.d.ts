import { PropsWithChildren } from "react";

declare global {
  type LayoutFC<T = any> = React.FC<PropsWithChildren<T>>;
  type UnitLength = string | number | undefined;
}
