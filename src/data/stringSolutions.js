/** --- Solutions --- **/
// String-1

let solutions = {};

solutions.helloName = function (name) {
    return `Hello ${name}!`;
  };
  
solutions.makeAbba = function (a, b) {
  return a + b + b + a;
};

solutions.makeOutWord = function (out, word) {
  front = out.substring(0, 2);
  back = out.substring(2, 4);
  return front + word + back;
};

solutions.extraEnd = function (str) {
  if (str.length > 1) {
    back = str.substring(str.length - 2);
    return back + back + back;
  }
};

solutions.withoutEnd = function (str) {
  return str.substring(1, str.length - 1);
};

solutions.comboString = function (a, b) {
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
};

solutions.nonStart = function (a, b) {
  a = a.substring(1, a.length);
  b = b.substring(1, b.length);
  return a + b;
};

solutions.firstHalf = function (str) {
  if (str.length % 2 == 0) {
    return str.substring(0, str.length);
  }
  return str;
};

solutions.firstTwo = function (str) {
  if (str.length > 2) {
    return str.substring(0, 2);
  }
  return str;
};

solutions.left2 = function (str) {
  if (str.length > 1) {
    front = str.substring(0, 2);
    back = str.substring(2, str.length);
    return back + front;
  }
  return str;
};

solutions.right2 = function (str) {
  if (str.length > 1) {
    back = str.substring(str.length - 2, str.length);
    front = str.substring(0, str.length - 2);
    return back + front;
  }
  return str;
};

solutions.theEnd = function (str, front) {
  if (front) {
    return str.substring(0, 1);
  }
  return str.substring(str.length - 1);
};

solutions.withoutEnd2 = function (str) {
  if (str.length <= 1) {
    return '';
  }
  return str.substring(1, str.length - 1);
};

solutions.middleTwo = function (str) {
  if (str.length % 2 == 0) {
    temp = str.substring(str.length);
    mid = temp.substring(0, 2);
    return mid;
  }
  return str;
};

solutions.endsLy = function (str) {
  if (str.substring(str.length - 2, str.length) == 'ly') {
    return true;
  } else {
    return false;
  }
};

solutions.nTwice = function (str, n) {
  first = str.substring(0, n);
  end = str.substring(str.length - n);
  return first + end;
};

solutions.makeTags = function (tag, word) {
  const otag = `<${tag}>`;
  const ctag = `</${tag}>`;
  return otag + word + ctag;
};

solutions.twoChar = function (str, index) {
  if (index + 2 > str.length || index < 0) {
    return str.substring(0, 2);
  }

  return str.substring(index, index + 2);
};

solutions.middleThree = function (str) {
  const i = Math.floor(str.length / 2);

  return str.substring(i - 1, i + 2);
};

solutions.hasBad = function (str) {
  if (str.length == 3) {
    return str.substring(0, 3) == 'bad';
  }

  if (str.length >= 4) {
    return str.substring(0, 3) == 'bad' ||
            str.substring(1, 4) == 'bad';
  }

  return false;
};

solutions.atFirst = function (str) {
  if (str.length == 0) {
    return '@@';
  }

  if (str.length == 1) {
    return `${str}@`;
  }

  return str.substring(0, 2);
};

solutions.lastChars = function (a, b) {
  let res = '';
  if (a.length == 0) {
    res += '@';
  } else {
    res += a.charAt(0);
  }

  if (b.length == 0) {
    res += '@';
  } else {
    res += b.charAt(b.length - 1);
  }

  return res;
};

solutions.conCat = function (a, b) {
  if (a.charAt(a.length - 1) == b.charAt(0)) {
    return a + b.substring(1);
  } else {
    return a + b;
  }
};

solutions.lastTwo = function (str) {
  if (str.length < 2) {
    return str;
  }

  return str.substring(0, str.length - 2) + str.charAt(str.length - 1) +
        str.charAt(str.length - 2);
};

solutions.seeColor = function (str) {
  if (str.length >= 3 && str.substring(0, 3) == 'red') {
    return 'red';
  }

  if (str.length >= 4 && str.substring(0, 4) == 'blue') {
    return 'blue';
  }

  return '';
};

solutions.frontAgain = function (str) {
  if (str.length < 2) {
    return false;
  }

  return str.substring(0, 2) == str.substring(str.length - 2);
};

