const aboutButton = document.querySelector("#about-us-button");
const contactButton = document.querySelector("#contact-us-button");
const aboutSection = document.querySelector("#about-us-section");

// selectors

const aboutFooter = document.querySelector("#about-us-footer");
const contactFooter = document.querySelector("#contact-us-footer");

const contactSection = document.querySelector("#contact-us-section");

const companyYear = document.querySelector("#date");
const currentDate = new Date();

const getCurrentYear = () => {
  return currentDate.getFullYear();
};

document.addEventListener("DOMContentLoaded", () => {
  companyYear.innerHTML = `<p> Atlas Services ©${getCurrentYear()}</p>`;
});

aboutButton.addEventListener("click", function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

aboutFooter.addEventListener("click", function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

contactButton.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

contactFooter.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
