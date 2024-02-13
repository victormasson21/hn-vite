import {
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import image from "../assets/horizon-nepal-futur.jpeg";
import { useContext } from "react";
import { LanguageContext } from "../App";

export const Futur = () => {
  const locale = useContext(LanguageContext);

  return (
    <>
      <Heading as="h3" size="md">
        {
          {
            FR: "Si la collaboration entre les partenaires népalais et l'association Horizons Népal fonctionne et permet la pérennisation de l’école maternelle sur plus d’une année, une réévaluation du projet est envisagée.",
            EN: "If the collaboration between the Nepalese partners and the Horizons Nepal association works and allows the sustainability of the nursery school for more than one year, a re-evaluation of the project is envisaged.",
          }[locale]
        }
      </Heading>
      <UnorderedList>
        <ListItem>
          <Text>
            {
              {
                FR: "Ce dernier impliquera alors la mairie du village en tant que troisième partie prenante et potentielle force de financement. Nous verrons, dans cette seconde étape, si Horizons Népal et ses membres et donateurs ont la capacité de changer l'échelle afin de rouvrir l'école de Bacchauli. Cela impliquera d'augmenter le financement dans la durée, car il s'agit de soutenir six autres niveaux de la pyramide éducative du système public népalais, jusqu'à l'équivalent de la seconde en France.",
                EN: "The latter will then involve the village town hall, as a third stakeholder and potential financing force. We will see, in this second stage, if Horizons Nepal and its members and donors have the capacity to change the scale in order to reopen the Bacchauli school. This implies increasing funding, over time, because it involves supporting 6 other levels of the educational pyramid of the Nepalese public system, up to the equivalent of the second in France.",
              }[locale]
            }
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            {
              {
                FR: "Nous chercherons à créer des liens culturels entre les membres de l’association et les villageoises et villageois de Bacchauli, ainsi qu'entre l'école du village et des écoles primaires en France. Ces échanges prendront la forme de voyages culturels, d'échanges épistolaires (numériques ou postaux).",
                EN: "We will seek to create cultural links between the members of the association and the villagers of Bacchauli, as well as between the village school and primary schools in France. These exchanges will take the form of cultural trips and epistolary exchanges (digital or postal).",
              }[locale]
            }
          </Text>
        </ListItem>
      </UnorderedList>
      <Image
        src={image}
        mt={4}
        borderRadius="10px"
        alt={
          {
            FR: "Une photo d'enfants célébrant la nouvelle année au New Sauraha Day Care Center",
            EN: "A picture of children celebrating the New Year at the New Sauraha Day Care Center",
          }[locale]
        }
      />
    </>
  );
};
