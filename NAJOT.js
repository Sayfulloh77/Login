let submit = document.querySelector(".register-button")
let surName = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("parol")
let userName = document.getElementById("Username")
let phoneNumber = document.getElementById("phone")
let confirmPassword = document.getElementById("kod")

/*
surName.onblur = function() {
    
    let surNameValue = surName.value.trim();
   // let nameRegex = /^[A-Za-z\s]+$/;

    if (surNameValue.length == 0) {
        surName.style.border = "2px solid red";
    } else {
        surName.style.border = "2px solid green";
        surName.style.color = "green";
    }
}
*/


/*
surName.addEventListener('blur',()=> {
    
    let surNameValue = surName.value.trim();
    let nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(surNameValue)) {
        surName.value = "";
        surName.placeholder = "Only letters allowed!";
        surName.style.border = "2px solid red";
        surName.style.color = "red";
    } else {
        surName.style.border = "2px solid green";
        surName.style.color = "green";
        surName.placeholder = "Name is valid";
    }
}) */

submit.addEventListener('click', ()=> {
    
    let surNameValue = surName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let userNameValue = userName.value.trim();
    let phoneNumberValue = phoneNumber.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim()
    let nameRegex = /^[A-Za-z\s]+$/;
    let passwordAndBelg = /^[A-Za-z0-9@#$%^&*!]+$/;
    let numberRegex = /^[0-9]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ✅ checks valid email pattern



    if (!nameRegex.test(surNameValue)) {
        surName.value = "";
        surName.placeholder = "Incorrect!";
        surName.style.border = "2px solid red";
    } else {
        surName.value = ""
        surName.style.border = "2px solid green";
        surName.style.color = "green";
        surName.placeholder = "Name is valid";
    }
    if (emailRegex.test(emailValue)) {
        email.value = ""
        email.style.border = "2px solid green"
        email.style.color = "green"
        email.placeholder = "Email in valid"
    } else {
        email.value = ""
        email.placeholder = "Incorrect"
        email.style.border = "2px solid red"
        email.style.color = "red"
    }

});
