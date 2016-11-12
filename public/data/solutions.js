// TODO:0 add solutions from jsfiddle


const solutions = {};

solutions.sleepIn = function (weekday, vacation) {
  return !weekday || vacation;
};

solutions.diff21 = function (n) {
  if (n <= 21) {
    return 21 - n;
  } else {
    return (n - 21) * 2;
  }
};

solutions.nearHundred = function (n) {
  return ((Math.abs(100 - n) <= 10) ||
	 (Math.abs(200 - n) <= 10));
};

solutions.missingChar = function (str, n) {
  front = str.substring(0, n);
  back = str.substring(n + 1, str.length);
  return front + back;
};

solutions.backAround = function (str) {
  last = str.substring(str.length - 1);
  return last + str + last;
};

solutions.startHi = function (str) {
  if (str.length < 2) {
    return false;
  }
  front = str.substring(0, 2);
  if (front == 'hi') {
    return true;
  } else {
    return false;
  }
};

solutions.hasTeen = function (a, b, c) {
  return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19);
};

solutions.mixStart = function (str) {
  if (str.length < 3) {
    return false;
  }
  two = str.substring(1, 3);
  if (two == 'ix') {
    return true;
  } else {
    return false;
  }
};

solutions.close10 = function (a, b) {
  aDiff = Math.abs(a - 10);
  bDiff = Math.abs(b - 10);

  if (aDiff < bDiff) {
    return a;
  }
  if (bDiff < aDiff) {
    return b;
  }
  return 0;
};

solutions.stringE = function (str) {
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'e') {
      count++;
    }
  }
  return (count >= 1 && count <= 3);
};

solutions.everyNth = function (str, n) {
  result = '';
  for (let i = 0; i < str.length; i = i + n) {
    result = result + str.charAt(i);
  }
  return result;
};

solutions.monkeyTrouble = function (aSmile, bSmile) {
  if (aSmile && bSmile) {
    return true;
  }
  if (!aSmile && !bSmile) {
    return true;
  }
  return false;
};

solutions.parrotTrouble = function (talking, hour) {
  if (talking === true && (hour < 7 || hour > 20)) {
    return true;
  } else {
    return false;
  }
};

solutions.posNeg = function (a, b, negative) {
  if (negative === true) {
    return a < 0 && b < 0;
  }
  if ((a < 0 && b > 0) || a > 0 && b < 0) {
    return true;
  } else {
    return false;
  }
};

solutions.frontBack = function (str) {
  if (str.length <= 1) {
    return str;
  }
  mid = str.substring(1, str.length - 1);

  return (str.charAt(str.length - 1)) + mid + str.charAt(0);
};

solutions.or35 = function (n) {
  if (n % 3 == 0 || n % 5 == 0) {
    return true;
  } else {
    return false;
  }
};

solutions.icyHot = function (temp1, temp2) {
  if (temp1 < 0 && temp2 > 100 || temp2 < 0 && temp1 > 100) {
    return true;
  }
  return false;
};

solutions.loneTeen = function (a, b) {
  const isTeen = function (num) {
    return num >= 13 && num <= 19;
  };
  const isTeenA = isTeen(a);
  const isTeenB = isTeen(b);
  return isTeenA && !isTeenB || !isTeenA && isTeenB;
};

solutions.startOz = function (str) {
  result = '';

  if (str.length >= 1 && str.charAt(0) == 'o') {
    result += str.charAt(0);
  }
  if (str.length >= 2 && str.charAt(1) == 'z') {
    result += str.charAt(1);
  }
  return result;
};

solutions.in3050 = function (a, b) {
  if ((a >= 30 && a <= 40 && b >= 30 && b <= 40) || (a >= 40 && a <= 50 && b >= 40 && b <= 50)) {
    return true;
  } else {
    return false;
  }
};

solutions.lastDigit = function (a, b) {
  return (a % 10 == b % 10);
};

solutions.sumDouble = function (a, b) {
  if (a == b) {
    return 2 * (a + b);
  } else {
    return a + b;
  }
};

solutions.makes10 = function (a, b) {
  return ((a == 10 || b == 10) || (a + b == 10));
};

solutions.notString = function (str) {
  if (str === null || str === undefined || str.substring(0, 3) === 'not') {
    return str;
  }
  return `not ${str}`;
};

solutions.front3 = function (str) {
  front = '';
  if (str.length >= 3) {
    front = str.substring(0, 3);
  } else {
    front = str;
  }
  return front + front + front;
};

solutions.front22 = function (str) {
  take = 2;
  if (take > str.length) {
    take = str.length;
  }
  front = str.substring(0, take);
  return front + str + front;
};

solutions.in1020 = function (a, b) {
  if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) {
    return true;
  } else {
    return false;
  }
};

solutions.delDel = function (str) {
  if (str.length < 4) {
    return str;
  }
  let output = str;
  if (str.substring(1, 4) == 'del') {
    output = str.substring(0, 1) + str.substring(4, str.length);
  }
  return output;
};

solutions.intMax = function (a, b, c) {
  max = 0;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
};

solutions.max1020 = function (a, b) {
  const between1020 = function (num) {
    return num >= 10 && num <= 20;
  };
  let result = 0;
  if (between1020(a)) {
    result = a;
  }
  if (b > result && between1020(b)) {
    result = b;
  }
  return result;
};

solutions.endUp = function (str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  cut = str.length - 3;
  front = str.substring(0, cut);
  back = str.substring(cut);

  return front + back.toUpperCase();
};


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