solutions.minCat = function (a, b) {
  const min = Math.min(a.length, b.length);

  return a.substring(a.length - min) + b.substring(b.length - min);
};

solutions.extraFront = function (str) {
  if (str.length >= 2) {
    str = str.substring(0, 2);
  }

  return str + str + str;
};

solutions.without2 = function (str) {
  if (str.length >= 2 &&
        str.substring(0, 2) == str.substring(str.length - 2)) {
    return str.substring(2);
  }

  return str;
};

solutions.deFront = function (str) {
  if (str.length == 1 && str.charAt(0) != 'a') {
    return '';
  }

  if (str.length >= 2) {
    if (str.charAt(0) != 'a' && str.charAt(1) != 'b') {
      return str.substring(2);
    } else if (str.charAt(0) != 'a') {
      return str.substring(1);
    } else if (str.charAt(1) != 'b') {
      return `a${str.substring(2)}`;
    }
  }

  return str;
};

solutions.startWord = function (str, word) {
  if (str.length >= word.length &&
        str.substring(1, word.length) == (word.substring(1))) {
    return str.substring(0, word.length);
  }

  return '';
};

solutions.withoutX = function (str) {
  let start = 0;
  let end = str.length;

  if (str.length > 0 && str.charAt(0) == 'x') { start = 1; }

  if (str.length > 1 && str.charAt(str.length - 1) == 'x') {
    end--;
  }

  return str.substring(start, end);
};

solutions.withoutX2 = function (str) {
  if (str.length == 1 && str.charAt(0) == 'x') {
    return '';
  }

  if (str.length >= 2) {
    if (str.charAt(0) == 'x' && str.charAt(1) == 'x') {
      return str.substring(2);
    } else if (str.charAt(0) == 'x') {
      return str.substring(1);
    } else if (str.charAt(1) == 'x') {
      return str.charAt(0) + str.substring(2);
    }
  }

  return str;
};

// String-2

solutions.doubleChar = function (str) {
  let dStr = "";

  for (let i = 0; i < str.length; i++){
      dStr += str[i]+str[i];
  }
  return dStr;
}

solutions.countHi = function (str) {

  let count = 0;

  for (let i = 0; i < str.length; i++){
      if (str[i] + str[i+1] == "hi"){
          count +=1;
      }
  }
  return count;

}

solutions.catDog = function (str) {
  let cat = 0;
  let dog = 0;

  for (let i = 0; i < str.length; i++) {
      if(str.substring(i, i+3) == "cat") {
          cat += 1;
      }
        if(str.substring(i, i+3) == "dog") {
          dog += 1;
          }

    }
    return cat == dog;
}

solutions.countCode = function (str) {
  let count = 0;

    for (let i = 0; i < str.length; i++){
        if(str.substring(i, i+2) == "co" && str.substring(i+3, i+4) == "e"){
            count += 1;
        }
    }

    return count;
}

solutions.endOther = function (a, b) {
  let short = "";
  let long = "";

    if (a == b) {
        return true;
    }

    if (a.length < b.length){
        short += a.toLowerCase();
        long += b.toLowerCase();
    } else {
        short += b.toLowerCase();
        long += a.toLowerCase();
    }

    let longEnd = long.substring(long.length -short.length);

    return longEnd == short;
}

solutions.xyzThere = function (str) {
  let x = "xyz";
  for (let i = 0; i < str.length; i++){
    if(str.substring(i, i+3) == x && str.charAt(i-1, i) != "."){
        return true;
    }
  }
    return false;
}

solutions.bobThere = function (str) {
  for (let i = 0; i < str.length; i++){
      if (str.charAt(i) == "b" && str.charAt(i+2) == "b"){
          return true;
      }
  }
    return false;
}

solutions.xyBalance = function (str) {
    let y = false;
    //backwards loop
    for(let i = str.length - 1; i >= 0; i--) {
        if(str.charAt(i) == 'y')
            y = true;

        if(str.charAt(i) == 'x' && !y)
            return false;
    }

    return true;
}

solutions.mixString = function (a, b) {
    let large = "";
    let newStr = "";

    if (a.length > b.length) {
        large += a.length;
    } else {
        large += b.length;
    }

    for (let i = 0; i < large; i++) {
        if (a[i] != undefined) {
          newStr += a[i];
        }
        if (b[i] != undefined){
            newStr += b[i];
        }
    }

    return newStr;
}

