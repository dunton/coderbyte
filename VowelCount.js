// Have the function VowelCount(str) take the str string parameter 
// being passed and return the number of vowels the string contains 
// (ie. "All cows eat grass" would return 5). Do not count y as a 
// vowel for this challenge. 

function VowelCount(str) { 

  // code goes here  
  var count = 0
	var str = str.split('');
  for (var i =0; i<str.length; i++){
   	if (/[aeiou]/gi.test(str[i])){
        count += 1
        }
  }
        return count
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());
