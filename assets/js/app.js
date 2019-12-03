const ccña = new fullpage("#fullpage", {
  autoScrolling: true,
  fitToSection: false,
  fitToSectionDelay: 300,
  easing: "easeInOutCubic",
  scrollingSpeed: 540,
  css3: true,
  easingcss3: "ease-out",
  loopBottom: false,
  navigation: true,
  showActiveTooltip: true,
  anchors: ["inicio", "2div", "3div", "4div", "footer"],
  menu: "#menu",
  navigationTooltips: ["Pa regalar", "Colección Hombre", "Meme", "Colección Mujer", "Acerca de"],
  sectionsColor: ["#000", "#000000", "#000"],
  // verticalCentered: true,

  afterLoad: function(origin, destination, direction) {
    if (destination.anchor == "inicio") {
      document.getElementById(
        "color_menu color_menumas menup lupa barraBuscar user menuheader"
      );
      color_menu.style.color = "white";
      color_menumas.style.color = "white";
      menup.style.color = "white";
      lupa.style.color = "white";
      barraBuscar.style.color = "white";
      barraBuscar.style.borderColor = "white";
      user.style.color = "white";
      menuheader.style.backgroundColor = "transparent";
    }

    if (destination.anchor == "2div") {
      document.getElementById(
        "color_menu color_menumas menup lupa barraBuscar user menuheader"
      );
      color_menu.style.color = "black";
      color_menumas.style.color = "black";
      menup.style.color = "black";
      lupa.style.color = "black";
      barraBuscar.style.color = "black";
      barraBuscar.style.borderColor = "black";
      user.style.color = "black";
      menuheader.style.backgroundColor = "transparent";
    }

    if (destination.anchor == "3div") {
      document.getElementById(
        "color_menu color_menumas menup lupa barraBuscar user menuheader"
      );
      color_menu.style.color = "white";
      color_menumas.style.color = "white";
      menup.style.color = "white";
      lupa.style.color = "white";
      barraBuscar.style.color = "white";
      barraBuscar.style.borderColor = "white";
      user.style.color = "white";
      menuheader.style.backgroundColor = "transparent";
    }

    if (destination.anchor == "4div") {
      document.getElementById(
        "color_menu color_menumas menup lupa barraBuscar user menuheader"
      );
      color_menu.style.color = "black";
      color_menumas.style.color = "white";
      menup.style.color = "black";
      lupa.style.color = "white";
      barraBuscar.style.color = "white";
      barraBuscar.style.borderColor = "white";
      user.style.color = "black";
      menuheader.style.backgroundColor = "transparent";
    }

    if (destination.anchor == "footer") {
      document.getElementById(
        "color_menu color_menumas menup lupa barraBuscar user menuheader"
      );
      color_menu.style.color = "black";
      color_menumas.style.color = "black";
      menup.style.color = "black";
      lupa.style.color = "black";
      barraBuscar.style.color = "black";
      barraBuscar.style.borderColor = "black";
      user.style.color = "black";
      menuheader.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
    } 
  }
});

//adding the action to the button
$(document).on("click", "#moveDown", function() {
  fullpage_api.moveSectionDown();
});

$(document).on("click", "#moveDownBlack", function() {
  fullpage_api.moveSectionDown();
});

