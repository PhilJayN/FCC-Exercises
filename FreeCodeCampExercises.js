function reverseString(str) {
   var result = str.split('').reverse().join('');///split str into an arr with words, reverse it, and just join it...
                                          //// use '' as separator for .split and .join cuz u just want an array of characters. don't want array of words.
  return result;  ///notice the separator for split and join is an empty str.
}
reverseString("hello");


function palindrome (str) {
  var editedStr = str.toLowerCase().replace(/[\W_]/g, '');///use regex for a pattern match. when that pattern found in edited str, replace...
  return editedStr === editedStr.split('').reverse().join(''); ///with an empty string (and therefore eliminating that).
}
palindrome("eye");


function factorialize(num) {
  var result = 1; ///result set as 1, due to multiplcation problem. if set as 0, you won't get far with solution.
  for (var i = 1; i <= num; i++ ) {
    result = result * i; ///result is assigned itself, and multiply it (result) by a new iteration val. so it goes: 1*1*2*3*4... and so on.
  }
  return result;
}
factorialize(3);


function longestWord(str) {
  var arr, max = 0;
  arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
}
longestWord('I like cakes');
