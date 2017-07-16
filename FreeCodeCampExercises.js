function reverseString(str) {
   var result = str.split('').reverse().join('');///split str into an arr with words, reverse it, and just join it...
                                          //// use '' as separator for .split and .join cuz u just want an array of characters. don't want array of words.
  return result;  ///notice the separator for split and join is an empty str.
}
reverseString("hello");
