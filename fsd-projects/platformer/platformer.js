$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(150, 300, 100, 50, "purple");
    createPlatform(800, 370, 50, 25, "blue");
    createPlatform(450, 400, 50, 100, "green");
    createPlatform(600, 625, 200, 115, "red");
    createPlatform(1000, 500, 200, 50, "yellow");

    // TODO 3 - Create Collectables
    createCollectable("steve", 800, 328, 0,3, 0.9);
    createCollectable("diamond", 680, 500, 0.3, 0.9);
    createCollectable("max", 180, 255);

    // TODO 4 - Create Cannons
    createCannon("right", 650, 1000);

    createCannon("right", 400,1000);
    createCannon("bottom", 250, 500);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
