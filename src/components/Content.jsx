import { Box, Heading } from "@chakra-ui/react";
import { contentMap } from "../contentMap";

const ContentBlock = ({ title, children }) => {
  return (
    <Box
      p={8}
      backdropFilter="blur(10px)"
      borderRadius="10px"
      background="white"
      border="2px solid"
      borderColor="text.dark"
      boxShadow="3px 3px"
      boxShadowColor="text.dark"
      maxWidth="xl"
    >
      {title ? (
        <Heading as="h2" size="lg" mb={4}>
          {title}
        </Heading>
      ) : null}
      <Box>{children}</Box>
    </Box>
  );
};

export const Content = ({ displayed }) => {
  return (
    <ContentBlock title={contentMap[displayed].title}>
      {contentMap[displayed].component}
    </ContentBlock>
  );
};
