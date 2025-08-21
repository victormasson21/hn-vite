import {
  Heading,
  Image,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import image from "../assets/horizon-nepal-projet.webp";
import diagram from "../assets/diagram.webp";
import { useContext } from "react";
import { LanguageContext } from "../App";

export const Projet = () => {
  const locale = useContext(LanguageContext);

  return (
    <>
      <Text>
        {
          {
            FR: "C'est un projet dont il avait fait part à Romain au cours de leur collaboration. Après quelques échanges avec des amis et sa famille, Romain  décidait de créer l'association Horizons Népal en janvier 2023 afin de lever des fonds pour permettre au projet de Sanjay de voir le jour. L'année 2023 a été consacrée à la création de la structure associative en France (statuts, bureau, compte en banque, compte hello asso, site web, etc.). L'idée était de financer cette école de manière privée (à travers des dons), puis semi-privée (en ré-impliquant les pouvoirs publics Népalais) dans un second temps. Ce financement devait permettre de maintenir un bon niveau de salaire pour le personnel enseignant et donc une qualité de l'enseignement, tout en fournissant un service gratuit, en priorité aux enfants des familles les plus défavorisées du village.",
            EN: "This is a project that he shared with Romain during their collaboration. After some discussions with friends and family, Romain decided to create the Horizons Nepal association in January 2023 in order to raise funds to allow Sanjay's project to come to fruition. The year 2023 was dedicated to the creation of the associative structure in France (statutes, office, bank account, hello association account, website, etc.). The idea was to finance this school privately (through donations), then semi-privately (by re-involving the Nepalese public authorities) at a later stage. This funding was intended to maintain a good salary level for teaching staff and thus a quality education, while providing a free service, prioritizing children from the most disadvantaged families in the village."
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
            FR: "Au Népal, le projet a depuis été discuté au niveau communal. Le maire s'est engagé à aider le projet si l'association peut démontrer la durabilité de son action pour les enfants lors de la première phase du projet, sur 3 ans. Cette phase devait financer le premier « étage » de la pyramide éducative de l'école du village. Dans le système éducatif népalais, ce premier étage est constitué de trois niveaux, pour les enfants de 3 à 6 ans (équivalent de notre école maternelle). Jusqu’à présent, l’école du village était gérée « aux mieux » par le New Sauraha Day Care Center en fonction des financements que la charité de Sanjay trouvait, ainsi que des dons ponctuels qui étaient faits par certains parents suffisamment « aisés », mais cela ne suffisait pas.",
            EN: "In Nepal, the project has since been discussed at the municipal level. The mayor is committed to helping the project if the association can demonstrate the sustainability of its action for children during the first phase of the project, over 3 years. This phase was to finance the first 'floor' of the educational pyramid of the village school. In the Nepalese education system, this first floor is made up of three levels, for children aged 3 to 6 (equivalent to our kindergarten). Until now, the village school had been managed 'to the best of its ability' by the New Sauraha Day Care Center, depending on the funding that Sanjay's charity could find, as well as on one-off donations made by some parents who were sufficiently 'well-off', but this was not enough."
          }[locale]
        }
      </Text>
      <Heading as="p" size="md">
        {
          {
            FR: "Dans ce contexte, l’objectif d'Horizons Népal était double :",
            EN: "In this context, the objective of Horizons Nepal was twofold:",
          }[locale]
        }
      </Heading>
      <UnorderedList>
        <ListItem textAlign="justify">
          <Text>
            {
              {
                FR: "Financer la rénovation des salles du New Sauraha Day Care Center et la construction d'une nouvelle salle de classe.",
                EN: "Fund the renovation of rooms at the New Sauraha Day Care Center and the construction of a new classroom.",
              }[locale]
            }
          </Text>
        </ListItem>
        <ListItem textAlign="justify">
          <Text>
            {
              {
                FR: "Payer pendant 3 ans le salaire de 7 membres du personnel (3 professeurs des écoles, 3 assistants d'éducation, un personnel de surface/cantine) qui permettra de faire fonctionner les trois niveaux (1 classe d'environ 30 à 35 élèves par niveau).",
                EN: "Pay the salaries of 7 staff members (3 school teachers, 3 educational assistants, 1 floor/canteen staff) for 3 years, which will allow the three levels to operate (1 class of approximately 30 to 35 students per level)."
              }[locale]
            }
          </Text>
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
      <Text>
        {
          {
            FR: "Au Népal, le projet a depuis été discuté au niveau communal. Le maire s'est engagé à aider le projet si l'association peut démontrer la durabilité de son action pour les enfants lors de la première phase du projet, sur 3 ans. Cette phase devait financer le premier « étage » de la pyramide éducative de l'école du village. Dans le système éducatif népalais, ce premier étage est constitué de trois niveaux, pour les enfants de 3 à 6 ans (équivalent de notre école maternelle). Jusqu’à présent, l’école du village était gérée « aux mieux » par le New Sauraha Day Care Center en fonction des financements que la charité de Sanjay trouvait, ainsi que des dons ponctuels qui étaient faits par certains parents suffisamment « aisés », mais cela ne suffisait pas.",
            EN: "In Nepal, the project has since been discussed at the municipal level. The mayor is committed to helping the project if the association can demonstrate the sustainability of its action for children during the first phase of the project, over 3 years. This phase was to finance the first 'floor' of the educational pyramid of the village school. In the Nepalese education system, this first floor is made up of three levels, for children aged 3 to 6 (equivalent to our kindergarten). Until now, the village school had been managed 'to the best of its ability' by the New Sauraha Day Care Center, depending on the funding that Sanjay's charity could find, as well as on one-off donations made by some parents who were sufficiently 'well-off', but this was not enough."
          }[locale]
        }
      </Text>
    </>
  );
};
