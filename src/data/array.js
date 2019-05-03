module.exports = [
  {
    title: 'Array-1',
    name: 'firstLast6',
    inputs: [
      '([1, 2, 6])',
      '([6, 1, 2, 3])',
      '([13, 6, 1, 2, 3])',
      '([13, 6, 1, 2, 6])',
      '([3, 2, 1])',
      '([3, 6, 1])',
      '([3, 6])',
      '([6])',
      '([3])',
      '([5, 6])',
      '([5, 5])',
      '([1, 2, 3, 4, 6])',
      '([1, 2, 3, 4])',
    ],
    question: `Given an array of ints, return true if 6 appears as either the first or
    last element in the array. The array will be length 1 or more.`,
  },
  {
    title: 'Array-1',
    name: 'sameFirstLast',
    inputs: [
      '([1, 2, 3])',
      '([1, 2, 3, 1])',
      '([1, 2, 1])',
      '([7])',
      '([])',
      '([1, 2, 3, 4, 5, 1])',
      '([1, 2, 3, 4, 5, 13])',
      '([13, 2, 3, 4, 5, 13])',
      '([7, 7])',
    ],
    question: `Given an array of ints, return true if the array is length 1 or more, and the first
    element and the last element are equal.`,
  },
  {
    title: 'Array-1',
    name: 'makePi',
    inputs: [
      '()',
    ],
    question: 'Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.',
  },
  {
    title: 'Array-1',
    name: 'commonEnd',
    inputs: [
      '([1, 2, 3], [7, 3])',
      '([1, 2, 3], [7, 3, 2])',
      '([1, 2, 3], [1, 3])',
      '([1, 2, 3], [1])',
      '([1, 2, 3], [2])',
    ],
    question: `Given 2 arrays of ints, a and b, return true if they have the same first element
    or they have the same last element. Both arrays will be length 1 or more.`,
  },
  {
    title: 'Array-1',
    name: 'sum3',
    inputs: [
      '([1, 2, 3])',
      '([5, 11, 2])',
      '([7, 0, 0])',
      '([1, 2, 1])',
      '([1, 1, 1])',
      '([2, 7, 2])',
    ],
    question: 'Given an array of ints length 3, return the sum of all the elements.',
  },
  {
    title: 'Array-1',
    name: 'rotateLeft3',
    inputs: [
      '([1, 2, 3])',
      '([5, 11, 9])',
      '([7, 0, 0])',
      '([1, 2, 1])',
      '([0, 0, 1])',
    ],
    question: `Given an array of ints length 3, return an array with the elements
    "rotated left" so {1, 2, 3} yields {2, 3, 1}.`,
  },
  {
    title: 'Array-1',
    name: 'reverse3',
    inputs: [
      '([1, 2, 3])',
      '([5, 11, 9])',
      '([7, 0, 0])',
      '([2, 1, 2])',
      '([1, 2, 1])',
      '([2, 11, 3])',
      '([0, 6, 5])',
      '([7, 2, 3])',
    ],
    question: `Given an array of ints length 3, return a new array with the elements
    in reverse order, so {1, 2, 3} becomes {3, 2, 1}.`,
  },
  {
    title: 'Array-1',
    name: 'maxEnd3',
    inputs: [
      '([1, 2, 3])',
      '([11, 5, 9])',
      '([2, 11, 3])',
      '([11, 3, 3])',
      '([3, 11, 11])',
      '([2, 2, 2])',
      '([2, 11, 2])',
      '([0, 0, 1])',
    ],
    question: `Given an array of ints length 3, figure out which is larger, the first
    or last element in the array, and set all the other elements to be that value.
    Return the changed array.`,
  },
  {
    title: 'Array-1',
    name: 'sum2',
    inputs: [
      '([1, 2, 3])',
      '([1, 1])',
      '([1, 1, 1, 1])',
      '([1, 2])',
      '([1])',
      '([])',
      '([4, 5, 6])',
      '([4])',
    ],
    question: `Given an array of ints, return the sum of the first 2 elements in the array.
    If the array length is less than 2, just sum up the elements that exist, returning 0 if
    the array is length 0.`,
  },
  {
    title: 'Array-1',
    name: 'middleWay',
    inputs: [
      '([1, 2, 3], [4, 5, 6])',
      '([7, 7, 7], [3, 8, 0])',
      '([5, 2, 9], [1, 4, 5])',
      '([1, 9, 7], [4, 8, 8])',
      '([1, 2, 3], [3, 1, 4])',
      '([1, 2, 3], [4, 1, 1])',
    ],
    question: `Given 2 int arrays, a and b, each length 3, return a new array length 2
    containing their middle elements.`,
  },
  {
    title: 'Array-1',
    name: 'makeEnds',
    inputs: [
      '([1, 2, 3])',
      '([1, 2, 3, 4])',
      '([7, 4, 6, 2])',
      '([1, 2, 2, 2, 2, 2, 2, 3])',
      '([7, 4])',
      '([7])',
      '([5, 2, 9])',
      '([2, 3, 4, 1])',
    ],
    question: `Given an array of ints, return a new array length 2 containing the
    first and last elements from the original array. The original array will be
    length 1 or more.`,
  },
  {
    title: 'Array-1',
    name: 'has23',
    inputs: [
      '([2, 5])',
      '([4, 3])',
      '([4, 5])',
      '([2, 2])',
      '([3, 2])',
      '([3, 3])',
      '([7, 7])',
      '([3, 9])',
      '([9, 5])',
    ],
    question: 'Given an int array length 2, return true if it contains a 2 or a 3.',
  },
  {
    title: 'Array-1',
    name: 'no23',
    inputs: [
      '([4, 5])',
      '([4, 2])',
      '([3, 5])',
      '([1, 9])',
      '([2, 9])',
      '([1, 3])',
      '([1, 1])',
      '([2, 2])',
      '([3, 3])',
      '([7, 8])',
      '([8, 7])',
    ],
    question: 'Given an int array length 2, return true if it does not contain a 2 or 3.',
  },
  {
    title: 'Array-1',
    name: 'makeLast',
    inputs: [
      '([4, 5, 6])',
      '([1, 2])',
      '([3])',
      '([0])',
      '([7, 7, 7])',
      '([3, 1, 4])',
      '([1, 2, 3, 4])',
      '([1, 2, 3, 0])',
      '([2, 4])',
    ],
    question: `Given an int array, return a new array with double the length where its last
    element is the same as the original array, and all the other elements are 0. The original
    array will be length 1 or more.`,
  },
  {
    title: 'Array-1',
    name: 'double23',
    inputs: [
      '([2, 2])',
      '([3, 3])',
      '([2, 3])',
      '([3, 2])',
      '([4, 5])',
      '([2])',
      '([3])',
      '([])',
      '([3, 4])',
    ],
    question: `Given an int array, return true if the array contains 2 twice, or 3 twice.
    The array will be length 0, 1, or 2.`,
  },
  {
    title: 'Array-1',
    name: 'fix23',
    inputs: [
      '([1, 2, 3])',
      '([2, 3, 5])',
      '([1, 2, 1])',
      '([3, 2, 1])',
      '([2, 2, 3])',
      '([2, 3, 3])',
    ],
    question: `Given an int array length 3, if there is a 2 in the array immediately
    followed by a 3, set the 3 element to 0. Return the changed array.`,
  },
  {
    title: 'Array-1',
    name: 'start1',
    inputs: [
      '([1, 2, 3], [1, 3])',
      '([7, 2, 3], [1])',
      '([1, 2], [])',
      '([], [1, 2])',
      '([7], [])',
      '([7], [1])',
      '([1], [1])',
      '([7], [8])',
      '([], [])',
      '([1, 3], [1])',
    ],
    question: `Start with 2 int arrays, a and b, of any length. Return how many of the arrays
    have 1 as their first element.`,
  },
  {
    title: 'Array-1',
    name: 'biggerTwo',
    inputs: [
      '([1, 2], [3, 4])',
      '([3, 4], [1, 2])',
      '([1, 1], [1, 2])',
      '([2, 1], [1, 1])',
      '([2, 2], [1, 3])',
      '([1, 3], [2, 2])',
      '([6, 7], [3, 1])',
    ],
    question: `Start with 2 int arrays, a and b, each length 2. Consider the sum of the
    values in each array. Return the array which has the largest sum. In event of a tie,
    return a.`,
  },
  {
    title: 'Array-1',
    name: 'makeMiddle',
    inputs: [
      '([1, 2, 3, 4])',
      '([7, 1, 2, 3, 4, 9])',
      '([1, 2])',
      '([5, 2, 4, 7])',
      '([9, 0, 4, 3, 9, 1])',
    ],
    question: `Given an array of ints of even length, return a new array length 2
    containing the middle two elements from the original array. The original array
    will be length 2 or more.`,
  },
  {
    title: 'Array-1',
    name: 'plusTwo',
    inputs: [
      '([1, 2], [3, 4])',
      '([4, 4], [2, 2])',
      '([9, 2], [3, 4])',
    ],
    question: `Given 2 int arrays, each length 2, return a new array length 4
    containing all their elements.`,
  },
  {
    title: 'Array-1',
    name: 'swapEnds',
    inputs: [
      '([1, 2, 3, 4])',
      '([1, 2, 3])',
      '([8, 6, 7, 9, 5])',
      '([3, 1, 4, 1, 5, 9])',
      '([1, 2])',
      '([1])',
    ],
    question: `Given an array of ints, swap the first and last elements in the array.
    Return the modified array. The array length will be at least 1.`,
  },
  {
    title: 'Array-1',
    name: 'midThree',
    inputs: [
      '([1, 2, 3, 4, 5])',
      '([8, 6, 7, 5, 3, 0, 9])',
      '([1, 2, 3])',
    ],
    question: `Given an array of ints of odd length, return a new array length 3
    containing the elements from the middle of the array. The array length will be
    at least 3.`,
  },
  {
    title: 'Array-1',
    name: 'maxTriple',
    inputs: [
      '([1, 2, 3])',
      '([1, 5, 3])',
      '([5, 2, 3])',
      '([1, 2, 3, 1, 1])',
      '([1, 7, 3, 1, 5])',
      '([5, 1, 3, 7, 1])',
      '([5, 1, 7, 3, 7, 8, 1])',
      '([5, 1, 7, 9, 7, 8, 1])',
      '([5, 1, 7, 3, 7, 8, 9])',
      '([2, 2, 5, 1, 1])',
    ],
    question: `Given an array of ints of odd length, look at the first, last,
    and middle values in the array and return the largest. The array length will
    be a least 1.`,
  },
  {
    title: 'Array-1',
    name: 'frontPiece',
    inputs: [
      '([1, 2, 3])',
      '([1, 2])',
      '([1])',
      '([])',
      '([6, 5, 0])',
      '([6, 5])',
      '([3, 1, 4, 1, 5])',
      '([6])',
    ],
    question: `Given an int array of any length, return a new array of its first
    2 elements. If the array is smaller than length 2, use whatever
    elements are present.`,
  },
  {
    title: 'Array-1',
    name: 'unlucky1',
    inputs: [
      '([1, 3, 4, 5])',
      '([2, 1, 3, 4, 5])',
      '([1, 1, 1])',
      '([1, 3, 1])',
      '([1, 1, 3])',
      '([1, 2, 3])',
      '([3, 3, 3])',
      '([1, 3])',
      '([1, 4])',
      '([1])',
      '([])',
      '([1, 1, 1, 3, 1])',
      '([1, 1, 3, 1, 1])',
      '([1, 1, 1, 1, 3])',
      '([1, 4, 1, 5])',
      '([1, 1, 2, 3])',
      '([2, 3, 2, 1])',
      '([2, 3, 1, 3])',
      '([1, 2, 3, 4, 1, 3])',
    ],
    question: `We'll say that a 1 immediately followed by a 3 in an array is
    an "unlucky" 1. Return true if the given array contains an unlucky 1 in the
    first 2 or last 2 positions in the array.`,
  },
  {
    title: 'Array-1',
    name: 'make2',
    inputs: [
      '([4, 5], [1, 2, 3])',
      '([4], [1, 2, 3])',
      '([], [1, 2])',
      '([1, 2], [])',
      '([3], [1, 2, 3])',
      '([3], [1])',
      '([3, 1, 4], [])',
      '([1], [1])',
      '([1, 2, 3], [7, 8])',
      '([7, 8], [1, 2, 3])',
      '([7], [1, 2, 3])',
      '([5, 4], [2, 3, 7])',
    ],
    question: `Given 2 int arrays, a and b, return a new array length 2 containing,
    as much as will fit, the elements from a followed by the elements from b. The
    arrays may be any length, including 0, but there will be 2 or more elements
    available between the 2 arrays.`,
  },
  {
    title: 'Array-1',
    name: 'front11',
    inputs: [
      '([1, 2, 3], [7, 9, 8])',
      '([1], [2])',
      '([1, 7], [])',
      '([], [2, 8])',
      '([], [])',
      '([3], [1, 4, 1, 9])',
      '([1, 4, 1, 9], [])',
    ],
    question: `Given 2 int arrays, a and b, of any length, return a new array with the
    first element of each array. If either array is length 0, ignore that array.`,
  },
  {
    title: 'Array-2',
    name: 'findLowestIndex',
    inputs: [
      "([99, 98, 97, 96, 95])",
      "([2, 2, 0])",
      "([1, 3, 5])",
      "([5])",
      "([11, 9, 0, 1])",
      "([2, 11, 9, 0])",
      "([2])",
      "([2, 5, -12])",
    ],
    
    question: `Return the index of the minimum value in an array. The input array will have at
     least one element in it.`
  },
  {
    title: 'Array-2',
    name: 'countEvens',
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
    
    question: `Return the number of even ints in the given array. Note: the % "mod"
    operator computes the remainder, e.g. 5 % 2 is 1.`
  },
  {
    title: 'Array-2',
    name: 'bigDiff',
    inputs: [
      "([10, 3, 5, 6])",
      "([7, 2, 10, 9])",
      "([2, 10, 7, 2])",
      "([2, 10])",
      "([10, 2])",
      "([10, 0])",
      "([2, 3])",
      "([2, 2])",
      "([2])",
      "([5, 1, 6, 1, 9, 9])",
      "([7, 6, 8, 5])",
      "([7, 7, 6, 8, 5, 5, 6])",
    ],
    question: `Given an array length 1 or more of ints, return the difference between
    the largest and smallest values in the array. Note: the built-in Math.min(v1, v2)
    and Math.max(v1, v2) methods return the smaller or larger of two values.`
  },
  {
    title: 'Array-2',
    name: 'centeredAverage',
    inputs: [
      "([1, 2, 3, 4, 100])",
      "([1, 1, 5, 5, 10, 8, 7])",
      "([-10, -4, -2, -4, -2, 0])",
      "([5, 3, 4, 6, 2])",
      "([5, 3, 4, 0, 100])",
      "([100, 0, 5, 3, 4])",
      "([4, 0, 100])",
      "([0, 2, 3, 4, 100])",
      "([1, 1, 100])",
      "([7, 7, 7])",
      "([1, 7, 8])",
      "([1, 1, 99, 99])",
      "([1000, 0, 1, 99])",
      "([4, 4, 4, 4, 5])",
      "([4, 4, 4, 1, 5])",
      "([6, 4, 8, 12, 3])",
    ],
    question: `Return the "centered" average of an array of ints, which we'll say
    is the mean average of the values, except ignoring the largest and smallest
    values in the array. If there are multiple copies of the smallest value, ignore
    just one copy, and likewise for the largest value. Use int division to produce
    the final average. You may assume that the array is length 3 or more.`
  },
  {
    title: 'Array-2',
    name: 'sum13',
    inputs: [
      "([1, 2, 2, 1])",
      "([1, 1])",
      "([1, 2, 2, 1, 13])",
      "([1, 2, 13, 2, 1, 13])",
      "([13, 1, 2, 13, 2, 1, 13])",
      "([])",
      "([13])",
      "([13, 13])",
      "([13, 0, 13])",
      "([13, 1, 13])",
      "([5, 7, 2])",
      "([5, 13, 2])",
      "([0])",
      "([13, 0])",
    ],
    question: `Return the sum of the numbers in the array, returning 0 for an empty array.
    Except the number 13 is very unlucky, so it does not count and numbers that come
    immediately after a 13 also do not count.`
  },
  {
    title: 'Array-2',
    name: 'sum67',
    inputs: [
      "([1, 2, 2])",
      "([1, 2, 2, 6, 99, 99, 7])",
      "([1, 1, 6, 7, 2])",
      "([1, 6, 2, 2, 7, 1, 6, 99, 99, 7])",
      "([1, 6, 2, 6, 2, 7, 1, 6, 99, 99, 7])",
      "([2, 7, 6, 2, 6, 7, 2, 7])",
      "([2, 7, 6, 2, 6, 2, 7])",
      "([1, 6, 7, 7])",
      "([6, 7, 1, 6, 7, 7])",
      "([6, 8, 1, 6, 7])",
      "([])",
      "([6, 7, 11])",
      "([11, 6, 7, 11])",
      "([2, 2, 6, 7, 7])",
    ],
    question: `Return the sum of the numbers in the array, except ignore sections of
     numbers starting with a 6 and extending to the next 7 (every 6 will be followed
       by at least one 7). Return 0 for no numbers.`
  },
  {
    title: 'Array-2',
    name: 'has22',
    inputs: [
      "([1, 2, 2])",
      "([1, 2, 1, 2])",
      "([2, 1, 2])",
      "([2, 2, 1, 2])",
      "([1, 3, 2])",
      "([1, 3, 2, 2])",
      "([2, 3, 2, 2])",
      "([4, 2, 4, 2, 2, 5])",
      "([1, 2])",
      "([2, 2])",
      "([2])",
      "([])",
      "([3, 3, 2, 2])",
      "([5, 2, 5, 2])",
    ],
    question: `Given an array of ints, return true if the array contains
    a 2 next to a 2 somewhere.`
  },
  {
    title: 'Array-2',
    name: 'lucky13',
    inputs: [
      "([0, 2, 4])",
      "([1, 2, 3])",
      "([1, 2, 4])",
      "([2, 7, 2, 8])",
      "([2, 7, 1, 8])",
      "([3, 7, 2, 8])",
      "([2, 7, 2, 1])",
      "([1, 2])",
      "([2, 2])",
      "([2])",
      "([3])",
      "([])",
    ],
    question: `Given an array of ints, return true if the array contains no 1's and no 3's.`
  },
  {
    title: 'Array-2',
    name: 'sum28',
    inputs: [
      "([2, 3, 2, 2, 4, 2])",
      "([2, 3, 2, 2, 4, 2, 2])",
      "([1, 2, 3, 4])",
      "([2, 2, 2, 2])",
      "([1, 2, 2, 2, 2, 4])",
      "([])",
      "([2])",
      "([8])",
      "([2, 2, 2])",
      "([2, 2, 2, 2, 2])",
      "([1, 2, 2, 1, 2, 2])",
      "([5, 2, 2, 2, 4, 2])",
    ],
    question: `Given an array of ints, return true if the sum of all the 2's in
    the array is exactly 8.`
  },
  {
    title: 'Array-2',
    name: 'more14',
    inputs: [
      "([1, 4, 1])",
      "([1, 4, 1, 4])",
      "([1, 1])",
      "([1, 6, 6])",
      "([1])",
      "([1, 4])",
      "([6, 1, 1])",
      "([1, 6, 4])",
      "([1, 1, 4, 4, 1])",
      "([1, 1, 6, 4, 4, 1])",
      "([])",
      "([4, 1, 4, 6])",
      "([4, 1, 4, 6, 1])",
      "([1, 4, 1, 4, 1, 6])",
    ],
    question: `Given an array of ints, return true if the number of 1's is greater
    than the number of 4's`
  },
  {
    title: 'Array-2',
    name: 'prependSum',
    inputs: [
      "([1, 2, 4, 4])",
      "([3, 3, 0])",
      "([1, 1, 1, 1, 1])",
      "([5, 7])",
      "([0, 0, 0, 0])",
      "([12, 13, 19, 20])",
      "([-2, 2, -2, 2])",
      "([5, 4, 3, 2, 1, 0])",
    ],
    
    question: `Return a modified version of the input array (nums), where the first two items have been removed
    and one item – the sum of those two items - is added to the start of the array.`
  },
  {
    title: 'Array-2',
    name: 'fizzArray',
    inputs: [
      "(4)",
      "(1)",
      "(10)",
      "(0)",
      "(2)",
      "(7)",
    ],
    question: `Given a number n, create and return a new array of length n,
    containing the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case
    just return a length 0 array. You do not need a separate if-statement for the
    length-0 case; the for-loop should naturally execute 0 times in that case,
    so it just works. The syntax to make a new array is let myArray = [];`
  },
  {
    title: 'Array-2',
    name: 'only14',
    inputs: [
      "([1, 4, 1, 4])",
      "([1, 4, 2, 4])",
      "([1, 1])",
      "([4, 1])",
      "([2])",
      "([])",
      "([1, 4, 1, 3])",
      "([3, 1, 3])",
      "([1])",
      "([4])",
      "([3, 4])",
      "([1, 3, 4])",
      "([1, 1, 1])",
      "([1, 1, 1, 5])",
      "([4, 1, 4, 1])",
    ],
    question: `Given an array of ints, return true if every element is a 1 or a 4.`
  },
  {
    title: 'Array-2',
    name: 'fizzArray2',
    inputs: [
      "(4)",
      "(10)",
      "(2)",
      "(1)",
      "(0)",
      "(7)",
      "(9)",
      "(11)",
    ],
    question: `Given a number n, create and return a new string array of length n,
    containing the strings "0", "1" "2" .. through n-1. N may be 0, in which case
    just return a length 0 array. Note: String(xxx) will make the String
    form of most types.`
  },
  {
    title: 'Array-2',
    name: 'no14',
    inputs: [
      "([1, 2, 3])",
      "([1, 2, 3, 4])",
      "([2, 3, 4])",
      "([1, 1, 4, 4])",
      "([2, 2, 4, 4])",
      "([2, 3, 4, 1])",
      "([2, 1, 1])",
      "([1, 4])",
      "([2])",
      "([2, 1])",
      "([1])",
      "([4])",
      "([])",
      "([1, 1, 1, 1])",
      "([9, 4, 4, 1])",
      "([4, 2, 3, 1])",
      "([4, 2, 3, 5])",
      "([4, 4, 2])",
      "([1, 4, 4])",
    ],
    question: `Given an array of ints, return true if it contains no 1's or it contains no 4's.`
  },
  {
    title: 'Array-2',
    name: 'isEverywhere',
    inputs: [
      "([1, 2, 1, 3], 1)",
      "([1, 2, 1, 3], 2)",
      "([1, 2, 1, 3, 4], 1)",
      "([2, 1, 2, 1], 1)",
      "([2, 1, 2, 1], 2)",
      "([2, 1, 2, 3, 1], 2)",
      "([3, 1], 3)",
      "([3, 1], 2)",
      "([3], 1)",
      "([], 1)",
      "([1, 2, 1, 2, 3, 2, 5], 2)",
      "([1, 2, 1, 1, 1, 2], 2)",
      "([2, 1, 2, 1, 1, 2], 2)",
      "([2, 1, 2, 2, 2, 1, 1, 2], 2)",
      "([2, 1, 2, 2, 2, 1, 2, 1], 2)",
      "([2, 1, 2, 1, 2], 2)",
    ],
    question: `We'll say that a value is "everywhere" in an array if for every
    pair of adjacent elements in the array, at least one of the pair is that value.
    Return true if the given value is everywhere in the array.`
  },
  {
    title: 'Array-2',
    name: 'either24',
    inputs: [
      "([1, 2, 2])",
      "([4, 4, 1])",
      "([4, 4, 1, 2, 2])",
      "([1, 2, 3, 4])",
      "([3, 5, 9])",
      "([1, 2, 3, 4, 4])",
      "([2, 2, 3, 4])",
      "([1, 2, 3, 2, 2, 4])",
      "([1, 2, 3, 2, 2, 4, 4])",
      "([1, 2])",
      "([2, 2])",
      "([4, 4])",
      "([2])",
      "([])",
    ],
    question: `Given an array of ints, return true if the array contains a 2
    next to a 2 or a 4 next to a 4, but not both.`
  },
  {
    title: 'Array-2',
    name: 'matchUp',
    inputs: [
      "([1, 2, 3], [2, 3, 10])",
      "([1, 2, 3], [2, 3, 5])",
      "([1, 2, 3], [2, 3, 3])",
      "([5, 3], [5, 5])",
      "([5, 3], [4, 4])",
      "([5, 3], [3, 3])",
      "([5, 3], [2, 2])",
      "([5, 3], [1, 1])",
      "([5, 3], [0, 0])",
      "([4], [4])",
      "([4], [5])",
    ],
    question: `Given arrays nums1 and nums2 of the same length, for every element
    in nums1, consider the corresponding element in nums2 (at the same index).
    Return the count of the number of times that the two elements differ by 2 or
    less, but are not equal.`
  },
  {
    title: 'Array-2',
    name: 'has77',
    inputs: [
      "([1, 7, 7])",
      "([1, 7, 1, 7])",
      "([1, 7, 1, 1, 7])",
      "([7, 7, 1, 1, 7])",
      "([2, 7, 2, 2, 7, 2])",
      "([2, 7, 2, 2, 7, 7])",
      "([7, 2, 7, 2, 2, 7])",
      "([7, 2, 6, 2, 2, 7])",
      "([7, 7, 7])",
      "([7, 1, 7])",
      "([7, 1, 1])",
      "([1, 2])",
      "([1, 7])",
      "([7])",
    ],
    question: `Given an array of ints, return true if the array contains two 7's
    next to each other, or there are two 7's separated by one element,
    such as with {7, 1, 7}.`
  },
  {
    title: 'Array-2',
    name: 'has12',
    inputs: [
      "([1, 3, 2])",
      "([3, 1, 2])",
      "([3, 1, 4, 5, 2])",
      "([3, 1, 4, 5, 6])",
      "([3, 1, 4, 1, 6, 2])",
      "([2, 1, 4, 1, 6, 2])",
      "([2, 1, 4, 1, 6])",
      "([1])",
      "([2, 1, 3])",
      "([2, 1, 3, 2])",
      "([2])",
      "([3, 2])",
      "([3, 1, 3, 2])",
      "([3, 5, 9])",
      "([3, 5, 1])",
      "([3, 2, 1])",
      "([1, 2])",
    ],
    question: `Given an array of ints, return true if there is a 1 in the array
    with a 2 somewhere later in the array.`
  },
  {
    title: 'Array-2',
    name: 'modThree',
    inputs: [
      "([2, 1, 3, 5])",
      "([2, 1, 2, 5])",
      "([2, 4, 2, 5])",
      "([1, 2, 1, 2, 1])",
      "([9, 9, 9])",
      "([1, 2, 1])",
      "([1, 2])",
      "([1])",
      "([])",
      "([9, 7, 2, 9])",
      "([9, 7, 2, 9, 2, 2])",
      "([9, 7, 2, 9, 2, 2, 6])",
    ],
    question: `Given an array of ints, return true if the array contains either
    3 even or 3 odd values all next to each other.`
  },
  {
    title: 'Array-2',
    name: 'findTheMedian',
    inputs: [
      "([4,9,9,2,1,5])",
      "([1, 5, 3, 1 , 5])",
      "([10, 12, 15])",
      "([5])",
      "([11, 9, 0, 1])",
      "([-1, 11, -2, 10, -3, 15])",
      "([2, 10, 15, 13])",
      "([2, 5, -12])",
    ],
    
    question: `Write a method that returns the median value of an array. The input array will never be empty.
    \nIf the array is odd in length, the median is the value in the centre of the array.\
    \nIf the array is even, the median should be the average of the two middle values. \n 
    Hint: You will need to ensure the input array is sorted - there is a sort() array method you can use for this step.`
  },
  {
    title: 'Array-2',
    name: 'haveThree',
    inputs: [
      "([3, 1, 3, 1, 3])",
      "([3, 1, 3, 3])",
      "([3, 4, 3, 3, 4])",
      "([1, 3, 1, 3, 1, 2])",
      "([1, 3, 1, 3, 1, 3])",
      "([1, 3, 3, 1, 3])",
      "([1, 3, 1, 3, 1, 3, 4, 3])",
      "([3, 4, 3, 4, 3, 4, 4])",
      "([3, 3, 3])",
      "([1, 3])",
      "([3])",
      "([1])",
    ],
    question: `Given an array of ints, return true if the value 3 appears in the array exactly
     3 times, and no 3's are next to each other.`
  },
  {
    title: 'Array-2',
    name: 'twoTwo',
    inputs: [
      "([4, 2, 2, 3])",
      "([2, 2, 4])",
      "([2, 2, 4, 2])",
      "([1, 3, 4])",
      "([1, 2, 2, 3, 4])",
      "([1, 2, 3, 4])",
      "([2, 2])",
      "([2, 2, 7])",
      "([2, 2, 7, 2, 1])",
      "([4, 2, 2, 2])",
      "([2, 2, 2])",
      "([1, 2])",
      "([2])",
      "([1])",
      "([])",
      "([5, 2, 2, 3])",
      "([2, 2, 5, 2])",
    ],
    question: `Given an array of ints, return true if every 2 that appears in
    the array is next to another 2.`
  },
  {
    title: 'Array-2',
    name: 'sameEnds',
    inputs: [
    "([5, 6, 45, 99, 13, 5, 6], 1)",
    "([5, 6, 45, 99, 13, 5, 6], 2)",
    "([5, 6, 45, 99, 13, 5, 6], 3)",
    "([1, 2, 5, 2, 1], 1)",
    "([1, 2, 5, 2, 1], 2)",
    "([1, 2, 5, 2, 1], 0)",
    "([1, 2, 5, 2, 1], 5)",
    "([1, 1, 1], 0)",
    "([1, 1, 1], 1)",
    "([1, 1, 1], 2)",
    "([1, 1, 1], 3)",
    "([1], 1)",
    "([], 0)",
    "([4, 2, 4, 5], 1)",
    ],
    question: `Return true if the group of N numbers at the start and end of the
    array are the same. For example, with {5, 6, 45, 99, 13, 5, 6}, the ends are
    the same for n=0 and n=2, and false for n=1 and n=3. You may assume that n
    is in the range 0..nums.length inclusive.`
  },
  {
    title: 'Array-2',
    name: 'tripleUp',
    inputs: [
      "([1, 4, 5, 6, 2])",
      "([1, 2, 3])",
      "([1, 2, 4])",
      "([1, 2, 4, 5, 7, 6, 5, 6, 7, 6])",
      "([1, 2, 4, 5, 7, 6, 5, 7, 7, 6])",
      "([1, 2])",
      "([1])",
      "([])",
      "([10, 9, 8, -100, -99, -98, 100])",
      "([10, 9, 8, -100, -99, 99, 100])",
      "([-100, -99, -99, 100, 101, 102])",
      "([2, 3, 5, 6, 8, 9, 2, 3])",
    ],
    question: `Return true if the array contains, somewhere, three increasing
    adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.`
  },
  {
    title: 'Array-2',
    name: 'fizzArray3',
    inputs: [
      "(5, 10)",
      "(11, 18)",
      "(1, 3)",
      "(1, 2)",
      "(1, 1)",
      "(1000, 1005)",
    ],
    question: `Given start and end numbers, return a new array containing the
    sequence of integers from start up to but not including end, so start=5 and
    end=10 yields {5, 6, 7, 8, 9}. The end number will be greater or equal to the
    start number. Note that a length-0 array is valid.`
  },
  {
    title: 'Array-2',
    name: 'shiftLeft',
    inputs: [
      "([6, 2, 5, 3])",
      "([1, 2])",
      "([1])",
      "([])",
      "([1, 1, 2, 2, 4])",
      "([1, 1, 1])",
      "([1, 2, 3])",
    ],
    question: `Return an array that is "left shifted" by one -- so {6, 2, 5, 3}
    returns {2, 5, 3, 6}. You may modify and return the given array, or return
    a new array.`
  },
  {
    title: 'Array-2',
    name: 'tenRun',
    inputs: [
      "([2, 10, 3, 4, 20, 5])",
      "([10, 1, 20, 2])",
      "([10, 1, 9, 20])",
      "([1, 2, 50, 1])",
      "([1, 20, 50, 1])",
      "([10, 10])",
      "([10, 2])",
      "([0, 2])",
      "([1, 2])",
      "([1])",
      "([])",
    ],
    question: `For each multiple of 10 in the given array, change all the values
    following it to be that multiple of 10, until encountering another multiple
    of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.`
  },
  {
    title: 'Array-2',
    name: 'pre4',
    inputs: [
    "([1, 2, 4, 1])",
    "([3, 1, 4])",
    "([1, 4, 4])",
    "([1, 4, 4, 2])",
    "([1, 3, 4, 2, 4])",
    "([4, 4])",
    "([3, 3, 4])",
    "([1, 2, 1, 4])",
    "([2, 1, 4, 2])",
    "([2, 1, 2, 1, 4, 2])",
    ],
    question: `Given a non-empty array of ints, return a new array containing the
    elements from the original array that come before the first 4 in the original
     array. The original array will contain at least one 4. Note that it is valid
     in java to create an array of length 0.`
  },
  {
    title: 'Array-2',
    name: 'post4',
    inputs: [
    "([2, 4, 1, 2])",
    "([4, 1, 4, 2])",
    "([4, 4, 1, 2, 3])",
    "([4, 2])",
    "([4, 4, 3])",
    "([4, 4])",
    "([4])",
    "([2, 4, 1, 4, 3, 2])",
    "([4, 1, 4, 2, 2, 2])",
    "([3, 4, 3, 2])",
    ],
    question: `Given a non-empty array of ints, return a new array containing the
    elements from the original array that come after the last 4 in the original
    array. The original array will contain at least one 4. Note that it is valid
    in java to create an array of length 0.`
  },
  {
    title: 'Array-2',
    name: 'notAlone',
    inputs: [
    "([1, 2, 3], 2)",
    "([1, 2, 3, 2, 5, 2], 2)",
    "([3, 4], 3)",
    "([3, 3], 3)",
    "([1, 3, 1, 2], 1)",
    "([3], 3)",
    "([], 3)",
    "([7, 1, 6], 1)",
    "([1, 1, 1], 1)",
    "([1, 1, 1, 2], 1)",
    ],
    question: `We'll say that an element in an array is "alone" if there are values
    before and after it, and those values are different from it. Return a version
    of the given array where every instance of the given value which is alone is
    replaced by whichever value to its left or right is larger.`
  },
  {
    title: 'Array-2',
    name: 'zeroFront',
    inputs: [
      "([1, 0, 0, 1])",
      "([0, 1, 1, 0, 1])",
      "([1, 0])",
      "([0, 1])",
      "([1, 1, 1, 0])",
      "([2, 2, 2, 2])",
      "([0, 0, 1, 0])",
      "([-1, 0, 0, -1, 0])",
      "([0, -3, 0, -3])",
      "([])",
      "([9, 9, 0, 9, 0, 9])",
    ],
    question: `Return an array that contains the exact same numbers as the given
    array, but rearranged so that all the zeros are grouped at the start of the
    array. The order of the non-zero numbers does not matter. So {1, 0, 0, 1}
    becomes {0 ,0, 1, 1}. You may modify and return the given array or make a
    new array.`
  },
  {
    title: 'Array-2',
    name: 'withoutTen',
    inputs: [
    "([1, 10, 10, 2])",
    "([10, 2, 10])",
    "([1, 99, 10])",
    "([10, 13, 10, 14])",
    "([10, 13, 10, 14, 10])",
    "([10, 10, 3])",
    "([1])",
    "([13, 1])",
    "([10])",
    "([])",
    ],
    question: `Return a version of the given array where all the 10's have been
    removed. The remaining elements should shift left towards the start of the
    array as needed, and the empty spaces a the end of the array should be 0.
    So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the given
    array or make a new array.`
  },
  {
    title: 'Array-2',
    name: 'zeroMax',
    inputs: [
    "([0, 5, 0, 3])",
    "([0, 4, 0, 3])",
    "([0, 1, 0])",
    "([0, 1, 5])",
    "([0, 2, 0])",
    "([1])",
    "([0])",
    "([])",
    "([7, 0, 4, 3, 0, 2])",
    "([7, 0, 4, 3, 0, 1])",
    "([7, 0, 4, 3, 0, 0])",
    "([7, 0, 1, 0, 0, 7])",
    ],
    question: `Return a version of the given array where each zero value in the
    array is replaced by the largest odd value to the right of the zero in the
    array. If there is no odd value to the right of the zero, leave the zero
    as a zero.`
  },
  {
    title: 'Array-2',
    name: 'evenOdd',
    inputs: [
    "([1, 0, 1, 0, 0, 1, 1])",
    "([3, 3, 2])",
    "([2, 2, 2])",
    "([3, 2, 2])",
    "([1, 1, 0, 1, 0])",
    "([1])",
    "([1, 2])",
    "([2, 1])",
    "([])",
    ],
    question: `Return an array that contains the exact same numbers as the given
    array, but rearranged so that all the even numbers come before all the odd
    numbers. Other than that, the numbers can be in any order. You may modify
    and return the given array, or make a new array.`
  },
  {
    title: 'Array-2',
    name: 'fizzBuzz',
    inputs: [
    "(1, 6)",
    "(1, 8)",
    "(1, 11)",
    "(1, 16)",
    "(1, 4)",
    "(1, 2)",
    "(50, 56)",
    "(15, 17)",
    "(30, 36)",
    "(1000, 1006)",
    "(99, 102)",
    "(14, 20)",
    ],
    question: `This is slightly more difficult version of the famous FizzBuzz problem
    which is sometimes given as a first problem for job interviews.
     Consider the series of numbers beginning at start and running up to but not
     including end, so for example start=1 and end=5 gives the series 1, 2, 3, 4.
     Return a new String[] array containing the string form of these numbers, except
     for multiples of 3, use "Fizz" instead of the number, for multiples of 5 use "Buzz",
     and for multiples of both 3 and 5 use "FizzBuzz". In Java, String.valueOf(xxx) will
     make the String form of an int or other type. This version is a little more
     complicated than the usual version since you have to allocate and index into an
     array instead of just printing, and we vary the start/end instead of just always
     doing 1..100.`
  },
  { question: 'Consider the leftmost and righmost appearances of some value in an array. We\'ll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)',
    title: 'Array-3',
    name: 'maxSpan',
    inputs: [
  "([1, 2, 1, 1, 3])",
  "([1, 4, 2, 1, 4, 1, 4])",
  "([1, 4, 2, 1, 4, 4, 4])",
  "([3, 3, 3])",
  "([3, 9, 3])",
  "([3, 9, 9])",
  "([3, 9])",
  "([3, 3])",
  "([])",
  "([1])"
] },
  { question: 'Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. Do not move the 3\'s, but every other number may move. The array contains the same number of 3\'s and 4\'s, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.',
    title: 'Array-3',
    name: 'fix34',
    inputs: [
  "([1, 3, 1, 4])",
  "([1, 3, 1, 4, 4, 3, 1])",
  "([3, 2, 2, 4])",
  "([3, 2, 3, 2, 4, 4])",
  "([2, 3, 2, 3, 2, 4, 4])",
  "([5, 3, 5, 4, 5, 4, 5, 4, 3, 5, 3, 5])",
  "([3, 1, 4])",
  "([3, 4, 1])",
  "([1, 1, 1])",
  "([1])",
  "([])",
  "([7, 3, 7, 7, 4])",
  "([3, 1, 4, 3, 1, 4])",
  "([3, 1, 1, 3, 4, 4])"
] },
  { question: '(This is a slightly harder version of the fix34 problem.) Return an array that contains exactly the same numbers as the given array, but rearranged so that every 4 is immediately followed by a 5. Do not move the 4\'s, but every other number may move. The array contains the same number of 4\'s and 5\'s, and every 4 has a number after it that is not a 4. In this version, 5\'s may appear anywhere in the original array.',
    title: 'Array-3',
    name: 'fix45',
    inputs: [
  "([5, 4, 9, 4, 9, 5])",
  "([1, 4, 1, 5])",
  "([1, 4, 1, 5, 5, 4, 1])",
  "([4, 9, 4, 9, 5, 5, 4, 9, 5])",
  "([5, 5, 4, 1, 4, 1])",
  "([4, 2, 2, 5])",
  "([4, 2, 4, 2, 5, 5])",
  "([4, 2, 4, 5, 5])",
  "([1, 1, 1])",
  "([4, 5])",
  "([5, 4, 1])",
  "([])",
  "([5, 4, 5, 4, 1])",
  "([4, 5, 4, 1, 5])",
  "([3, 4, 5])",
  "([4, 1, 5])",
  "([5, 4, 1])",
  "([2, 4, 2, 5])"
] },
  { question: 'Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.',
    title: 'Array-3',
    name: 'canBalance',
    inputs: [
  "([1, 1, 1, 2, 1])",
  "([2, 1, 1, 2, 1])",
  "([10, 10])",
  "([10, 0, 1, -1, 10])",
  "([1, 1, 1, 1, 4])",
  "([2, 1, 1, 1, 4])",
  "([2, 3, 4, 1, 2])",
  "([1, 2, 3, 1, 0, 2, 3])",
  "([1, 2, 3, 1, 0, 1, 3])",
  "([1])",
  "([1, 1, 1, 2, 1])"
] },
  { question: 'Given two arrays of ints sorted in increasing order, outer and inner, return true if all of the numbers in inner appear in outer. The best solution makes only a single "linear" pass of both arrays, taking advantage of the fact that both arrays are already in sorted order.',
    title: 'Array-3',
    name: 'linearIn',
    inputs: [
  "([1, 2, 4, 6], [2, 4])",
  "([1, 2, 4, 6], [2, 3, 4])",
  "([1, 2, 4, 4, 6], [2, 4])",
  "([2, 2, 4, 4, 6, 6], [2, 4])",
  "([2, 2, 2, 2, 2], [2, 2])",
  "([2, 2, 2, 2, 2], [2, 4])",
  "([2, 2, 2, 2, 4], [2, 4])",
  "([1, 2, 3], [2])",
  "([1, 2, 3], [-1])",
  "([1, 2, 3], [])",
  "([-1, 0, 3, 3, 3, 10, 12], [-1, 0, 3, 12])",
  "([-1, 0, 3, 3, 3, 10, 12], [0, 3, 12, 14])",
  "([-1, 0, 3, 3, 3, 10, 12], [-1, 10, 11])"
] },
  { question: 'Given n>=0, create an array length n*n with the following pattern, shown here for n=3 : {0, 0, 1,    0, 2, 1,    3, 2, 1} (spaces added to show the 3 groups).',
    title: 'Array-3',
    name: 'squareUp',
    inputs: [
  "(3)",
  "(2)",
  "(4)",
  "(1)",
  "(0)"
] },
  { question: 'Given n>=0, create an array with the pattern {1,    1, 2,    1, 2, 3,   ... 1, 2, 3 .. n} (spaces added to show the grouping). Note that the length of the array will be 1 + 2 + 3 ... + n, which is known to sum to exactly n*(n + 1)/2.',
    title: 'Array-3',
    name: 'seriesUp',
    inputs: [
  "(3)",
  "(4)",
  "(2)",
  "(1)",
  "(0)"
] },
  { question: 'We\'ll say that a "mirror" section in an array is a group of contiguous elements such that somewhere in the array, the same group appears in reverse order. For example, the largest mirror section in {1, 2, 3, 8, 9, 3, 2, 1} is length 3 (the {1, 2, 3} part). Return the size of the largest mirror section found in the given array.',
    title: 'Array-3',
    name: 'maxMirror',
    inputs: [
  "([1, 2, 3, 8, 9, 3, 2, 1])",
  "([1, 2, 1, 4])",
  "([7, 1, 2, 9, 7, 2, 1])",
  "([21, 22, 9, 8, 7, 6, 23, 24, 6, 7, 8, 9, 25, 7, 8, 9])",
  "([1, 2, 1, 20, 21, 1, 2, 1, 2, 23, 24, 2, 1, 2, 1, 25])",
  "([1, 2, 3, 2, 1])",
  "([1, 2, 3, 3, 8])",
  "([1, 2, 7, 8, 1, 7, 2])",
  "([1, 1, 1])",
  "([1])",
  "([])",
  "([9, 1, 1, 4, 2, 1, 1, 1])",
  "([5, 9, 9, 4, 5, 4, 9, 9, 2])",
  "([5, 9, 9, 6, 5, 4, 9, 9, 2])",
  "([5, 9, 1, 6, 5, 4, 1, 9, 5])"
] },
  { question: 'Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. Return the number of clumps in the given array.',
    title: 'Array-3',
    name: 'countClumps',
    inputs: [
  "([1, 2, 2, 3, 4, 4])",
  "([1, 1, 2, 1, 1])",
  "([1, 1, 1, 1, 1])",
  "([1, 2, 3])",
  "([2, 2, 1, 1, 1, 2, 1, 1, 2, 2])",
  "([0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2])",
  "([0, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2])",
  "([0, 0, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2])",
  "([])"
] },

];

