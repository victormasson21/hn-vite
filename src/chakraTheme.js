import { extendTheme } from "@chakra-ui/react";
import "@fontsource/Salsa/400.css";

export const theme = extendTheme({
  colors: {
    text: {
      dark: "#103a55",
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "text.dark",
        mb: 2,
      },
    },
    Heading: {
      baseStyle: {
        color: "text.dark",
        fontFamily: "Salsa, sans-serif",
        fontWeight: "bold",
        mb: 2,
      },
    },
    // Button: {
    //   baseStyle: {
    //     width: "fit-content",
    //     background: "none",
    //     border: "2px solid",
    //   },
    // },
  },
  fonts: {
    heading: `'Salsa', sans-serif`,
  },
});
