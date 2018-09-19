var circle = {
  name: "fsdfs",
  color: "red",
  coordonnees: {
    axeY: 54,
    axeX: 56
  }
};

//step 1

var init = function() {
  document.getElementsByClassName(
    "chosenName"
  )[0].innerHTML = document.getElementById("name").value;
  document.getElementsByClassName(
    "disk"
  )[0].style.background = document.getElementById("colordisk").value;
};

document.getElementById("start").addEventListener("click", init);

//step 2 AND 3

var y = 0;
var x = 0;
var SPEED = 1;

var move = function(e) {
  if (e.key === "ArrowUp") {
    // up arrow
    if (y !== 0) {
      y -= SPEED;
      document.getElementsByClassName("disk")[0].style.marginTop = `${y}px`;
    }
  } else if (e.key === "ArrowDown") {
    // down arrow fonctionne
    if (y !== 440) {
      y += SPEED;
      document.getElementsByClassName("disk")[0].style.marginTop = `${y}px`;
    }
  } else if (e.key === "ArrowLeft") {
    // left arrow
    if (x !== 0) {
      x -= SPEED;
      document.getElementsByClassName("disk")[0].style.marginLeft = `${x}px`;
    }
  } else if (e.key === "ArrowRight") {
    // right arrow fonctionne
    if (x !== 740) {
      x += SPEED;
      document.getElementsByClassName("disk")[0].style.marginLeft = `${x}px`;
    }
  }
};

window.addEventListener("keydown", move);
