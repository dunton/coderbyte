// Have the function LetterCapitalize(str) take the str 
// parameter being passed and capitalize the first letter
// of each word. Words will be separated by only one space. 

function LetterCapitalize(str) { 

  // code goes here  
  var a = []
  
  for (var x=0; x<str.length; x++){
   		if (str[x] === str[0]) {
         	a.push(str[x].toUpperCase());
          
        }
    	else if (str[x-1] === ' ') {
         	a.push(str[x].toUpperCase()); 
        	
        }
    	else {
         	 a.push(str[x])
        }
  }
         return a.join('')
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());
