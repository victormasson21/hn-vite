import { Home } from "./components/Home.jsx";
import { Histoire } from "./components/Histoire.jsx";
import { Education } from "./components/Education.jsx";
import { Team } from "./components/Team.jsx";
import { Projet } from "./components/Projet.jsx";
import { Bilan } from "./components/Bilan.jsx";
import { Futur } from "./components/Futur.jsx";
import { Contact } from "./components/Contact.jsx";
import { Media } from "./components/Media.jsx";

export const contentMap = {
  home: { title: "Intro", displayTitle: false, component: <Home /> },
  story: {
    title: { FR: "Notre histoire", EN: "Our story" },
    displayTitle: true,
    component: <Histoire />,
  },
  education: {
    title: { FR: "L’éducation au Népal", EN: "Education in Nepal" },
    displayTitle: true,
    component: <Education />,
  },
  project: {
    title: { FR: "Le projet", EN: "The project" },
    displayTitle: true,
    component: <Projet />,
  },
  bilan: {
    title: { FR: "Bilan 2025", EN: "Assessment 2025" },
    displayTitle: true,
    component: <Bilan />,
  },
  future: {
    title: { FR: "Le futur", EN: "What comes next" },
    displayTitle: true,
    component: <Futur />,
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
