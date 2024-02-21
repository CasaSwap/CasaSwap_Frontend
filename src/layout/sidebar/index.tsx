import React from "react";
import { SideBar, SideBarItemType } from "@/components/Sidebar";
// sidebar View
import { MenuBarItem } from "@/views/sidebar/";

// -----------------------------------------------------------

const sidebar: Array<SideBarItemType> = [
  {
    barItem: MenuBarItem,
    id: "menu",
    $rWidth: "90%",
    $bg: "colors.white",
  },
];

// const topbar: Array<SideBarItemType> = [];
const SidebarProvider = ({ children }) => {
  return (
    // <TopBar.Provider items={topbar}>
    <SideBar.Provider items={sidebar}>{children}</SideBar.Provider>
    // </TopBar.Provider>
  );
};

export default SidebarProvider;
