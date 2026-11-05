import map from "../assets/map.webp";
import { euros, figures } from "./figures";

export const home = [
  {
    type: "heading",
    FR: "Horizons Népal soutient l’éducation des enfants issus de familles défavorisées au Népal.",
    EN: "Horizons Nepal supports the education of children from disadvantaged families in Nepal.",
  },
  {
    type: "text",
    FR: "À travers un partenariat avec une organisation caritative népalaise, nous finançons la rénovation et le fonctionnement d'une école maternelle dans le village de Jankauli, dans le district de Chitwan.",
    EN: "Through a partnership with a Nepalese charity, we fund the renovation and running of a nursery school in the village of Jankauli, in the Chitwan district.",
  },
  {
    type: "figures",
    items: [
      {
        value: { FR: String(figures.classrooms), EN: String(figures.classrooms) },
        label: { FR: "salles de classe", EN: "classrooms" },
      },
      {
        value: {
          FR: String(figures.extraChildren),
          EN: String(figures.extraChildren),
        },
        label: {
          FR: "enfants supplémentaires scolarisés",
          EN: "more children in school",
        },
      },
      {
        value: { FR: String(figures.staff), EN: String(figures.staff) },
        label: {
          FR: "enseignant·es et personnels salariés",
          EN: "teachers and staff on a salary",
        },
      },
      {
        value: {
          FR: euros(figures.annualSalaryTargetEur, "FR"),
          EN: euros(figures.annualSalaryTargetEur, "EN"),
        },
        label: {
          FR: "par an pour les salaires, notre objectif",
          EN: "a year for salaries, our target",
        },
      },
    ],
  },
  {
    type: "image",
    src: map,
    alt: {
      FR: "Une carte du Népal montrant la localisation du New Sauraha Day Care Center",
      EN: "A map of Nepal showing the location of the New Sauraha Day Care Center",
    },
  },
];
