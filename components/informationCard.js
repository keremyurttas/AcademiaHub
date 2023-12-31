export default function createInformationCard(source, header, description) {
  const informationCard = document.createElement("section");
  informationCard.classList.add("info-card");
  informationCard.innerHTML = `

    <img
      src=${source}
      alt="a card image"
    />
    <h4>${header}</h4>
    <hr class="secondary-line" />
    <p class="description">
      ${description}
    </p>
    `;
  return informationCard;
}
