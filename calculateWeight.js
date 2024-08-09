// require gravityFactors from "./gravityFactors.js"
const gravityFactors = require('./gravityFactors.js');
// create a function called calculateWeightOnPlanets

// pass an argument of earthWeight
function calculateWeightOnPlanets(earthWeight) {
    // inside the function initialize an empty object
    const planetWeights = {};
    // the object is called planetWeights
    // iterate over gravityFactors
    for (let planet in gravityFactors) {

        // assign a key, value pair to planetWeights for each iteration
        planetWeights[planet] = earthWeight * gravityFactors[planet]
        // the value of each key should be earthWeight times the value of the current
        // iteration of gravityFactors
        // Make sure the values are floats to two decimals
    }
    // return the planetWeights object from the function
    return planetWeights;
}
console.log(calculateWeightOnPlanets(100));
// console log the planetWeights assume the function
// is passed in an earthWeight of 100(kg)

// make a comment at the bottom of the script
// telling a user how to run the script from node
// run in the terminal `node calculateWeight.js`
