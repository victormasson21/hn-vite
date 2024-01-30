import { Box, Heading, Stack } from "@chakra-ui/react";
import { StyledBlock } from "./StyledBlock";
import { contentMap } from "../contentMap";

const ContentBlock = ({ id, title, displayTitle, children }) => {
  return (
    <StyledBlock id={id}>
      {title && displayTitle ? (
        <Heading as="h2" size="lg" mb={4}>
          {title}
        </Heading>
      ) : null}
      <Box>{children}</Box>
    </StyledBlock>
  );
};

export const Content = () => {
  const keys = Object.keys(contentMap);
  console.log({ keys });
  return (
    <Stack spacing={32}>
      {keys.map((key) => {
        const { title, displayTitle, component } = contentMap[key];
        return (
          <ContentBlock
            key={key}
            id={key}
            title={title}
            displayTitle={displayTitle}
          >
            {component}
          </ContentBlock>
        );
      })}
    </Stack>
  );
};
