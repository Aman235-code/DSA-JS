// kadane's algo / max subarray

[-2,1,-3,4,-1,2,1,-5,4]
                     i

sum = 0
max = -infinity 

sum+=i = -2 
sum> max t  then max = -2

if sum is negative them sum=0

sum+=i = 1 
1> -2 then max = 1 
sum is not negative sum=1

sum+=i = -2 
-2>1 f max=1 
sum = 0

sum+=4
4>1 max = 4 

sum=3
3>4 max=4 

sum=5 
5>4 max=5 

sum=6 
6>5 max=6 

sum=1
1>6 f max=6

sum=5 
5>6 f max=6 


// majority element / moore's voting algo

[2,2,1,1,1,2,2]
   i 

len = 7 op = 2 7/2 = 3 more than 3 times = 2 

ans = arr[0] = 2
count=1

if(arr[i] == ans) t then count=2

if(arr[i] == ans) f then count=1 

if(arr[i] == ans) f then count=0

rain water 
4,2,0,3,2,5 op= 9
  i
                      2+4+1+2 = 9 
0,2,4,1,2,0

4-4 = 0 
4-2 = 2 
4-0 = 4
4-3 = 1 
4-2 = 2
5-5 = 0



