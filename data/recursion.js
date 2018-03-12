exercises.push(
  { question: 'Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).',
    title: 'Recursion-1',
    name: 'factorial',
  inputs: [
  "(1)",
  "(2)",
  "(3)",
  "(4)",
  "(5)",
  "(6)",
  "(7)",
  "(8)",
  "(12)"
] },
  { question: 'We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).',
    title: 'Recursion-1',
    name: 'bunnyEars',
    inputs: [
  "(0)",
  "(1)",
  "(2)",
  "(3)",
  "(4)",
  "(5)",
  "(12)",
  "(50)",
  "(234)"
] },
  { question: 'The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.',
    title: 'Recursion-1',
    name: 'fibonacci',
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
  { question: 'We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we\'ll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).',
    title: 'Recursion-1',
    name: 'bunnyEars2',
    inputs: [
  "(0)",
  "(1)",
  "(2)",
  "(3)",
  "(4)",
  "(5)",
  "(6)",
  "(10)"
] },
  { question: 'We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.',
    title: 'Recursion-1',
    name: 'triangle',
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
  { question: 'Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).',
    title: 'Recursion-1',
    name: 'sumDigits1',
    inputs: [
  "(126)",
  "(49)",
  "(12)",
  "(10)",
  "(1)",
  "(0)",
  "(730)",
  "(1111)",
  "(11111)",
  "(10110)",
  "(235)"
] },
  { question: 'Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).',
    title: 'Recursion-1',
    name: 'count7',
    inputs: [
  "(717)",
  "(7)",
  "(123)",
  "(77)",
  "(7123)",
  "(771237)",
  "(771737)",
  "(47571)",
  "(777777)",
  "(70701277)",
  "(777576197)",
  "(99999)",
  "(99799)"
] },
  { question: 'Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).',
    title: 'Recursion-1',
    name: 'count8',
    inputs: [
  "(8)",
  "(818)",
  "(8818)",
  "(8088)",
  "(123)",
  "(81238)",
  "(88788)",
  "(8234)",
  "(2348)",
  "(23884)",
  "(0)",
  "(1818188)",
  "(8818181)",
  "(1080)",
  "(188)",
  "(88888)",
  "(9898)",
  "(78)"
] },
  { question: 'Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).',
    title: 'Recursion-1',
    name: 'powerN',
    inputs: [
  "(3, 1)",
  "(3, 2)",
  "(3, 3)",
  "(2, 1)",
  "(2, 2)",
  "(2, 3)",
  "(2, 4)",
  "(2, 5)",
  "(10, 1)",
  "(10, 2)",
  "(10, 3)"
] },
  { question: 'Given a string, compute recursively (no loops) the number of lowercase \'x\' chars in the string.',
    title: 'Recursion-1',
    name: 'countX',
    inputs: [
  "('xxhixx')",
  "('xhixhix')",
  "('hi')",
  "('h')",
  "('x')",
  "('')",
  "('hihi')",
  "('hiAAhi12hi')"
] },
  { question: 'Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.',
    title: 'Recursion-1',
    name: 'countHi',
    inputs: [
  "('xxhixx')",
  "('xhixhix')",
  "('hi')",
  "('hihih')",
  "('h')",
  "('')",
  "('ihihihihih')",
  "('ihihihihihi')",
  "('hiAAhi12hi')",
  "('xhixhxihihhhih')",
  "('ship')"
] },
  { question: 'Given a string, compute recursively (no loops) a new string where all the lowercase \'x\' chars have been changed to \'y\' chars.',
    title: 'Recursion-1',
    name: 'changeXY',
    inputs: [
  "('codex')",
  "('xxhixx')",
  "('xhixhix')",
  "('hiy')",
  "('h')",
  "('x')",
  "('')",
  "('xxx')",
  "('yyhxyi')",
  "('hihi')"
] },
  { question: 'Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".',
    title: 'Recursion-1',
    name: 'changePi',
    inputs: [
  "('xpix')",
  "('pipi')",
  "('pip')",
  "('pi')",
  "('hip')",
  "('p')",
  "('x')",
  "('')",
  "('pixx')",
  "('xyzzy')"
] },
  { question: 'Given a string, compute recursively a new string where all the \'x\' chars have been removed.',
    title: 'Recursion-1',
    name: 'noX',
    inputs: [
  "('xaxb')",
  "('abc')",
  "('xx')",
  "('')",
  "('axxbxx')",
  "('Hellox')"
] },
  { question: 'Given an array of ints, compute recursively if the array contains a 6. We\'ll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.',
    title: 'Recursion-1',
    name: 'array6',
    inputs: [
  "([1, 6, 4], 0)",
  "([1, 4], 0)",
  "([6], 0)",
  "([], 0)",
  "([6, 2, 2], 0)",
  "([2, 5], 0)",
  "([1, 9, 4, 6, 6], 0)",
  "([2, 5, 6], 0)"
] },
  { question: 'Given an array of ints, compute recursively the number of times that the value 11 appears in the array. We\'ll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.',
    title: 'Recursion-1',
    name: 'array11',
    inputs: [
  "([1, 2, 11], 0)",
  "([11, 11], 0)",
  "([1, 2, 3, 4], 0)",
  "([1, 11, 3, 11, 11], 0)",
  "([11], 0)",
  "([1], 0)",
  "([], 0)",
  "([11, 2, 3, 4, 11, 5], 0)",
  "([11, 5, 11], 0)"
] },
  { question: 'Given an array of ints, compute recursively if the array contains somewhere a value followed in the array by that value times 10. We\'ll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.',
    title: 'Recursion-1',
    name: 'array220',
    inputs: [
  "([1, 2, 20], 0)",
  "([3, 30], 0)",
  "([3], 0)",
  "([], 0)",
  "([3, 3, 30, 4], 0)",
  "([2, 19, 4], 0)",
  "([20, 2, 21], 0)",
  "([20, 2, 21, 210], 0)",
  "([2, 200, 2000], 0)",
  "([0, 0], 0)",
  "([1, 2, 3, 4, 5, 6], 0)",
  "([1, 2, 3, 4, 5, 50, 6], 0)",
  "([1, 2, 3, 4, 5, 51, 6], 0)",
  "([1, 2, 3, 4, 4, 50, 500, 6], 0)"
] },
  { question: 'Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".',
    title: 'Recursion-1',
    name: 'allStar',
    inputs: [
  "('hello')",
  "('abc')",
  "('ab')",
  "('a')",
  "('')",
  "('3.14')",
  "('Chocolate')",
  "('1234')"
] },
  { question: 'Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".',
    title: 'Recursion-1',
    name: 'pairStar',
    inputs: [
  "('hello')",
  "('xxyy')",
  "('aaaa')",
  "('aaab')",
  "('aa')",
  "('a')",
  "('')",
  "('noadjacent')",
  "('abba')",
  "('abbba')"
] },
  { question: 'Given a string, compute recursively a new string where all the lowercase \'x\' chars have been moved to the end of the string.',
    title: 'Recursion-1',
    name: 'endX',
    inputs: [
  "('xxre')",
  "('xxhixx')",
  "('xhixhix')",
  "('hiy')",
  "('h')",
  "('x')",
  "('xx')",
  "('')",
  "('bxx')",
  "('bxax')",
  "('axaxax')",
  "('xxhxi')"
] },
  { question: 'We\'ll say that a "pair" in a string is two instances of a char separated by a char. So "AxA" the A\'s make a pair. Pair\'s can overlap, so "AxAxA" contains 3 pairs -- 2 for A and 1 for x. Recursively compute the number of pairs in the given string.',
    title: 'Recursion-1',
    name: 'countPairs',
    inputs: [
  "('axa')",
  "('axax')",
  "('axbx')",
  "('hi')",
  "('hihih')",
  "('ihihhh')",
  "('ihjxhh')",
  "('')",
  "('a')",
  "('aa')",
  "('aaa')"
] },
  { question: 'Count recursively the total number of "abc" and "aba" substrings that appear in the given string.',
    title: 'Recursion-1',
    name: 'countAbc',
    inputs: [
  "('abc')",
  "('abcxxabc')",
  "('abaxxaba')",
  "('ababc')",
  "('abxbc')",
  "('aaabc')",
  "('hello')",
  "('')",
  "('ab')",
  "('aba')",
  "('aca')",
  "('aaa')"
] },
  { question: 'Given a string, compute recursively (no loops) the number of "11" substrings in the string. The "11" substrings should not overlap.',
    title: 'Recursion-1',
    name: 'count11',
    inputs: [
  "('11abc11')",
  "('abc11x11x11')",
  "('111')",
  "('1111')",
  "('1')",
  "('')",
  "('hi')",
  "('11x111x1111')",
  "('1x111')",
  "('1Hello1')",
  "('Hello')"
] },
  { question: 'Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".',
    title: 'Recursion-1',
    name: 'stringClean',
    inputs: [
  "('yyzzza')",
  "('abbbcdd')",
  "('Hello')",
  "('XXabcYY')",
  "('112ab445')",
  "('Hello Bookkeeper')"
] },
  { question: 'Given a string, compute recursively the number of times lowercase "hi" appears in the string, however do not count "hi" that have an \'x\' immedately before them.',
    title: 'Recursion-1',
    name: 'countHi2',
    inputs: [
  "('ahixhi')",
  "('ahibhi')",
  "('xhixhi')",
  "('hixhi')",
  "('hixhhi')",
  "('hihihi')",
  "('hihihix')",
  "('xhihihix')",
  "('xxhi')",
  "('hixxhi')",
  "('hi')",
  "('xxxx')",
  "('h')",
  "('x')",
  "('')",
  "('Hellohi')"
] },
  { question: 'This question is modified from parenBit on CodingBat to starBit. Given a string that contains a dash and a star, compute recursively a new string made of only of the dash and star and their contents, so "xyz-abc*123" yields "-abc*".',
    title: 'Recursion-1',
    name: 'starBit',
    inputs: [
      "('xyz,-abc*123')",
      "('x,-hello*')",
      "(',-xy*1')",
      "('not really ,-possible*')",
      "(',-abc*')",
      "(',-abc*xyz')",
      "(',-abc*x')",
      "(',-x*')",
      "(',-)*')",
      "('res ,-ipsa* loquitor')",
      "('hello,-not really*there')",
      "('ab,-ab*ab')"
] },
  { question: 'Given a string, return true if it is a nesting of zero or more pairs of parenthesis, like "(())" or "((()))". Suggestion: check the first and last chars, and then recur on what\'s inside them.',
    title: 'Recursion-1',
    name: 'nestParen',
    inputs: [
    "('(())')",
    "('((()))')",
    "('(((x))')",
    "('((())')",
    "('((()()')",
    "('()')",
    "('')",
    "('(yy)')",
    "('(())')",
    "('(((y))')",
    "('((y)))')",
    "('((()))')",
    "('(())))')",
    "('((yy())))')",
    "('(((())))')"
    ] },
  { question: 'Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping.',
    title: 'Recursion-1',
    name: 'strCount',
    inputs: [
  "('catcowcat', 'cat')",
  "('catcowcat', 'cow')",
  "('catcowcat', 'dog')",
  "('cacatcowcat', 'cat')",
  "('xyx', 'x')",
  "('iiiijj', 'i')",
  "('iiiijj', 'ii')",
  "('iiiijj', 'iii')",
  "('iiiijj', 'j')",
  "('iiiijj', 'jj')",
  "('aaabababab', 'ab')",
  "('aaabababab', 'aa')",
  "('aaabababab', 'a')",
  "('aaabababab', 'b')"
] },
  { question: 'Given a string and a non-empty substring sub, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative.',
    title: 'Recursion-1',
    name: 'strCopies',
    inputs: [
  "('catcowcat', 'cat', 2)",
  "('catcowcat', 'cow', 2)",
  "('catcowcat', 'cow', 1)",
  "('iiijjj', 'i', 3)",
  "('iiijjj', 'i', 4)",
  "('iiijjj', 'ii', 2)",
  "('iiijjj', 'ii', 3)",
  "('iiijjj', 'x', 3)",
  "('iiijjj', 'x', 0)",
  "('iiiiij', 'iii', 3)",
  "('iiiiij', 'iii', 4)",
  "('ijiiiiij', 'iiii', 2)",
  "('ijiiiiij', 'iiii', 3)",
  "('dogcatdogcat', 'dog', 2)"
] },
  { question: 'Given a string and a non-empty substring sub, compute recursively the largest substring which starts and ends with sub and return its length.',
    title: 'Recursion-1',
    name: 'strDist',
    inputs: [
  "('catcowcat', 'cat')",
  "('catcowcat', 'cow')",
  "('cccatcowcatxx', 'cat')",
  "('abccatcowcatcatxyz', 'cat')",
  "('xyx', 'x')",
  "('xyx', 'y')",
  "('xyx', 'z')",
  "('z', 'z')",
  "('x', 'z')",
  "('', 'z')",
  "('hiHellohihihi', 'hi')",
  "('hiHellohihihi', 'hih')",
  "('hiHellohihihi', 'o')",
  "('hiHellohihihi', 'll')"
] }
)

/** --- solutions --- **/

solutions.factorial =  function (n) {
   if (n === 0) {
       return 1;
   }
    return n * factorial(n-1)
}

solutions.bunnyEars = function (bunnies) {
  let bunnyEarsRecursive = function(bunnies){
    if (bunnies <= 0) return 0;
    let result = bunnyEarsRecursive(bunnies-1);
    return 2 + result;
  }
  return bunnyEarsRecursive(bunnies)
}

solutions.fibonacci = function (n) {
  if (n < 2) {
      return n;;
  };
    return fibonacci(n-1) + fibonacci(n-2)
}

solutions.bunnyEars2 = function (bunnies) {

 if (bunnies <= 0){
   return 0;
 }

 if (bunnies%2 == 0){
   return 3 + bunnyEars2(bunnies - 1);
 } else {
   return 2 + bunnyEars2(bunnies - 1);
 }
}

solutions.triangle = function (rows) {

  if (rows <= 0){
    return 0;
  }
  return rows + triangle(rows-1)
}

solutions.sumDigits1 = function (n) {
    if(n <= 0){
       return 0;
    }
    return n % 10 + sumDigits1(Math.floor(n/10));
}

solutions.count7 = function (n) {
    if(n <= 0)
        return 0;

    if(n % 10 == 7)
        return 1 + count7(Math.floor(n/10));

    return count7(Math.floor(n/10));
}

solutions.count8 = function (n) {
    if(n == 0){
      return 0;
    }

    if(n % 10 == 8) {
        if(parseInt(n/10) % 10 == 8) {
           return 2 + count8(parseInt(n/10));
        } else {
          return 1 + count8(parseInt(n/10));
        }
    }
    return count8(parseInt(n/10));
}

solutions.powerN = function (base, n) {
  if (n == 1){
    return base;
  }
  return base * powerN(base, n-1);
}

solutions.countX = function (str) {
    if(str.length == 0)
        return 0;

    if(str.charAt(0) == 'x'){
      return 1 + countX(str.substring(1));
    } else {
      return countX(str.substring(1));
    }
}

solutions.countHi = function (str) {
  if (str.length == 0){
    return 0;
  }

  if (str.substring(0, 2) == "hi"){
    return 1 + countHi(str.substring(2))
  }
  return countHi(str.substring(1))
}

solutions.changeXY = function (str) {
  if (str.length == 0){
    return "";
  }

  if (str.charAt(0) == "x"){
    return "y" + changeXY(str.substring(1))
  }
  return str.charAt(0) + changeXY(str.substring(1))
}

solutions.changePi = function (str) {

  if (str.length <= 0){
    return "";
  }

  if (str.substring(0, 2) == "pi"){
    return 3.14 + changePi(str.substring(2))
  } else {
    return str.charAt(0) + changePi(str.substring(1))
  }
}

solutions.noX = function (str) {
  if (str.length == 0){
    return "";
  }

  if (str.charAt(0) == "x"){
    return noX(str.substring(1));
  } else {
    return str.charAt(0) + noX(str.substring(1));
  }
}

solutions.array6 = function (nums, i) {
  if (i > nums.length){
    return false;
  }

  if (nums[i] == 6){
    return true;
  } else {
    return array6(nums, i+1)
  }
}

solutions.array11 = function array11(nums, i) {
  if (i >= nums.length){
    return 0;
  }

  if (nums[i] == 11){
    return 1 + array11(nums, i+1);
  } else {
    return array11(nums, i+1);
  }
}

solutions.array220 = function (nums, i) {

  if (i == nums.length-1 || nums.length == 0){
    return false;
  }

  if (nums[i] * 10 == nums[i+1]){
    return true;
  }
  return array220(nums, i+1);
}

solutions.allStar = function (str) {

  if (str.length <= 1){
    return str;
  }

  return  str.charAt(0) + "*" + allStar(str.substring(1));
}

solutions.pairStar = function (str) {

  if (str.length <= 1){
    return str.charAt(0);
  }

  if (str.charAt(0) == str.charAt(1)){
    return str.charAt(0) + "*" + pairStar(str.substring(1));
  }
  return str.charAt(0) + pairStar(str.substring(1));
}

solutions.endX = function (str) {
    if(str.length <= 1) {
      return str;
    }

   if (str.charAt(0) == "x"){
     return endX(str.substring(1)) + "x";
   }
   return str.charAt(0) + endX(str.substring(1));
}

solutions.countPairs = function (str) {

  if (str.length <= 2){
    return 0;
  }

  if (str.charAt(0) == str.charAt(2)){
    return 1 + countPairs(str.substring(1));
  }
  return countPairs(str.substring(1));
}

solutions.countAbc = function (str){

  if (str.length <= 2) {
    return 0;
  }

  if (str.substring(0, 3) === "abc" || str.substring(0, 3) === "aba"){
    return 1 + countAbc(str.substring(2));
  }
  return countAbc(str.substring(1))
}

solutions.count11 = function (str) {

  if (str.length <= 1){
    return 0;
  }

  if (str.substring(0, 2) == "11"){
    return 1 + count11(str.substring(2))
  }
  return count11(str.substring(1));
}

solutions.stringClean = function (str) {
  if (str.length == 1){
    return str;
  }

  if (str.charAt(0) == str.charAt(1)){
    return stringClean(str.substring(1));
  }
  return str.charAt(0) + stringClean(str.substring(1));
}

solutions.countHi2 = function (str){
  if (str.length <= 1){
    return 0;
  }

  if (str.substring(0, 3) == "xhi"){
    return countHi2(str.substring(3))
  }

  if (str.substring(0, 2) == "hi"){
     return 1 + countHi2(str.substring(2))
  }

   return countHi2(str.substring(1))
}

solutions.starBit = function (str) {
  if (str.charAt(0) == "-" && str.charAt(str.length - 1) == "*"){
    return str;
  }

  if (str.charAt(str.length-1) == "*"){
    return starBit(str.substring(1));
  }

  if (str.charAt(0) == "-"){
    return starBit(str.substring(0, str.length-1));
  }

  return starBit(str.substring(1, str.length - 1));
}

solutions.nestParen = function (str) {
    if(str.length == 0)
        return true;

    if(str.charAt(0) == '(' && str.charAt(str.length-1) == ')'){
        return nestParen(str.substring(1, str.length-1));
    }

    return false;
}

solutions.strCount = function (str, sub) {
  if (str.length <= 0){
    return 0;
  }

  if (str.substring(0, sub.length) == sub){
    return 1 + strCount(str.substring(sub.length), sub)
  }
  return strCount(str.substring(1), sub);
}

solutions.strCopies = function (str, sub, n) {
  if (n == 0){
    return true;
  }

  if (str.length < sub.length){
    return false;
  }

  if (str.substring(0, sub.length) == sub){
    return strCopies(str.substring(1), sub, n-1)
  }
  return strCopies(str.substring(1), sub, n)
}

solutions.strDist = function (str, sub) {

  if (str.length <= sub.length){
        if (str == sub){
        return str.length;
      } else {
          return 0;
      }
  }

  if (str.substring(0, sub.length) == sub && str.substring(str.length-sub.length) == sub){
    return str.length;
  }

  if (str.substring(0, sub.length) == sub){
    return strDist(str.substring(0, str.length-1), sub);
  }

   if (str.substring(str.length-sub.length) == sub){
    return strDist(str.substring(1), sub);
  }

  return strDist(str.substring(1, str.length-1), sub)
}
