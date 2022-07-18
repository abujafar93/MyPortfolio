 
//  SWITCHER TOGGLE SCRIPTS
 const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
 styleSwitcherToggler.addEventListener('click', ()=>{
   document.querySelector(".style-switcher").classList.toggle("open");
 })

 window.addEventListener('scroll', ()=>{
   if(document.querySelector(".style-switcher").classList.contains("open")){
    document.querySelector(".style-switcher").classList.remove("open");
   }
 })

//  SWITCH THEME COLORS SCRIPTS
let bodyClass = document.querySelector('body');
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let color4 = document.querySelector(".color4");
let color5 = document.querySelector(".color5");


// color2.addEventListener('click', () => {
//   bodyClass.classList.add('switchColor2');
//   bodyClass.style.background = 'black';
// })

function setActiveStyle (){
  color2.addEventListener('onclick', ()=>{
    bodyClass.classList.add('switchColor2');
  })
}

setActiveStyle();


// DARK AND LIGHT MODE
const dayNight = document.querySelector(".day-night");
console.log(dayNight);

dayNight.addEventListener("click", ()=> {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})

window.addEventListener("load", ()=>{
  if(document.body.classList.contains('dark')) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
  })