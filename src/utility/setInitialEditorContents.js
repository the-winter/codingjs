let defaultInput = require("./defaultInput.js");

module.exports = function (editor, exerciseName, exercise) {
    let exerciseCode = exerciseName + "-code";
    if (localStorage.getItem(exerciseCode)) {
        //load previous solution from localStorage, if possible
        editor.setValue(localStorage.getItem(exerciseCode));
    } else {
        // no previous solution, just display the default...
        editor.setValue('function ' + exercise.name + '(' + defaultInput(exercise.name) + '){\n  \n}');
        editor.focus();
        editor.setCursor({
            line: 1,
            ch: 2
        });
    }
};