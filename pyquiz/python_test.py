from traceback import print_list
from turtle import width


x=[100,110,120,130,140,150]
m=[m*5 for m in x]
print(m)

divisible_by_3=[]
for s in range(1,10):
    if(s%3==0):
        divisible_by_3.append(s)
        print(divisible_by_3)

x=[[1,2],[3,4],[5,6]] 
flat_list =[n for sublist in x for n in sublist] 
print(flat_list) 

smallest=([50,78,45,20,10,9])
small =min(smallest)
print(small)

y = ['a','b','c','d','e','f','g','g','a']
y = list(set(y))
print(y)

divisible_by_seven=[]
for x in range (100,200):
    if (x%7==0):
        divisible_by_seven.append(str(x))
print(divisible_by_seven)

        # students = [{'age': 19,'name':'eunice'},{'age':18,'name':'Teresa'},{'age':22,'name':'ASha'}]
        # print(students)



Area =width* height
