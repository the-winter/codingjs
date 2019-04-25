module.exports = [
  { question: 'Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that value, and set the key "a" to have the value "". Basically "b" is a bully, taking the value and replacing it with the empty string.',
    title: 'Map-1',
    name: 'mapBully',
    inputType: "map",
  inputs: [
  '([["a", "candy"], ["b", "dirt"]])',
  '([["a", "candy"]])',
  '([["a", "candy"], ["b", "carrot"], ["c", "meh"]])',
  '([["b", "carrot"]])',
  '([["c", "meh"]])',
  '([["a", "sparkle"], ["c", "meh"]])'
] },
];
