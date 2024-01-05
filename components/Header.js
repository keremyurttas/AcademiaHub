export default function createHeader() {
  const header = document.createElement("nav");
  header.classList.add("navbar");
  header.classList.add("container");
  header.innerHTML = `
  
  <a class="brand" target="_top" href="/index.html">Brandname</a>
      <a class="contact-us" target="_top" href="/index.html#courses"
        >DISCOVER
        <img
          class="arrow"
          src="../assets/images/arrow-right.svg"
          alt="right arrow"
        />
      </a>
     
  `;
  return header;
}
