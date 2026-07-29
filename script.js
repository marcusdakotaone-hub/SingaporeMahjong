const winds = ["東", "南", "西", "北"];

// Fisher–Yates Shuffle
for (let i = winds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [winds[i], winds[j]] = [winds[j], winds[i]];
}

let currentPlayer = 1;
let nextWind = 0;

const playerText = document.getElementById("playerText");
const instruction = document.getElementById("instruction");
const continueBtn = document.getElementById("continueBtn");

const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {

    tile.addEventListener("click", () => {

        // Ignore tiles already chosen
        if (tile.dataset.revealed === "true") return;

        tile.dataset.revealed = "true";

        tile.textContent = winds[nextWind];

        nextWind++;

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

    alert("Animal Draw coming in Sprint 6 🀄");

});