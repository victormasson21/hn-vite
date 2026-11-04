import { useEffect, useState } from "react";

import { Box, Stack, useMediaQuery } from "@chakra-ui/react";

import { Content } from "./components/Content.jsx";
import { MenuContent } from "./components/MenuContent.jsx";
import { Footer } from "./components/Footer.jsx";
import { StyledBlock } from "./components/StyledBlock.jsx";

import BackgroundImage from "./assets/background.webp";
import { Header } from "./components/Header.jsx";
import { LanguageContext } from "./languageContext.js";

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
        sx={{ "@supports (height: 100dvh)": { height: "100dvh" } }}
        position="absolute"
        inset="0"
        display="flex"
        flexDirection="column"
        bgImage={backgroundLoaded ? BackgroundImage : undefined}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        bg={backgroundLoaded ? undefined : "#cfdbe1"}
        pt={[4, 8]}
        px={[4, 8, 16]}
        transition="background-image 0.3s ease-in-out"
      >
        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          setLocale={setLocale}
        />

        <Stack
          flex={1}
          minHeight={0}
          overflow="auto"
          spacing={8}
          pt={isMobile ? 4 : 8}
          pb={8}
          justify="space-between"
          direction={isMobile ? "column" : "row"}
          align={isMobile ? "center" : "flex-start"}
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
          {isMobile ? null : (
            <Box position="sticky" top={0} pr={4}>
              <MenuContent setMenuOpen={setMenuOpen} />
            </Box>
          )}
        </Stack>

        {isMobile ? <Footer /> : null}
      </Box>
    </LanguageContext.Provider>
  );
};

export default App;
