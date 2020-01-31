// Have the function DashInsert(str) insert dashes ('-') between
// each two odd numbers in str. For example: if str is 454793 the
// output should be 4547-9-3. Don't count zero as an odd number. 

function DashInsert(str) { 

  // code goes here  
  var o = str.split('')
  var x = []
  for (var i = 0; i < o.length; i++) {
    
  if ((o[i] % 2 === 1) && (o[i + 1] % 2 === 1)) {
   	x.push(o[i]);
    x.push('-');
  }
   
   else{
    	x.push(o[i]) 
   }}
  return x.join('')
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());
