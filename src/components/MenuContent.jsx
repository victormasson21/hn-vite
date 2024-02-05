import { Heading, Link, List, ListItem, useMediaQuery } from "@chakra-ui/react";
import { contentMap } from "../contentMap";
import { useContext } from "react";
import { LanguageContext } from "../App";

export const MenuContent = ({ setMenuOpen }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const locale = useContext(LanguageContext);
  return (
    <List textAlign={isMobile ? "center" : "right"}>
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
                {contentMap[key].title[locale]}
              </Heading>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};
