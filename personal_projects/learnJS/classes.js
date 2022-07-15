// a class is a template for creating objects
class students{
    constructor(name,age,school){
        this.name=name
        this.age=age
        this.school=school

    }
}
students.prototype.country=function(){
    return"I love my country kenya"
}


var firstStudent=new students("Akuot", 23,"Akirachix");
console.log(firstStudent);

console.log(firstStudent.country());

// how to add properties in a class

function Students(name,age,school){
    this.name=name
    this.age=age
    this.school=school
    this.hobby=function(){
        return "I love playing"
    }

}
var secondStudent =new Students("Akuot",23,"AkiraChix");
console.log(secondStudent);

// var names=["Chiri","ziporah","shamimi"]
// var [Akuot,susan,nancy]=["Chiri","ziporah","shamimi"]
// console.log(Akuot);
// console.log(ziporah);