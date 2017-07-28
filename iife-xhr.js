console.log ("iife-xhr.js");

let carnivoreDiv = document.getElementById("carnivoresInner");
let herbivoreDiv = document.getElementById("herbivoresInner");


function showCarnivores (carnivoresArray) {
	for (let i = 0; i < carnivoresArray.length; i++) {
		carnivoreDiv.innerHTML += `<p><strong>${carnivoresArray[i]}</strong></p>`
	};
}

function showHerbivores (herbivoresArray) {
	for (let i = 0; i < herbivoresArray.length; i++) {
		herbivoreDiv.innerHTML += `<p><strong>${herbivoresArray[i]}</strong></p>`
	};
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);