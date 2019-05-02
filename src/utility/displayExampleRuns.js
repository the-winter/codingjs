let $ = require("jquery");
let inputParser = require("./inputParser.js");
let solutions = require("../solutions.js");
let prettyPrintMap = require("./prettyPrintMap.js");

module.exports = function(exercise, exerciseName) {
    // example/sample runs
    for (let i = 0; i <= 2; i++) {
        try {
            let input = inputParser(exercise, exercise.inputs[i]);
            let result;
            if (exercise.inputType === "map") {
                // display syntax message
                if (i === 0) {
                    $('.examples').append(`<p><em>Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.</em></p>`);
                }

                result = solutions[exerciseName](input);
                let mapInput = new Map(input);
                let formattedInput = prettyPrintMap(mapInput, "parentheses");
                let formattedResult = prettyPrintMap(result);
                $('.examples').append(`<li>${exerciseName}${formattedInput} → ${formattedResult}</li>`);
            }
            else {
                result = solutions[exerciseName](...input);
                $('.examples').append(`<li>${exerciseName}${exercise.inputs[i]} → ${result}</li>`);
            }
        }
        catch(e){
            break;
        }
    }
}