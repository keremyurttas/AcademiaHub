
import createFooter from "../components/Footer.js";
import createHeader from "../components/Header.js";

document.addEventListener("DOMContentLoaded", () => {

  document.body.appendChild(createFooter());
  document.body.prepend(createHeader());
});
