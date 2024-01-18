export default function createHeader() {
  const header = document.createElement("nav");
  header.classList.add("navbar", "container");
  header.innerHTML = `

  <a class="brand" href="/index.html">AcademiaHub</a>
      <a class="discover zoom-hover-effect" href="/index.html#courses-section-container"
        >DISCOVER
        <img
          class="arrow "
          src="/assets/images/arrow-right.svg"
          alt="right arrow"
        />
      </a>
     
  `;

  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 10;
    header.classList.toggle("scrolled", isScrolled);
  });
  return header;
}
