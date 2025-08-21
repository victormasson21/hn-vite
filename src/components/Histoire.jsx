import { Heading, Image, Text } from "@chakra-ui/react";
import image from "../assets/horizon-nepal-association.jpeg";
import { useContext } from "react";
import { LanguageContext } from "../App";

export const Histoire = () => {
  const locale = useContext(LanguageContext);
  // {"FR": "", "EN": ""}
  return (
    <>
      <Heading as="h3" size="md">
        {
          {
            FR: "L'association Horizons Népal a été créée afin de soutenir le droit à l'éducation d'enfants de familles défavorisées du village de Bacchauli, dans le district de Chitwan, au Népal.",
            EN: "Horizons Nepal was created to support the right to education of children from disadvantaged families in the village of Bacchauli, in the Chitwan district of Nepal.",
          }[locale]
        }
      </Heading>
      <Text>
        {
          {
            FR: "Cette association est née à la suite de la rencontre entre deux enseignants chercheurs, l'un népalais et l'autre français. Sanjaya Mahato, professeur à Kathmandu University et Romain Valadaud, chercheur à l'Institut de Recherche pour le Développement à Montpellier. Ils ont collaboré à plusieurs reprises au sein de différents programmes de recherche au Népal depuis 2014. C'est au cours de ces terrains de recherche qu'une amitié s'est développée, au-delà de la coopération scientifique.",
            EN: "This association was born following the meeting between two researchers, one Nepalese and the other French. Sanjaya Mahato, professor at Kathmandu University and Romain Valadaud, researcher at the Institute of Research for Development in Montpellier. They have collaborated several times in different research programs in Nepal since 2014. During these research projects, a friendship developed beyond scientific cooperation.",
          }[locale]
        }
      </Text>
      <Text>
        {
          {
            FR: "Sanjaya Mahato est issu d'une famille défavorisée du village de Jankauli, dans le district de Chitwan dans les plaines du Népal. Il fait partie de l'ethnie Tharu, premiers habitants des plaines du Népal, le Tarai. Historiquement discriminés au sein de la société népalaise, les Tharu font partie des populations les plus défavorisées du Népal.",
            EN: "Sanjaya Mahato comes from a disadvantaged family in the village of Jankauli, in the Chitwan district in the plains of Nepal. He is part of the Tharu ethnic group, the first inhabitants of these plains called the Taraï. Historically discriminated against within Nepalese society, the Tharu are among the most disadvantaged populations in Nepal.",
          }[locale]
        }
      </Text>
      <Image
        src={image}
        mb={2}
        borderRadius="10px"
        alt={
          {
            FR: "Une photo de Romain et Sanjaya en mission de recherche au Népal",
            EN: "A photo of Romain and Sanjaya on a research mission in Nepal",
          }[locale]
        }
      />
      <Text>
        {
          {
            FR: "À force de persévérance, Sanjaya a toutefois réussi à gravir les échelons du système éducatif, obtenir son doctorat entre le Népal et la Pologne, et devenir enseignant à l'Université de Katmandou. Du fait de son parcours, il est convaincu du pouvoir de l'éducation publique pour changer les destins des enfants.",
            EN: "However, through perseverance, Sanjaya managed to climb the ranks of the education system and obtain his Phd. Degree from both Nepal and Poland, and become a professor at the University of Kathmandu. Because of his background, he is convinced of the power of public education to change the destinies of children.",
          }[locale]
        }
      </Text>
    </>
  );
};
