let linkItemH2 = document.querySelector("h2");
let linkItemP = document.querySelector("p");
const opt1 = {
  passive: false,
  once: false,
};
// const opt2 = {
//   passive: false,
//   once: false,
// };
// linkItemH2.addEventListener(
//   "click",
//   function () {
//     console.log(`Active: 'Yep, click ${this.nodeName}  is ON'`);
//   },
//   opt1
// );
// linkItemH2.addEventListener(
//   "click",
//   handler2, // тут просто ім'я функції, без ()
//   opt2
// );

// linkItemH1.addEventListener("click", handler2());
// console.log(linkItemH2);
// function handler1() {
//   console.log("handler1: 'Yep, click is ON'");
// }
// function handler2() {
//   console.log(`handler2: 'Yep, click ${this.nodeName}  is ON'`);
// }
// linkItemH2.addEventListener("mousedown", handler1());
// linkItemP.addEventListener("mouseup", handler2());

// Зробити форму пошуку, що відкривається по кліку на іконку
// а закривається по кліку на будь яке місце на сторінці, окрім самої форми
// також закривається за допомогою Escape
// const searchForm = document.getElementsByClassName("search-form");
function getEvtType(event) {
	if (event.key == "Escape") {
		searchDescription.classList.remove("_active");
  }
	console.log(event.key);
}
const page = document.querySelector("body");
page.addEventListener("click", hideSearch);
function hideSearch(event) {
	// console.log(event.target);
  if (!event.target.closest("form")) {
		searchDescription.classList.remove("_active");
  }
  console.log(event.target.closest("form"));
}
document.addEventListener("keydown", getEvtType);
const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector(".search-button");
const searchDescription = document.querySelector(".search-description");
console.log(searchForm);
console.log(searchButton);
console.log(searchDescription);
searchButton.addEventListener("click", showForm);
function showForm() {
  searchDescription.classList.toggle("_active");
}
