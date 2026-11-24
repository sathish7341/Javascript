let arr=[1, 2, 3, 4, 5,'red'];
console.log(arr);
console.log(arr.length);
console.log(arr[2]);
arr.push('black');//to add a elemnt to the end
console.log(arr); //
arr.pop();// to remove the element from the end
console.log(arr);
arr.unshift(7);//to add element in the front
console.log(arr);
arr.shift()//to remove elemnt from the front
console.log(arr);
a=arr.slice(2,5);//to print a particular element
console.log(a);
arr.splice(2,3,8,9,6);//to add an element an elemnt from the index position
console.log(arr);
//objects
let person=
{
    realname:'maya',
    age:20,
    place:'cochin',
}
console.log(person);
let fruit=
{
    name:'apple',
    color:'red',
    taste:'sweet',
    number:4,
}
console.log(fruit);
let person1=new Object();
person1.fname='santhosh';
person1.age=30;
console.log(person1);
class car{
    constructor(brand,name,year){
        this.brand=brand;
        this.name=name;
        this.year=year;
    }
}
let car1=new car('bmw','v6',2007);
console.log(car1);
class car2{
    constructor(name,colour,year){
        this.name=name;
        this.colour=colour;
        this.year=year;
    }
}
let car3=new car2('benz','black',2008);
console.log(car3);
// array of objects
let students=[{fname:'alice',age:20},{fname:'anna',age:30}]
console.log(students[1].age);
// functions
function addnum(a,b){
    var sum=a+b;
    console.log(`sum of two numbers is ${sum}`)
}
addnum(20,30);
function mul(c,d){
    var sum2=c*d;
    return sum2;
}
var result=mul(2,3);
console.log(`mul of two numbers is ${result}`);
let sub=(x,y)=>{
    return x-y;
}
let result1=sub(20,10);
console.log(`sub of two numbers is ${result1}`);
let person2={
    fname:'Arun',
    lname:'Kumar',
    fullname:()=>{
        return person2.fname+" "+person2.lname
    }
}
console.log(person2.fullname());
// array functions
let numbers=[1,2,3,4,5];
numbers.forEach((item,ind,arr3)=>{
    arr3[ind]=item;
}
)
console.log(numbers);
let ages=[13,19,12,23];
let adult=ages.filter((age)=>{
    return age>=18
}
)
console.log(adult);
//array concepts
let arr4=[1,2,3];
let [p,w]=[...arr4,10];
console.log(p,w);
let y=0;
