import '../scss/style.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const elemToggleFunc = function (elem) { elem.classList.toggle("active");}


const navbar = document.querySelector("[data-navbar]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navCloseBtn, navOpenBtn, overlay];

for (let i = 0; i < navElemArr.length; i++){
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  })
}


const header = document.querySelector("[data-header]");
window.addEventListener('scroll', function (){
  if (this.window.scrollY > 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
})


// go to top

const goTopBtn = document.querySelector("[data-go-top]")
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 800){
    goTopBtn.classList.add("active")
  } else{
    goTopBtn.classList.remove("active")
  }
})

console.log('testing')