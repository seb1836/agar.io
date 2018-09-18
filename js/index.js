//step 1
document.getElementById("start").addEventListener("click", function() {
  document.getElementsByClassName(
    "chosenName"
  )[0].innerHTML = document.getElementById("name").value;
  document.getElementsByClassName(
    "disk"
  )[0].style.background = document.getElementById("colordisk").value;
});

//step 2

var verti = 0;
var horizon = 0;
var moveVerti = 10;
var moveHorizon = 10;

window.addEventListener("keydown", function(e) {
  console.log(e);

  // e = e || window.event;
  if (e.key === "ArrowUp") {
    // up arrow
    console.log("avant", verti);
    verti -= moveVerti;
    console.log("apres", verti);
    document.getElementsByClassName("disk")[0].style.marginTop = `${verti}px`;
  } else if (e.key === "ArrowDown") {
    // down arrow fonctionne
    verti += moveVerti;
    document.getElementsByClassName("disk")[0].style.marginTop = `${verti}px`;
  } else if (e.key === "ArrowLeft") {
    // left arrow
    horizon -= moveHorizon;
    document.getElementsByClassName(
      "disk"
    )[0].style.marginLeft = `${horizon}px`;
  } else if (e.key === "ArrowRight") {
    // right arrow fonctionne
    horizon += moveHorizon;
    document.getElementsByClassName(
      "disk"
    )[0].style.marginLeft = `${horizon}px`;
  }
});
