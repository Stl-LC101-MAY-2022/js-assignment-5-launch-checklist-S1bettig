// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

                // <h2>Mission Destination</h2>
                // <ol>
                //     <li>Name: </li>
                //     <li>Diameter: </li>
                //     <li>Star: ${star}</li>
                //     <li>Distance from Earth: </li>
                //     <li>Number of Moons: </li>
                // </ol>
                // <img src="">

}


function validateInput(testInput) {

        if (testInput == "" || testInput == null)
        {
            return ("Empty");
        
        }
        
        if (typeof testInput == "number") {
            return ("Is a number");
        }

        if (typeof testInput == "string") {
            return ("Not a Number");
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
    alert("Make sure to enter valid information for each field!");
//test for correct data types
   } else  {
    console.log("ready");
//data is valid, update page
    list.style.visibilty = "visible";
    pilotStatus.innerHTML = `Pilot Name: ${pilot} is ready for launch.`
   }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
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
