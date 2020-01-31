// Have the function SwapCase(str) take the str parameter and swap
// the case of each character. For example: if str is "Hello World"
// the output should be hELLO wORLD. Let numbers and symbols stay
// the way they are.

function SwapCase(str) { 

  // code goes here  
  newStr = "";
  for (var i = 0; i< str.length; i++){
   		if (str[i] === str[i].toLowerCase()){
         newStr += str[i].toUpperCase(); 
        }
    	else if(str[i] === str[i].toUpperCase()){
         	newStr+= str[i].toLowerCase(); 
        }
    	else {
         	newStr += str[i]; 
        }
  }
  return newStr
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());
