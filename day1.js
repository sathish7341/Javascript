// console.log("hello world")
// variables
            // var 
            // let
            // const
var fname='john';
console.log(fname);
let lname='mathew';
console.log(lname);
const age='30';

{
    var fname=6;
    console.log(fname);
    let lname='don';
    console.log(lname);
}
console.log(lname);

// data types
            // String 
            // Number
            // boolean
            // undefined
            // null
// boolean
let ifname=true;
console.log(typeof(ifname));

// undefined
let address;
console.log(address);

let str='my name';
// length of a string
console.log(str.length);

// finding index value
console.log(str.indexOf('name'));

// toupppercase
console.log(str.toUpperCase());

// split
console.log(str.split(' '));

// slice
console.log(str.slice(3, 6));

// substring
console.log(str.substring(3,6));

// concatenation
let str2='javascript'
console.log('this class is based on '+ str2);

// ECMAScript 6 template literals
console.log(`this class is based on ${str2}`);

// postfix operator
let a=5;
let b=a++;
console.log(b);
console.log(a);

// prefix operator
let x=10;
let y=++x;
console.log(x);
console.log(y);

// equal(==) compares the value (===)comparer values and datatype;
{
    let a=10;
    let b='10';
    console.log(a==b);
      console.log(a===b);
}

//               |  operator |  eg   |  same as
-----------------------------------------------------
// asssignment   |    =      |  a=1  |
// ____________________________________________________
//               |   a+=3    |       |   a=a-1