// json=java script object nottaion
let person={
    "name":"shyam",
    "age":40,
    "city":"New York"
}


let person1={
    name:'abhi',
    age:40,
    city:'uk'
}
let jsondata=JSON.stringify(person1);
console.log(jsondata);// to change an object to json
let obj=JSON.parse(jsondata)
console.log(obj);//to change json to object

//conditional statements
let age=20;
if(age>18){
    console.log("The Person is adult");
}else if(age>=18){
    console.log("The person is Adult");
}
else{
    console.log("The Person is Minor");
}

//multiple conditional statements
let gender='male'
if(age>18 && gender=='male'){
    console.log("The person is adult and Male")
}
else if(age>=18 && gende=='female'){
    console.log("The person is Adult and Female");
}
else{
    console.log("The Person is Minor");
}

let a=10;
let b=30;
let c=20;
if(a>b||a>c){
    console.log("A is bigger");
}
else if(b>c||b>a){
    console.log("Bis bigger");

}
else{
    console.log("C is Greater");
}
let agree=true;
if(agree)
{
    console.log("Go ahead with the Decision");
}
else{
    console.log("Dont Go ahead with the decision");
}
//ternary operators
(agree)?console.log("I agree"):console.log("I dont");

//LOOPS
//Print numbers 1 to 10
for(let i=1;i<=10;i++)
{
    console.log(i)
}
let fruits=['apple','orange','grapes']
for(let i of fruits)
{
    console.log(i);
}
let str='javasciprt';
for( let x of str)
{
    console.log(x);
}
//for in loop-it works on an object
for(let key in person1)
{
    console.log(key);
    console.log(person1[key]);
}
let y=0;
while(y<10)
{
    console.log(y+1);
    y++;
}
let z=0;
do{
    console.log(z++);
}while(z<=10);