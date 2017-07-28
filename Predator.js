console.log ("Predator.js");

var Predator = (function () {

  return {
    loadCarnivores: function (callbackFunction) {
    var carnloader = new XMLHttpRequest();
    carnloader.addEventListener("load", function () {
        // Set the value of the private array
  		console.log ("carnivores have loaded");
        var carnivoresObject = JSON.parse(this.responseText);
  		var carnivoresArray = [];

  		carnivoresObject.forEach(function(item) {
  			var singleCarnivore = item.animal;
  			carnivoresArray.push(singleCarnivore);
  		});
        // console.log(carnivoresArray);
        showCarnivores(carnivoresArray);
      });
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
		carnloader.open("GET", "carnivores.json");
		carnloader.send();
    },

    loadHerbivores: function (callbackFunction) {
    var herbloader = new XMLHttpRequest();
    herbloader.addEventListener("load", function () {
        // Set the value of the private array
  		console.log ("herbivores have loaded");
  		var herbivoresObject = JSON.parse(this.responseText);
  		var herbivoresArray = [];
        
  		herbivoresObject.forEach(function(item) {
  			var singleHerbivore = item.animal;
  			herbivoresArray.push(singleHerbivore);
  		});
        // console.log(herbivoresArray);
        showHerbivores(herbivoresArray);
      });
    	// Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
		herbloader.open("GET", "herbivores.json");
		herbloader.send();
    }
  }
})();