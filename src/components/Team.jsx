import { useState, useContext } from "react";
import { LanguageContext } from "../App";
import {
  Box,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/react";

import Romain from "../assets/profiles/Romain.jpg";
import Antoine from "../assets/profiles/Antoine.jpg";
import Lucie from "../assets/profiles/Lucie.jpg";
import Quentin from "../assets/profiles/Quentin.jpg";
import MicheleBernard from "../assets/profiles/MicheleBernard.jpg";

const team = {
  Antoine: {
    text: {
      FR: "Technicien dans la construction bois, j’ai beaucoup voyagé, en particulier au Moyen et Extrême-Orient et en Asie centrale. Lors de mes voyages, j’ai été touché par les inégalités inhérentes à ces régions, notamment celles touchant à l’accès à l’éducation. J’ai rencontré Romain en 2018 alors qu’il travaillait sur sa thèse de doctorat au Népal et notre amitié est née d’intérêts partagés. Aujourd’hui, je soutiens activement Romain dans son action en faveur d’une plus grande égalité des chances.",
      EN: "A technician in wood construction, I have traveled a lot, especially in the Middle and Far East and Central Asia. During my travels, I was struck by the inequalities inherent in these regions, particularly those related to access to education. I met Romain in 2018 while he was working on his doctoral thesis in Nepal and our friendship was born of shared interests. Today, I actively support Romain in his action in favor of greater equality of opportunity.",
    },
    image: Antoine,
  },
  Lucie: {
    text: {
      FR: "Adjointe administrative, je suis diplômée d’un master en droits de l’Homme et démocratisation. En 2015, j’ai effectué un bénévolat en Inde auprès d’une association qui aidait à l’éducation, la scolarisation et la santé d’enfants en situation de grande précarité. Je suis convaincue que chaque enfant a droit à une éducation pérenne et de qualité, garante de son émancipation et de son évolution dans le monde d’aujourd’hui et de demain. En participant à la création d’Horizons Népal aux côtés de Romain, ami de longue date, j’encourage l’amélioration de l’éducation publique offerte aux enfants du village de Bacchauli au Népal.",
      EN: "Administrative assistant, I have a master's degree in human rights and democratisation. In 2015, I volunteered in India with an association that helped educate, school and provide health care to children in extreme poverty. I am convinced that every child has the right to a sustainable, high quality education, guaranteeing his or her emancipation and evolution in today's and tomorrow's world. By participating in the creation of Horizons Nepal alongside Romain, a long-time friend, I encourage the improvement of public education offered to the children of the village of Bacchauli in Nepal.",
    },
    image: Lucie,
  },

  "Michèle et Bernard": {
    text: {
      FR: "Nous avons consacré une bonne partie de notre vie professionnelle à l’action sociale et à la formation. Nous sommes convaincus que le progrès social et l’émancipation individuelle passent par une éducation de qualité gratuite pour toutes et tous, dès le plus jeune âge. C’est pourquoi nous soutenons le  projet Horizons Népal.",
      EN: "We have devoted a good part of our professional life to social action and training. We are convinced that social progress and individual emancipation pass through free quality education for all, from the youngest age. This is why we support the Horizons Nepal project.",
    },
    image: MicheleBernard,
  },
  Quentin: {
    text: {
      FR: "Pharmacien hospitalier de formation, j’exerce en établissement de santé depuis 8 ans. J’ai rencontré Romain au lycée où nous avons tissés de forts liens d’amitiés et partagés de nombreuses passions communes, dont le trek en montagne. Il m’a partagé ses multiples travaux de terrains au Népal et il n’a eu de cesse de me sensibiliser aux inégalités du système éducatif pour les populations défavorisées et isolées. Quand il m’a proposé de rejoindre l’aventure Horizons Népal au côté de ce groupe d’amis, c’est tout naturellement que j’ai accepté afin d’apporter ma pierre à l’édifice de cet ambitieux projet de développement éducatif durable.",
      EN: "A hospital pharmacist by training, I have been working in a health facility for 8 years. I met Romain in high school where we forged strong bonds of friendship and shared many common passions, including mountain trekking. He shared with me his multiple fieldwork in Nepal and he never ceased to raise my awareness of the inequalities in the educational system for disadvantaged and isolated populations. When he offered me to join the Horizons Nepal adventure alongside this group of friends, it was only natural that I accepted in order to contribute to the ambitious project of sustainable educational development.",
    },
    image: Quentin,
  },
  Romain: {
    text: {
      FR: "Chercheur en sciences sociales, avec une passion particulière pour les questions liées à l’eau. Je suis très attaché aux dimensions émancipatrices de mon travail, notamment lorsqu’il s’agit de transmettre du savoir. J’ai fait ma thèse de doctorat au Népal. J’ai laissé dans ce pays un bout de mon cœur, et y fais des ami.es. C’est un pays ou la vie est, malheureusement, encore d’une fragile beauté. J’ai décidé de contribuer, un peu, par la solidarité, à ouvrir le spectre des possibles des enfants de cet endroit.",
      EN: "Researcher in social sciences, with a particular passion for water-related issues. I am very attached to the emancipatory dimensions of my work, especially when it comes to transmitting knowledge. I did my doctoral thesis in Nepal. I left a piece of my heart in this country, and made friends there. It is a country where life is, unfortunately, still of a fragile beauty. I decided to contribute, a little, through solidarity, to open up the spectrum of possibilities for the children of this place.",
    },
    image: Romain,
  },
};

const membres = Object.keys(team);

export const Team = () => {
  const [displayedMembre, setDisplayedMembre] = useState(membres[0]);
  const locale = useContext(LanguageContext);
  const {
    colors: { text },
  } = useTheme();

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
                onClick={() => setDisplayedMembre(member)}
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
      <Divider />
      <Box mt={4}>
        <Heading as="h2" size="sm" id="bio">
          {displayedMembre}
        </Heading>
        <Text fontStyle="italic">{team[displayedMembre].text[locale]}</Text>
      </Box>
    </Stack>
  );
};
