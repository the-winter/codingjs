// TODO:0 add solutions from jsfiddle


const solutions = {};
solutions.scoresIncreasing = function scoresIncreasing(scores) {
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] != scores[i - 1] && scores[i] < scores[i - 1]) {
      return false;
    }
  }
  return true;
};

solutions.scores100 = function scoresIncreasing(scores) {
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] != scores[i - 1] && scores[i] < scores[i - 1]) {
      return false;
    }
  }
  return true;
};

// Java > Warm-up1 > diff21
// Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.
solutions.diff21 = function (n) {
  if (n <= 21) {
    return 21 - n;
  } else {
    return (n - 21) * 2;
  }
};
