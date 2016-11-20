exercises.push({
    title: 'String-1',
    name: 'helloName',
    inputs: [
      "('Bob')",
      "('Alice')",
      "('X')",
      "('Dolly')",
      "('Alpha')",
      "('Omega')",
      "('Goodbye')",
      "('ho ho ho')",
      "('xyz!')",
      "('Hello!')",
    ],
    question: 'Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".',
  }, {
    title: 'String-1',
    name: 'makeAbba',
    inputs: [
      "('Hi', 'Bye')",
      "('Yo', 'Alice')",
      "('What', 'Up')",
      "('aaa', 'bbb')",
      "('x', 'y')",
      "('x', '')",
      "('ba', 'Ya')",
      "('Ya', 'Ya')",
    ],
    question: `Given two strings, a and b, return the result of putting them together
              in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".`,
  }, {
    title: 'String-1',
    name: 'makeTags',
    question: `The web is built with HTML strings like "<i>Yay</i>" which draws
            Yay as italic text. In this example, the "i" tag makes <i> and </i>
            which surround the word "Yay". Given tag and word strings, create the HTML
            string with tags around the word, e.g. "<i>Yay</i>".`,
    inputs: [
      "('i', 'Yay')",
      "('i', 'Hello')",
      "('cite', 'Yay')",
      "('address', 'here')",
      "('body', 'Heart')",
      "('i', 'i')",
      "('i', 'i')",
      "('i', '')",
    ],
  }, {
    title: 'String-1',
    name: 'makeOutWord',
    inputs: [
      "('<<>>', 'Yay')",
      "('<<>>', 'WooHoo')",
      "('[[]]', 'word')",
      "('HHoo', 'Hello')",
      "('abyz', 'YAY')",
    ],
    question: `Given an "out" string length 4, such as "<<>>", and a word,
              return a new string where the word is in the middle of the out string,
              e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting
               at index i and going up to but not including index j.`,
  }, {
    title: 'String-1',
    name: 'extraEnd',
    inputs: [
      "('Hello')",
      "('ab')",
      "('Hi')",
      "('Candy')",
      "('Code')",
    ],
    question: `Given a string, return a new string made of 3 copies of the
              last 2 chars of the original string. The string length will be at least 2.`,
  }, {
    title: 'String-1',
    name: 'firstTwo',
    inputs: [
      "('Hello')",
      "('abcdefg')",
      "('ab')",
      "('a')",
      "('')",
      "('kitten')",
      "('hi')",
      "('hiya')",
    ],
    question: `Given a string, return the string made of its first two chars,
              so the String "Hello" yields "He". If the string is shorter than length 2,
              return whatever there is, so "X" yields "X", and the empty string "" yields
              the empty string "". Note that str.length() returns the length of a string.`,
  }, {
    title: 'String-1',
    name: 'firstHalf',
    inputs: [
      "('WooHoo')",
      "('HelloThere')",
      "('abcdefg')",
      "('ab')",
      "('')",
      "('0123456789')",
      "('kitten')",
    ],
    question: 'Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".',
  }, {
    title: 'String-1',
    name: 'withoutEnd',
    inputs: [
      "('Hello')",
      "('java')",
      "('coding')",
      "('code')",
      "('ab')",
      "('Chocolate!')",
      "('kitten')",
      "('woohoo')",
    ],
    question: `Given a string, return a version without the first and last
                char, so "Hello" yields "ell". The string length will be at least 2.`,
  }, {
    title: 'String-1',
    name: 'comboString',
    inputs: [
      "('Hello', 'hi')",
      "('Hi', 'Hello')",
      "('aaa', 'b')",
      "('b', 'aaa')",
      "('aaa', '')",
      "('', 'bb')",
      "('aaa', '1234')",
      "('aaa', 'bb')",
      "('a', 'bb')",
      "('bb', 'a')",
      "('a', 'bb')",
      "('xyz', 'ab')",
    ],
    question: `Given 2 strings, a and b, return a string of the form short+long+short,
                with the shorter string on the outside and the longer string on the inside.
                The strings will not be the same length, but they may be empty (length 0).`,
  }, {
    title: 'String-1',
    name: 'nonStart',
    inputs: [
      "('Hello', 'There')",
      "('java', 'code')",
      "('shotl', 'java')",
      "('ab', 'xy')",
      "('ab', 'x')",
      "('x', 'ac')",
      "('a', 'x')",
      "('kit', 'kat')",
      "('mart', 'dart')",
    ],
    question: `Given 2 strings, return their concatenation, except omit the
                first char of each. The strings will be at least length 1.`,
  }, {
    title: 'String-1',
    name: 'left2',
    inputs: [
      "('Hello')",
      "('java')",
      "('Hi')",
      "('code')",
      "('cat')",
      "('12345')",
      "('Chocolate')",
      "('bricks')",
    ],
    question: `Given a string, return a "rotated left 2" version where the
                first 2 chars are moved to the end. The string length will be at least 2.`,
  }, {
    title: 'String-1',
    name: 'right2',
    inputs: [
      "('Hello')",
      "('java')",
      "('Hi')",
      "('code')",
      "('cat')",
      "('12345')",
    ],
    question: `Given a string, return a "rotated right 2" version where the
                  last 2 chars are moved to the start. The string length will be at least 2.`,
  }, {
    title: 'String-1',
    name: 'theEnd',
    inputs: [
      "('Hello', true)",
      "('Hello', false)",
      "('oh', true)",
      "('oh', false)",
      "('x', true)",
      "('x', false)",
      "('java', true)",
      "('chocolate', false)",
      "('1234', true)",
      "('code', false)",
    ],
    question: `Given a string, return a string length 1 from its front,
            unless front is false, in which case return a string length 1 from its
            back. The string will be non-empty.`,
  }, {
    title: 'String-1',
    name: 'withoutEnd2',
    inputs: [
      "('Hello')",
      "('abc')",
      "('ab')",
      "('a')",
      "('')",
      "('coldy')",
      "('java code')",
    ],
    question: `Given a string, return a version without both the first and
              last char of the string. The string may be any length, including 0.`,
  }, {
    title: 'String-1',
    name: 'middleTwo',
    inputs: [
      "('string')",
      "('code')",
      "('Practice')",
      "('ab')",
      "('123456789')",
    ],
    question: `Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri".
              The string length will be at least 2.`,
  }, {
    title: 'String-1',
    name: 'endsLy',
    inputs: [
      "('oddly')",
      "('y')",
      "('oddl')",
      "('olydd')",
      "('ly')",
      "('')",
      "('falsely')",
      "('evenly')",
    ],
    question: 'Given a string, return true if it ends in "ly".',
  }, {
    title: 'String-1',
    name: 'nTwice',
    inputs: [
      "('hello', 2)",
      "('Chocolate', 3)",
      "('Chocolate', 1)",
      "('Chocolate', 0)",
      "('Hello', 4)",
      "('Code', 4)",
      "('Code', 2)",
    ],
    index: 62,
    question: `Given a string and an int n, return a string made of the
              first and last n chars from the string. The string length will be at least n.`,
  },
  {
    title: 'String-1',
    name: 'twoChar',
    question: `Given a string and an index, return a string length 2
            starting at the given index. If the index is too big or too small to define
            a string length 2, use the first 2 chars. The string length will be at least 2.`,
    inputs: [
      "('java', 0)",
      "('java', 2)",
      "('java', 3)",
      "('java', 4)",
      "('java', -1)",
      "('Hello', 0)",
      "('Hello', 1)",
      "('Hello', 99)",
      "('Hello', 3)",
      "('Hello', 4)",
      "('Hello', 5)",
      "('Hello', -7)",
      "('Hello', 6)",
      "('Hello', -1)",
      "('yay', 0)",
    ],
  },
  {
    title: 'String-1',
    name: 'middleThree',
    question: `Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and".
             The string length will be at least 3.`,
    inputs: [
      "('Candy')",
      "('and')",
      "('solving')",
      "('Hi yet Hi')",
      "('java yet java')",
      "('Chocolate')",
      "('XabcxyzabcX')",
    ],
  },
  {
    title: 'String-1',
    name: 'hasBad',
    question: `Given a string, return true if "bad" appears starting at index 0
            or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The
            string may be any length, including 0. Note: use .equals() to compare 2 strings.`,
    inputs: [
      "('badxx')",
      "('xbadxx')",
      "('xxbadxx')",
      "('code')",
      "('bad')",
      "('ba')",
      "('xba')",
      "('xbad')",
      "('')",
      "('badyy')",
    ],
  },
  {
    title: 'String-1',
    name: 'atFirst',
    question: `Given a string, return a string length 2 made of its first 2 chars.
            If the string length is less than 2, use '@' for the missing chars.`,
    inputs: [
      "('hello')",
      "('hi')",
      "('h')",
      "('')",
      "('kitten')",
      "('java')",
      "('j')",
    ],
  },
  {
    title: 'String-1',
    name: 'lastChars',
    question: `Given 2 strings, a and b, return a new string made of the first char of a
            and the last char of b, so "yo" and "java" yields "ya". If either string is length
            0, use '@' for its missing char.`,
    inputs: [
      "('last', 'chars')",
      "('yo', 'java')",
      "('hi', '')",
      "('', 'hello')",
      "('', '')",
      "('kitten', 'hi')",
      "('k', 'zip')",
      "('kitten', '')",
      "('kitten', 'zip')",
    ],
  },
  {
    title: 'String-1',
    name: 'conCat',
    question: `Given two strings, append them together (known as "concatenation")
            and return the result. However, if the concatenation creates a double-char,
            then omit one of the chars, so "abc" and "cat" yields "abcat".`,
    inputs: [
      "('abc', 'cat')",
      "('dog', 'cat')",
      "('abc', '')",
      "('', 'cat')",
      "('pig', 'g')",
      "('pig', 'doggy')",
    ],
  },
  {
    title: 'String-1',
    name: 'lastTwo',
    question: `Given a string of any length, return a new string where the last 2
            chars, if present, are swapped, so "coding" yields "codign".`,
    inputs: [
      "('coding')",
      "('cat')",
      "('ab')",
      "('a')",
      "('')",
    ],
  },
  {
    title: 'String-1',
    name: 'seeColor',
    question: `Given a string, if the string begins with "red" or "blue" return
            that color string, otherwise return the empty string.`,
    inputs: [
      "('redxx')",
      "('xxred')",
      "('blueTimes')",
      "('NoColor')",
      "('red')",
      "('re')",
      "('blu')",
      "('blue')",
      "('a')",
      "('')",
      "('xyzred')",
    ],
  },
  {
    title: 'String-1',
    name: 'frontAgain',
    question: `Given a string, return true if the first 2 chars in the string
            also appear at the end of the string, such as with "edited".`,
    inputs: [
      "('edited')",
      "('edit')",
      "('ed')",
      "('jj')",
      "('jjj')",
      "('jjjj')",
      "('jjjk')",
      "('x')",
      "('')",
      "('java')",
      "('javaja')",
    ],
  },
  {
    title: 'String-1',
    name: 'minCat',
    question: `Given two strings, append them together (known as "concatenation")
            and return the result. However, if the strings are different lengths, omit chars
            from the longer string so it is the same length as the shorter string. So "Hello"
            and "Hi" yield "loHi". The strings may be any length.`,
    inputs: [
      "('Hello', 'Hi')",
      "('Hello', 'java')",
      "('java', 'Hello')",
      "('abc', 'x')",
      "('x', 'abc')",
      "('abc', '')",
    ],
  },
  {
    title: 'String-1',
    name: 'extraFront',
    question: `Given a string, return a new string made of 3 copies of the first 2
            chars of the original string. The string may be any length. If there are fewer than 2
            chars, use whatever is there.`,
    inputs: [
      "('Hello')",
      "('ab')",
      "('H')",
      "('')",
      "('Candy')",
      "('Code')",
    ],
  },
  {
    title: 'String-1',
    name: 'without2',
    question: `Given a string, if a length 2 substring appears at both its beginning and
    end, return a string without the substring at the beginning, so "HelloHe" yields
    "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return
    the original string unchanged.`,
    inputs: [
      "('HelloHe')",
      "('HelloHi')",
      "('Hi')",
      "('Chocolate')",
      "('xxx')",
      "('xx')",
      "('x')",
      "('')",
      "('Fruits')",
    ],
  },
  {
    title: 'String-1',
    name: 'deFront',
    question: `Given a string, return a version without the first 2 chars. Except keep the
    first char if it is 'a' and keep the second char if it is 'b'. The string may be any
    length. Harder than it looks.`,
    inputs: [
      "('Hello')",
      "('java')",
      "('away')",
      "('axy')",
      "('abc')",
      "('xby')",
      "('ab')",
      "('ax')",
      "('axb')",
      "('aaa')",
      "('xbc')",
      "('bbb')",
      "('bazz')",
      "('ba')",
      "('abxyz')",
      "('hi')",
      "('his')",
      "('xz')",
      "('zzz')",
    ],
  },
  {
    title: 'String-1',
    name: 'startWord',
    question: `Given a string and a second "word" string, we'll say that the word matches
    the string if it appears at the front of the string, except its first char does not
    need to match exactly. On a match, return the front of the string, or otherwise return
    the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip"
    returns "hip". The word will be at least length 1.`,
    inputs: [
      "('hippo', 'hi')",
      "('hippo', 'xip')",
      "('hippo', 'i')",
      "('hippo', 'ix')",
      "('h', 'ix')",
      "('', 'i')",
      "('hip', 'zi')",
      "('hip', 'zip')",
      "('hip', 'zig')",
      "('h', 'z')",
      "('hippo', 'xippo')",
      "('hippo', 'xyz')",
      "('hippo', 'hip')",
      "('kitten', 'cit')",
      "('kit', 'cit')",
    ],
  },
  {
    title: 'String-1',
    name: 'withoutX',
    question: `Given a string, if the first or last chars are 'x', return the string
    without those 'x' chars, and otherwise return the string unchanged.`,
    inputs: [
      "('xHix')",
      "('xHi')",
      "('Hxix')",
      "('Hi')",
      "('xxHi')",
      "('Hix')",
      "('xaxbx')",
      "('xx')",
      "('x')",
      "('')",
      "('Hello')",
      "('Hexllo')",
    ],
  },
  {
    title: 'String-1',
    name: 'withoutX2',
    question: `Given a string, if one or both of the first 2 chars is 'x', return the
    string without those 'x' chars, and otherwise return the string unchanged. This
    is a little harder than it looks.`,
    inputs: [
      "('xHi')",
      "('Hxi')",
      "('Hi')",
      "('xxHi')",
      "('Hix')",
      "('xaxb')",
      "('xx')",
      "('x')",
      "('')",
      "('Hello')",
      "('Hexllo')",
      "('xHxllo')",
    ],
  });

/** --- Solutions --- **/
// String-1

solutions.helloName = function (name) {
  return `Hello ${name}`;
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
