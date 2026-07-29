alert("Script Loaded!");

const windTiles = ["東", "南", "西", "北"];

// Shuffle (Fisher–Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(windTiles);

let currentPlayer = 1;
let nextWind = 0;

const playerLabel = document.querySelector(".player.bottom");
playerLabel.textContent = "Player 1 - Choose a Wind Tile";

const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {

    tile.addEventListener("click", () => {

        // Ignore already revealed tiles
        if (tile.dataset.revealed) return;

        tile.dataset.revealed = "true";

        tile.style.display = "flex";
        tile.style.alignItems = "center";
        tile.style.justifyContent = "center";
        tile.style.fontSize = "72px";
        tile.style.fontWeight = "bold";

        tile.textContent = windTiles[nextWind];

        nextWind++;

        if (currentPlayer < 4) {
            currentPlayer++;
            playerLabel.textContent =
                `Player ${currentPlayer} - Choose a Wind Tile`;
        } else {
            playerLabel.textContent = "Wind Draw Complete";
        }

    });

});