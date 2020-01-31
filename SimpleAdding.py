# Have the function SimpleAdding(num) add up all the numbers from 1 to num. 
# For the test cases, the parameter num will be any number from 1 to 1000. 

def SimpleAdding(num): 

  # code goes here 
  # Note: don't forget to properly indent in Python
  i = 0
  sum1 = 0
  while i <= num:
    sum1 += i
    i += 1
  return sum1
    
# keep this function call here  
print SimpleAdding(raw_input())
