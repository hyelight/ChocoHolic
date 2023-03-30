// Family Site 아코디언
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

// info-content 클래스들의 p 선택 시 아코디언
const infoContents = document.querySelectorAll(".info-content p");

function toggleUlAccordion(e) {
  if (window.innerWidth <= 830) {
    const content = e.target.nextElementSibling;
    content.classList.toggle(".active");

    if (content.classList.contains(".active")) {
      content.style.display = content.className.includes("icons-wrapper")
        ? "flex"
        : "block";
    } else {
      content.style.display = "none";
    }
  }
}

infoContents.forEach((infoContent) => {
  infoContent.addEventListener("click", toggleUlAccordion);
});

// opening-time 개별 아코디언 설정
const openingTimeHeader = document.querySelector(".opening-time p");
const infoContentEachWrapper = document.querySelectorAll(
  ".info-content-each-wrapper"
);

openingTimeHeader.addEventListener("click", function () {
  infoContentEachWrapper.forEach((wrapper) => {
    wrapper.classList.toggle("active");

    if (wrapper.classList.contains("active")) {
      wrapper.style.display = "flex";
    } else {
      wrapper.style.display = "none";
    }
  });
});
