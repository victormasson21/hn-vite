import {
  Heading,
  Image,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import image from "../assets/horizon-nepal-projet.jpeg";
import diagram from "../assets/diagram.png";
import { useContext } from "react";
import { LanguageContext } from "../App";

export const Projet = () => {
  const locale = useContext(LanguageContext);

  return (
    <>
      <Text>
        {
          {
            FR: "C'est un projet dont il a fait part à Romain au cours de leur collaboration. Après quelques discussions avec des amis et sa famille, Romain a décidé de créer l'association Horizons Népal en Janvier 2023 afin de lever des fonds pour permettre au projet de Sanjay de voir le jour. L'année 2023 a été consacrée à la création de la structure associative en France (statuts, bureau, compte en banque, compte hello asso, site web ,etc.). L'idée est de financer cette école de manière privée (à travers des dons), puis semi-privée (en réimpliquant les pouvoirs publics) dans un second temps. Ce financement permettrait de maintenir un bon niveau de salaire pour le personnel enseignant, et donc une qualité de l'enseignement, tout en fournissant un service gratuit et en priorité aux enfants des familles les plus défavorisées du village.",
            EN: "He shared this project with Romain during their scientific collaboration. After some discussions with friends and family, Romain decided to create Horizons Nepal in January 2023 in order to raise funds to allow Sanjay's project to see the light of day. The year 2023 was dedicated to the creation of the associative structure in France (statutes, office, bank account, hello association account, website, etc.). The idea is to finance this school privately (through donations), then semi-privately (by re-involving the public authorities) in a second step. This funding would make it possible to maintain a good level of salary for teaching staff, and therefore a quality of education, while providing a free service with priority to children from the most disadvantaged families in the village.",
          }[locale]
        }
      </Text>
      <Image
        src={image}
        mb={4}
        borderRadius="10px"
        alt={
          {
            FR: "Une photo d'enfants jouant au New Sauraha Day Care Center",
            EN: "A photo of children playing at the New Sauraha Day Care Center",
          }[locale]
        }
      />
      <Text>
        {
          {
            FR: "Au Népal, le projet a depuis été discuté au niveau communal. Le maire s'est engagé à aider le projet, si l'association peut démontrer la durabilité de son action pour les enfants lors de la première phase du projet, sur 3 ans. Cette phase doit financer le premier « étage » de la pyramide éducative de l'école du village. Ce premier étage, dans le système éducatif népalais, est constitué de trois niveaux, pour les enfants de 3 à 6 ans. Dans le village, elle est pour le moment gérée par le New Sauraha Day Care Center, de manière ad hoc, en fonction des financements que la charité de Sanjay trouve, et en fonction des dons ponctuels qui sont faits par certains parents.",
            EN: "In Nepal, the project has since been discussed at the municipal level. The mayor is committed to helping the project, if the association can demonstrate the sustainability of its action for children during the first phase of the project, over 3 years. This phase must finance the first “floor” of the educational pyramid of the village school. This first floor, in the Nepalese education system, is made up of three levels, for children aged 3 to 6 years. In the village, it is currently managed by the New Sauraha Day Care Center, on an ad hoc basis, depending on the funding that Sanjay's charity finds, and depending on one-off donations that are made by certain parents.",
          }[locale]
        }
      </Text>
      <Heading as="p" size="md">
        {
          {
            FR: "La première tâche d'Horizons Népal est double:",
            EN: "The first task of Horizons Nepal is twofold:",
          }[locale]
        }
      </Heading>
      <UnorderedList>
        <ListItem>
          {
            {
              FR: "Financer la rénovation des salles du New Sauraha Day Care Center, et la construction d'une nouvelle salle de classe.",
              EN: "Fund the renovation of rooms at the New Sauraha Day Care Center, and the construction of a new classroom.",
            }[locale]
          }
        </ListItem>
        <ListItem>
          {
            {
              FR: "Payer le salaire de 7 membres du personnel (3 professeur des écoles, 3 assistants d'éducation, un personnel de surface/cantine) qui permettra de faire fonctionner les trois niveaux (1 classe d'environ 30 à 35 élèves par niveau).",
              EN: "Pay the salaries of 7 staff members (3 school teachers, 3 educational assistants, 1 floor/canteen staff) who will make it possible to operate the three levels (1 class of approximately 30 to 35 students per level)",
            }[locale]
          }
        </ListItem>
      </UnorderedList>
      <Image
        src={diagram}
        mt={4}
        borderRadius="10px"
        alt={
          {
            FR: "Une photo d'enfants jouant au New Sauraha Day Care Center",
            EN: "A photo of children playing at the New Sauraha Day Care Center",
          }[locale]
        }
      />
    </>
  );
};
