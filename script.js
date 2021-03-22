var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

window.onscroll = function() {myFunction()};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const hamburger = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay")

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("open");
});
