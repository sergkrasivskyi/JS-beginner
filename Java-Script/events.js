let linkItemH2 = document.querySelector("h2");
let linkItemP = document.querySelector("p");
const opt1 = {
  passive: false,
  once: true,
};
const opt2 = {
  passive: false,
  once: false,
};
linkItemH2.addEventListener(
  "click",
  function () {
    console.log(`Active: 'Yep, click ${this.nodeName}  is ON'`);
  },
  opt1
);
linkItemH2.addEventListener(
  "click",
  handler2, // тут просто ім'я функції, без ()
  opt2
);

// linkItemH1.addEventListener("click", handler2());
console.log(linkItemH2);
// function handler1() {
//   console.log("handler1: 'Yep, click is ON'");
// }
function handler2() {
  console.log(`handler2: 'Yep, click ${this.nodeName}  is ON'`);
}
// linkItemH2.addEventListener("mousedown", handler1());
// linkItemP.addEventListener("mouseup", handler2());
