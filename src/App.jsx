import { createContext, useEffect, useState } from "react";

import { Box, Stack, useMediaQuery } from "@chakra-ui/react";

import { Content } from "./components/Content.jsx";
import { MenuContent } from "./components/MenuContent.jsx";
import { Donner } from "./components/Donner.jsx";
import { StyledBlock } from "./components/StyledBlock.jsx";

import BackgroundImage from "./assets/background.webp";
import { Header } from "./components/Header.jsx";

export const LanguageContext = createContext("FR");

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  const [locale, setLocale] = useState(() => {
    const savedLocale = localStorage.getItem("hnlocale");
    return savedLocale || "FR";
  });

  useEffect(() => {
    localStorage.setItem("hnlocale", locale);
  }, [locale]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setBackgroundLoaded(true);
    img.src = BackgroundImage;
  }, []);

  return (
    <LanguageContext.Provider value={locale}>
      <Box
        width="100%"
        height="100vh"
        position="absolute"
        inset="0"
        bgImage={backgroundLoaded ? BackgroundImage : undefined}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        bg={backgroundLoaded ? undefined : "#cfdbe1"}
        overflow="scroll"
        pt={[4, 8]}
        px={[4, 8, 16]}
        transition="background-image 0.3s ease-in-out"
      >
        <Stack width="100%" height="100%" gap={0}>
          <Header
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            setLocale={setLocale}
          />

          <Stack
            spacing={8}
            pt={isMobile ? 4 : 8}
            pb={8}
            justify="space-between"
            direction={isMobile ? "column" : "row"}
            align={isMobile ? "center" : "flex-start"}
            height={isMobile ? "100%" : "auto"}
            overflow="scroll"
          >
            <Box>
              {isMobile && menuOpen ? (
                <StyledBlock>
                  <MenuContent setMenuOpen={setMenuOpen} />
                </StyledBlock>
              ) : (
                <Content menuOpen={menuOpen} />
              )}
            </Box>
            {isMobile ? (
              <Box pb={16}>
                <Donner />
              </Box>
            ) : (
              <Box position="sticky" top={0} pr={4}>
                <MenuContent setMenuOpen={setMenuOpen} />
              </Box>
            )}
          </Stack>
        </Stack>
      </Box>
    </LanguageContext.Provider>
  );
};

export default App;
