// Have the function LetterChanges(str) take the str parameter being passed 
// and modify it using the following algorithm. Replace every letter in the 
// string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
// Then capitalize every vowel in this new string (a, e, i, o, u) and 
// finally return this modified string

function LetterChanges(str) { 

  // code goes here
  var str = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var answer = '';
  var loc
  
  for (var i = 0; i<str.length; i++){
   	loc = alphabet.indexOf(str[i]);
    if (loc === 25){
     	answer = answer + 'a'; 
    }
    else if (loc === -1){
     	answer = answer + str[i]; 
    }
    else {
     	answer = answer + alphabet[loc +1]; 
    }
  }
  
  return answer.replace(/[aeiou]/g, function(letter) {return letter.toUpperCase()})
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());
