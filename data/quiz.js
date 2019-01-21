exercises.push(
  { question: 'Given an integer, n, return the sum of the positive integers n + (n-2) + (n-4) + ...    Note: Your solution must be recursive. In other words, there can be no for or while loops in your solution.',
    title: 'QuizQuestions',
    name: 'sumDownBy2',
  inputs: [
  "(7)",
  "(8)",
  "(0)",
  "(1)",
  "(-1)",
  "(10)",
  "(5)",
  "(-5)",
  "(50)",
  "(2)",
  "(3)"
] },
  { 
    title: 'QuizQuestions',
    name: 'makes8',
    question: 'Given 2 ints, a and b, return true if one if them is 8 or if their sum is 8.',
    inputs: [
      '(5, 8)',
      '(3, 8)',
      '(3, 4)',
      '(4, 4)',
      '(5, 2)',
      '(5, 3)',
      '(8, 7)',
      '(8, 8)',
      '(-16, 24)',
      '(9, 1)',
    ], 
  },
    {
      title: 'QuizQuestions',
      name: 'countOdds',
      inputs: [
        "([2, 1, 2, 3, 4])",
        "([2, 2, 0])",
        "([1, 3, 5])",
        "([])",
        "([11, 9, 0, 1])",
        "([2, 11, 9, 0])",
        "([2])",
        "([2, 5, 12])",
      ],
      question: `Return the number of odd integers in the given array. Note: the % "mod"
      operator computes the remainder, e.g. 5 % 2 is 1.`
    },
)

/** --- solutions --- **/

solutions.sumDownBy2 =  function (n) {
   if (n <= 0) {
       return 0;
   }
   else if (n === 1) {
     return 1;
   }
   else {
     return n + sumDownBy2(n-2);
   }
}


solutions.makes8 = function (a, b) {
  return ((a == 8 || b == 8) || (a + b == 8));
};

solutions.countEvens = function (nums) {
  let count = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i]%2 === 1){
            count += 1;
        }
    }
    return count;
}