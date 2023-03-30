const accordionHeader = document.querySelector(".accordion-header");
const accordionContent = document.querySelector(".accordion-content");

accordionHeader.addEventListener("click", function () {
  accordionContent.classList.toggle("active");
  accordionHeader.classList.toggle("accordion-toggle");

  if (accordionContent.classList.contains("active")) {
    accordionContent.style.display = "block";
  } else {
    accordionContent.style.display = "none";
  }
});
