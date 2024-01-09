import { Heading, Image, Stack, useMediaQuery } from "@chakra-ui/react";
import Placeholder from "../assets/placeholder.png";
import { MobileMenu } from "./MobileMenu";
import { Donner } from "./Donner";

const HorizonsNepal = ({ setDisplayed }) => (
  <Stack
    direction="row"
    align="center"
    spacing={4}
    cursor="pointer"
    onClick={() => setDisplayed("home")}
  >
    <Image src={Placeholder} height="40px" />
    <Heading as="h2" size="xl" mb={0}>
      Horizons Népal
    </Heading>
  </Stack>
);

export const Header = ({ displayed, setDisplayed, menuOpen, setMenuOpen }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Stack
      width="100%"
      pb={8}
      mb={isMobile ? 4 : 8}
      spacing={isMobile ? 4 : 8}
      direction="row"
      justify="space-between"
      align="center"
      borderBottom="3px solid"
      borderColor="text.dark"
      // position="sticky" // TODO
      // top="0"
    >
      <HorizonsNepal setDisplayed={setDisplayed} />
      {isMobile ? (
        <MobileMenu
          displayed={displayed}
          setDisplayed={setDisplayed}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      ) : (
        <Donner />
      )}
    </Stack>
  );
};
