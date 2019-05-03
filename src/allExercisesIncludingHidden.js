
let displayedExercises = require("./exercisesToShowOnIndex.js");
let quizExercises = require("./data/quiz.js");

let exercises = [...displayedExercises, ...quizExercises];

module.exports = exercises;