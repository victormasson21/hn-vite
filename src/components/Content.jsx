import { Box, Heading, useTheme } from "@chakra-ui/react";
import { contentMap } from "../contentMap";

const ContentBlock = ({ title, displayTitle, children }) => {
  const {
    colors: { text },
  } = useTheme();
  console.log({ text });
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
      {title && displayTitle ? (
        <Heading as="h2" size="lg" mb={4}>
          {title}
        </Heading>
      ) : null}
      <Box>{children}</Box>
    </Box>
  );
};

export const Content = ({ displayed }) => {
  const { title, displayTitle, component } = contentMap[displayed];
  return (
    <ContentBlock title={title} displayTitle={displayTitle}>
      {component}
    </ContentBlock>
  );
};
