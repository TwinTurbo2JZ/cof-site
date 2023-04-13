console.log("jolo is gay");

const button = document.querySelector(".cta-btn");

const sectionOption = {};

const observer = new IntersectionObserver((entries, sectionOption) => {
  entries.forEach((entry) => console.log(entry.target));
}, sectionOption);

observer.observe(button);
