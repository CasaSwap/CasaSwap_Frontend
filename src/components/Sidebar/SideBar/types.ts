import { ComponentType, Dispatch } from "react";

export interface SideBarContextProps {
  $isOpened: string;
  param?: any;
}

export interface SideBarActionProps {
  type: string;
  payload?: any;
}

export interface SideBarStyledProps {
  $isOpened: boolean;
  $rWidth?: string | number;
  $rHeight?: string | number;
  direction?: "horizontal" | "vertical";
  $bg?: string;
}

export interface SideBarContextType {
  sideBarState: SideBarContextProps;
  sideBarDispatch: Dispatch<SideBarActionProps>;
}

export interface SideBarProviderType {
  items?: Array<SideBarItemType>;
}

export interface SideBarItemType {
  id: string;
  barItem: ComponentType;
  $rWidth?: string | number;
  $rHeight?: string | number;
  direction?: "horizontal" | "vertical";
  $bg?: string;
}
