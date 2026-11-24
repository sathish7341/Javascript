let form = document.getElementById("regForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let mobileInput = document.getElementById("mobile");
let courseSelect = document.getElementById("course");
let btn = document.querySelector("#btn");
let msg = document.getElementById("msg");

let nameErr = document.getElementById("nameErr");
let emailErr = document.getElementById("emailErr");
let mobileErr = document.getElementById("mobileErr");
let genderErr = document.getElementById("genderErr");
let courseErr = document.getElementById("courseErr");

function checkName() {
    if (nameInput.value.trim() === "") {
        nameErr.textContent = "Name is required";
        nameErr.style.color = "red";
        return false;
    } else {
        nameErr.textContent = "";
        return true;
    }
}

function checkEmail() {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value.trim() === "") {
        emailErr.textContent = "Email is required";
        emailErr.style.color = "red";
        return false;
    } else if (!pattern.test(emailInput.value)) {
        emailErr.textContent = "Invalid email format";
        emailErr.style.color = "red";
        return false;
    } else {
        emailErr.textContent = "";
        return true;
    }
}

function checkMobile() {
    let pattern = /^[0-9]{10}$/;
    if (mobileInput.value.trim() === "") {
        mobileErr.textContent = "Mobile number is required";
        mobileErr.style.color = "red";
        return false;
    } else if (!pattern.test(mobileInput.value.trim())) {
        mobileErr.textContent = "Mobile must be 10 digits";
        mobileErr.style.color = "red";
        return false;
    } else {
        mobileErr.textContent = "";
        return true;
    }
}

function checkGender() {
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        genderErr.textContent = "Please select gender";
        genderErr.style.color = "red";
        return false;
    } else {
        genderErr.textContent = "";
        return true;
    }
}

function checkCourse() {
    if (courseSelect.value === "") {
        courseErr.textContent = "Please select a course";
        courseErr.style.color = "red";
        return false;
    } else {
        courseErr.textContent = "";
        return true;
    }
}

nameInput.addEventListener("input", checkName);
emailInput.addEventListener("input", checkEmail);

let radios = document.querySelectorAll('input[name="gender"]');
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", checkGender);
}

courseSelect.addEventListener("change", checkCourse);

btn.addEventListener("click", function() {
    msg.textContent = "";
});

form.addEventListener("submit", function(event) {
    let v1 = checkName();
    let v2 = checkEmail();
    let v3 = checkMobile();
    let v4 = checkGender();
    let v5 = checkCourse();

    if (v1 && v2 && v3 && v4 && v5) {
        event.preventDefault();
        msg.textContent = "Registration Successful!";
        msg.style.color = "green";
        form.reset();
    } else {
        event.preventDefault();
        msg.textContent = "Please fill all fields correctly";
        msg.style.color = "red";
    }
});
