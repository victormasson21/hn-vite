import { Box, Button, Link, useTheme } from "@chakra-ui/react";
import { Heart } from "../assets/Heart.jsx";

export const Donner = () => {
  const {
    colors: { text },
  } = useTheme();
  return (
    <Link
      href="https://www.helloasso.com/associations/horizons-nepal"
      target="_none"
    >
      <Button
        variant="outline"
        rightIcon={
          <Box pt={1 / 2}>
            <Heart fill={text.dark} />
          </Box>
        }
      >
        Faire un don
      </Button>
    </Link>
  );
};
