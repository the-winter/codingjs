/** --- solutions --- **/

let solutions = {};

solutions.sumDownBy2 = function (n) {
    if (n <= 0) {
        return 0;
    }
    else if (n === 1) {
      return 1;
    }
    else {
      return n + this.sumDownBy2(n-2);
    }
 }
 
 
solutions.makes8 = function (a, b) {
  return ((a == 8 || b == 8) || (a + b == 8));
};
 
solutions.countOdds = function (nums) {
   let count = 0;
 
     for (let i = 0; i < nums.length; i++){
         if (nums[i]%2 === 1){
             count += 1;
         }
     }
     return count;
 }
 
 solutions.fib = function (n) {
   if (n < 2) {
       return n;
   };
     return this.fib(n-1) + this.fib(n-2);
 }

 module.exports = solutions;