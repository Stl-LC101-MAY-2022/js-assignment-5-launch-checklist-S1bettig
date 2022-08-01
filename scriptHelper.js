// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//    Here is the HTML formatting for our mission target div.

                // <h2> Mission Destination </h2>
                // <ol>
                //     <li>Name: ${name} </li>
                //     <li>Diameter: `${diameter}` </li>
                //     <li>Star: ${star}</li>
                //     <li>Distance from Earth: `${distance}` </li>
                //     <li>Number of Moons: `${moons}` </li>
                // </ol>
                // // <img src= ${`${imageUrl}`}>
    
}


function validateInput(testInput) {

        if (testInput == "" || testInput == null)
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
     if ((fuelLevel) <= 10000 || (cargoLevel) >= 10000) { 
        document.getElementById("launchStatus").style.visibility = "visible";
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").style.visibility = "visible";
        document.getElementById("cargoStatus").style.visibility = "visible";

    }
   } else  {

    console.log(pilotStatus);
    console.log("ready");
//data is valid, update page
    document.getElementById("launchStatus").style.visibility = "visible";

    document.getElementById("pilotStatus").style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot Name: ${pilot} is ready for launch.`;

    document.getElementById("copilotStatus").style.visibility = "visible";
    // copilotStatus.innerHTML = `Pilot Name: ${copilot} is ready for launch.`;

    document.getElementById("fuelStatus").style.visibility = "visible";

    document.getElementById("cargoStatus").style.visibility = "visible";


   }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        const div = document.getElementById("planets")
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
