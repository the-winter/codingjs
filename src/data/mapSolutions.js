/** --- solutions --- **/

let solutions = {};

solutions.mapBully = function (someMap) {
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
    someMap.set("a", "");
  }
  return someMap;
}

 module.exports = solutions;