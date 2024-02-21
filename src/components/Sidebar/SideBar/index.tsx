import React, { useReducer, createContext, PropsWithChildren } from "react";
// type
import {
  SideBarActionProps,
  SideBarContextProps,
  SideBarContextType,
  SideBarProviderType,
} from "./types";
// styled component
import { LayoutWrapper, SideBarWrapper, OverLayer } from "./SideBar.style";

// -----------------------------------------------------------

const INITIAL_STATE: SideBarContextProps = {
  $isOpened: "",
  param: null,
};

/**
 * context for sidebar
 */
const SideBarContext = createContext<SideBarContextType>({
  sideBarState: INITIAL_STATE,
  sideBarDispatch: () => null,
});

/**
 * reducer for sidebar
 */

const reducer = (_: any, action: SideBarActionProps) => {
  if (action.type !== "")
    return { $isOpened: action.type, param: action.payload };
  return INITIAL_STATE;
};

/**
 * provider for sidebar
 */
const SideBarProvider: React.FC<PropsWithChildren<SideBarProviderType>> = ({
  items = [],
  children,
}) => {
  const [sideBarState, sideBarDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <SideBarContext.Provider value={{ sideBarState, sideBarDispatch }}>
      <LayoutWrapper $isOpened={Boolean(sideBarState.$isOpened !== "")}>
        {children}
        {items.map((SidebarItem, index) => (
          <SideBarWrapper
            key={`sidebarWrapper_${index}`}
            $rWidth={SidebarItem.$rWidth}
            $rHeight={SidebarItem.$rHeight}
            $isOpened={Boolean(sideBarState.$isOpened === SidebarItem.id)}
            direction={SidebarItem?.direction ?? "horizontal"}
            $bg={SidebarItem.$bg}
          >
            <SidebarItem.barItem />
          </SideBarWrapper>
        ))}
      </LayoutWrapper>
      <OverLayer
        $isOpened={Boolean(sideBarState.$isOpened !== "")}
        onClick={() => {
          sideBarDispatch({
            type: "",
            payload: null,
          });
        }}
      />
    </SideBarContext.Provider>
  );
};
const SideBar = { Context: SideBarContext, Provider: SideBarProvider };

export default SideBar;
