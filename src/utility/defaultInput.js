/** creates default input to start function **/
solutions = require("../solutions.js");

module.exports = function defaultInput(exerciseName){
  let solutionFullText = solutions[exerciseName].toString();
  try {
    let openingBracketLocation = solutionFullText.indexOf("(");
    let closingBracketLocation = solutionFullText.indexOf(")");
    let args = solutionFullText.substring(openingBracketLocation+1, closingBracketLocation);
    let argumentList = args.split(",");
    return argumentList.map((item, i) => item);
  }
  catch(e) {
    // should only fail if there's no arguments
    return "";
  }
}