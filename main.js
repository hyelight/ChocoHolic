// Header 830px 이하일 때 돋보기 클릭 시 검색 창 길어짐
const searchIcon = document.querySelector("header form i");
const headerForm = document.querySelector("header form");
const headerInput = document.querySelector("header input");

searchIcon.addEventListener("click", function () {
  headerForm.style.borderBottom = "2px solid rgb(124, 70, 79)";
  headerForm.style.marginRight = "15px";
  headerInput.style.width = "120px";
});

// 다른 곳 클릭 시 검색 창 초기화
document.addEventListener("click", function (e) {
  if (!headerForm.contains(e.target)) {
    headerForm.style.borderBottom = "none";
    headerForm.style.marginRight = "5px";
    headerInput.style.width = "0";
  }
});

// 햄버거 버튼 메뉴
const hamburgerBtn = document.createElement("button");
hamburgerBtn.className = "hamburger-menu";
hamburgerBtn.addEventListener("click", toggleMenu);

const bar1 = document.createElement("span");
const bar2 = document.createElement("span");
const bar3 = document.createElement("span");

bar1.className = "bar";
bar2.className = "bar";
bar3.className = "bar";

hamburgerBtn.appendChild(bar1);
hamburgerBtn.appendChild(bar2);
hamburgerBtn.appendChild(bar3);

const headerElement = document.querySelector("header");
headerElement.insertBefore(hamburgerBtn, headerElement.firstChild);

function toggleMenu() {
  const menu = document.querySelector("header ul");
  const hamburger = document.querySelector(".hamburger-menu");
  menu.classList.toggle("active");
  hamburger.classList.toggle("open");
}

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
