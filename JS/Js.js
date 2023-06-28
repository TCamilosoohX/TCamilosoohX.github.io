window.addEventListener("scroll", function () {
    const fin = document.getElementById("fin");
    let posicion = fin.getBoundingClientRect().top;
    console.log(posicion);

    const menu = document.getElementById("menu");
    const hamburguesa = document.getElementById("hamburguesa");
    const logo = document.getElementById("logo");

    if (posicion > 1) {
      hamburguesa.style.display = "flex";
      logo.style.left = "0px"
      logo.style.width = "10%"
      logo.style.animationName = "logo1"
      menu.style.animationName = "menu1"
      menu.style.top = "-115px"

    } else if (posicion < -1) {
      menu.style.display = "flex";
      hamburguesa.style.display = "none";
      logo.style.animationName = "logo";
      logo.style.animationDuration = "1s"
      logo.style.left = "-1766px"
      logo.style.width = "6%"
      logo.style.zIndex = "2554"
      menu.style.animationName = "menu"
      menu.style.top = "0px"


    }
  })