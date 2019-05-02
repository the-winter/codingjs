/** --- solutions --- **/

let solutions = {};

solutions.mapBully = function (someMap) {
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
    someMap.set("a", "");
  }
  return someMap;
}

solutions.mapShare = function (someMap) {
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
  }
  someMap.delete("c");
  return someMap;
}

solutions.mapAB = function (someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    let combinedString = someMap.get("a") + someMap.get("b");
    someMap.set("ab", combinedString);
  }
  return someMap;
}

 module.exports = solutions;