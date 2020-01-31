// Have the function MeanMode(arr) take the array of numbers stored
// in arr and return 1 if the mode equals the mean, 0 if they don't 
// equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the
// mode (3) equals the mean (3)). The array will not be empty, will 
// only contain positive integers, and will not contain more than one mode. 

function MeanMode(arr) { 

  // code goes here  
  var mode = 0;
  var times = 0;
  var arr = arr.sort(function(a,b) {
   return a-b; 
  })
  for (var i = 0; i<arr.length; i++){
   	var count = 0;
    if(arr[i] === arr[i+1]){
     	count++; 
    }
    if (count > times){
     	times = count;
      	mode = arr[i]
    }
  }
  
  var total = 0;
  for (var j = 0; j<arr.length; j++){
   	 total += arr[j];
  }
  var mean = Math.round(total/arr.length);
  if (mean === mode){
   return 1; 
  }
  else {
   	return 0 
  }
  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());
