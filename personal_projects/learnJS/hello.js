// var message ='Hello';
// var name='Akuot';
// var num =4;
// // var sen ='My name is '${name};
// console.log(message+name);
// console.log(name+num);
// console.log(typeof(message+name));
// console.log("how are you",name);
// console.log(key);




// let kids =23
// let child = kids? 23:false
// console.log(child);
// let diff =(kids>50)?"These are many kids": "not enough kids";
// console.log(diff);

// var x = [0,1,2,3,4,5,6,7,8,9];
// for(let i =0;i < x.length;i++)

// let student ={
//     name:"Akuot",
//     age:20,
//     class:"AnitaB",


// }
// delete student.name

// var today =new Date()


// let a =20;
// let b =10;
// let add =a+b

// if (add <30 && a>20){
//     console.log(true);
// }
// console.log(false)

// switch (a){
//     case a>5:
//         console.log('${a} is more than 5');
//         break;
//     case a ==2:
//         console.log('${a} is more than 20');
//         break;
//     default:
//         console.log(a);

// }


// const materials=["Loockers","Tables","Chairs","Computers","Television"];
//  for(var i = 0;i< materials.length;i++){
//     console.log(materials[i])
//  }


//  function  foo  (){ 
//     if  (  true  ){ 
//     var  fruit1 =  'apple'  ;   //exist in function  scope 
//     const  fruit2 =  'banana'  ;   //exist in block  scope 
//     let  fruit3 =  'strawberry'  ;   //exist in block  scope 
//     } 
//     console.log(fruit1); 
//     console.log(fruit2); 
//     console.log(fruit3); 
//     } 
//     foo();


//  function num(){
//     var a =2;
//     function add (){
//         var b =3;
//         var c =a+b;
//         console.log(c);
//     }
//     add()
//  } 
//  num();

//  var num =[1,2,3,4,5,6,7,8,9]
//  for(let i=0;i<num.length;i++){
//     console.log(num[i]);
//  }

// //  hoisting
// add(40);
// function add(c){
//     var a=10;
//     console.log(a+c);
// }

// "use strict"
// let myNAme="My self"

// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array>largest) {
//         var largest=array[i];
//     }
// }

// console.log(largest);


// let num =[45,70,3,19,200,5]
// var largest =0;
// for(let p=0; p<num.length;p++){
//     if(num[p] > largest){
//         largest = num[p];
//     }
    
// }
// console.log(largest)

// let nums=[10,57,84,36,23,44];

// let find=0;
// for(let check=0; check<nums.length; check++){
//     if (nums[check]>find){
//         find=nums[check]
//     }
 
// }
// console.log(find)

// function paying(prob,price,pay){
//     var product=(prob*price)
//     let c =product>pay?;true:false

// }


// function reverse1(str){
//     var a = "";
//     for(var i = 0; i <= str.length/2; i++){
//       a = str[i];
//       str[i] = str[str.length-i-1];
//       str[str.length-i-1] = a;
//     }
//     return str;
//   }
//   var str = "abcd

// function reverse1(st){
//     let r = "";
//     for(let i = st.length-1; i >= 0; i--){
//       r += st[i];
//     }
//     return r;
//   }
  
//   console.log(reverse1("Akuot"))


// let a = function(){
//   console.log("Hello")
// }  
// a()

// const [data,setData]=useState();


// (function (){
//   console.log(34)
// }
//   )
//   ()

//   let a =(() =>{
// return 5
//   })()

  // console.log(a);
// function people (){
//   console.log("Hey There");
// };

// function newest (){
//   console.log(45)
// }
// newest()

// let nums =[1,2,3,4]
// let b= nums.map(a=>a*2)
// let c = nums.map(function(a){
//   return a*2
// })
// console.log(b)
// console.log(c)

// let button = document.getElementById("button").addEventListener("click",function(){
//   this.innerText = "Hey"

// })

// let num=[1,2,3,4,5,6]
// console.log(num.reverse)
// left =0
// right=num.length-1
// while (left<right)
// num[left],num[right]=num[right],num[left]
// left++
// right--
// console.log(num)

// var person={
//   name:"Akuot",
//   age:21,
//   female:true

// }
// console.log(person.name)
// console.log(person.age)
// console.log(person.female)

// console.log(person['name'])
// console.log(person['age'])
// console.log(person['female'])

// var obj = {
//   a: "hello world",
//   b: 100
//   };
//   var b = "a";
//   obj[ b ]; // "hello world"
//   obj[ "b" ]; // 10
//   console.log(b)

//   const student = {
//     firstName: 'ram',
//     class: 10,
//     parents:{
//       mum:'Cecilia',
//       dad:'Philip'
//     }
// };
// console.log(student.parents)
// console.log(student.parents.mum)
// console.log(student.parents.dad)
// console.log(student.firstName)
// console.log(typeof student)


// const students = { 
//   name: 'John', 
//   age: 20,
//   marks: {
//       science: 70,
//       math: 75
//   }
// }
// console.log(students.marks)
// console.log(students.marks.math)

// const items = {
//   'first': new Date(),
//   'second': 2,
//   'third': 'test'
// }
// for (const item in items) {
//   console.log(item)
// }



// const user = {

//   name: 'John Doe',

//   email: 'john.doe@example.com',

//   age: 25,

//   dob: '08/02/1989',

//   active: true
// };

// // iterate over the user object

// for (const key in user) {

//   console.log(`${key}: ${user[key]}`);
// }

// // name: John Doe

// let b=["Mango","Apple"];
// b.pop()
// b.push("orange")
// b.unshift("Grapes")
// b.shift
// let c=new Array("Banana","Kiwi");
// console.log(b);

// let d=c.map(item=>'I love ${item}');
// let e=c.map(function(item){
//   return 'I love'
// })

function people(){
  console.log("you guys");
}

function students(a,callback){
console.log(a);
console.log(callback);
}
students(26,people)