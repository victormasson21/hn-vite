import { Box, useTheme } from "@chakra-ui/react";

export const StyledBlock = ({ children }) => {
  const {
    colors: { text },
  } = useTheme();
  return (
    <Box
      p={8}
      backdropFilter="blur(10px)"
      borderRadius="10px"
      background="white"
      border="2px solid"
      borderColor="text.dark"
      boxShadow={`3px 3px ${text.dark}`}
      maxWidth="xl"
    >
      {children}
    </Box>
  );
};
