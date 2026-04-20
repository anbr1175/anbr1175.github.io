const volumeValue = document.getElementById("volumeValue");
const gameArea = document.getElementById("gameArea");
const endButton = document.getElementById("endButton");
const finalMessage = document.getElementById("finalMessage");


let volume = 50;
let gameRunning = true;
let spawnInterval;

const changeOptions = [1,1,5,14,17,-19,30,-31,11,-14,-7,8]

function spawnButton() {
    if (!gameRunning) return;

    const btn = document.getElementById("button");
    btn.classList.add("mole-btn");

    const randomChange = changeOptions[Math.floor(Math.random() * changeOptions.length)];
    btn.textContent = randomChange > 0 ? `+${randomChange}` : `${randomChange}`;
}

spawnInterval = setInterval(() => {
    spawnButton();
    spawnButton();
    spawnButton();
},700);