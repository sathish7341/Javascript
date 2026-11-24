let students=[{id:101,Name:'Anu',Age:20,Departement:'CSE',Em:95,Mm:92,Sm:88},
    {id:102,Name:'Rahul',Age:21,Departement:'ECE',Em:75,Mm:82,Sm:78},
    {id:103,Name:'Meera',Age:20,Departement:'CSE',Em:65,Mm:55,Sm:72},
    {id:104,Name:'Arun',Age:22,Departement:'ECE',Em:35,Mm:45,Sm:50},
    {id:105,Name:'Neha',Age:21,Departement:'IT',Em:90,Mm:96,Sm:94}];
console.log(students[0]);
function displayStudentDetails(students)
{
    students.forEach((stu)=>{
        console.log(stu);

    });

}
displayStudentDetails(students);
function calculateTotal(students){
    
}