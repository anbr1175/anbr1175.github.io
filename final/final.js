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

    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;

    const btnWidth = 80;
    const btnHeight = 80;

    const randomX = Math.random() * (areaWidth - btnWidth);
    const randomY = Math.random() * (areaHeight - btnHeight);
    
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;

    btn.addEventListener("click", () => {
        volume += randomChange;
        if (volume > 100) volume = 100;
        if (volume < 0) volume = 0;

        volumeValue.textContent = volume;
        btn.remove();
    });

    gameArea.appendChild(btn);

    setTimeout (() => {
        if (btn.parentElement){
            btn.remove();
        }
    },800);
}

spawnInterval = setInterval(() => {
    spawnButton();
    spawnButton();
    spawnButton();
},700);

endButton.addEventListener("click", () => {
    gameRunning = false;
    clearInterval(spawnInterval);
    gameArea.innerHTML = "";
    finalMessage.textContent = `You ended with a volume of ${volume}%.`;
});