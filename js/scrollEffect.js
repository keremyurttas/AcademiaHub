const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  { threshold: 0.1 }
);
sections.forEach((section) => {
  observer.observe(section);
});
