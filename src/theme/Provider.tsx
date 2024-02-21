import React, { PropsWithChildren, useMemo } from "react";

import {
  ThemeProvider as NextThemeProvider,
  // useTheme as useNextTheme,
} from "next-themes";
import { ThemeProvider } from "styled-components";

import light from "./light";
// import dark from "./dark";

// ----------------------------------------------------------------------
const appName = process.env.NEXT_PUBLIC_APP_NAME;

const StyledSystemProvider: React.FC<PropsWithChildren<any>> = ({
  children,
}) => {
  // const { systemTheme } = useNextTheme();
  // const currentTheme = useMemo(
  //   () => (systemTheme === "dark" ? dark : light),
  //   [systemTheme]
  // );
  return <ThemeProvider theme={light}>{children}</ThemeProvider>;
};

const AppThemeProvider = ({ children }) => {
  return (
    <NextThemeProvider
      enableSystem
      storageKey={`${appName}-theme`}
      attribute="class"
      themes={["light", "dark"]}
    >
      <StyledSystemProvider>{children}</StyledSystemProvider>
    </NextThemeProvider>
  );
};
export default AppThemeProvider;
