import { Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export const Projet = () => (
  <>
    <Text>
      C&apos;est un projet dont il a fait part à Romain au cours de leur
      collaboration. Après quelques discussions avec des amis et sa famille,
      Romain a décidé de créer l&apos;association Horizons Népal en Janvier 2023
      afin de lever des fonds pour permettre au projet de Sanjay de voir le
      jour. L&apos;année 2023 a été consacrée à la création de la structure
      associative en France (statuts, bureau, compte en banque, compte hello
      asso, site web ,etc.). L&apos;idée est de financer cette école de manière
      privée (à travers des dons), puis semi-privée (en réimpliquant les
      pouvoirs publics) dans un second temps. Ce financement permettrait de
      maintenir un bon niveau de salaire pour le personnel enseignant, et donc
      une qualité de l&apos;enseignement, tout en fournissant un service gratuit
      et en priorité aux enfants des familles les plus défavorisées du village.
    </Text>
    <Text>
      Au Népal, le projet a depuis été discuté au niveau communal. Le maire
      s&apos;est engagé à aider le projet, si l&apos;association peut démontrer
      la durabilité de son action pour les enfants lors de la première phase du
      projet, sur 3 ans. Cette phase doit financer le premier « étage » de la
      pyramide éducative de l&apos;école du village. Ce premier étage, dans le
      système éducatif népalais, est constitué de trois niveaux, pour les
      enfants de 3 à 6 ans. Dans le village, elle est pour le moment gérée par
      le New Sauraha Day Care Center, de manière ad hoc, en fonction des
      financements que la charité de Sanjay trouve, et en fonction des dons
      ponctuels qui sont faits par certains parents.
    </Text>
    <Heading as="p" size="md">
      La première tâche d&apos;Horizons Népal est double:
    </Heading>
    <UnorderedList>
      <ListItem>
        Financer la rénovation des salles du New Sauraha Day Care Center, et la
        construction d&apos;une nouvelle salle de classe.
      </ListItem>
      <ListItem>
        Payer le salaire de 7 membres du personnel (3 professeur des écoles, 3
        assistants d&apos;éducation, un personnel de surface/cantine) qui
        permettra de faire fonctionner les trois niveaux (1 classe
        d&apos;environ 30 à 35 élèves par niveau).
      </ListItem>
    </UnorderedList>
  </>
);
