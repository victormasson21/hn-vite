import { Image, Heading, Text } from "@chakra-ui/react";
import image from "../assets/map.png";

export const Home = () => (
  <>
    <Heading as="h3" size="md">
      Horizons Népal soutient l’éducation des enfants issus de familles
      défavorisées au Népal.
    </Heading>
    <Text>
      À travers un partenariat avec une organisation caritative népalaise, nous
      finançons la rénovation et le fonctionnement d&apos;une école dans le
      village de Jankauli dans le district de Chitwan.
    </Text>
    <Image
      src={image}
      pb={4}
      alt="Une carte du Népal montrant la localisation du New Sauraha Day Care Center"
    />
  </>
);
