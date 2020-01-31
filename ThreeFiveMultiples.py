# Have the function ThreeFiveMultiples(num) return the sum of all
# the multiples of 3 and 5 that are below num. For example: if num
# is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9,
# and adding them up you get 23, so your program should return 23.
# The integer being passed will be between 1 and 100. 

def ThreeFiveMultiples(num): 

  # code goes here 
  # Note: don't forget to properly indent in Python
  answer = 0
  num = num -1
  while num > 0:
    if num % 3 == 0:
      answer += num
      num -= 1
    elif num % 5 == 0:
      answer += num
      num -= 1
    else:
      num -= 1
    
  return answer
      
    
# keep this function call here  
print ThreeFiveMultiples(raw_input())
