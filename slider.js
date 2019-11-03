//slider
(function() {
  const slider = document.querySelector(".slider"); //Slider wrapper
  const sliderImages = document.querySelectorAll(".slider .slide"); //Slider images

  //btns dots
  const slide1 = document.getElementById("slide1");
  const slide2 = document.getElementById("slide2");
  const slide3 = document.getElementById("slide3");

  //counter
  let counter = 1;
  const size = sliderImages[0].clientWidth;

  slider.style.transform = "translateX(" + -size * counter + "px)";

  //btns dots listeners
  slide1.addEventListener("click", function() {
    slider.style.transition = "transform 0.5s ease-in-out";
    counter = 2;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  });

  slide2.addEventListener("click", function() {
    slider.style.transition = "transform 0.5s ease-in-out";
    counter = 3;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  });

  slide3.addEventListener("click", function() {
    slider.style.transition = "transform 0.5s ease-in-out";
    counter = 4;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  });

  //transition
  slider.addEventListener("transitionend", function() {
    if (counter < 2) {
      counter = 2;
    }

    if (counter > 4) {
      counter = 4;
    }

    if (sliderImages[counter].id === "lastSlide") {
      slider.style.transition = "none";
      counter = sliderImages.length - 2;
      slider.style.transform = "translateX(" + -size * counter + "px)";
    }

    //dots bg
    if (sliderImages[counter].id === "truck2") {
      slide2.classList.remove("btn-background");
      slide3.classList.remove("btn-background");
      slide1.classList.add("btn-background");
    } else if (sliderImages[counter].id === "truck1") {
      slide1.classList.remove("btn-background");
      slide3.classList.remove("btn-background");
      slide2.classList.add("btn-background");
    } else {
      slide1.classList.remove("btn-background");
      slide2.classList.remove("btn-background");
      slide3.classList.add("btn-background");
    }
  });

  //transition
  slider.addEventListener("transitionend", function() {
    if (sliderImages[counter].id === "firstSlide") {
      slider.style.transition = "none";
      counter = sliderImages.length - counter;
      slider.style.transform = "translateX(" + -size * counter + "px)";
    }
  });

  //auto slide loop
  function autoSlide() {
    slider.style.transition = "transform 0.5s ease-in-out";
    counter++;
    slider.style.transform = "translateX(" + -size * counter + "px)";

    setTimeout(autoSlide, 12000);
  }
  autoSlide();
})();
