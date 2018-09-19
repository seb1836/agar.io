// TODO : rename 
var circle = {
  name: "fsdfs",
  color: "red",
  coordonnees: {
    axeY: 54,
    axeX: 56
  }
};

// TODO : create an array of circles
// Note : all circles (and the player) should have the same CSS class with no dimension, the dimensions are handled by the JS

// step 1

// TODO : create a new init function to init the playzone
// with all the circles and the player
// Note : don't forget to call the function 
var initialize = function() {
  // initialize player
  // initialize circles => randomly if you want (bonus)
}

// TODO : change the name of this function
// use a better naming
var init = function() {
  document.getElementsByClassName(
    "chosenName"
  )[0].innerHTML = document.getElementById("name").value;
  document.getElementsByClassName(
    "disk"
  )[0].style.background = document.getElementById("colordisk").value;
};

document.getElementById("start").addEventListener("click", init);
// document.getElementById('name').addEventListener('change', onChangeName);

// step 2 AND 3

var y = 0;
var x = 0;
var SPEED = 10;

// TODO : remove hard-coded values (ex: 450) and use player's dimensions to calculate the new position
var move = function(e) {
  if (e.key === "ArrowUp") {
    // up arrow
    if (y !== 0) {
      y -= SPEED;
      document.getElementsByClassName("disk")[0].style.marginTop = `${y}px`;
    }
  } else if (e.key === "ArrowDown") {
    // down arrow fonctionne
    if (y <= 450) {
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
    if (x !== 750) {
      x += SPEED;
      document.getElementsByClassName("disk")[0].style.marginLeft = `${x}px`;
    }
  }
};

window.addEventListener("keydown", move);

// STEP 4 : initialize the map with all the circles (cf TODOs above)

// STEP 5 : console.log when you the player hits a litte circle

// STEP 6 : remove the circle from the playzone when the player hits it

// STEP 7 : enlarge the player when it hits a circle taking the circle's size into account

// STEP 8 : handle a continous movement of the player
// If you press an arrow key, the player keeps moving in the desired direction
// until another arrow key is pressed or it hits a wall
