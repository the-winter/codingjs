module.exports = [
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
    { question: 'The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.',
      title: 'QuizQuestions',
      name: 'fib',
      inputs: [
      "(0)",
      "(1)",
      "(2)",
      "(3)",
      "(4)",
      "(5)",
      "(6)",
      "(7)"
   ] },
];