solutions.repeatEnd = function (str, n) {
    let retStr = "";
  let sub = str.substring(str.length - n);

    while (n != 0) {
        retStr += sub;
        n--
    }

    return retStr;
}

solutions.repeatFront = function (str, n) {

    let nu = "";

    for (let i = n; i > 0; i--){
        nu += str.substring(0, i);
    }

    return nu;
}

solutions.repeatSeparator = function repeatSeparator(word, sep, count) {
  let nu = "";

      if (count == 0){
        return "";
      }


    for (let i = 0; i < count - 1; i++){
        nu += word;
        nu += sep;
    }

    nu += word;

    return nu;
}

solutions.prefixAgain = function (str, n) {
    let prefix = str.substring(0, n);

    for (let i = str.length; i > n; i--){
        if(str.substring(i-n, i) == prefix) {
            return true;
        }
    }
    return false;
}

solutions.xyzMiddle = function (str) {
    if(str.length < 3)
        return false;

    let start1 = str.length / 2 - 2;
    let start2 = str.length / 2 - 1;

    if(str.length % 2 == 0) {
        return str.substring(start1, start1 + 3) == "xyz" ||
            str.substring(start2, start2 + 3) == "xyz";
    }

    return str.substring(start2, start2 + 3) == "xyz";
}

solutions.getSandwich = function (str) {
  let temp1 = "";
  let i1 = 0;
    for (let i = 0; i < str.length; i++){
        if (str.slice(i, i+5) == "bread") {
            temp1 = str.slice(i, i+5);
            i1 = i+5;
            break;
        }
    }
  let temp2 = "";
  let i2 = 0;
    for (let i = str.length; i >= 0; i--){
        if (str.slice(i-5, i) == "bread") {
            temp2 = str.slice(i-5, i);
            i2 = i-5;
            break;
        }
    }

    let res = "";

    for (let j = i1; j < i2; j++){
        res += str[j];
    }

    return res;
}

solutions.sameStarChar = function (str) {

    for (let i = 1; i < str.length - 1; i++){
        if (str.charAt(i) == '*' && str.charAt(i-1) != str.charAt(i+1)){
            return false;
        }
    }
    return true;
}

solutions.oneTwo = function (str) {
    let nust = "";

    for (let i = 0; i < str.length-1; i+= 3){
        if (str[i+2] != undefined){
          nust += str[i+1]; //c
          nust += str[i+2]; //b
          nust += str[i]; //a
        }
  }
    return nust;
}

solutions.zipZap = function (str) {
  let nust = "";
  for (let i = 0; i < str.length; i++){
    if (str[i-1] != "z" || str[i+1] != "p"){
      nust += str[i];
    }
  }
  return nust;
}

solutions.starOut = function (str) {
    if(str.length < 1)
        return "";

    if(str.length == 1) {
        if(str.charAt(0) == '*')
            return "";
        else
            return str;
    }

    let len = str.length;
    let arr = new Array();

    let count = 0;


    if(str.charAt(0) != '*' && str.charAt(1) != '*') {
        arr[count] = str.charAt(0);
        count++;
    }

    for(let i = 1; i < str.length - 1; i++) {
        if(str.charAt(i-1)!='*' && str.charAt(i) != '*' &&
            str.charAt(i+1) != '*') {
            arr[count] = str.charAt(i);
            count++;
        }
    }

    if(str.charAt(str.length-1) != '*' &&
        str.charAt(str.length-2) != '*') {
        arr[count] = str.charAt(str.length - 1);
        count++;
    }

    let x = arr.toString();

      return x.replace(/,/g, "");
}

solutions.plusOut = function (str, word) {
  let slen = str.length;
  let wlen = word.length;
  let fin = "";

  for (let i = 0; i < slen; i++) {
    if (i <= slen - wlen) {
      let tmp = str.substring(i,i+wlen);
      if (tmp == word) {
        fin += word;
        i += wlen-1;
      }
      else
        fin += "+";
    }
    else
      fin += "+";
  }
  return fin;
}

solutions.wordEnds = function (str, word){
  let slen = str.length;
  let wlen = word.length;
  let res = "";

  if (slen.length < 1){
    return str;
  }

  for (let i = 0; i < slen; i++) {
    if (i <= slen - wlen){
      let temp = str.substring(i, i+wlen);
      if (temp == word){
        if (str[i-1] != undefined) {
          res += str[i-1];
        }
        if (str[i+wlen]){
          res+= str[i+wlen];
        }
        i += wlen-1;
      } else {

      }
    } else {

    }
  }
  return res;
}

