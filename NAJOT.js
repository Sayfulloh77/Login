let submit = document.querySelector(".register-button")
let surName = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("parol")
let userName = document.getElementById("Username")
let phoneNumber = document.getElementById("phone")
let confirmPassword = document.getElementById("kod")
let male = document.querySelector("#male")
let female = document.querySelector("#female")
let none = document.querySelector("#none")
let gender = document.querySelector(".gender")


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
 //   let passwordAndBelg = /^[A-Za-z0-9@#$%^&*!]+$/;
    let numberRegex = /^[0-9]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ✅ checks valid email pattern
    
    
  // ✅ flags (assume all valid at start)
  let isValid = true;



    if (!nameRegex.test(surNameValue)) {
        surName.value = "";
        surName.placeholder = "Incorrect!";
        surName.style.border = "2px solid red";
        isValid = false;
    } else {
        surName.style.border = "2px solid green";
        surName.style.color = "green";
        surName.placeholder = "Name is valid";
    }
    if (!emailRegex.test(emailValue)) {
        email.value = ""
        email.placeholder = "Incorrect"
        email.style.border = "2px solid red"
        email.style.color = "red"
        isValid = false;
    } else {
        email.style.border = "2px solid green"
        email.style.color = "green"
        email.placeholder = "Name is valid"
    }
      if (!nameRegex.test(userNameValue)) {
        userName.value = "";
        userName.placeholder = "Incorrect!";
        userName.style.border = "2px solid red";
        isValid = false;
    } else {
        userName.style.border = "2px solid green";
        userName.style.color = "green";
        userName.placeholder = "Name is valid";
    }
      if (!numberRegex.test(phoneNumberValue)) {
        phoneNumber.value = "";
        phoneNumber.placeholder = "Incorrect!";
        phoneNumber.style.border = "2px solid red";
        isValid = false;
     } else {
        phoneNumber.style.border = "2px solid green";
        phoneNumber.style.color = "green";
        phoneNumber.placeholder = "Name is valid";
    }
        if (!numberRegex.test(passwordValue)) {
        password.value = "";
        password.placeholder = "Incorrect!";
        password.style.border = "2px solid red";
        isValid = false;
    } else {
        password.style.border = "2px solid green";
        password.style.color = "green";
        password.placeholder = "Name is valid";
    }
       if (confirmPasswordValue !== passwordValue || confirmPasswordValue === "") {
        confirmPassword.value = "";
        confirmPassword.placeholder = "Incorrect!";
        confirmPassword.style.border = "2px solid red";
        isValid = false;
    } else {
        confirmPassword.style.border = "2px solid green";
        confirmPassword.style.color = "green";
        confirmPassword.placeholder = "Name is valid";
    }
        gender.innerHTML = ""
        let text = document.createElement("div")
        text.style.color = "red"
        text.style.marginLeft = "40px"
        text.style.position = "relative"
        text.style.bottom = "20px"

    if (male.checked || female.checked || none.checked) {
        text.innerHTML = "You picked up one of the genders"
        text.style.color = "green"
    }else {
        text.style.color = "red";
        text.innerHTML = "Please choose one of the genders"
        isValid = false;
    }
    gender.appendChild(text)
     
   if (isValid) {
      alert(" Congratulations! You successfully logged in.");
   }else {
      alert(" One or more fields are incorrect. Please fix them!");
   }
    /*
    this option one but it is not best way cause im only checking the length im not checked they have correct input or not
    for this one again i must write tone of codes thats why i want the easiest way i mean using boolean

     if (gender.length !== 0 && surNameValue.length !== 0 && emailValue.length !== 0 && passwordValue.length !== 0  && userNameValue.length !== 0 && phoneNumberValue.length !== 0 && confirmPasswordValue.length !== 0  ) {
          alert("Congratulation You Successfully Loge it")
     }else {
        alert("❌ Please fill all fields correctly!");
     }
       */
});