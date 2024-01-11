export default function createCourseCard({
  id,
  img,
  productName,
  productTag,
  productDescription,
  saleCount,
  oldPrice,
  newPrice,
}) {
  const courseCard = document.createElement("div");
  courseCard.classList.add("course-card");
  courseCard.classList.add("card-hover-effect");

  // courseCard.classList.add("zoom-hover-effect");
  courseCard.innerHTML = `

  <div class="course-card-top">
    <img class="course-card-image" src=${img} alt=${productName + " image"} />
    <span class="sale header-tag">Sale</span>
    <div class="inspect-icon">
      <img src="./assets/images/inspect.svg" alt="" />
    </div>
  </div>
  <div class="course-card-content">
    <div class="course-card-content-top">
      <span class="header-tag">${productTag}</span>
      <div class="star">
        <img src="./assets/images/star.svg" alt="" />
        <span>4.9</span>
      </div>
    </div>
    <h4>${productName}</h4>
    <p class="description">
      ${productDescription}
    </p>
    <div class="sales-count">
      <img src="./assets/images/saled.svg" alt="" />
      <span>${saleCount} Sales</span>
    </div>
    <div class="prices">
      <span class="old-price">$${oldPrice}</span>
      <span class="new-price">$${newPrice}</span>
    </div>
    <a href=${`/product.html?id=${id}`} class="view">
      View <img src="./assets/images/arrow-right-orange.svg" alt="" />
    </a>
  </div>
`;
  return courseCard;
}
