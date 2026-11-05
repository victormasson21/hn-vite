import educationImage from "../assets/horizon-nepal-education.webp";
import projetImage from "../assets/horizon-nepal-projet.webp";
import diagram from "../assets/diagram.webp";
import futurImage from "../assets/horizon-nepal-futur.webp";
import { euros, figures, number } from "./figures";

export const ecole = [
  { type: "heading", FR: "L’éducation au Népal", EN: "Education in Nepal" },
  {
    type: "text",
    FR: "La situation de l'éducation publique au Népal reste compliquée, bien qu'en amélioration. Les fonds publics manquent pour former et payer correctement les professeurs, qui ont ainsi souvent d’autres activités annexes : ils sont paysans, surveillants de parkings, vendeurs etc. Ils quittent souvent et abruptement leur poste pour d'autres opportunités plus lucratives, notamment pour rejoindre les écoles privées qui pullulent dans les villes du pays. Celles-ci sont financées par les parents d'élèves et imposent des frais importants que les familles défavorisées ne peuvent payer. L'éducation y est généralement considérée de meilleure qualité, bien que ceci soit un débat au sein de la communauté enseignante népalaise. Dans tous les cas, elle y est continue, ce qui constitue un avantage considérable dans le contexte du pays. Mais seuls les enfants de familles aisées et classes moyennes urbaines peuvent y accéder. Ce double système, qui s'auto-entretient, augmente les inégalités sociales préexistantes. Les enfants subissent des rythmes scolaires décousus au sein de classes pouvant compter jusqu'à cinquante élèves, sans aucun support extra-scolaire.",
    EN: "The situation of public education in Nepal, although improving, remains complicated. Public funds are lacking to properly train and pay teachers, who often have other activities on the side: they are farmers, car park attendants, shopkeepers, etc. They often and abruptly leave their positions for more lucrative opportunities, in particular to join the private schools which abound in the country's cities. These are financed by parents and charge significant fees that disadvantaged families cannot afford. Education there is generally considered to be of better quality, although this is a debate within the Nepalese teaching community. In any case it is continuous, which is a considerable advantage in the context of the country. But only children from wealthy families and the urban middle classes can access it. This self-perpetuating dual system increases pre-existing social inequalities. Children experience disjointed school schedules in classes of up to fifty pupils, without any extra-curricular support.",
  },
  {
    type: "text",
    FR: "Dans ce contexte, Sanjaya et sa femme Runa ont créé une organisation caritative, Tharu Community Women's Hand, qui s'efforce depuis 2014 de financer la scolarisation des enfants issus des familles défavorisées de son village à travers un parrainage individuel. Adossée à l'activité touristique d'une maison d'hôtes (hébergements, locations de vélos, restauration, organisation de tours etc.), cette charité parraine la scolarité de certains enfants et soutient de manière ponctuelle l'école maternelle du village (appelée le New Sauraha Day Care Center). Face aux manques de moyens de sa charité pour à la fois parrainer des enfants dans des écoles privées et maintenir l'activité de l'école maternelle, il cherchait depuis plusieurs années à monter un projet de financement plus structuré pour rouvrir l'école publique du village, fermée après plusieurs épisodes de mauvaise gestion.",
    EN: "In this context, Sanjaya and his wife Runa created a charity, Tharu Community Women's Hand, which has been striving since 2014 to finance the schooling of children from disadvantaged families in his village through individual sponsorship. Backed by the tourist activity of a guest house (accommodation, bike rental, catering, tours, etc.), this charity sponsors the schooling of some children and occasionally supports the village nursery school (the New Sauraha Day Care Center). Faced with the lack of resources to both sponsor children in private schools and keep the nursery school going, he had been seeking for several years to set up a more structured funding project to reopen the village's public school, closed after several episodes of mismanagement.",
  },
  {
    type: "image",
    src: educationImage,
    alt: {
      FR: "Une photo d'enfants jouant au New Sauraha Day Care Center",
      EN: "A photo of children playing at the New Sauraha Day Care Center",
    },
  },
  { type: "heading", FR: "Le projet", EN: "The project" },
  {
    type: "text",
    FR: "L'année 2023 a été consacrée à la création de la structure associative en France (statuts, bureau, compte en banque, compte HelloAsso, site web, etc.). L'idée est de financer cette école de manière privée (à travers des dons), puis semi-privée (en ré-impliquant les pouvoirs publics népalais) dans un second temps. Ce financement doit permettre de maintenir un bon niveau de salaire pour le personnel enseignant et donc une qualité de l'enseignement, tout en fournissant un service gratuit, en priorité aux enfants des familles les plus défavorisées du village.",
    EN: "The year 2023 was dedicated to setting up the association in France (statutes, board, bank account, HelloAsso account, website, etc.). The idea is to fund this school privately (through donations), then semi-privately (by re-involving the Nepalese public authorities) at a later stage. This funding is meant to maintain a good salary level for the teaching staff and thus a quality education, while providing a free service, prioritising children from the most disadvantaged families in the village.",
  },
  {
    type: "image",
    src: projetImage,
    alt: {
      FR: "Les enfants devant le panneau du New Sauraha Day Care Center",
      EN: "Children in front of the New Sauraha Day Care Center sign",
    },
  },
  {
    type: "text",
    FR: "Au Népal, le projet a été discuté au niveau communal. Le maire s'est engagé à aider le projet si l'association peut démontrer la durabilité de son action pour les enfants lors de la première phase du projet, sur 3 ans. Cette phase finance le premier « étage » de la pyramide éducative de l'école du village. Dans le système éducatif népalais, ce premier étage est constitué de trois niveaux, pour les enfants de 3 à 6 ans (équivalent de notre école maternelle). Jusqu’alors, l’école du village était gérée « au mieux » par le New Sauraha Day Care Center en fonction des financements que la charité de Sanjaya trouvait, ainsi que des dons ponctuels de certains parents suffisamment « aisés », mais cela ne suffisait pas.",
    EN: "In Nepal, the project was discussed at the municipal level. The mayor committed to helping the project if the association can demonstrate the sustainability of its action for the children during the first phase, over 3 years. This phase funds the first 'floor' of the village school's educational pyramid. In the Nepalese education system, this first floor is made up of three levels, for children aged 3 to 6 (the equivalent of our nursery school). Until then, the village school had been run 'as best it could' by the New Sauraha Day Care Center, depending on the funding Sanjaya's charity could find and on one-off donations from some sufficiently 'well-off' parents, but this was not enough.",
  },
  {
    type: "text",
    FR: "Dans ce contexte, l’objectif d'Horizons Népal est double :",
    EN: "In this context, the objective of Horizons Nepal is twofold:",
  },
  {
    type: "list",
    items: [
      {
        FR: "Financer la rénovation des salles du New Sauraha Day Care Center et la construction d'une nouvelle salle de classe.",
        EN: "Fund the renovation of the New Sauraha Day Care Center's rooms and the construction of a new classroom.",
      },
      {
        FR: `Payer pendant 3 ans le salaire des ${figures.staff} enseignant·es et personnels qui font fonctionner les ${figures.classrooms} niveaux de l'école.`,
        EN: `Pay for 3 years the salaries of the ${figures.staff} teachers and staff who run the school's ${figures.classrooms} levels.`,
      },
    ],
  },
  {
    type: "image",
    src: diagram,
    alt: {
      FR: "Schéma : Horizons Népal finance et Tharu Community Women's Hand rénove l'école maternelle du village",
      EN: "Diagram: Horizons Nepal funds and Tharu Community Women's Hand renovates the village nursery school",
    },
  },
  { type: "heading", FR: "Où en sommes-nous ?", EN: "Where are we now?" },
  {
    type: "text",
    FR: `Grâce à vos adhésions et vos dons, ${euros(figures.renovationFundedEur, "FR")} collectés en 2024 ont financé une troisième salle de classe, des sanitaires, une cuisine et une salle de repas, construits par des artisans locaux. L'école est opérationnelle depuis ${figures.schoolOperationalSince.FR} et ${figures.extraChildren} enfants supplémentaires l'ont rejointe.`,
    EN: `Thanks to your memberships and donations, ${euros(figures.renovationFundedEur, "EN")} raised in 2024 funded a third classroom, toilets, a kitchen and a dining room, built by local craftsmen. The school has been running since ${figures.schoolOperationalSince.EN} and ${figures.extraChildren} more children have joined it.`,
  },
  {
    type: "text",
    FR: `Depuis 2025, nous finançons les salaires des ${figures.staff} enseignant·es et personnels de l'école. Un salaire décent au Népal s'élève à ${number(figures.decentMonthlySalaryNpr, "FR")} NPR par mois, soit ${euros(figures.decentMonthlySalaryEur, "FR")}. Notre objectif est d'y contribuer à hauteur de ${euros(figures.annualSalaryTargetEur, "FR")} par an, et les dons mensuels sont notre priorité pour assurer la régularité de ces salaires.`,
    EN: `Since 2025 we have been funding the salaries of the school's ${figures.staff} teachers and staff. A decent salary in Nepal is ${number(figures.decentMonthlySalaryNpr, "EN")} NPR a month, about ${euros(figures.decentMonthlySalaryEur, "EN")}. Our target is to contribute ${euros(figures.annualSalaryTargetEur, "EN")} a year, and monthly donations are our priority to keep these salaries regular.`,
  },
  { type: "heading", FR: "Et après ?", EN: "What comes next?" },
  {
    type: "text",
    FR: "Si la collaboration entre les partenaires népalais et l'association Horizons Népal fonctionne et permet la pérennisation de l’école maternelle sur plus d’une année, une réévaluation du projet est envisagée en 2026. Elle impliquera alors la mairie du village en tant que troisième partie prenante et potentielle force de financement. Nous verrons, dans cette seconde étape, si Horizons Népal et ses membres et donateurs ont la capacité de changer d'échelle afin de rouvrir l'école primaire du village. Cela impliquera d'augmenter le financement dans la durée, car il s'agit de soutenir six autres niveaux de la pyramide éducative du système public népalais, jusqu'à l'équivalent de la seconde en France.",
    EN: "If the collaboration between the Nepalese partners and the Horizons Nepal association works and keeps the nursery school running for more than one year, a re-evaluation of the project is planned for 2026. It will then involve the village council as a third stakeholder and potential source of funding. We will see, in this second stage, whether Horizons Nepal and its members and donors have the capacity to scale up in order to reopen the village's primary school. This implies increasing funding over time, as it means supporting six further levels of the Nepalese public education pyramid, up to the equivalent of year 11 in England.",
  },
  {
    type: "image",
    src: futurImage,
    alt: {
      FR: "Une photo d'enfants célébrant la nouvelle année au New Sauraha Day Care Center",
      EN: "A picture of children celebrating the New Year at the New Sauraha Day Care Center",
    },
  },
];
