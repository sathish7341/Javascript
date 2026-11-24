document.getElementById("heading").textContent="Employee Information";
document.querySelector("#designation").textContent="Senior Software Developer";
let information = document.getElementsByClassName("info");

for (let i = 0; i < information.length; i++) {
        information[i].style.color = "blue";
}
document.getElementById("empName").textContent =
    "Vignesh PG";
        
information[1].innerHTML =
    "Department: <b>IT</b>";

let contactInfo = document.getElementById("contact").innerText;

document.getElementById("contactDisplay").innerText =
    contactInfo;

document.getElementsById("profile").style.backgroundColor =
    "yellow";

 document.getElementById("empName").style.fontSize =
    "30px";

document.getElementsByClassName("salary").style.color =
    "green";

 document.getElementById("details").style.padding =
    "25px";

document.getElementById("details").style.border =
    "2px solid #1499f3";