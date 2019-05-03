// function to show the Map data type in a user-friendly way
//  - without doing something like this, it just shows up as Object()

let _ = require("lodash");

function prettyPrintMap(theMap, style="no_parentheses") {
  let formattedMapResult = "";
  if (style == "parentheses") {
    formattedMapResult = "(";
  }
  formattedMapResult = formattedMapResult + "{";
  
  //check if it is an empty map
  let emtpyMap = new Map();
  let isEmpty = _.isEqual(theMap, emtpyMap);
  if (!isEmpty) {
    for (let item of theMap) {
      formattedMapResult += `'${item[0]}': '${item[1]}', `;
    }
  
    formattedMapResult = formattedMapResult.slice(0, -2);    
  }
  
  formattedMapResult = formattedMapResult + "}";

  if (style == "parentheses") {
    formattedMapResult = formattedMapResult +  ")";
  }
  return formattedMapResult;
}

module.exports = prettyPrintMap;
