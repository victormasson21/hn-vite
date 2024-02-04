import { Heading, Image, Stack, useMediaQuery } from "@chakra-ui/react";
import Placeholder from "../assets/placeholder.png";
import { MobileMenu } from "./MobileMenu";
import { Donner } from "./Donner";
import { useContext } from "react";
import { LanguageContext } from "../App";

const HorizonsNepal = () => {
  const locale = useContext(LanguageContext);

  return (
    <Stack direction="row" align="center" spacing={4} cursor="pointer">
      <Image src={Placeholder} height="40px" />
      <Heading as="h2" size="xl" mb={0}>
        {
          {
            FR: "Horizons Népal",
            EN: "Horizons Nepal",
          }[locale]
        }
      </Heading>
    </Stack>
  );
};

export const Header = ({ menuOpen, setMenuOpen }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Stack
      width="100%"
      pb={4}
      spacing={isMobile ? 4 : 8}
      direction="row"
      justify="space-between"
      align="center"
      borderBottom="2px solid"
      borderColor="text.dark"
      position="sticky"
      top="0"
    >
      <HorizonsNepal />
      {isMobile ? (
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      ) : (
        <Donner />
      )}
    </Stack>
  );
};
