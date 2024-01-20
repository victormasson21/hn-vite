import { Image, Text, Heading } from "@chakra-ui/react";
import image from "../assets/horizon-nepal-education.jpeg";

export const Education = () => (
  <>
    <Heading as="h2" size="md">
      La situation de l&apos;éducation publique au Népal, bien qu&apos;en
      amélioration, reste compliquée.
    </Heading>
    <Text>
      Principalement parce que les fonds publics manquent pour former et payer
      correctement les professeurs. Cela fait que les professeurs ont souvent
      d&apos;autres activités annexes : ils sont paysans, surveillants de
      parkings, vendeurs etc. Ils quittent souvent et abruptement leur poste
      pour d&apos;autres opportunités plus lucratives. Notamment pour rejoindre
      les écoles privées qui pullulent dans les villes du pays. Celles-ci sont
      financées par les parents d&apos;élèves et imposent des frais importants
      que les familles défavorisées ne peuvent payer. L&apos;éducation y est
      généralement considérée de meilleure qualité, bien que ceci soit un débat
      au sein de la communauté enseignante népalaise. Dans tous les cas, elle y
      est continue, ce qui constitue un avantage considérable dans le contexte
      du pays. Mais seuls les enfants de familles aisées et classes moyennes
      urbaines peuvent y accéder. Ce double système, qui s&apos;auto-entretien,
      augmente les inégalités sociales préexistantes.
    </Text>
    <Heading as="p" size="md">
      Les enfants subissent des rythmes scolaires décousus au sein de classes
      pouvant compter jusqu&apos;à cinquante élèves, sans aucun support
      extra-scolaire.
    </Heading>
    <Text>
      Dans ce contexte, Sanjaya et sa femme Runa ont créé une organisation
      caritative, Tharu Community Women&apos;s Hand, qui s&apos;efforce, depuis
      2014, de financer la scolarisation des enfants issus des famille
      défavorisées de son village à travers un parrainage individuel. Adossée à
      l&apos;activité touristique d&apos;une maison d&apos;hôte (hébergements,
      locations de vélo, restauration, organisation de tours etc.), cette
      charité parraine la scolarité de certains enfants, et soutien de manière
      ponctuelle l&apos;école maternelle du village (appelée le New Sauraha Day
      Care Center). Face aux manques de moyens de sa charité pour à la fois
      parrainer des enfants dans des écoles privées et maintenir l&apos;activité
      de l&apos;école maternelle, il cherche, depuis 5 ans, à monter un projet
      de financement plus structuré pour rouvrir l&apos;école publique du
      village. Celle-ci a été fermée après plusieurs épisodes de mauvaise
      gestion.
    </Text>
    <Image
      src={image}
      pb={4}
      alt="Une photo d'enfants jouant au New Sauraha Day Care Center"
    />
  </>
);
