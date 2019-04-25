/**---Solutions--- **/
// Warmup-1

let solutions = {};

solutions.stringTimes = function (str, n) {
    return str.repeat(n);
  };
  
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

// Warmup-2
solutions.doubleX = function (str) {
  str.toLowerCase();
  x = str.indexOf('x');
  if (x == -1) {
    return false;
  }
  if (x >= str.length) {
    return false;
  }
  return str.substring(x + 1, x + 2) == 'x';
};

solutions.last2 = function (str) {
  count = 0;
  if (str.length < 2) {
    return 0;
  }
  end = str.substring(str.length - 2);
  for (x = 0; x < str.length - 2; x++) {
    sub = str.substring(x, x + 2);
    if (sub == end) {
      count++;
    }
  }
  return count;
};

solutions.array123 = function (nums) {
  return !!(nums.join('').match(/123/g));
};

solutions.altPairs = function (str) {
  result = '';
  for (x = 0; x < str.length; x += 4) {
    end = x + 2;
    if (end > str.length) {
      end = str.length;
    }
    result = result + str.substring(x, end);
  }
  return result;
};

solutions.noTriples = function (nums) {
  for (x = 0; x < nums.length - 2; x++) {
    first = nums[x];
    if (first == nums[x + 1]) {
      if (first == nums[x + 2]) {
        return false;
      }
    }
  } return true;
};

solutions.frontTimes = function (str, n) {
  frontLen = 3;
  if (frontLen > str.length) {
    frontLen = str.length;
  }
  front = str.substring(0, frontLen);
  result = '';
  for (x = 0; x < n; x++) {
    result = result + front;
  }
  return result;
};

solutions.stringBits = function (str) {
  result = '';
  for (x = 0; x < str.length; x += 2) {
    result = result + str.substring(x, x + 1);
  }
  return result;
};

solutions.arrayCount9 = function (nums) {
  count = 0;
  for (x = 0; x < nums.length; x++) {
    if (nums[x] == 9) {
      count++;
    }
  }
  return count;
};

solutions.stringMatch = function (a, b) {
  len = Math.min(a.length, b.length);
  count = 0;
  for (x = 0; x < len - 1; x++) {
    aSub = a.substring(x, x + 2);
    bSub = b.substring(x, x + 2);
    if (aSub == bSub) {
      count++;
    }
  }
  return count;
};

solutions.stringYak = function (str) {
  result = '';
  for (x = 0; x < str.length; x++) {
    if (x + 2 < str.length && str.charAt(x) == 'y' && str.charAt(x + 2) == 'k') {
      x = x + 2;
    } else {
      result = result + str.charAt(x);
    }
  }
  return result;
};

solutions.has271 = function (nums) {
  return !!(nums.join('').match(/271/g));
};

solutions.countXX = function (str) {
  count = 0;
  for (x = 0; x < str.length; x++) {
    if (str.charAt(x) == 'x') {
      if (str.charAt(x + 1) == 'x') {
        count++;
      }
    }
  }
  return count++;
};

solutions.stringSplosion = function (str) {
  result = '';
  for (x = 0; x < str.length - 1; x++) {
    result = result + str.substring(0, x + 1);
  }
  return result;
};

solutions.arrayFront9 = function (nums) {
  for (x = 0; x < 4; x++) {
    if (nums[x] == 9) {
      return true;
    }
  }
  return false;
};

solutions.stringX = function (str) {
  result = '';
  front = str.substring(0, 1);
  end = str.substring(str.length - 1);
  for (i = 1; i < str.length - 1; i++) {
    if (str.charAt(i) !== 'x') {
      result += str.charAt(i);
    }
  }
  return front + result + end;
};

solutions.array667 = function (nums) {
  count = 0;
  for (x = 0; x < nums.length; x++) {
    if (nums[x] == 6) {
      if (nums[x + 1] == 6 || nums[x + 1] == 7) {
        count++;
      }
    }
  } return count;
};
  
module.exports = solutions;