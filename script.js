const winds = ["東", "南", "西", "北"];

// Shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(winds);

let currentPlayer = 1;
let currentWind = 0;

const playerText = document.getElementById("playerText");
const instruction = document.getElementById("instruction");
const continueBtn = document.getElementById("continueBtn");

const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {

  tile.addEventListener("click", () => {

    // Ignore already revealed tiles
    if (tile.dataset.revealed === "true") return;

    tile.dataset.revealed = "true";

    tile.textContent = winds[currentWind];
    tile.style.fontSize = "80px";

    currentWind++;

    if (currentPlayer < 4) {

      currentPlayer++;

      playerText.textContent = `Player ${currentPlayer}`;
      instruction.textContent = "Choose a Wind Tile";

    } else {

      playerText.textContent = "Wind Draw Complete";
      instruction.textContent = "Tap Continue";

      continueBtn.hidden = false;

    }

  });

});

continueBtn.addEventListener("click", () => {

  const animals = [
    "Cat",
    "Rat",
    "Rooster",
    "Centipede"
  ];

  shuffle(animals);

  playerText.textContent = "Animal Draw";
  instruction.textContent = "Results";

  tiles.forEach((tile, index) => {

    tile.textContent = animals[index];
    tile.style.fontSize = "32px";
    tile.dataset.revealed = "false";

  });

  continueBtn.hidden = true;

});