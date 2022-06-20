
"use strict";

let heightInput = document.getElementById("height");
let heightUnits = document.getElementById("unit");
let resultText = document.getElementById("resultText");
let mainbutton = document.getElementById("mainbutton");
let resultBox = document.getElementById("resultbox");
let mainbox = document.getElementById("mainbox");
let closeBtn = document.getElementById("close");

mainbutton.addEventListener('click', function() {
    resultText.innerText = `Your height is ${heightInput.value} ${heightUnits.value}!`;
    mainbox.style.display = "none";
    resultBox.style.display = "flex";
    if(heightUnits.value == "metr" && heightInput.value == 230) {
        resultText.innerText = `Your height is ${heightInput.value} ${heightUnits.value} like the Pyramid of Cheops!`;
    }
    if(heightUnits.value == "metr" && heightInput.value == 324) {
        resultText.innerText = `Your height is ${heightInput.value} ${heightUnits.value} like the Eiffel Tower!`;
    }
    if(heightUnits.value == "" && heightInput.value != "") {
        let random = getRandomInt(1, 4);
        if(random == 1) {
            heightUnits.value = "cm";
        }
        if(random == 2) {
            heightUnits.value = "mm";
        }
        if(random == 3) {
            heightUnits.value = "metr";
        }
        if(random == 4) {
            heightUnits.value = "ft";
        }
        resultText.innerText = `Your height is ${heightInput.value} ${heightUnits.value}!`;
    }
    if(heightInput.value == 0 || heightInput.value < 0 || heightInput.value == null) {
        resultText.innerText = "Your height cannot be zero";
    }
})

closeBtn.addEventListener('click', function() {
    resultText.innerText = "";
    mainbox.style.display = "flex";
    resultBox.style.display = "none";
    heightInput.value = null;
    heightUnits.value = null;
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
