// Put string in reverse

function FirstReverse(str) { 

  // code goes here 
  var y = str.split('');
 
  var x = []
  for (var i = y.length; i>=0; i--){
   	 x.push(y[i])
  }
  return x.join('')
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());
