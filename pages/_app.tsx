import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    components: {},
    colorSchemes: {
      light: {
        palette: {},
      },
      dark: {
        palette: {
          background: {
            // body: "#181016",
            body: "#0C080B",
            surface: "#251822",
            popup: "#31202D",
          },
          text: {
            primary: "#A5789A",
            secondary: "#DECEDA",
            tertiary: "#89587F",
            icon: "#DECEDA",
          },
          primary: {
            "50": "#CEB6C7",
            "100": "#C6A9BE",
            "200": "#BE9DB5",
            "300": "#B691AC",
            "400": "#AD85A3",
            "500": "#A5789A",
            "600": "#9D6C91",
            "700": "#936287",
            "800": "#875A7B",
            "900": "#7A5270",
          },
          neutral: {
            "50": "#fafafa",
            "100": "#f4f4f5",
            "200": "#e4e4e7",
            "300": "#d4d4d8",
            "400": "#a1a1aa",
            "500": "#71717a",
            "600": "#52525b",
            "700": "#3f3f46",
            "800": "#27272a",
            "900": "#18181b",
          },
          success: {
            "50": "#ecfdf5",
            "100": "#d1fae5",
            "200": "#a7f3d0",
            "300": "#6ee7b7",
            "400": "#34d399",
            "500": "#10b981",
            "600": "#059669",
            "700": "#047857",
            "800": "#065f46",
            "900": "#064e3b",
          },
        },
      },
    },
  });

  return (
    <>
      <Head>
        <title>Toolbox</title>
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <CssVarsProvider defaultMode="dark" modeStorageKey="mode" theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </CssVarsProvider>
      <style jsx global>{``}</style>
    </>
  );
}
