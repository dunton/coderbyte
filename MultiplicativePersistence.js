// Have the function MultiplicativePersistence(num) take the num 
// parameter being passed which will always be a positive integer
// and return its multiplicative persistence which is the number 
// of times you must multiply the digits in num until you reach a
// single digit. For example: if num is 39 then your program should
// return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4
// and you stop at 4. 

function MultiplicativePersistence(num) { 

  // code goes here  
    var sum, loop = 0;
    var val1 = num.toString().split("");
    
     while( val1.length > 1 ) {
        sum = 1;
        val1.forEach( function(number) {
            sum = sum * number;
        });
        val1 = sum.toString(10).split("");
        loop++;
    } ;
    
    return loop;
         
      


}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(readline());
