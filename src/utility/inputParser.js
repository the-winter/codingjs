 /**
  * it converts nodingbat input (as stored) to js
  *     e.g. inputParser('(1,2)')=>[1,2]
  **/
module.exports = function inputParser(exercise, inputStr) {
  const argsWithoutParentheses = inputStr.slice(1, -1);
  
  let functionInput;

  //TODO: figure out how to make passing map data types work...
  // if (exercise.inputType === "map") {
  //   let tempArrayOfArgs = JSON.parse(argsWithoutParentheses);
  //   eval("functionInput = new Map(" + tempArrayOfArgs + ")");
  // }
  // else {
    try {
      let arrayOfArgs = '[' + argsWithoutParentheses + ']';
      eval("functionInput = " + arrayOfArgs);
    } catch (e) {
      functionInput = e.toString();
    }
  // }
  return functionInput;
}