import { Box, Button, Link, useTheme } from "@chakra-ui/react";
import { Heart } from "../assets/Heart.jsx";
import { useContext } from "react";
import { LanguageContext } from "../App";

export const Donner = () => {
  const locale = useContext(LanguageContext);
  const {
    colors: { text },
  } = useTheme();
  return (
    <Link
      href="https://www.helloasso.com/associations/horizons-nepal"
      target="_none"
      sx={{ textDecoration: "none" }}
    >
      <Button
        variant="outline"
        bgColor="gray.100"
        rightIcon={
          <Box pt={1 / 2}>
            <Heart fill={text.dark} />
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
