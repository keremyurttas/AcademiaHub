import createInformationCard from '../components/informationCard.js'

const cardInformations = [
  {
    source: "./assets/images/information-card1.svg",
    header: "Expert Insturction",
    description:
      "The gradual accumulation of information about atomic and small-scale behaviour...",
  },
  {
    source: "./assets/images/information-card2.svg",
    header: "Training Courses",
    description:
      "The gradual accumulation of information about atomic and small-scale behaviour...",
  },
  {
    source: "./assets/images/information-card3.svg",
    header: "Lifetime access",
    description:
      "The gradual accumulation of information about atomic and small-scale behaviour...",
  },
];
document.addEventListener('DOMContentLoaded', () => {
    const infoCardsContainer = document.querySelector('.info-cards-container');

    cardInformations.forEach(card => {
        const createdCard = createInformationCard(card.source, card.header, card.description);
        infoCardsContainer.appendChild(createdCard);
    });
});
