function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];
  charactersArr.forEach(char => {
    //if do not have this word from string will return -1
    if (validCharacters.indexOf(char) > -1)
    lettersArr.push(char);
  })
  return lettersArr.join('') === lettersArr.reverse().join('');
}

console.log(isPalindrome("Madam, I'm Adam"));
