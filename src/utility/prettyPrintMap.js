// function to show the Map data type in a user-friendly way
//  - without doing something like this, it just shows up as Object()

function prettyPrintMap(theMap, style="no_parentheses") {
  let formattedMapResult = "";
  if (style == "parentheses") {
    formattedMapResult = "(";
  }
  // console.log(theMap);
  for (let item of theMap) {
    // console.log(item);
    formattedMapResult = formattedMapResult + "{'" + item[0] + "': '" + item[1] + "'}";
  }
  if (style == "parentheses") {
    formattedMapResult = formattedMapResult +  ")";
  }
  return formattedMapResult;
}

module.exports = prettyPrintMap;
