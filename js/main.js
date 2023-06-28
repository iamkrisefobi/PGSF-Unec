// for collapsibles
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// link to swiper js
var swiper = new Swiper(".testimonial__slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: 'swiper-button-disabled',
    hideOnClick: true,
  },
  loop: true,
});


// Sendforth event countdown timer (event1)
let countDownDate1 = new Date("Jul 09, 2023 14:00:00").getTime();
let a = setInterval(function () {
  let currentTime = new Date().getTime();
  let timeDifference = countDownDate1 - currentTime;

  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.querySelector("#event1__days").innerHTML = days;
  document.querySelector("#event1__hours").innerHTML = hours;
  document.querySelector("#event1__minutes").innerHTML = minutes;
  document.querySelector("#event1__seconds").innerHTML = seconds;

  if(timeDifference < 0){
    clearInterval(a);
    document.querySelector("#event1__days").innerHTML = "00";
    document.querySelector("#event1__hours").innerHTML = "00";
    document.querySelector("#event1__minutes").innerHTML = "00";
    document.querySelector("#event1__seconds").innerHTML = "00";
  }

}, 1000)


// Christmas event countdown timer (event4)
let countDownDate4 = new Date("Dec 9, 2023 14:00:00").getTime();
let d = setInterval(function () {
  let currentTime = new Date().getTime();
  let timeDifference = countDownDate4 - currentTime;

  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.querySelector("#event4__days").innerHTML = days;
  document.querySelector("#event4__hours").innerHTML = hours;
  document.querySelector("#event4__minutes").innerHTML = minutes;
  document.querySelector("#event4__seconds").innerHTML = seconds;

  if(timeDifference < 0){
    clearInterval(d);
    document.querySelector("#event4__days").innerHTML = "00";
    document.querySelector("#event4__hours").innerHTML = "00";
    document.querySelector("#event4__minutes").innerHTML = "00";
    document.querySelector("#event4__seconds").innerHTML = "00";
  }

},1000)
