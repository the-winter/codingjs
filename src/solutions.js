let warmupSolutions = require("./data/warmupSolutions.js");
let stringSolutions = require("./data/stringSolutions.js");
let recursionSolutions = require("./data/recursionSolutions.js");
let logicSolutions = require("./data/logicSolutions.js");
let arraySolutions = require("./data/arraySolutions.js");
let apSolutions = require("./data/apSolutions.js");
let mapSolutions = require("./data/mapSolutions.js");
let quizSolutions = require("./data/quizSolutions.js");

// this ES2018 spread syntax was causing browserify problems, so I replaced it below...
// let solutions = {...warmupSolutions, ...stringSolutions };

/** There's no limit to the number of objects you can merge.
 *  All objects get merged into the first object. 
 *  Only the object in the first argument is mutated and returned.
 *  Later properties overwrite earlier properties with the same name. */
let solutions = Object.assign({}, 
    warmupSolutions, 
    stringSolutions,
    recursionSolutions,
    logicSolutions,
    arraySolutions,
    apSolutions,
    mapSolutions,
    quizSolutions
    );

module.exports = solutions;