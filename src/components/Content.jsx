import { Box, Heading, Stack } from "@chakra-ui/react";
import { StyledBlock } from "./StyledBlock";
import { contentMap } from "../contentMap";
import { useContext } from "react";
import { LanguageContext } from "../App";

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
  const locale = useContext(LanguageContext);
  const keys = Object.keys(contentMap);
  return (
    <Stack spacing={32}>
      {keys.map((key) => {
        const { title, displayTitle, component } = contentMap[key];
        return (
          <ContentBlock
            key={key}
            id={key}
            title={title[locale]}
            displayTitle={displayTitle}
          >
            {component}
          </ContentBlock>
        );
      })}
    </Stack>
  );
};
