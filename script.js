// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");

// const { pickPlanet, myFetch } = require("./scriptHelper");

// const { formSubmission, validateInput, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch(); 
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let myPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, myPlanet.name, myPlanet.diameter, myPlanet.star, myPlanet.distance, myPlanet.moons, myPlanet.image);    
   })

   let form = document.querySelector("form");
   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";

   form.addEventListener("submit", function(event) {

    event.preventDefault();
    let pilotName = document.querySelector("input[name=pilotName]").value;

    let coPilotName = document.querySelector("input[name=copilotName]").value;
    
    let fuelLevelAmt = document.querySelector("input[name=fuelLevel]").value;

    let cargoMassAmt = document.querySelector("input[name=cargoMass]").value;
    
    formSubmission(document, list, pilotName, coPilotName, Number(fuelLevelAmt), Number(cargoMassAmt));
   });
   
});