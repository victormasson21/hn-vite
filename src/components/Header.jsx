import { Heading, Image, Link, Stack, useMediaQuery } from "@chakra-ui/react";
import Placeholder from "../assets/placeholder.webp";
import { MobileMenu } from "./MobileMenu";
import { Donner } from "./Donner";
import { useContext } from "react";
import { LanguageContext } from "../App";
import { LanguageSwitcher } from "./LanguageSwitcher";

const HorizonsNepal = () => {
  const locale = useContext(LanguageContext);

  return (
    <Link
      href="/"
      sx={{ textDecoration: "none" }}
      _hover={{ textDecoration: "none" }}
    >
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
    </Link>
  );
};

export const Header = ({ menuOpen, setMenuOpen, setLocale }) => {
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
      <Stack direction="row" spacing={3}>
        <HorizonsNepal />
        <LanguageSwitcher setLocale={setLocale} />
      </Stack>
      {isMobile ? (
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      ) : (
        <Donner />
      )}
    </Stack>
  );
};
