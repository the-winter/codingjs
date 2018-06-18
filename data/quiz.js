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
] }
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
