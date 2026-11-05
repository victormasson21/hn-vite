import { Section } from "./components/Section.jsx";
import { Team } from "./components/Team.jsx";
import { Contact } from "./components/Contact.jsx";
import { Media } from "./components/Media.jsx";
import { News } from "./components/News.jsx";
import { home } from "./content/home.js";
import { histoire } from "./content/histoire.js";
import { education } from "./content/education.js";
import { projet } from "./content/projet.js";
import { bilan } from "./content/bilan.js";
import { futur } from "./content/futur.js";

export const contentMap = {
  home: {
    title: "Intro",
    displayTitle: false,
    component: <Section blocks={home} />,
  },
  story: {
    title: { FR: "Notre histoire", EN: "Our story" },
    displayTitle: true,
    component: <Section blocks={histoire} />,
  },
  education: {
    title: { FR: "L’éducation au Népal", EN: "Education in Nepal" },
    displayTitle: true,
    component: <Section blocks={education} />,
  },
  project: {
    title: { FR: "Le projet", EN: "The project" },
    displayTitle: true,
    component: <Section blocks={projet} />,
  },
  bilan: {
    title: { FR: "Bilan 2025", EN: "Assessment 2025" },
    displayTitle: true,
    component: <Section blocks={bilan} />,
  },
  news: {
    title: { FR: "Actualités", EN: "News" },
    displayTitle: true,
    component: <News />,
  },
  future: {
    title: { FR: "Le futur", EN: "What comes next" },
    displayTitle: true,
    component: <Section blocks={futur} />,
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
  media: {
    title: { FR: "Médias", EN: "Media" },
    displayTitle: true,
    component: <Media />,
  },
};
