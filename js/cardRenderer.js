import { cardInformations, courseInformations } from "./data.js";
import createCourseCard from "../components/CourseCard.js";
import createInformationCard from "../components/InformationCard.js";
export function renderCourseCards() {
  const courseCardsContainer = document.querySelector(".course-cards");
  courseInformations.forEach((card) => {
    const createCard = createCourseCard(card);
    courseCardsContainer.appendChild(createCard);
  });
}
export function renderInformationCards() {
  const infoCardsContainer = document.querySelector(".info-cards-container");
  cardInformations.forEach((card) => {
    const createdCard = createInformationCard(
      card.source,
      card.header,
      card.description
    );
    infoCardsContainer.appendChild(createdCard);
  });
}
