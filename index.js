//function isPalindrome(word) {
  // Write your algorithm here
  function isPalindrome (string){
    let reversed = string.split ('').reverse('').join('');
    if (reversed === string) return true;
    return false;
  }
//}
isPalindrome('abba');
isPalindrome('racecar');
isPalindrome ('a');
isPalindrome('robot');
isPalindrome('ab');


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  1. abba when reverse will be the same thing
  2.same to racecars
  3.a is a single word ata reverse haisaidii
  4. robot when reversed will be tobor which is not equal to the stirng
  5.same to this ab is it woll be ba 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;
