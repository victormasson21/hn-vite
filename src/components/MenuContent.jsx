import { Heading, List, ListItem, useMediaQuery } from "@chakra-ui/react";
import { contentMap } from "../contentMap";

export const MenuContent = ({ displayed, setDisplayed }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <List>
      {Object.keys(contentMap).map((item) => {
        return (
          <ListItem
            key={item}
            onClick={() => {
              setDisplayed(item);
            }}
          >
            <Heading
              as="h2"
              size="md"
              mb={2}
              cursor="pointer"
              opacity={displayed === item ? 0.6 : 1}
              sx={{ "&:hover": { opacity: 0.6 } }}
              whiteSpace="nowrap"
              textAlign={isMobile ? "center" : "right"}
            >
              {contentMap[item].title}
            </Heading>
          </ListItem>
        );
      })}
    </List>
  );
};
