import { Box, Button, Link } from "@chakra-ui/react";
import { Heart } from "../assets/Heart.jsx";

export const Donner = () => (
  <Link
    href="https://www.helloasso.com/associations/horizons-nepal"
    target="_none"
  >
    <Button
      color="text.dark"
      border="2px #103a55 solid" // TODO
      mb={4}
      size="lg"
      width="fit-content"
      rightIcon={
        <Box pt={1 / 2}>
          <Heart fill="#103a55" />
        </Box>
      }
    >
      Faire un don
    </Button>
  </Link>
);
