import React, { useReducer, createContext, PropsWithChildren } from "react";
// type
import {
  TopBarActionProps,
  TopBarContextProps,
  TopBarContextType,
  TopBarProviderType,
} from "./types";
// styled component
import { TopBarWrapper } from "./TopBar.style";
// -----------------------------------------------------------
const INITIAL_STATE: TopBarContextProps = {
  opened: "",
  param: null,
};

/**
 * context for Topbar
 */
const TopBarContext = createContext<TopBarContextType>({
  topBarState: INITIAL_STATE,
  topBarDispatch: () => null,
});

/**
 * reducer for Topbar
 */

const reducer = (_: any, action: TopBarActionProps) => {
  if (action.type !== "") return { opened: action.type, param: action.payload };
  return INITIAL_STATE;
};

/**
 * provider for Topbar
 */
const TopBarProvider: React.FC<PropsWithChildren<TopBarProviderType>> = ({
  items = [],
  children,
}) => {
  const [topBarState, topBarDispatch] = useReducer(reducer, INITIAL_STATE);
  const SidebarItem =
    items.find((item) => item.id === topBarState.opened)?.barItem ??
    React.Fragment;
  return (
    <TopBarContext.Provider value={{ topBarState, topBarDispatch }}>
      {children}
      <TopBarWrapper $isOpened={topBarState.opened !== ""}>
        <SidebarItem />
      </TopBarWrapper>
    </TopBarContext.Provider>
  );
};

const TopBar = { Context: TopBarContext, Provider: TopBarProvider };
export default TopBar;
