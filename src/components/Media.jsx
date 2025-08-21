import { useContext } from "react";
import { LanguageContext } from "../App";
import { Box, Image, Stack, Link, useTheme } from "@chakra-ui/react";

import MidiLibre from "../assets/medias/midi-libre.webp";
import DivergenceFM from "../assets/medias/divergence-fm.svg";

const media = {
  "Midi Libre": {
    image: MidiLibre,
    link: "https://www.midilibre.fr/2024/02/24/horizons-nepal-soutient-leducation-des-enfants-defavorises-au-nepal-11784668.php",
  },
  "Divergence FM": {
    image: DivergenceFM,
    link: "https://divergence-fm.org/podcasts/horizons-nepal/",
  },
};

const articles = Object.keys(media);

export const Media = () => {
  const {
    colors: { text },
  } = useTheme();
  const locale = useContext(LanguageContext);

  return (
    <Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gridGap: "10px",
        }}
      >
        {articles.map((article) => {
          return (
            <Link
              href={media[article].link}
              key={article}
              sx={{
                width: "100%",
                cursor: "pointer",
                p: 4,
                border: "2px solid",
                borderColor: "text.dark",
                borderRadius: "10px",
                "&:hover": {
                  boxShadow: `5px 5px ${text.dark}`,
                },
              }}
              target="_none"
            >
              <Box>
                <Image
                  src={media[article].image}
                  borderRadius="10px"
                  sx={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt={
                    {
                      FR: `Loco de ${article}`,
                      EN: `Profile picture of ${article}`,
                    }[locale]
                  }
                />
              </Box>
            </Link>
          );
        })}
      </Box>
    </Stack>
  );
};
