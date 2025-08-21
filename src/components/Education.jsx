import { useContext } from "react";
import { LanguageContext } from "../App";
import { Image, Text, Heading } from "@chakra-ui/react";
import image from "../assets/horizon-nepal-education.webp";

export const Education = () => {
  const locale = useContext(LanguageContext);

  return (
    <>
      <Heading as="h2" size="md">
        {
          {
            FR: "La situation de l'éducation publique au Népal reste compliquée, bien qu'en amélioration.",
            EN: "The situation of public education in Nepal, although improving, remains complicated.",
          }[locale]
        }
      </Heading>
      <Text>
        {
          {
            FR: "Les fonds publics manquent pour former et payer correctement les professeurs, qui ont ainsi souvent d’autres activités annexes : ils sont paysans, surveillants de parkings, vendeurs etc. Ils quittent souvent et abruptement leur poste pour d'autres opportunités plus lucratives, notamment pour rejoindre les écoles privées qui pullulent dans les villes du pays. Celles-ci sont financées par les parents d'élèves et imposent des frais importants que les familles défavorisées ne peuvent payer. L'éducation y est généralement considérée de meilleure qualité, bien que ceci soit un débat au sein de la communauté enseignante népalaise. Dans tous les cas, elle y est continue, ce qui constitue un avantage considérable dans le contexte du pays. Mais seuls les enfants de familles aisées et classes moyennes urbaines peuvent y accéder. Ce double système, qui s'auto-entretient, augmente les inégalités sociales préexistantes.",
            EN: "Mainly because there is a lack of public funds to properly train and pay teachers. This means that teachers often have other additional activities: they are farmers, parking lot supervisors, salespeople, etc. They often and abruptly leave their positions for other, more lucrative opportunities. In particular to join the private schools which abound in the country's cities. These are financed by parents and impose significant fees that disadvantaged families cannot afford. Education there is generally considered to be of better quality, although this is a debate within the Nepalese teaching community. In all cases, it is continuous, which constitutes a considerable advantage in the context of the country. But only children from wealthy families and urban middle classes can access it. This dual system, which is self-perpetuating, increases pre-existing social inequalities.",
          }[locale]
        }
      </Text>
      <Heading as="p" size="md">
        {
          {
            FR: "Les enfants subissent des rythmes scolaires décousus au sein de classes pouvant compter jusqu'à cinquante élèves, sans aucun support extra-scolaire.",
            EN: "Children experience disjointed school schedules in classes of up to fifty students, without any extra-curricular support.",
          }[locale]
        }
      </Heading>
      <Text>
        {
          {
            FR: "Dans ce contexte, Sanjaya et sa femme Runa ont créé une organisation caritative, Tharu Community Women's Hand, qui s'efforce depuis 2014 de financer la scolarisation des enfants issus des famille défavorisées de son village à travers un parrainage individuel. Adossée à l'activité touristique d'une maison d'hôtes (hébergements, locations de vélos, restauration, organisation de tours etc.), cette charité parraine la scolarité de certains enfants et soutient de manière ponctuelle l'école maternelle du village (appelée le New Sauraha Day Care Center). Face aux manques de moyens de sa charité pour à la fois parrainer des enfants dans des écoles privées et maintenir l'activité de l'école maternelle, il cherche, depuis 5 ans, à monter un projet de financement plus structuré pour rouvrir l'école publique du village. Celle-ci a été fermée après plusieurs épisodes de mauvaise gestion.",
            EN: "In this context, Sanjaya and his wife Runa created a charitable organization, Tharu Community Women's Hand, which has been striving, since 2014, to finance the education of children from disadvantaged families in his village through individual sponsorship. Backed by the tourist activity of a guest house (accommodation, bike rentals, catering, organization of tours, etc.), this charity sponsors the education of certain children, and occasionally supports the village nursery school (called the New Sauraha Day Care Center). Faced with the lack of resources of his charity to both sponsor children in private schools and maintain the activity of the nursery school, he has been seeking, for 5 years, to set up a more structured financing project to reopen the public school of the village. This was closed after several episodes of mismanagement.",
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
    </>
  );
};
