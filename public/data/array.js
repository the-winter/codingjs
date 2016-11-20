exercises.push(
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
    array will be length 1 or more. Note: by default, a new int array contains all 0's.`,
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
  }
);

/** --- Solutions --- **/

solutions.firstLast6 = function (nums) {
  var end = nums.length - 1;
  return nums[0] == 6 || nums[end] == 6;
}

solutions.sameFirstLast = function (nums) {
    var end = nums.length - 1;
   if (nums.length >= 1){
       return nums[0] == nums[end];
   } else {return false;}
}

solutions.makePi = function () {
    var nums = [3, 1, 4];
    return nums;
}

solutions.commonEnd = function (a, b) {
  if (a.length >= 1 && b.length >= 1){
      return (a[0] == b[0] || a[a.length - 1] == b[b.length - 1]);
  }
    return false;
}

solutions.sum3 = function (nums) {
  return nums[0] + nums[1] + nums[2];
}

solutions.rotateLeft3 = function (nums) {
    var newA = [];

     newA[0] = nums[1];
     newA[1] = nums[2];
     newA[2] = nums[0];

    return newA;
}

solutions.reverse3 = function (nums) {
  return nums.reverse();
}

solutions.maxEnd3 = function (nums) {
    var max = nums[0] > nums[2] ? nums[0] : nums[2];

    nums[0] = max;
    nums[1] = max;
    nums[2] = max;

    return nums;
}

solutions.sum2 =  function (nums) {
    if (nums.length == 0){
        return 0;
    }

  if (nums.length < 2) {
      return nums[0];
  } else {
     return nums[0] + nums[1]
  }
}

solutions.middleWay = function (a, b) {
  var newArr = []
  newArr.push(a[1], b[1]);

    return newArr;
}

solutions.makeEnds =  function (nums) {
     var nArr = [];
     nArr.push(nums[0], nums[nums.length - 1]);

     return nArr;
}

solutions.has23 = function (nums) {

    if (nums.indexOf(2) != -1 || nums.indexOf(3) != -1){
       return true
    } else {
       return false
    }
}

solutions.no23 = function (nums) {
  if (nums.indexOf(2) == -1 && nums.indexOf(3) == -1){
      return true;
  } else {
      return false;
  }
}

solutions.makeLast = function (nums) {
  var i = 0;
  var newNums = [];
  var last = nums.slice(nums.length - 1); //calling slice on array returns array with 'sliced' portion
  var double = nums.length * 2;

  while (i < double - 1) {
        newNums.push(0);
        i++;
    }

    newNums.push(last[0]);
    return newNums;
}

solutions.double23 = function (nums) {
  if (nums.length < 2) {
      return false;
  }
  else if ((nums[0] == 2 && nums[1] == 2) || (nums[0] == 3 && nums[1] == 3)) {
      return true
  } else {
      return false;
  }
}

solutions.fix23 = function (nums) {
  for (var i = 0; i < nums.length; i++){
      if (nums[i] == 2 && nums[i+1] == 3) {
         var tri = nums.indexOf(3);
         nums[tri] = 0;
    }
  }
  return nums;
}

solutions.start1 = function (a, b) {
  var count = 0;
   if (a[0] == 1) {
    count += 1;
   }

   if (b[0] == 1){
    count += 1;
   }

   return count;
}

solutions.biggerTwo = function (a, b) {
  if (b[0] + b[1] > a[0] + a[1]) {
  	return b;
  }
  return a;
}

solutions.makeMiddle = function (nums) {
  var first_half = nums.splice(0, nums.length/2);

  var one = first_half.pop();
  var two = nums.shift();

  return [one, two]
}

solutions.plusTwo = function (a, b) {
  var duoArr = new Array();
  duoArr[0]= a[0];
  duoArr[1]= a[1];
  duoArr[2]= b[0];
  duoArr[3]= b[1];

  return duoArr;
}

solutions.swapEnds = function (nums) {
    if (nums.length < 2) {
  	  return nums;
    }

  var toStart = nums.pop();
  var toEnd = nums.shift()

	nums.unshift(toStart);
	nums.push(toEnd);

	return nums;
}

solutions.midThree = function (nums) {
     var x = Math.floor(nums.length/2); // since 5/2 is 2.5, floor gives 2
     return nums.slice(x-1, x+2);
}

solutions.maxTriple = function (nums) {
  var mid = Math.floor(nums.length/2);
  var start = nums[0]
  var end = nums[nums.length - 1];

  if ( nums[mid] > start && nums[mid] > end){
  	return nums[mid];
  }
  else if (start > nums[mid] && start > end) {
  	return start;
  } else {
  	return end;
  }
}

solutions.frontPiece = function (nums) {
  if (nums.length < 2) {
  	return nums;
  }
  return [nums[0], nums[1]];
}

solutions.unlucky1 = function (nums) {

  var sections = [
    nums.slice(-2),
    nums.slice(0,3)
  ]

  for (let section of sections) {
    for (var i = 0; i < section.length; i++) {
      if (section[i] == 1 && section[i + 1] == 3)
        return true;
    }
  }
  return false;
}

solutions.make2 = function (a, b) {
  var newAr = a.concat(b);

    return [newAr[0], newAr[1]];
}

solutions.front11 = function (a, b) {
  var sections = [
	a,
	b
   ]

    var newA = [];

    for (let section of sections) {
        if (section.length == 0) {

        } else {
            newA.push(section[0]);
        }
    }

    return newA;
}
