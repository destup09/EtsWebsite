//menu burger animation
(function() {
  const menuBtn = document.querySelector(".nav__btn");
  const burger = document.querySelector(".nav__btn--burger");
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");
  const navItems = document.querySelector(".nav__ul");
  const navLis = document.querySelectorAll(".nav__li");

  let showMenu = false;

  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      burger.classList.add("open");
      header.classList.add("clicked");
      nav.classList.add("hide");
      navItems.classList.add("hide");
      navLis.forEach(item => item.classList.add("open"));

      showMenu = true;
    } else {
      burger.classList.remove("open");
      nav.classList.remove("hide");
      navItems.classList.remove("hide");

      (function() {
        navLis.forEach(item => item.classList.remove("open"));
        setTimeout(navTimeout, 900);

        function navTimeout() {
          header.classList.remove("clicked");
        }
      })();

      showMenu = false;
    }
  }
})();

//nav hover
(function() {
  const dropDown = document.querySelector(".nav__services--wrapper");
  const navServices = document.querySelector(".nav-services");
  const header = document.querySelector(".header");

  navServices.addEventListener("mouseover", function() {
    dropDown.classList.remove("invisible");
  });

  dropDown.addEventListener("mouseleave", function() {
    dropDown.classList.add("invisible");
  });

  header.addEventListener("mouseleave", function() {
    dropDown.classList.add("invisible");
  });
})();

//nav click responsive
(function() {
  const navServices = document.querySelector(".nav-services");
  const navServicesLi = document.querySelectorAll(".nav-services--li");
  let visible = false;

  navServices.addEventListener("click", function() {
    if (visible == false) {
      navServicesLi.forEach(item =>
        item.classList.remove("nav__services--slide")
      );
      visible = true;
    } else {
      navServicesLi.forEach(item => item.classList.add("nav__services--slide"));
      visible = false;
    }
  });
})();

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
