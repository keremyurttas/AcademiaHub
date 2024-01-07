export default function createInformationCard(source, header, description) {
  const informationCard = document.createElement("div");
  informationCard.classList.add("info-card");
  informationCard.classList.add("card-hover-effect");
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