// String-3

solutions.countYZ = function (str){
  let count=0;
  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(/[a-z]/i) || str.charAt(i) == " ") {

        if (str.charAt(i-1).toLowerCase() == "y" || str.charAt(i-1).toLowerCase() == "z"){
        count += 1;
      }
    }
    if (i == str.length-1) {
        if (str.charAt(i).toLowerCase() == "y" || str.charAt(i).toLowerCase() == "z"){
        count += 1;
      }
    }
  }
  return count;
}

solutions.withoutString = function (base, remove){

  let rlen = remove.length;

  let res = "";

  for (let i = 0; i < base.length; i++){
    let subbie = base.substring(i, i+ rlen);
    if (subbie.toLowerCase() != remove.toLowerCase()) {
        if (base[i] == " " && res.charAt(res.length-1) == " "){
        }  else {
            res += base[i];
        }
    }  else {
      i += rlen-1;
    }
  }
  return res;
}

solutions.equalIsNot = function (str){
  let is = "is";
  let not = "not";

  let isCount = 0;
  let notCount = 0;

  for (let i = 0; i < str.length; i++) {
      let checkIs = str.substring(i, i+is.length);
      let checkNot = str.substring(i, i+not.length);

      if (checkIs == is){
        isCount += 1;
      }

      if (checkNot == not){
        notCount += 1;
      }
  }

  return isCount == notCount;

}

solutions.gHappy = function (str) {

  for (let i = 0; i < str.length; i++){
    if (str[i] == "g" && (str[i-1] != "g" && str[i+1] != "g")){
      return false;
    }
  }
  return true;
}

solutions.countTriple = function countTriple(str) {

  let count = 0;

  for (let i = 0; i <= str.length-2; i++) {
    let triple = str.substring(i, i+3);
    if (triple[0] == triple[1] && triple[1] == triple[2]){
      count += 1;
    }
  }
  return count;
}

solutions.sumDigits = function (str) {

  let add = (a, b) => a+b;

  let nums = []

  for (let i = 0; i < str.length; i++) {

    if (Number.isInteger(parseInt(str[i]))) {
        nums.push(parseInt(str[i]))
    }
  }

    if (nums.length != 0) {
      return nums.reduce(add);
    } else {
      return 0;
    }
}

solutions.sameEnds = function (string) {
    let start = Math.ceil(string.length/2);
    let end = string.length/2;

    for (let i = 0; i < string.length/2; i++){
      if (string.substring(0, end) == string.substring(start)){
        return string.substring(0, end);
      } else {
          start++;
          end--
      }
    }
  return "";
}

solutions.mirrorEnds = function (string) {
    let result = "";

    for (let i = 0; i < string.length; i++) {
      if (string[i] == string[string.length - i - 1]) {
        result += string[i]
      } else {
        break;
      }
    }

    return result;
}

solutions.maxBlock = function (str) {
  let count = 0;
  let stick = 1;

  for (let i = 0; i < str.length; i++){
    if (i < str.length-1 && str[i] == str[i+1]){
      stick += 1;
    } else {
      stick = 1;
    }

    if (stick > count){
      count= stick;
    }
  }

  return count;

}

solutions.sumNumbers = function (str) {

  let len = str.length;
  let temp = "";
  let sum = 0;

  for (let i = 0; i < str.length; i++){
    if (parseInt(str[i])){
      if (i < len-1 && parseInt(str[i+1])){
        temp+= str[i]
      } else {
        temp+= str[i]
        sum += parseInt(temp);
        temp="";
      }
    }
  }
  return sum;
}

solutions.notReplace = function (str) {

  let result = "";

  for (let i = 0; i < str.length; i++){
        /* using charAt here rather than bracket index, b/c bracket index shows undefined for chars at
      -1 index, causing error. charAt shows "", so no error*/
      if ((str.charAt(i-1).match(/[a-z]/i)
    || i+2 < str.length && str.charAt(i+2).match(/[a-z]/i))){
        result += str[i];
      } else if (str.substring(i, i+2) == "is"){
        result += "is not";
        i++;
      } else {

        result += str[i];
      }
    }
    return result;
}

module.exports = solutions;