var player = {
  name: "fsdfs",
  color: "red",
  coordinates: {
    y: 54,
    x: 56
  },
  size: 58
};

var ennemies = [
  {
    name: "ennemy1",
    size: 28,
    coordinates: {
      y: 54,
      x: 36
    }
  },
  {
    name: "ennemy2",
    size: 28,
    coordinates: {
      y: 34,
      x: 16
    }
  },
  {
    name: "ennemy3",
    size: 28,
    coordinates: {
      y: 14,
      x: 60
    }
  }
];

/*document.getElementsByClassName("disk")[0].style.width = `${
  ennemies[0].size
}px`;
document.getElementsByClassName("disk")[0].style.height = `${
  ennemies[0].size
}px`; */

//step 1

var initialize = function() {
  // initialize player
  document.getElementById("playzone").innerHTML =
    '<div class = "disk"><p class ="playerName"> </p> </div>';
  console.log(document.getElementsByClassName("playerName")[0]);
  document.getElementsByClassName("disk")[0].style.width = `${player.size}px`;
  document.getElementsByClassName("disk")[0].style.height = `${player.size}px`;

  // initialize circles => randomly if you want (bonus)

  document.getElementById("playzone").innerHTML = '<div class = "disk"></div>';
  document.getElementsByClassName("disk")[0].style.width = `${
    ennemies[0].size
  }px`;
  document.getElementsByClassName("disk")[0].style.height = `${
    ennemies[0].size
  }px`;
};

var playerInformations = function() {
  initialize();
  document.getElementsByClassName(
    "playerName"
  )[0].innerHTML = document.getElementById("nameInput").value;
  document.getElementsByClassName(
    "disk"
  )[0].style.background = document.getElementById("inputColorDisk").value;
};

document.getElementById("infos").addEventListener("click", playerInformations);

document.getElementById("infos").addEventListener("click", function(e) {
  console.log("lol");
});

//step 2 AND 3

//var y = 0;
//var x = 0;
var SPEED = 1;

var move = function(e) {
  if (e.key === "ArrowUp") {
    // up arrow
    if (circle.coordinates.y !== 0) {
      circle.coordinates.y -= SPEED;
      document.getElementsByClassName("disk")[0].style.marginTop = `${
        circle.coordinates.y
      }px`;
    }
  } else if (e.key === "ArrowDown") {
    // down arrow fonctionne
    if (circle.coordinates.y !== 450) {
      circle.coordinates.y += SPEED;
      document.getElementsByClassName("disk")[0].style.marginTop = `${
        circle.coordinates.y
      }px`;
    }
  } else if (e.key === "ArrowLeft") {
    // left arrow
    if (circle.coordinates.x !== 0) {
      circle.coordinates.x -= SPEED;
      document.getElementsByClassName("disk")[0].style.marginLeft = `${
        circle.coordinates.x
      }px`;
    }
  } else if (e.key === "ArrowRight") {
    // right arrow fonctionne
    if (circle.coordinates.x !== 750) {
      circle.coordinates.x += SPEED;
      document.getElementsByClassName("disk")[0].style.marginLeft = `${
        circle.coordinates.x
      }px`;
    }
  }
};

window.addEventListener("keydown", move);
