import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Link from "next/link";

// styled-component
import { ServerStyleSheet } from "styled-components";

// ----------------------------------------------------------------------

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <noscript>Sorry, your browser does not support JavaScript!</noscript>
          <NextScript />
        </body>
      </Html>
    );
  }
}
