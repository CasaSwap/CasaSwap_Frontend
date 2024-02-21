import type { AppProps } from "next/app";
import Router from "next/router";
import nProgress from "nprogress";
import { AppThemeProvider } from "@/theme";
import { GlobalStyle } from "@/theme/global.state";
import SidebarProvider from "@/layout/sidebar";
import { config } from "@fortawesome/fontawesome-svg-core";

import "swiper/css";
import "@/theme/global.css";
import "@/utils/warningSetup";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
nProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function CawaSwapApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
      <GlobalStyle />
    </AppThemeProvider>
  );
}

export default CawaSwapApp;
