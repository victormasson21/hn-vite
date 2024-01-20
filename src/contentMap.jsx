import { Home } from "./components/Home.jsx";
import { Histoire } from "./components/Histoire.jsx";
import { Education } from "./components/Education.jsx";
import { Projet } from "./components/Projet.jsx";
import { Futur } from "./components/Futur.jsx";
import { Contact } from "./components/Contact.jsx";

export const contentMap = {
  home: { title: "Intro", displayTitle: false, component: <Home /> },
  histoire: {
    title: "Histoire de l’association",
    displayTitle: true,
    component: <Histoire />,
  },
  education: {
    title: "L’éducation au Népal",
    displayTitle: true,
    component: <Education />,
  },
  projet: { title: "Le projet", displayTitle: true, component: <Projet /> },
  futur: { title: "Le futur", displayTitle: true, component: <Futur /> },
  participer: { title: "Contact", displayTitle: true, component: <Contact /> },
};
