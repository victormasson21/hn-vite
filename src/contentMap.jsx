import { Section } from "./components/Section.jsx";
import { Team } from "./components/Team.jsx";
import { Contact } from "./components/Contact.jsx";
import { News } from "./components/News.jsx";
import { home } from "./content/home.js";
import { ecole } from "./content/ecole.js";
import { histoire } from "./content/histoire.js";

export const contentMap = {
  home: {
    title: { FR: "Accueil", EN: "Home" },
    displayTitle: false,
    component: <Section blocks={home} />,
  },
  news: {
    title: { FR: "Actualités", EN: "News" },
    displayTitle: true,
    component: <News />,
  },
  school: {
    title: { FR: "L’école", EN: "The school" },
    displayTitle: true,
    component: <Section blocks={ecole} />,
  },
  story: {
    title: { FR: "Notre histoire", EN: "Our story" },
    displayTitle: true,
    component: <Section blocks={histoire} />,
  },
  team: {
    title: { FR: "L'équipe", EN: "The team" },
    displayTitle: true,
    component: <Team />,
  },
  contact: {
    title: { FR: "Contact", EN: "Contact" },
    displayTitle: true,
    component: <Contact />,
  },
};
