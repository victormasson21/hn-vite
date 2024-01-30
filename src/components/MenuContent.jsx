import { Heading, Link, List, ListItem, useMediaQuery } from "@chakra-ui/react";
import { contentMap } from "../contentMap";

export const MenuContent = ({ setMenuOpen }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <List>
      {Object.keys(contentMap).map((key) => {
        return (
          <ListItem key={key}>
            <Link
              href={`#${key}`}
              sx={{ textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              <Heading
                as="h2"
                size="md"
                mb={2}
                cursor="pointer"
                sx={{ "&:hover": { opacity: 0.6 } }}
                whiteSpace="nowrap"
                textAlign={isMobile ? "center" : "right"}
              >
                {contentMap[key].title}
              </Heading>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};
