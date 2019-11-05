console.log("%cELO!", "color: red; font-family: sans-serif; font-size: 14.5em");

//menu burger animation
(function() {
  const menuBtn = document.querySelector(".nav__btn");
  const burger = document.querySelector(".nav__btn--burger");
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");
  const navItems = document.querySelector(".nav__ul");
  const navLis = document.querySelectorAll(".nav__li");
  const navServicesLi = document.querySelectorAll(".nav-services--li");
  const ourFleet = document.querySelector("#fleet");

  let showMenu = false;

  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      burger.classList.add("open");
      header.classList.add("clicked");
      nav.classList.add("hide");
      navItems.classList.add("hide");
      navLis.forEach(item => item.classList.add("open"));
      header.classList.add("header__fast");

      showMenu = true;
    } else {
      burger.classList.remove("open");
      nav.classList.remove("hide");
      navItems.classList.remove("hide");

      (function() {
        setTimeout(navTimeout, 900);
        function navTimeout() {
          header.classList.remove("clicked");
          header.classList.remove("header__long");
        }

        navLis.forEach(item => item.classList.remove("open"));

        navServicesLi.forEach(item =>
          item.classList.add("nav__services--slide")
        );

        ourFleet.classList.remove("fleet__down");
      })();

      showMenu = false;
    }
  }
})();

//nav click responsive
(function() {
  const navServices = document.querySelector(".nav-services");
  const navServicesLi = document.querySelectorAll(".nav-services--li");
  const ourFleet = document.querySelector("#fleet");
  const header = document.querySelector(".header");
  let visible = false;

  navServices.addEventListener("click", function() {
    if (!visible) {
      ourFleet.classList.add("fleet__down");

      setTimeout(headerSlower, 550);

      function headerSlower() {
        header.classList.add("header__long");
      }

      setTimeout(navDown, 1000);

      function navDown() {
        navServicesLi.forEach(item =>
          item.classList.remove("nav__services--slide")
        );
      }

      visible = true;
    } else {
      navServicesLi.forEach(item => item.classList.add("nav__services--slide"));
      ourFleet.classList.remove("fleet__down");

      setTimeout(navUp, 550);

      function navUp() {
        header.classList.remove("header__long");
      }

      visible = false;
    }
  });
})();

//nav hover na 768px+
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
