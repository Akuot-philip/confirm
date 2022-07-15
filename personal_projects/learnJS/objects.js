var people={
    name:20,
    country:"South sudanese"
};
console.log(people['country']);
console.log(people.name);

var person = new Object(people);
console.log(person.name);
person["age"]=35;
console.log(person);

for ([key,values] of objects.entries(person)){
    console.log('${key}: ${values}');
}



objects.freeze(person)
person['school']="AKirachix";
console.log();



var student ={
    name:"Anita",
    country:"Kenya",
    hobby:function(){
        console.log(`My  name is ${this.name} and my hobby is baking`)
        return "my favourite hobby"
    },
    friends:{
        name:"munde",
        age:23,
        hobby:{
            first:"cooking",
            play:function(){
                return"I love playing"
            }

        }

    }
}
console.log(student.hobby());
console.log(student.country);
console.log(student.friends.name);
console.log(student.friends.hobby.first);
console.log(student.friends.hobby.play());



// nested objects,