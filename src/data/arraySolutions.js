/** --- Solutions --- **/
// Array-1

let solutions = {};

solutions.firstLast6 = function (nums) {
    let end = nums.length - 1;
    return nums[0] == 6 || nums[end] == 6;
  }
  
  solutions.sameFirstLast = function (nums) {
      let end = nums.length - 1;
     if (nums.length >= 1){
         return nums[0] == nums[end];
     } else {return false;}
  }
  
  solutions.makePi = function () {
      let nums = [3, 1, 4];
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
      let rotatedArray = nums.slice();
      let first = rotatedArray.shift();
      rotatedArray.push(first);
      return rotatedArray;
  }
  
  solutions.reverse3 = function (nums) {
    return nums.reverse();
  }
  
  solutions.maxEnd3 = function (nums) {
      let max = nums[0] > nums[2] ? nums[0] : nums[2];
  
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
    let newArr = []
    newArr.push(a[1], b[1]);
  
      return newArr;
  }
  
  solutions.makeEnds =  function (nums) {
       let nArr = [];
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
    let i = 0;
    let newNums = [];
    let last = nums.slice(nums.length - 1); //calling slice on array returns array with 'sliced' portion
    let double = nums.length * 2;
  
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
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == 2 && nums[i+1] == 3) {
           let tri = nums.indexOf(3);
           nums[tri] = 0;
      }
    }
    return nums;
  }
  
  solutions.findTheMedian = function (nums) {
    if (nums.length % 2 === 1){
      return nums[(nums.length-1)/2];
    }
    else{
      return (nums[nums.length/2-1] + nums[nums.length/2])/2;
    }
  }
  
  
  
  solutions.start1 = function (a, b) {
    let count = 0;
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
    let first_half = nums.splice(0, nums.length/2);
  
    let one = first_half.pop();
    let two = nums.shift();
  
    return [one, two]
  }
  
  solutions.plusTwo = function (a, b) {
    let duoArr = new Array();
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
  
  let toStart = nums.pop();
  let toEnd = nums.shift()
  
  nums.unshift(toStart);
  nums.push(toEnd);
  
  return nums;
  }
  
  solutions.findLowestIndex = function (nums) {
    let minVal = nums[0];
    let minValIndex = 0;
    for (let i = 0; i < nums.length; i++){
      let cur = nums[i];
      if (cur < minVal){
        minVal = cur;
        minValIndex=i;
      }
    }
    return minValIndex;
  
  }
  
  
  
  
  solutions.midThree = function (nums) {
       let x = Math.floor(nums.length/2); // since 5/2 is 2.5, floor gives 2
       return nums.slice(x-1, x+2);
  }
  
  solutions.maxTriple = function (nums) {
    let mid = Math.floor(nums.length/2);
    let start = nums[0]
    let end = nums[nums.length - 1];
  
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
  
    let sections = [
      nums.slice(-2),
      nums.slice(0,3)
    ]
  
    for (let section of sections) {
      for (let i = 0; i < section.length; i++) {
        if (section[i] == 1 && section[i + 1] == 3)
          return true;
      }
    }
    return false;
  }
  
  solutions.make2 = function (a, b) {
    let newAr = a.concat(b);
  
      return [newAr[0], newAr[1]];
  }
  
  solutions.front11 = function (a, b) {
    let sections = [
      a,
      b
     ]
  
      let newA = [];
  
      for (let section of sections) {
          if (section.length == 0) {
  
          } else {
              newA.push(section[0]);
          }
      }
  
      return newA;
  }
  
  // Array-2
  
  solutions.countEvens = function (nums) {
    let count = 0;
  
      for (let i = 0; i < nums.length; i++){
          if (nums[i]%2 == 0){
              count += 1;
          }
      }
      return count;
  }
  
  solutions.bigDiff = function (nums) {
    let minn = Math.min(...nums);
    let maxx = Math.max(...nums);
  
      return Math.abs(maxx - minn);
  }
  
  solutions.centeredAverage = function (nums) {
      let minn = Math.min(...nums);
      let minIn = nums.indexOf(minn);
      nums.splice(minIn, 1);
  
      let maxx = Math.max(...nums);
      let maxIn = nums.indexOf(maxx);
      nums.splice(maxIn, 1);
  
      let total = 0;
      for(let i = 0; i < nums.length; i++) {
          total += nums[i];
      }
      return total / nums.length;
  }
  
  solutions.sum13 = function (nums) {
      let pre13 = [];
    for (let i = 0; i < nums.length; i++){
       if(nums[i] == 13 || nums[i-1]==13) {
  
       } else {
           pre13.push(nums[i]);
       }
    }
    let sum = pre13.reduce((a, b) => a + b, 0)
    return sum;
  }
  
  solutions.sum67 = function (nums) {
    let summ = 0;
  
    for (let i = 0; i < nums.length; i++){
        if(nums[i] != 6){
            summ += nums[i];
        } else {
            while (nums[i] != 7) {
                i++;
            }
        }
    }
    return summ;
  }
  
  solutions.has22 = function (nums) {
     for (let i = 0; i < nums.length; i++){
          if (nums[i] == 2 && nums[i+1] == 2){
              return true;
          }
      }
      return false;
  }
  
  solutions.lucky13 = function (nums) {
    for(let i = 0; i < nums.length; i++){
      if (nums[i] == 1 || nums[i] == 3){
          return false;
      }
    }
      return true;
  
  }
  
  solutions.sum28 = function (nums) {
    let count = 0;
  
      for(let i = 0; i < nums.length; i++){
          if(nums[i] == 2){
              count += nums[i];
          }
      }
      return count == 8;
  }
  
  solutions.more14 = function (nums) {
  
      let one = 0;
      let four = 0;
  
      for (let i = 0; i < nums.length; i++){
          if (nums[i] == 1){
              one += 1;
          }
  
          if(nums[i] == 4){
              four += 1;
          }
      }
      return one > four;
  }
  
  solutions.fizzArray = function (n) {
    let newA = [];
      for (let i = 0; i < n; i++){
          newA[i] = i;
      }
      return newA;
  }
  
  solutions.prependSum = function (nums) {
    nums.unshift(nums.shift() + nums.shift());
    return nums;
  }
  
  
  
  solutions.only14 = function (nums) {
  
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != 4 && nums[i] != 1){
            return false;
        }
      }
      return true;
  }
  
  solutions.fizzArray2 = function (n) {
      let nu = [];
      for (let i = 0; i < n; i++){
          nu[i] = i.toString();
      }
      return nu;
  }
  
  solutions.no14 = function (nums) {
  let has1 = false;
  let has4 = false;
  
  for (let i = 0; i < nums.length; i++){
      if (nums[i] == 1){
          has1 = true;
      }
  
      if (nums[i] == 4){
          has4 = true;
      }
  
    }
      return (!has1 || !has4);
  }
  
  solutions.isEverywhere = function (nums, val) {
   for (let i = 0; i < nums.length-1; i++){
       if (nums[i] != val && nums[i+1] != val){
           return false;
       }
     }
      return true;
  }
  
  solutions.either24 = function (nums) {
      let has22 = false;
      let has44 = false;
  
      for(let i = 0; i < nums.length - 1; i++) {
          if(nums[i] == 2 && nums[i+1] == 2)
              has22 = true;
  
          if(nums[i] == 4 && nums[i+1] == 4)
              has44 = true;
      }
  
      return has22 != has44;
  }
  
  solutions.matchUp = function (nums1, nums2) {
    let count = 0;
  
      for (let i = 0; i < nums1.length; i++){
          let diff = Math.abs(nums1[i] - nums2[i]);
          if (diff > 0 && diff < 3) {
              count += 1;
          }
      }
      return count;
  }
  
  solutions.has77 = function (nums) {
    for (let i = 0; i < nums.length - 1; i++){
        if ((nums[i] == 7 && nums[i+1] == 7) || (nums[i] == 7 && nums[i+2] == 7)) {
            return true;
        }
    }
      return false;
  }
  
  solutions.has12 = function (nums) {
    let has1 = false;
  
      for (let i = 0; i < nums.length; i++){
          if (nums[i] == 1){
              has1 = true;
          }
  
          if (has1 == true && nums[i] == 2){
              return true;
          }
      }
      return false;
  }
  
  solutions.modThree = function (nums) {
    for (let i = 0; i < nums.length - 1; i++){
        if (nums[i]%2 == nums[i+1]%2 && nums[i+1]%2 == nums[i+2]%2){
            return true;
        }
    }
      return false;
  }
  
  solutions.haveThree = function (nums) {
    let three = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == 3) {
             if (nums[i+1] == 3){
              return false;
           }
            three +=1;
        }
  
      }
      return three == 3;
  }
  
  solutions.twoTwo = function (nums) {
    for (let i = 0; i < nums.length; i++){
       if(nums[i] == 2){
           if (nums[i+1] != 2){
               return false;
           }
           i=i+2;
       }
    }
      return true;
  }
  
  solutions.sameEnds = function (nums, len) {
    let front = nums.slice(0, len);
    let end = nums.slice(nums.length - len);
  
    return front.toString() == end.toString();
  }
  
  solutions.tripleUp = function (nums) {
    for (let i = nums.length; i > 0; i--){
        if (nums[i] - nums[i-1] == 1){
            if (nums[i-1] - nums[i-2] == 1){
                return true;
            }
        }
    }
      return false;
  }
  
  solutions.fizzArray3 = function fizzArray3(start, end) {
    let newA = [];
      for (let i = start; i < end; i++){
          newA.push(i);
      }
      return newA;
  }
  
  solutions.shiftLeft = function (nums) {
  
      if (nums.length < 1) {
          return nums;
      }
  
      let first = nums.shift();
  
      nums.push(first);
  
      return nums;
  }
  
  solutions.tenRun = function (nums) {
      let current;
      let i = 0;
  
      while(i < nums.length && nums[i] % 10 != 0)
          i++;
  
      if(i >= nums.length)
          return nums;
  
      current = nums[i];
      i++;
  
      while(i < nums.length) {
          if(nums[i] % 10 == 0)
              current = nums[i];
          else
              nums[i] = current;
          i++;
      }
  
      return nums;
  }
  
  solutions.pre4 = function (nums) {
  
    let b44 = [];
  
    let i = 0;
  
    while (i < nums.length && nums[i] !=4){
        b44.push(nums[i]);
        i++;
    }
    return b44;
  }
  
  solutions.post4 = function (nums) {
    let aft4 = [];
  
      let i = nums.length-1;
    while (i > 0 && nums[i] != 4) {
        aft4.push(nums[i]);
        i--;
    }
      return aft4.reverse();
  }
  
  solutions.notAlone = function (nums, val) {
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] == val){
          if (nums[i+1] == undefined){
              return nums;
          }
  
          if (nums[i-1] == val || nums[i+1]==val){
  
            }
            else if (nums[i-1] == undefined){
  
            }
           else if (nums[i-1] > nums[i+1]){
                nums[i] = nums[i-1];
            } else {
                nums[i] = nums[i+1];
            }
        }
    }
      return nums;
  }
  
  solutions.zeroFront = function (nums) {
      if(nums.length == 0)
      return nums;
  
      let i = 0;
  
      while(nums[i] == 0)
          i++;
  
      for(let j = i + 1; j < nums.length; j++) {
          if(nums[j] == 0) {
              let temp = nums[i];
              nums[i] = nums[j];
              nums[j] = temp;
              i++;
          }
      }
  
      return nums;
  }
  
  solutions.withoutTen = function (nums) {
      let nlen = nums.length;
  
      let newA = nums.filter(notten);
  
      let tlen = newA.length;
      let x = nlen - tlen;
  
      let i = 0;
  
      while (i < x) {
          newA.push(0);
          i++;
      }
  
      return newA;
  }
  
  function notten (num){
      return num != 10;
  }
  
  solutions.zeroMax = function (nums) {
      let odd = 0;
      for (let i = nums.length-1; i >= 0; i--){
  
          if (nums[i] != 0 && nums[i]%2 !=0){
              if (nums[i] > odd){
                  odd = nums[i];
              }
          }
          if (nums[i] == 0){
              nums[i] = odd;
          }
      }
  
      return nums;
  }
  
  solutions.evenOdd = function (nums) {
    let even = nums.filter(isEven);
    let odd = nums.filter(isOdd);
  
    let newA = even.concat(odd);
  
    return newA;
  }
  
  function isEven(num){
      return num%2 == 0;
  }
  
  function isOdd(num){
      return num%2 != 0;
  }
  
  solutions.fizzBuzz = function (start, end) {
  
    let strArray = [];
  
    for (let i = start; i < end; i++){
      if (i%3 == 0 && i%5 == 0){
          strArray.push("FizzBuzz");
      } else if (i%3 == 0) {
          strArray.push("Fizz");
      } else if (i%5 == 0) {
          strArray.push("Buzz");
      } else {
          let str = i.toString();
          strArray.push(str);
      }
    }
      return strArray;
  }
  
  // Array-3
  
  solutions.maxSpan = function (nums) {
      let max = 0;
  
      for(let i = 0; i < nums.length; i++) {
          let j = nums.length - 1;
  
          while(nums[i] != nums[j]){
              j--;
          }
  
          let span = j - i + 1;
  
          if(span > max)
              max = span;
      }
  
      return max;
  }
  
  solutions.fix34 = function (nums) {
      let i = 0;
  
      while(i < nums.length && nums[i] != 3)
          i++;
  
      let j = i + 1;
  
      while(j < nums.length && nums[j] != 4)
          j++;
  
      while(i < nums.length) {
          if(nums[i] == 3) {
              let temp = nums[i+1];
              nums[i+1] = nums[j];
              nums[j] = temp;
  
              while(j < nums.length && nums[j] != 4)
                  j++;
          }
          i++;
      }
  
      return nums;
  }
  
  solutions.fix45 = function (nums) {
  
    let i = 0;
    let j = 0;
  
      while (j < nums.length && nums[j] != 5){
          j++;
      }
  
      while (i < nums.length) {
          if (nums[i] == 4){
              let temp = nums[i+1];
              nums[i+1] = nums[j];
              nums[j] = temp;
  
              while((j < nums.length && nums[j] != 5) || j == i + 1)
                  j++;
          }
          i++;
      }
      return nums;
  }
  
  solutions.canBalance = function (nums) {
      let first = 0;
      let second = 0;
  
     for (let i = 0; i < nums.length; i++){
         second += nums[i]; //adding all nums together
     }
  
     for (let i = 0; i <= nums.length - 2; i++){
         first += nums[i];
         second -= nums[i];
  
         if (first == second){
          return true;
         }
     }
  
     return false;
  }
  
  solutions.linearIn = function (outer, inner) {
    //index for inner array, also acts as a 'count' variable
   let j = 0;
  
      //looping through the outer array once. looking for matches.
      for (let i = 0; i < outer.length; i++){
         if (inner[j] == outer[i]){
           j++;
       }
      }
  
   return j == inner.length;
  
  }
  
  solutions.squareUp = function (n) {
  
    let subArray = [];
    let j = n;
    while (j > 0){
      subArray.push(0);
      j--;
    }
  
    let output = [];
  
    for (let i = n-1; i >= 0; i--){
      subArray.splice(i, 1, n-i);
      output = output.concat(subArray);
    }
    return output;
  }
  
  solutions.seriesUp = function (n) {
    let modArr = [];
  
    for (let i = 0; i < n; i++){
      let j = i;
      let x = 1;
      while (j >= 0){
        modArr.push(x);
        x += 1;
        j--;
      }
      x = 1;
    }
    return modArr;
  }
  
  solutions.maxMirror = function (nums) {
  
  function matchesForN(nums, n) {
  // initially lets solve for n=3, then we can generalise to any n
  // step1 get the candidates, which is [1,2,3] and [2,3,4] etc
  let candidates = [];
  
  for (let i=0; i < nums.length - (n-1); i++){
    let candidate = nums.slice(i, i+n);
    candidates.push(candidate);
  }
  
    //step2. reverse nums. Since reverse() alters the array, prevent that by saving
    // reversed array in a variable.
    let rev_nums = nums.slice().reverse();
  
    let comparisons = [];
  
    //step3. make the copmarison arrays. like in candidates but reversed.
    for (let i = 0; i < rev_nums.length - (n-1); i++){
      let comparison = rev_nums.slice(i, i+n);
      comparisons.push(comparison);
    }
  
    let matches=[]
    for(let candidate of candidates){
        for(let comparison of comparisons){
            match = isEqual(candidate,comparison.slice())
            if (match) {
                matches.push(candidate);
                break;
            }
        }
    }
  
    return matches;
  
  }
  
  //function we call to check if the sub-arrays are equal
  function isEqual (array1,array) {
      for (let i = 0, l=array1.length; i < l; i++) {
          // Check if we have nested arrays
          if (array1[i] instanceof Array && array[i] instanceof Array) {
              // recurse into the nested arrays
              if (!array1[i].equals(array[i]))
                  return false;
          }
          else if (array1[i] != array[i]) {
              // Warning - two different object instances will never be equal: {x:20} != {x:20}
              return false;
          }
      }
      return true;
  }
  
    for (let n = nums.length; n >= 0; n--){
      let matches = matchesForN(nums, n);
      if (matches.length){
        return n;
      }
    }
  }
  
  solutions.countClumps = function (nums){
    let yardStick = -1;
    let clumps = 0;
  
    for (let i = 0; i < nums.length; i++){
      if (nums[i] == nums[i+1] && nums[i] != yardStick){
        clumps += 1;
        yardStick = nums[i];
      } else {
        if (nums[i] != yardStick){
          yardStick = -1
        }
      };
    }
    return clumps;
  }
  
  module.exports = solutions;