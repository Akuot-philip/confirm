let people=[{
    name:"Akuot",
    age:20,
    student:"Intelligent",
},
    
   { name:"Akuot",
    age:22,
    student:"Problem solver",},

    {name:"Phelisia",
    age:21,
    student:"perfectionist"}]
    // console.log(people[1]["age"]);
    // console.log(people.filter(item=>item.age>20));
    console.log(people.filter(item=>item.name ==="Akuot"));
    // console.log(`my name is ${people['name']}`);
// console.log(people.map(item=>item.age));
// console.log(people.map(item=>item.name));
// console.log(people.find(item=>item.name ==="Akuot"));

function greet(){
    console.log("Hey am a js developer");
}
function morning(){
    var talk="Johnte"
    console.log(talk)
}
greet(morning())
morning(greet)

function food(carbs){
console.log(`I love eating${carbs}`);
status()

}
function status(){
    console.log("Eat to live");}

    food("chips",status);

    function school(study){
        console.log("AKiraChix");

    }
    function language(){
        console.log("I am speak in ${}");
    }





