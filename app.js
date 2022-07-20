//  SWITCHER TOGGLE SCRIPTS
// const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggler.addEventListener("click", () => {
//   document.querySelector(".style-switcher").classList.toggle("open");
// });

// window.addEventListener("scroll", () => {
//   if (document.querySelector(".style-switcher").classList.contains("open")) {
//     document.querySelector(".style-switcher").classList.remove("open");
//   }
// });



// DARK AND LIGHT MODE
const dayNight = document.querySelector(".day-night");
const body = document.querySelector('body');

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
