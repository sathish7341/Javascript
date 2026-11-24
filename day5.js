function show(){
    alert('Button is Clicked')
}
var head=document.getElementById('heading');
head.addEventListener('mouseover',()=>{
    head.style.color='black';
}
);
function leave(){
    head.addEventListener('mouseleave',()=>{
        head.style.color='red';
    })
}
function display(eve){
    console.log(eve.target.value)
}
var text=document.getElementById("text")
function focu(){
    text.style.backgroundColor="blue";
}
function blu(){
    text.style.backgroundColor="white";
}
function cli(){
    alert('Form is Submitted')
}
// validation
let email=document.getElementById('Email');
let error=document.getElementById('Error');

let regex=/^[a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:[.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
function validate()
{
    if(regex.test(email.value)){
        error.textContent='Email is Valid';
        error.style.color='green';
        return true;
    }
    else{
        error.textContent='Email is InValid';
        error.style.color='red';
        return false;
    }
}
function verify(){
    let value=document.getElementById("num")
    
    try{
    let x=num.value
    if(x<5)throw "Number is too low"
    if(x>10)throw"Number is too high"
    }catch(error){
        // console.log(`The error is ${error}`)
        errmsg.textContent=`The error is ${error}`
    }
}
