/** --- solutions --- **/

let solutions = {};

solutions.factorial =  function (n) {
    if (n === 0) {
        return 1;
    }
     return n * this.factorial(n-1)
 }
 
 solutions.bunnyEars = function (bunnies) {
     if (bunnies <= 0) {
       return 0;
     }
     else {
       return 2 + this.bunnyEars(bunnies-1);
     }
 }
 
 solutions.fibonacci = function (n) {
   if (n < 2) {
       return n;;
   };
     return this.fibonacci(n-1) + this.fibonacci(n-2)
 }
 
 solutions.bunnyEars2 = function (bunnies) {
 
  if (bunnies <= 0){
    return 0;
  }
 
  if (bunnies%2 == 0){
    return 3 + this.bunnyEars2(bunnies - 1);
  } else {
    return 2 + this.bunnyEars2(bunnies - 1);
  }
 }
 
 solutions.triangle = function (rows) {
 
   if (rows <= 0){
     return 0;
   }
   return rows + this.triangle(rows-1)
 }
 
 solutions.sumDigits1 = function (n) {
     if(n <= 0){
        return 0;
     }
     return n % 10 + this.sumDigits1(Math.floor(n/10));
 }
 
 solutions.count7 = function (n) {
     if(n <= 0)
         return 0;
 
     if(n % 10 == 7)
         return 1 + this.count7(Math.floor(n/10));
 
     return this.count7(Math.floor(n/10));
 }
 
 solutions.count8 = function (n) {
     if(n == 0){
       return 0;
     }
 
     if(n % 10 == 8) {
         if(parseInt(n/10) % 10 == 8) {
            return 2 + this.count8(parseInt(n/10));
         } else {
           return 1 + this.count8(parseInt(n/10));
         }
     }
     return this.count8(parseInt(n/10));
 }
 
 solutions.powerN = function (base, n) {
   if (n == 1){
     return base;
   }
   return base * this.powerN(base, n-1);
 }
 
 solutions.countX = function (str) {
     if(str.length == 0)
         return 0;
 
     if(str.charAt(0) == 'x'){
       return 1 + this.countX(str.substring(1));
     } else {
       return this.countX(str.substring(1));
     }
 }
 
 solutions.countHi = function (str) {
   if (str.length == 0){
     return 0;
   }
 
   if (str.substring(0, 2) == "hi"){
     return 1 + this.countHi(str.substring(2))
   }
   return this.countHi(str.substring(1))
 }
 
 solutions.changeXY = function (str) {
   if (str.length == 0){
     return "";
   }
 
   if (str.charAt(0) == "x"){
     return "y" + this.changeXY(str.substring(1))
   }
   return str.charAt(0) + this.changeXY(str.substring(1))
 }
 
 solutions.changePi = function (str) {
 
   if (str.length <= 0){
     return "";
   }
 
   if (str.substring(0, 2) == "pi"){
     return 3.14 + this.changePi(str.substring(2))
   } else {
     return str.charAt(0) + this.changePi(str.substring(1))
   }
 }
 
 solutions.noX = function (str) {
   if (str.length == 0){
     return "";
   }
 
   if (str.charAt(0) == "x"){
     return this.noX(str.substring(1));
   } else {
     return str.charAt(0) + this.noX(str.substring(1));
   }
 }
 
 solutions.array6 = function (nums, i) {
   if (i > nums.length){
     return false;
   }
 
   if (nums[i] == 6){
     return true;
   } else {
     return this.array6(nums, i+1)
   }
 }
 
 solutions.array11 = function array11(nums, i) {
   if (i >= nums.length){
     return 0;
   }
 
   if (nums[i] == 11){
     return 1 + this.array11(nums, i+1);
   } else {
     return this.array11(nums, i+1);
   }
 }
 
 solutions.array220 = function (nums, i) {
 
   if (i == nums.length-1 || nums.length == 0){
     return false;
   }
 
   if (nums[i] * 10 == nums[i+1]){
     return true;
   }
   return this.array220(nums, i+1);
 }
 
 solutions.allStar = function (str) {
 
   if (str.length <= 1){
     return str;
   }
 
   return  str.charAt(0) + "*" + this.allStar(str.substring(1));
 }
 
 solutions.pairStar = function (str) {
 
   if (str.length <= 1){
     return str.charAt(0);
   }
 
   if (str.charAt(0) == str.charAt(1)){
     return str.charAt(0) + "*" + this.pairStar(str.substring(1));
   }
   return str.charAt(0) + this.pairStar(str.substring(1));
 }
 
 solutions.endX = function (str) {
     if(str.length <= 1) {
       return str;
     }
 
    if (str.charAt(0) == "x"){
      return this.endX(str.substring(1)) + "x";
    }
    return str.charAt(0) + this.endX(str.substring(1));
 }
 
 solutions.countPairs = function (str) {
 
   if (str.length <= 2){
     return 0;
   }
 
   if (str.charAt(0) == str.charAt(2)){
     return 1 + this.countPairs(str.substring(1));
   }
   return this.countPairs(str.substring(1));
 }
 
 solutions.countAbc = function (str){
 
   if (str.length <= 2) {
     return 0;
   }
 
   if (str.substring(0, 3) === "abc" || str.substring(0, 3) === "aba"){
     return 1 + this.countAbc(str.substring(2));
   }
   return this.countAbc(str.substring(1))
 }
 
 solutions.count11 = function (str) {
 
   if (str.length <= 1){
     return 0;
   }
 
   if (str.substring(0, 2) == "11"){
     return 1 + this.count11(str.substring(2))
   }
   return this.count11(str.substring(1));
 }
 
 solutions.stringClean = function (str) {
   if (str.length == 1){
     return str;
   }
 
   if (str.charAt(0) == str.charAt(1)){
     return this.stringClean(str.substring(1));
   }
   return str.charAt(0) + this.stringClean(str.substring(1));
 }
 
 solutions.countHi2 = function (str){
   if (str.length <= 1){
     return 0;
   }
 
   if (str.substring(0, 3) == "xhi"){
     return this.countHi2(str.substring(3))
   }
 
   if (str.substring(0, 2) == "hi"){
      return 1 + this.countHi2(str.substring(2))
   }
 
    return this.countHi2(str.substring(1))
 }
 
 solutions.starBit = function (str) {
   if (str.charAt(0) == "-" && str.charAt(str.length - 1) == "*"){
     return str;
   }
 
   if (str.charAt(str.length-1) == "*"){
     return this.starBit(str.substring(1));
   }
 
   if (str.charAt(0) == "-"){
     return this.starBit(str.substring(0, str.length-1));
   }
 
   return this.starBit(str.substring(1, str.length - 1));
 }
 
 solutions.nestParen = function (str) {
     if(str.length == 0)
         return true;
 
     if(str.charAt(0) == '(' && str.charAt(str.length-1) == ')'){
         return this.nestParen(str.substring(1, str.length-1));
     }
 
     return false;
 }
 
 solutions.strCount = function (str, sub) {
   if (str.length <= 0){
     return 0;
   }
 
   if (str.substring(0, sub.length) == sub){
     return 1 + this.strCount(str.substring(sub.length), sub)
   }
   return this.strCount(str.substring(1), sub);
 }
 
 solutions.strCopies = function (str, sub, n) {
   if (n == 0){
     return true;
   }
 
   if (str.length < sub.length){
     return false;
   }
 
   if (str.substring(0, sub.length) == sub){
     return this.strCopies(str.substring(1), sub, n-1)
   }
   return this.strCopies(str.substring(1), sub, n)
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
     return this.strDist(str.substring(0, str.length-1), sub);
   }
 
    if (str.substring(str.length-sub.length) == sub){
     return this.strDist(str.substring(1), sub);
   }
 
   return this.strDist(str.substring(1, str.length-1), sub)
 }

 module.exports = solutions;