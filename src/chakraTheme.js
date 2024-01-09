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
        mb: 4,
        color: "text.dark",
        textAlign: "justify",
        lineHeight: "tall",
      },
    },
    Heading: {
      baseStyle: {
        mb: 4,
        color: "text.dark",
        fontFamily: "Salsa, sans-serif",
        fontWeight: "bold",
        textAlign: "justify",
        lineHeight: "tall",
      },
    },
    Button: {
      variants: {
        outline: {
          size: "lg",
          width: "fit-content",
          background: "none",
          border: "2px solid",
          color: "text.dark",
          borderColor: "text.dark",
        },
      },
    },
  },
});
