import { Heading, List, ListItem } from "@chakra-ui/react";
import { contentMap } from "../contentMap";

export const MenuContent = ({ displayed, setDisplayed }) => {
  return (
    <List textAlign="right">
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
            >
              {contentMap[item].title}
            </Heading>
          </ListItem>
        );
      })}
    </List>
  );
};