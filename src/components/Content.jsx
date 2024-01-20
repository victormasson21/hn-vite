import { Box, Heading, useTheme } from "@chakra-ui/react";
import { StyledBlock } from "./StyledBlock";
import { contentMap } from "../contentMap";

const ContentBlock = ({ title, displayTitle, children }) => {
  const {
    colors: { text },
  } = useTheme();
  console.log({ text });
  return (
    <StyledBlock>
      {title && displayTitle ? (
        <Heading as="h2" size="lg" mb={4}>
          {title}
        </Heading>
      ) : null}
      <Box>{children}</Box>
    </StyledBlock>
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
