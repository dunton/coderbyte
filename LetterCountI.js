// Have the function LetterCountI(str) take the str parameter being
// passed and return the first word with the greatest number of repeated
// letters. For example: "Today, is the greatest day ever!" should return
// greatest because it has 2 e's (and 2 t's) and it comes before ever 
// which also has 2 e's. If there are no words with repeating letters 
// return -1. Words will be separated by spaces. 

function LetterCountI(str) { 

  // code goes here  
  var arr = str.split(' ');
  var highestNum = 0;
  var largest = 0;
  
  for (var i = 0; i<arr.length; i++)
  {
  	var word = arr[i].split('').sort();
    var count = 0;
    for (var j = 0; j<word.length-1; j++){
     	if (word[j] === word[j+1]){
         	count += 1 
        }
    }
    if (count > highestNum){
     	highestNum = count;
      	largest = i;
    }
  }
  
  return highestNum > 0 ? arr[largest] : -1;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());
