function reverse(word) {
  return word.split('').reverse().join('');
}

function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = reverse(word);
  return word==reverseWord;

}

/* 
  Add your pseudocode here
  Reverse the input string
  call of reverse array method, after turning string into array
  if the input string == reversed string
    return true
  else 
    return false

*/

/*
  Add written explanation of your solution here
  My function should return true when a word is the same when read in reverse
    /*mom reversed is equals to mom -> true
  dog reversed equals god -> not palindrome
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
