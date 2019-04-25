/**--- Solutions --- **/

let solutions = {};

solutions.scoresIncreasing = function (scores) {

    for (let i = 1; i < scores.length; i++){
      if (scores[i] != scores[i-1] && scores[i] < scores[i-1]){
        return false;
      }
    }
    return true;
  }
  
  solutions.scores100 = function (scores) {
    let count=0;
  
    for (let i = 0; i < scores.length; i++){
      if (scores[i] == 100 && scores[i+1] == 100){
        count+= 1;
      }
    }
    return count > 0;
  }
  
  solutions.scoresClump = function (scores) {
  
    for (let i = 0; i < scores.length-1; i++){
      if (scores[i+2] - scores[i] <= 2){
        return true;
      }
    }
    return false;
  }
  
  solutions.scoresAverage = function (scores) {
  
    function average(nums){
      let sum = 0;
      for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
      }
      return sum/nums.length;
    }
  
    let half = scores.length/2
    let first = [];
    let second = [];
  
    for (let i = 0; i < half; i++){
      first.push(scores[i])
    };
  
     for (let i = half; i < scores.length; i++){
      second.push(scores[i])
    };
  
    let av1 = average(first);
    let av2 = average(second);
  
    if (av1 > av2){
      return av1;
    }
    return av2
  }
  
  solutions.wordsCount = function (words, len) {
  
    let count = 0;
    for (let i = 0; i < words.length; i++){
      if (words[i].length == len) {
        count+=1;
      }
    }
    return count;
  }
  
  solutions.wordsFront = function (words, n) {
  
    let arr = [];
    for (let i = 0; i < n; i++){
      arr.push(words[i]);
    }
    return arr;
  }
  
  solutions.wordsWithoutList = function (words, len) {
    let arr = [];
  
    for (let i = 0; i < words.length; i++){
      if (words[i].length != len){
        arr.push(words[i]);
      }
    }
    return arr;
  }
  
  solutions.hasOne = function (n) {
  
      let str = n.toString()
  
      let j = str.length-1;
      while (j >= 0){
         if(parseInt(str[j])%10 == 1) {
           return true;
         }
        j--;
      }
      return false;
  }
  
  solutions.dividesSelf = function (n) {
    let num = n.toString();
  
    let j = num.length - 1;
  
    while (j >= 0) {
      if (n%parseInt(num[j]) != 0){
        return false;
      }
      j--;
    }
    return true;
  }
  
  solutions.copyEvens = function (nums, count) {
  
   let erray = [];
   let j = count;
  
    for (let i = 0; i < nums.length; i++){
      if (nums[i]%2 == 0){
          erray.push(nums[i]);
          j --;
          if (j<1) break
       }
     }
   return erray;
  }
  
  solutions.copyEndy = function (nums, count) {
    let newArray = [];
    for (let i=0; i<nums.length; i++) {
      let n = nums[i];
      if (n >= 0 && n <= 10 || n >= 90 && n <= 100) {
        newArray.push(n);
      }
      if (newArray.length === count) {
        break;
      }
    }
    return newArray;
  }
  
  solutions.matchUp = function (a, b) {
      let count = 0;
  
      for(let i = 0; i < a.length; i++) {
          if(a[i].length > 0 && b[i].length > 0 &&
              a[i].charAt(0) == b[i].charAt(0)) {
                count++;
              }
      }
  
      return count;
  }
  
  solutions.scoreUp = function (key, answers) {
    let score = 0;
  
    for (let i = 0; i < key.length; i++){
        if (answers[i] == "?"){
          score += 0;
        }
        else if (key[i] != answers[i]){
           score -= 1;
        } else {
            score += 4;
        }
    }
    return score;
  }
  
  solutions.wordsWithout = function (words, target){
     let nuarr = [];
  
     for (let i = 0; i < words.length; i++){
         if (words[i] != target){
             nuarr.push(words[i]);
         }
     }
     return nuarr;
  }
  
  solutions.scoresSpecial = function (a, b){
    function largest(x){
  
      let big = 0;
      for (let i = 0; i < x.length; i++){
         if (x[i] > big && x[i]%10 == 0){
             big = x[i]
         }
      }
  
      return big;
    }
     let ares = largest(a);
     let bres = largest(b);
  
     return ares + bres;
  }
  
  solutions.sumHeights = function (heights, start, end) {
    let res = 0;
    for (let i = start; i < end; i++){
        res += Math.abs(heights[i] - heights[i+1])
    }
    return res;
  }
  
  solutions.sumHeights2 = function (heights, start, end) {
  
    let sum = 0;
    for (let i = start; i < end; i++){
      if (heights[i+1] > heights[i]){
          sum+= Math.abs(heights[i] - heights[i+1]) * 2
      } else {
          sum+= Math.abs(heights[i] - heights[i+1]);
      }
    }
    return sum;
  }
  
  solutions.bigHeights = function (heights, start, end) {
    let count = 0;
    for (let i = start; i < end; i++){
        if (Math.abs(heights[i] - heights[i+1]) >= 5){
            count += 1;
        }
    }
    return count;
  }
  
  solutions.userCompare = function (aName, aId, bName, bId) {
  
    if (aName < bName){
        return -1;
    } else if (aName > bName){
        return 1;
    } else if (aId < bId) {
        return -1;
    } else if(aId > bId) {
          return 1;
      }
      return 0;
  }
  
  solutions.mergeTwo = function (a, b, n) {
    let abinit = a.concat(b);
    let ab = abinit.sort();
  
    let arr = ""
  
    let count = n;
  
    for (let i = 0; i < ab.length-1; i++){
      if (count <= 0) {break;}
  
      if (ab[i] == ab[i+1] && arr.charAt(arr.length-1) != ab[i]){
        arr += ab[i];
        count--;
        i++;
      } else {
         arr += ab[i];
        count--;
      }
    }
    return arr.split("");
  }
  
  solutions.commonTwo = function (a, b) {
     let str = "";
     let count = 0;
  
     for (let i = 0; i < b.length; i++){
      for (let j = 0; j < a.length; j++){
        if (a[j] == b[i] && !str.includes(a[j])){
            str += a[j];
            count ++;
          }
        }
     }
     return count;
  }
  
module.exports = solutions;