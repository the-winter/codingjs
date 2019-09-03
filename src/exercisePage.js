let $ = require("jquery");
let _ = require("lodash");
let ts = require("typescript"); 
let CodeMirror = require("codemirror-minified");

let exercises = require("./allExercisesIncludingHidden.js");
let solutions = require("./solutions.js");

let deParam = require("./utility/deParam.js");
let inputParser = require("./utility/inputParser.js");
let tableHeader = require("./utility/tableHeader.js");
let formatResults = require("./utility/formatResults.js");
let setInitialEditorContents = require("./utility/setInitialEditorContents.js");
let displayExampleRuns = require("./utility/displayExampleRuns.js");
let prettyPrintMap = require("./utility/prettyPrintMap.js");

let exerciseListeners = require("./listeners/exerciseListeners");
let keyboardShortcuts = require("./listeners/keyboardShortcuts");

require("../node_modules/codemirror-minified/mode/javascript/javascript.js");
require("../node_modules/codemirror-minified/addon/comment/comment.js");
require("../node_modules/codemirror-minified/addon/edit/matchbrackets.js");


// define codemirror editor to interact with code on page
let editor = CodeMirror.fromTextArea(document.getElementById("answer"), {
  lineNumbers: true,
  matchBrackets: true,
  mode: "text/typescript",
  extraKeys: {
    "Cmd-/": "toggleComment",
    "Ctrl-/": "toggleComment",
    Tab: (cm) => cm.execCommand("indentMore"),
    "Shift-Tab": (cm) => cm.execCommand("indentLess")
  }
});

// Work out which excercise to show
const urlParams = deParam(window.location.search);
const exerciseName = urlParams.name || exercises[0].name;
/** here we match the exerciseName (from querystring) to the problem in exercise obj**/
const exercise = exercises.filter(exercise => exercise.name == exerciseName)[0];

exerciseListeners(editor, exerciseName);
keyboardShortcuts(editor, exerciseName);

// display exercise page
$('#title').text(exercise.title);
$('#name').text(exercise.name);
$('#problem').text(exercise.question);

setInitialEditorContents(editor, exerciseName, exercise);
displayExampleRuns(exercise, exerciseName);

// show solution button if already solved
// if (localStorage.getItem(exerciseName) === "true") {
//   $('#show').css('visibility','visible');
// }


$('#solve').on('click', () => {
  $('tr').remove();
  $('#tests').append(tableHeader());
  const answer = editor.getValue();

  // whenever the user checks their solution, save the most recent version of their code to localStorage
  let exerciseCode = exerciseName + "-code";
  localStorage.setItem(exerciseCode, answer);

  let userCode;
  try {
    $(".errorMessage").text("");
    const jsAnswer = ts.transpile(answer);
    eval(`userCode=${jsAnswer}`);
    const inputs = exercise.inputs;

    let results = [];
    inputs.forEach((inputStr) => {
      const input = inputParser(exercise, inputStr);
      let result;
      let idealResult;

      // if the input is an array/object, make a copy to avoid user changing the passed version...
      let inputCopy = inputParser(exercise, inputStr);

      if (exercise.inputType === "map") {
        let formattedInput = prettyPrintMap(input, "parentheses");

        idealResult = solutions[exerciseName](input);
        result = userCode(inputCopy);

        let formattedMapIdealResult = prettyPrintMap(idealResult);
        let formattedMapUserResult = prettyPrintMap(result);

        $('#tests').append(formatResults(exerciseName, formattedInput, formattedMapIdealResult, formattedMapUserResult));
      }
      else {
        idealResult = solutions[exerciseName](...input);
        result = userCode(...inputCopy);
        $('#tests').append(formatResults(exerciseName, inputStr, idealResult, result));
      }

      let isCorrect = _.isEqual(result, idealResult);
      results.push(isCorrect);
    });

    if (results.every(isTrue)) {
      $('.congrats').text("100% Passing. Well Done!");
      localStorage[exerciseName] = "true";
    }
  } catch (theError) {
    $('.congrats').text("");
    $('th').remove();
    $('.errorMessage').text(theError);
  }
});

function isTrue(someValue) {
  return someValue === true;
}