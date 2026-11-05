import { useState, useContext, useRef } from "react";
import { LanguageContext } from "../languageContext";
import {
  Box,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/react";

import { team } from "../content/team";

const membres = Object.keys(team);

export const Team = () => {
  const [displayedMembre, setDisplayedMembre] = useState(membres[0]);
  const locale = useContext(LanguageContext);
  const {
    colors: { text },
  } = useTheme();
  const bioText = useRef();

  return (
    <Stack>
      <Text my={0}>
        {
          {
            FR: "Cliquez sur les photos pour en savoir plus:",
            EN: "Click the pictures to learn more:",
          }[locale]
        }
      </Text>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gridGap: "10px",
        }}
      >
        {membres.map((member) => {
          return (
            <Stack key={member}>
              <Image
                src={team[member].image}
                mt={4}
                borderRadius="10px"
                sx={{
                  width: "100%",
                  height: "auto",
                  cursor: "pointer",
                  opacity: member === displayedMembre ? 1 : 0.7,
                  boxShadow:
                    member === displayedMembre
                      ? `5px 5px ${text.dark}`
                      : "none",
                }}
                onClick={() => {
                  setDisplayedMembre(member);
                  bioText.current.scrollIntoView({ behavior: "smooth" });
                }}
                alt={
                  {
                    FR: `Photo de profil de ${member}`,
                    EN: `Profile picture of ${member}`,
                  }[locale]
                }
              />
              <Heading as="h2" size="sm">
                {member}
              </Heading>
            </Stack>
          );
        })}
      </Box>
      <Divider ref={bioText} />
      <Box mt={4}>
        <Heading as="h2" size="sm" id="bio">
          {displayedMembre}
        </Heading>
        <Text fontStyle="italic">{team[displayedMembre].text[locale]}</Text>
      </Box>
    </Stack>
  );
};
