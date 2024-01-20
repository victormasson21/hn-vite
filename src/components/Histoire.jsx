import { Heading, Image, Text } from "@chakra-ui/react";
import image from "../assets/horizon-nepal-association.jpeg";

export const Histoire = () => (
  <>
    <Heading as="h3" size="md">
      L&apos;association Horizons Népal a été créée afin de soutenir le droit à
      l&apos;éducation d&apos;enfants de familles défavorisées du village de
      Bacchauli dans le district de Chitwan au Népal.
    </Heading>
    <Text>
      Cette association est née à la suite de la rencontre entre deux
      enseignants chercheurs, l&apos;un népalais et l&apos;autre français.
      Sanjaya Mahato, professeur à Kathmandu University et Romain Valadaud
      (chercheur à l&apos;Institut de Recherche pour le Développement à
      Montpellier). Ils ont collaboré à plusieurs reprises au sein de différents
      programmes de recherche au Népal depuis 2014. C&apos;est au cours de ces
      terrains de recherche qu&apos;une amitié s&apos;est développée, au-delà de
      la coopération scientifique.
    </Text>
    <Text>
      Sanjaya Mahato est issu d&apos;une famille défavorisée du village de
      Jankauli, dans le district de Chitwan dans les plaines du Népal. Il fait
      partie de l&apos;ethnie Tharu, premiers habitants des plaines du Népal, le
      Tarai. Historiquement discriminés au sein de la société népalaise, les
      Tharu font partie des populations les plus défavorisées du Népal.
    </Text>
    <Image
      src={image}
      mb={2}
      alt="Une photo de Romain et Sanjaya en mission de recherche au Népal"
    />
    <Text>
      À force de persévérance, Sanjaya a toutefois réussi à gravir les échelons
      du système éducatif, obtenir son doctorat entre Népal et Pologne, et
      devenir enseignant à l&apos;Université de Katmandou. Du fait de son
      parcours, il est convaincu du pouvoir de l&apos;éducation publique pour
      changer les destins des enfants.
    </Text>
  </>
);
