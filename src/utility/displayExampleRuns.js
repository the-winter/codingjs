let $ = require("jquery");
let inputParser = require("./inputParser.js");
let solutions = require("../solutions.js");

module.exports = function(exercise, exerciseName) {
    // example/sample runs
    for (let i = 0; i <= 2; i++) {
        try {
            let input = inputParser(exercise, exercise.inputs[i]);
            let result;
            if (exercise.inputType === "map") {
                result = solutions[exerciseName](input);
            }
            else {
                result = solutions[exerciseName](...input);
            }
            // console.log(result)
            $('.examples').append(`<li>${exerciseName}${exercise.inputs[i]} → ${result}</li>`);
        }
        catch(e){
            break;
        }
    }
}