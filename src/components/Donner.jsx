import { Box, Button, Link, useTheme } from "@chakra-ui/react";
import { Heart } from "../assets/Heart.jsx";
import { useContext } from "react";
import { LanguageContext } from "../languageContext";

export const Donner = () => {
  const locale = useContext(LanguageContext);
  const {
    colors: { accent },
  } = useTheme();
  return (
    <Link
      href="https://bit.ly/HorizonsNepalDonate"
      isExternal
      sx={{ textDecoration: "none" }}
    >
      <Button
        variant="outline"
        bgColor="gray.100"
        color="accent.red"
        borderColor="accent.red"
        rightIcon={
          <Box pt={1 / 2}>
            <Heart fill={accent.red} />
          </Box>
        }
      >
        {
          {
            FR: "Faire un don",
            EN: "Donate",
          }[locale]
        }
      </Button>
    </Link>
  );
};
