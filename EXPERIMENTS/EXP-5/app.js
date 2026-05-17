let person={
    name : "john"
    age : 30,
    city: "New York"


};
console.log(person);
console.log(person.name);
console.log(person.city);
typeof
console.log(typeof(person));
let nnumbers = [1,2,3,4]
let mixedArray=[1, "hello", true,[1,2,3]]; 
//normal function
function multiply(a,b)
{
    return a*b;

}
console.log(multiply(2,3));
const multiply= function(a,b)
{
    return (a*b);
}

console.log(multiply(3,5));
const sayHi =()=> console.log("HI");
const mul =(a,b)=> (a*b);

\\MAP ON Array;
let newarray=[1,2,3,4,5];
let squaredArray=newarray

\\ reduce 
let sum=[1,2,3,4];
let total=
sum.reduce((accumulator,cuurentValue)=> accumulator+currentValue,0);
console.log(total);
let students =[

{  name : "Alice" , marks : 85},
{ name : "Dipu" , marks : 92},
{name : "Abhay " , marks : 78},
{ name: "shubhu", marks :34}    
];
let marks = students.map(student=>student.marks);
console.log(marks);
let names = students.map(student=>student.names);
console.log(names);
let topstudent= students.filter(student=>student.marks>80)
console.log(topstudent);
// MIXED OBJECT
let mixedObject={
    name:"Alice",
    age:25,
    hobbies:["reading","travelling","coding"],
    address:{
        street:"123 main st",
        city:"New york",
        country:"USA"
    },
    greet: function()
    {
        console.log("HEllo!");
        //arrow function in objects
        let arrowGreet=()=>{
            console.log("HI!");
        }
    }
    
};
console.log(mixedObject.name);
console.log(mixedObject.age);
console.log(mixedObject.hobbies);
console.log(mixedObject.hobbies[0]);
console.log(mixedObject.hobbies[1]);
console.log(mixedObject.hobbies[2]);
console.log(mixedObject.address);
console.log(mixedObject.address.country);
console.log(mixedObject.address.city);
//object inside array
let people ={
    { name:"Alice",age: 25},
    {name: "bob",age:30},
    {name:"Charlie",age:35}
};
console.log(people[0]);
console.log(people[1].name);
console.log(people[2].age);
//array inside object
let company={
    name:"tech corp",
    employees: ["alice","bob","charlie"]
};
console.log(company.name);
console.log(company.employee);
console.log(company.employee[0]);
console.log(company.employee[1]);
console.log(company.employee[2]);