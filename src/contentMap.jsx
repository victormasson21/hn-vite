import { Home } from "./components/Home.jsx";
import { Histoire } from "./components/Histoire.jsx";
import { Education } from "./components/Education.jsx";
import { Projet } from "./components/Projet.jsx";
import { Futur } from "./components/Futur.jsx";
import { Contact } from "./components/Contact.jsx";

export const contentMap = {
  home: { title: "", component: <Home /> },
  histoire: { title: "Histoire de l’association", component: <Histoire /> },
  education: { title: "L’éducation au Népal", component: <Education /> },
  projet: { title: "Le projet", component: <Projet /> },
  futur: { title: "Le futur", component: <Futur /> },
  participer: { title: "Contact", component: <Contact /> },
};
