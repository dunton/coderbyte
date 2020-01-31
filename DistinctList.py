# Have the function DistinctList(arr) take the array of numbers
# stored in arr and determine the total number of duplicate entries. 
# For example if the input is [1, 2, 2, 2, 3] then your program 
# should output 2 because there are two duplicates of one of the elements. 

def DistinctList(arr): 

  # code goes here 
  # Note: don't forget to properly indent in Python
  numbers = sorted(arr)
  dupes = 0
  for i in range(len(numbers)):
    if numbers[i] == numbers[i-1]:
      dupes += 1
  return dupes      
    
# keep this function call here  
print DistinctList(raw_input())
