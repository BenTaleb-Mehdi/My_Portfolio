const btnStart = document.querySelector(".startbtn"),
  section1 = document.querySelector(".section1"),
  back = document.querySelector(".back"),
  section2 = document.querySelector(".section2");

const btnMenudeop = document.querySelector(".menuDrop"),
  closeMenu = document.querySelector(".closeMenu"),
  menu = document.querySelector(".menu");

btnMenudeop.addEventListener("click", () => {
  menu.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});

const btnLightMode = document.querySelector(".btnlightmood"),
  mdlight = document.querySelector(".mdlight moon"),
   mdlight2 = document.querySelector(".mdlight sun"),
 btnLightMode2 = document.querySelector(".btnlightmood2");
const body = document.body;

btnLightMode.addEventListener("click", () => {
  // Toggle the light-mode class on the body
  body.classList.toggle("mood");

});

btnLightMode2.addEventListener("click", () => {
  // Toggle the light-mode class on the body
  body.classList.toggle("mood");
 
});



const btnMore = document.querySelector(".btnMore"),
  displayMore = document.querySelector(".morePr");

  btnMore.addEventListener('click',()=>{
    displayMore.classList.toggle('active');
  })


