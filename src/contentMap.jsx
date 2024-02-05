import { Home } from "./components/Home.jsx";
import { Histoire } from "./components/Histoire.jsx";
import { Education } from "./components/Education.jsx";
import { Projet } from "./components/Projet.jsx";
import { Futur } from "./components/Futur.jsx";
import { Contact } from "./components/Contact.jsx";

export const contentMap = {
  home: { title: "Intro", displayTitle: false, component: <Home /> },
  histoire: {
    title: { FR: "Notre histoire", EN: "Our story" },
    displayTitle: true,
    component: <Histoire />,
  },
  education: {
    title: { FR: "L’éducation au Népal", EN: "Education in Nepal" },
    displayTitle: true,
    component: <Education />,
  },
  projet: {
    title: { FR: "Le projet", EN: "The project" },
    displayTitle: true,
    component: <Projet />,
  },
  futur: {
    title: { FR: "Le futur", EN: "What comes next" },
    displayTitle: true,
    component: <Futur />,
  },
  participer: {
    title: { FR: "Contact", EN: "Contact" },
    displayTitle: true,
    component: <Contact />,
  },
};
