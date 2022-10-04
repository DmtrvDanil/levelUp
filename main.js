var slideNow = 1;
var slideCount = $("#sliderWrapper").children().length;
var translateWidth = 0;
var slideInterval = 2000;
function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $("#sliderWrapper").css("transform", "translate(0, 0)");
    slideNow = 1;
  } else {
    translateWidth = -$("#viewport").width() * slideNow;
    $("#sliderWrapper").css({
      transform: "translate(" + translateWidth + "px, 0)",
      "-webkit-transform": "translate(" + translateWidth + "px, 0)",
      "-ms-transform": "translate(" + translateWidth + "px, 0)",
    });
    slideNow++;
  }
}
function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth = -$("#viewport").width() * (slideCount - 1);
    $("#sliderWrapper").css({
      transform: "translate(" + translateWidth + "px, 0)",
      "-webkit-transform": "translate(" + translateWidth + "px, 0)",
      "-ms-transform": "translate(" + translateWidth + "px, 0)",
    });
    slideNow = slideCount;
  } else {
    translateWidth = -$("#viewport").width() * (slideNow - 2);
    $("#sliderWrapper").css({
      transform: "translate(" + translateWidth + "px, 0)",
      "-webkit-transform": "translate(" + translateWidth + "px, 0)",
      "-ms-transform": "translate(" + translateWidth + "px, 0)",
    });
    slideNow--;
  }
}
$(document).ready(function () {
  var switchInterval = setInterval(nextSlide, slideInterval);
  $("#viewport").hover(
    function () {
      clearInterval(switchInterval);
    },
    function () {
      switchInterval = setInterval(nextSlide, slideInterval);
    }

  );
  $("#next-btn").click(function () {
    nextSlide();
  });

  $("#prev-btn").click(function () {
    prevSlide();
  });
});

const input = document.querySelectorAll(".order__form-input");
const help = document.querySelectorAll(".order__form-label");
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("focus", () => {
        help[i].style.display = "block";
    });
    input[i].addEventListener("blur", () => {
        help[i].style.display = "none";
    });
}

window.onscroll = () => {
    const btn = document.querySelector(".orderBtn");
    let scroll = window.pageYOffset;
    const show = window.document.querySelector(".order").offsetTop - window.document.querySelector(".order").offsetHeight/2;
    console.log(show);
    console.log(scroll);
    console.log(btn);
    if (scroll >= show) {
        btn.style.display = "none";
    } else {
        btn.style.display = "block";
    }
}