// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//    Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                <h2> Mission Destination </h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src= ${imageUrl}>
    `
}


function validateInput(testInput) {

        if (testInput === "" || testInput === null)
        {
            return "Empty";
        
        }
        
        if (isNaN(testInput)) {
            return "Not a Number";
        }

        if (!isNaN(testInput)) {
            return "Is a number";
        }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // grab list elements from page
    let pilotStatus = document.getElementById("pilotStatus")
    console.log(pilot);
console.log(validateInput(pilot));
console.log(validateInput(copilot));
console.log(validateInput(fuelLevel));
console.log(validateInput(cargoLevel));
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
   }
   else if (validateInput(pilot) != ("Not a Number") || validateInput(copilot) != ("Not a Number") || validateInput(fuelLevel) != ("Is a number") || validateInput(cargoLevel) != ("Is a number")) {
    alert("Make sure to enter valid information for each field!")
//test for correct data types
   } else  {

    if (fuelLevel <= 10000) {
        console.log("within 55") 
        document.getElementById("launchStatus").style.visibility = "visible";
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").style.visibility = "visible";
        document.getElementById("cargoStatus").style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";
        fuelStatus.innerHTML = ("Fuel level is not high enough for launch");
        launchStatus.innerHTML = ("Shuttle is not ready for launch.");


    }

    else if (cargoLevel >= 10000){
        document.getElementById("launchStatus").style.visibility = "visible"
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";
        cargoStatus.innerHTML = ("Cargo mass is not low enough for launch")
        launchStatus.innerHTML = ("Shuttle is not ready for launch.");

    }
    else {

    console.log(pilotStatus);
//data is valid, update page
    document.getElementById("launchStatus").style.visibility = "visible";
    launchStatus.innerHTML = ("Shuttle is ready for launch.");
    document.getElementById("launchStatus").style.color = "green";

    document.getElementById("pilotStatus").style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot Name: ${pilot} is ready for launch.`;

    document.getElementById("copilotStatus").style.visibility = "visible";
    copilotStatus.innerHTML = (`Copilot Name: ${copilot} is ready for launch`);

    document.getElementById("fuelStatus").style.visibility = "visible";

    document.getElementById("cargoStatus").style.visibility = "visible";

   }
   }
   
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json();
    } );

    return planetsReturned;
}


function pickPlanet(planets) {
    let numGen = Math.floor(Math.random() * planets.length);
    return planets[numGen];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
