// Have the function ArrayAdditionI(arr) take the array of numbers stored
// in arr and return the string true if any combination of numbers in the 
// array can be added up to equal the largest number in the array, otherwise
// return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3]
// the output should return true because 4 + 6 + 10 + 3 = 23. The array will 
// not be empty, will not contain all the same elements, and may contain negative numbers. 

function ArrayAdditionI(arr) { 

  // code goes here  
  var arr = arr.sort(function(a,b) {
  	return a-b
  });
  var largest = arr.pop();
  var total = 0;
  
  for (var i =0; i<arr.length; i++){
   		 total += arr[i];
  	for (var x = 0; x<arr.length; x++){
     	if (i != 0) {
      	if (total === largest){
         	return true; 
        }}
    }
  }
  
 
    for (var z=0; z<arr.length; z++){
     	if (i != z){
          total -= arr[z];
        if (total === largest){
        	return true;
        }
    }
      total = 0
  }
  
  return false
  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());
