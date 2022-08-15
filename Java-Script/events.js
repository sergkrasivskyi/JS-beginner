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

// Page Variables
const html = document.documentElement;
const body = document['body'];
const bodyElement = document['body'].children;
const main = document.querySelector('form').children
console.log(main);
console.log(body);
console.log(bodyElement);
console.log(main);
const page = document.querySelector("body");
const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector(".search-button");
const searchDescription = document.querySelector(".search-description");
const searchInput = document.querySelector(".search-input");
const leftSymbols = document.querySelector(".left-symbols");
// Log something

// console.log(leftSymbols);
// console.log(searchForm);
// console.log(searchButton);
// console.log(searchDescription);

// functions

function hideByKey(event) {
  if (event.key == "Escape") {
    searchDescription.classList.remove("_active");
  }
  console.log(event.key);
}

function hideSearch(event) {
  // console.log(event.target);
  if (!event.target.closest("form")) {
    searchDescription.classList.remove("_active");
    searchInput.value = "";
  }
  console.log(event.target.closest("form"));
}

function showForm() {
  searchDescription.classList.toggle("_active");
  searchInput.value = "";
}

function symbolsCounter(event) {
  if (searchInput.value.length > 30) {
    console.log("Full string");
  } else {
    leftSymbols.innerHTML = ` ${30 - searchInput.value.length} symbols left`;
  }
}
function getDownKey(event) {
  console.log(`Pressed ${event.code} (${event.key})`);
  console.log(event.repeat);
}
function getUpKey(event) {
  console.log(`Upped ${event.code} (${event.key})`);
  console.log(event.repeat);
}

function changeDocTitle() {
	console.log(html);
}
// Mouse Listeners
page.addEventListener('click', function(){
	html.childNodes[0].textContent = 'New Document';
})
searchButton.addEventListener("click", showForm);
page.addEventListener("click", hideSearch);

// Key events Listeners

// searchInput.addEventListener("keyup", symbolsCounter);
searchInput.addEventListener("keydown", function (event) {
  if (event.repeat) {
    symbolsCounter(event);
  }
});
page.addEventListener("keydown", getDownKey);
page.addEventListener("keyup", getUpKey);
// searchForm.addEventListener("keydown", symbolsCounter);
