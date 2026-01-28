let currentScene = 0;

function nextScene() {
    const scenes = document.querySelectorAll(".scene");
    scenes[currentScene].classList.remove("active");
    currentScene++;

    if (currentScene < scenes.length) {
        scenes[currentScene].classList.add("active");
    }
}

let noCount = 0;

function noClicked() {
    const yesBtn = document.getElementById("yesBtn");
    noCount++;

    let scaleValue = 1 + noCount * 0.15;
    yesBtn.style.transform = `scale(${scaleValue})`;

    const colors = ["#c8a2c8", "#b57edc", "#9b6bcc", "#7f4db3"];
    yesBtn.style.background = colors[noCount % colors.length];
}

function yesClicked() {
    nextScene();
}
function goToFirst() {
    const scenes = document.querySelectorAll(".scene");
    scenes[currentScene].classList.remove("active");
    currentScene = 0;
    scenes[currentScene].classList.add("active");
}