import { useState, useEffect } from "react";

import { Box, Stack, useMediaQuery } from "@chakra-ui/react";

import { Content } from "./components/Content.jsx";
import { MenuContent } from "./components/MenuContent.jsx";
import { Donner } from "./components/Donner.jsx";
import { StyledBlock } from "./components/StyledBlock.jsx";

import BackgroundImage from "./assets/background.png";
import { Header } from "./components/Header.jsx";

const App = () => {
  const [displayed, setDisplayed] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setMenuOpen(false);
  }, [displayed]);

  return (
    <Box
      width="100%"
      height="100vh"
      position="absolute"
      inset="0"
      bgImage={BackgroundImage}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      overflow="scroll"
      pt={[4, 8]}
      px={[4, 8, 16]}
    >
      <Stack width="100%" height="100%" gap={0}>
        <Header
          displayed={displayed}
          setDisplayed={setDisplayed}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
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
                <MenuContent
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
              </StyledBlock>
            ) : (
              <Content displayed={displayed} menuOpen={menuOpen} />
            )}
          </Box>
          {isMobile ? (
            <Box pb={16}>
              <Donner />
            </Box>
          ) : (
            <Box position="sticky" top={0}>
              <MenuContent displayed={displayed} setDisplayed={setDisplayed} />
            </Box>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default App;
