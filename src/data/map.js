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
  { question: 'Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that same value. In all cases remove the key "c", leaving the rest of the map unchanged.',
    title: 'Map-1',
    name: 'mapShare',
    inputType: "map",
    inputs: [
    '([["a", "aaa"], ["b", "bbb"], ["c", "ccc"]])',
    '([["b", "xyz"], ["c", "ccc"]])',
    '([["a", "aaa"], ["c", "meh"], ["d", "hi"]])',
    '([["a", "xyz"], ["b", "1234"], ["c", "yo"], ["z", "zzz"]])',
    '([["a", "xyz"], ["b", "1234"], ["c", "yo"], ["d", "ddd"], ["e", "everything"]])'
  ] },
  { question: 'Modify and return the given map as follows: for this problem the map may or may not contain the "a" and "b" keys. If both keys are present, append their 2 string values together and store the result under the key "ab".',
    title: 'Map-1',
    name: 'mapAB',
    inputType: "map",
    inputs: [
    '([["a", "Hi"], ["b", "There"]])',
    '([["a", "Hi"]])',
    '([["b", "There"]])',
    '([["c", "meh"]])',
    '([["a", "aaa"], ["ab", "nope"], ["b", "bbb"], ["c", "ccc"]])',
    '([["ab", "nope"], ["b", "bbb"], ["c", "ccc"]])'
  ] },
];
