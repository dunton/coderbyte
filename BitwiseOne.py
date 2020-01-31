# Have the function BitwiseOne(strArr) take the array of strings 
# stored in strArr, which will only contain two strings of equal 
# length that represent binary numbers, and return a final binary 
# string that performed the bitwise OR operation on both strings.
# A bitwise OR operation places a 0 in the new string where there 
# are zeroes in both binary strings, otherwise it places a 1 in that
# spot. For example: if strArr is ["1001", "0100"] then your program 
# should return the string "1101" 

def BitwiseOne(strArr): 

  # code goes here 
  # Note: don't forget to properly indent in Python
  answer = ''
  first = strArr[0]
  second = strArr[1]
  first = str(first)
  first = list(first)
  second = str(second)
  second = list(second)
  
  i = 0
  while i < len(first):
    if first[i]=='0' and second[i]=='0':
      answer += '0'
      i += 1
    else:
      answer += '1'
      i += 1
  return answer
    
# keep this function call here  
print BitwiseOne(raw_input())
