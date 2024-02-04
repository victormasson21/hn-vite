import { Image, Heading, Text } from "@chakra-ui/react";
import image from "../assets/map.png";
import { useContext } from "react";
import { LanguageContext } from "../App";

export const Home = () => {
  const locale = useContext(LanguageContext);

  return (
    <>
      <Heading as="h3" size="md">
        {
          {
            FR: "Horizons Népal soutient l’éducation des enfants issus de familles défavorisées au Népal.",
            EN: "Horizons Nepal supports the education of children from disadvantaged families in Nepal.",
          }[locale]
        }
      </Heading>
      <Text>
        {
          {
            FR: "À travers un partenariat avec une organisation caritative népalaise, nous finançons la rénovation et le fonctionnement d'une école dans le village de Jankauli dans le district de Chitwan.",
            EN: "Through a partnership with a Nepalese charity, we are funding the renovation and operation of a school in the village of Jankauli in the Chitwan district.",
          }[locale]
        }
      </Text>
      <Image
        src={image}
        pb={4}
        alt={
          {
            FR: "Une carte du Népal montrant la localisation du New Sauraha Day Care Center",
            EN: "A map of Nepal showing the location of the New Sauraha Day Care Center",
          }[locale]
        }
      />
    </>
  );
};
