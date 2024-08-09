const gravityFactors = require('./gravityFactors.js');

function calculateJump(earthJumpHeight, gravityFactors) {
    let jumpHeights = {};
    for (let planet in gravityFactors) {
        jumpHeights[planet] = parseFloat((earthJumpHeight * gravityFactors[planet]).toFixed(2));
    }
    return jumpHeights;
}

global.exports = calculateJump;