import {
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { LanguageContext } from "../App";

export const Bilan = () => {
  const locale = useContext(LanguageContext);

  return (
    <>
      <Text mb={4}>
        {
          {
            FR: "Après un second semestre 2023 consacré à la création de la structure associative en France, notre activité a réellement démarré en février 2024.",
            EN: "After a second semester 2023 dedicated to creating the associative structure in France, our activity really started in February 2024."
          }[locale]
        }
      </Text>
      <Text mb={4}>
        {
          {
            FR: "Grâce aux dons (tant ponctuels que réguliers) de nos adhérents et sympathisants, nous avons pu atteindre le premier objectif 2024 : remettre en état et agrandir l'école du village de Jankauli. 12000€ ont été collectés entre février 2024 et février 2025, et l'intégralité de cette somme a été consacrée à la rénovation et l'agrandissement des bâtiments : l'école est désormais opérationnelle depuis le 1 mars 2025.",
            EN: "Thanks to donations (both one-time and regular) from our members and supporters, we were able to achieve the first 2024 objective: renovate and expand the school in the village of Jankauli. �12,000 was collected between February 2024 and February 2025, and the entire amount was dedicated to renovating and expanding the buildings: the school has been operational since March 1, 2025."
          }[locale]
        }
      </Text>
      <Text mb={4}>
        {
          {
            FR: "Le second objectif 2024-début 2025 était d'assurer un salaire décent aux enseignants et personnels de service sur l'année 2025",
            EN: "The second objective for 2024-early 2025 was to ensure decent salaries for teachers and service staff for the year 2025"
          }[locale]
        }
      </Text>
      <Text mb={4}>
        {
          {
            FR: "Le tableau ci-dessous définit les besoins, soit environ 13K€ par an, dont nous cherchons à financer le maximum :",
            EN: "The table below defines the needs, approximately �13K per year, of which we seek to finance the maximum:"
          }[locale]
        }
      </Text>
      <Text mb={4}>
        {
          {
            FR: "Nous avons déjà pu assurer le premier trimestre et nous allons être en mesure d'assurer le second grâce à une rentrée exceptionnelle obtenue dans le cadre d'un projet RSE de l'entreprise d'un de nos membres, mais nos ressources sont incertaines pour le second semestre 2025, et nous avons besoin de plus de dons réguliers (mensuels) : l'objectif est de passer de 9 à 25 donateurs réguliers, pour un montant mensuel de 20 à 30€.",
            EN: "We have already been able to secure the first quarter and we will be able to secure the second thanks to exceptional revenue obtained through a CSR project from one of our members' companies, but our resources are uncertain for the second semester of 2025, and we need more regular (monthly) donations: the objective is to go from 9 to 25 regular donors, for a monthly amount of �20 to 30."
          }[locale]
        }
      </Text>
      <Text mb={4}>
        {
          {
            FR: "Un troisième objectif était de créer des liens culturels entre les membres de l'association et les villageoises et villageois de Bacchauli, ainsi qu'entre l'école du village et des écoles primaires en France.",
            EN: "A third objective was to create cultural links between the association members and the villagers of Bacchauli, as well as between the village school and primary schools in France."
          }[locale]
        }
      </Text>
      <Text>
        {
          {
            FR: "Un projet a démarré avec l'école primaire des Leins dans le village de Montagnac qui a pris la forme d'échanges de lettres, de dessins entre les élèves. Récemment, les élèves de Montagnac (30) ont aussi contribué à la levée de fond en créant des cartes et en cuisinant des gâteaux, qu'ils ont vendu à Noël dernier dans le village. Nous avons pour ambition de le dupliquer avec l'école primaire d'ASSAS (34) siège de l'association pour la rentrée 2025.",
            EN: "A project started with the primary school of Leins in the village of Montagnac which took the form of exchanges of letters and drawings between students. Recently, the students of Montagnac (30) also contributed to fundraising by creating cards and cooking cakes, which they sold last Christmas in the village. We have the ambition to duplicate this with the primary school of ASSAS (34), headquarters of the association for the 2025 school year."
          }[locale]
        }
      </Text>
    </>
  );
};