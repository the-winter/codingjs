/** creates default input to start function **/
solutions = require("../solutions.js");

function defaultInput(exName){
  let sol = solutions[exName].toString();
  try {
    let x = sol.match(/function ?(\(.+\))/)[1];
    let y = x.slice(1,-1);
    let z = y.split(",");
    return z.map((item, i) => item);
  }
  catch(e) {
    // should only fail if there's no arguments
    return "";
  }
}

module.exports = defaultInput;

// function defaultInput(inputStr) {
//   z = inputParser(inputStr)
//   let inps = z.map((item, i) => 'input'+(i+1));
//   return inps;
// }
// exercise.inputs[0]  this is the input to function when called
