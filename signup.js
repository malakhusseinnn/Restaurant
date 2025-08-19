
//----------------------- Sign Up Logic  ------------------------------------------------

let username = document.querySelector(".user-name");

let email = document.querySelector(".email");

let phoneNumber = document.querySelector(".phone-number");

let password = document.querySelector(".password");

let confirmedPassword = document.querySelector(".confirmed-password");

let form = document.querySelector(".signup-form");

let usernameRegex = /^[0-9a-z_]{3,15}$/;

let phoneNumberRegex = /^(01)[0125][0-9]{8}$/;

let emailRegex = /^[a-z][a-z0-9%$+]*(@gmail.com){1}$/;

let passwordRegex = /\w{8,}$/;

let usernameDiv = document.querySelector(".username-validation");

let emailDiv = document.querySelector(".email-validation");

let phoneDiv = document.querySelector(".phone-validation");

let passwordDiv = document.querySelector(".password-validation");

let confirmDiv = document.querySelector(".confirm-validation");

let eyes = document.querySelectorAll(".eye i");

eyes.forEach((eye, index) => {
    eye.addEventListener("click", () => {
        let input = index === 0 ? password : confirmedPassword;

        if (input.value.trim() === "") return;

        if (input.type === "password") {
            input.type = "text";
            eye.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            input.type = "password";
            eye.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
});


username.addEventListener("input",()=>{
    let usernameTest = usernameRegex.test(username.value);
    usernameDiv.innerHTML = "";
    if(!usernameTest){
        usernameDiv.innerHTML += `
        <div class = "validation-message">
            <p><i class="fa-solid fa-circle-xmark"></i> Username must contain only small letters and numbers and _ </p>
            <p><i class="fa-solid fa-circle-xmark"></i> Must be greater than 3 characters</p>
            <p><i class="fa-solid fa-circle-xmark"></i> Maximum length is 15 characters</p>
        </div>
        `
    }
    else{
        usernameDiv.innerHTML += `<p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Username</p>`
    }
});


email.addEventListener("input", ()=>{
    let testEmail = emailRegex.test(email.value);
    emailDiv.innerHTML = "";
    if(!testEmail){
        emailDiv.innerHTML = `
            <div class = "validation-message">
                <p><i class="fa-solid fa-circle-xmark"></i> Email must start with small letter</p>
                <p><i class="fa-solid fa-circle-xmark"></i> Have only letter, numbers and special characters as [% $ +]</p>
                <p><i class="fa-solid fa-circle-xmark"></i> Have no space</p>
            </div>
        `
    }
    else{
        emailDiv.innerHTML = `
            <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Email</p>
        
        `
    }
});

phoneNumber.addEventListener("input", ()=>{
    let testPhoneNumber = phoneNumberRegex.test(phoneNumber.value);
    phoneDiv.innerHTML = "";
    if(!testPhoneNumber)
    {
        phoneDiv.innerHTML =`
        <div class = "validation-message">
            <p><i class="fa-solid fa-circle-xmark"></i> Phone number must start with 010 OR 011 OR 012 OR 015</p>
            <p><i class="fa-solid fa-circle-xmark"></i> Only 11 digits</p>
            <p><i class="fa-solid fa-circle-xmark"></i> Have no space</p>
        </div> `
    }
    else{
        phoneDiv.innerHTML = `
           <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Phone Number</p>
        `
    }
});

password.addEventListener("input",()=>{
    let testPassword = passwordRegex.test(password.value);
    passwordDiv.innerHTML = "";
    if(!testPassword) {
        passwordDiv.innerHTML = `
            <div class = "validation-message">
                <p><i class="fa-solid fa-circle-xmark"></i> Password must include 8 characters, letters and digits</p>
                <p> <i class="fa-solid fa-circle-xmark"></i>  Have no space</p>
            </div>
        `
    }
    else {
        passwordDiv.innerHTML = `
            <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Password</p>
        `
    }

});

confirmedPassword.addEventListener("input" , ()=>{
    confirmDiv.innerHTML = "";
    if(confirmedPassword.value === password.value){
        confirmDiv.innerHTML += `<p class = "valid"> <i class="fa-solid fa-circle-check"></i> Password Matched</p>`
    }
    else{
        confirmDiv.innerHTML += `<p class = "validation-message"><i class="fa-solid fa-circle-xmark"></i> The password does not match </p>`
    }
});


function clearValidationMessages(){
    let validation = document.querySelectorAll(".username-validation, .email-validation, .phone-validation, .password-validation, .confirm-validation");
    validation.forEach((elem) => {
        elem.innerHTML = "";
    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let usernameTest = usernameRegex.test(username.value);
    let testEmail = emailRegex.test(email.value);
    let testPhoneNumber = phoneNumberRegex.test(phoneNumber.value);
    let testPassword = passwordRegex.test(password.value);

    if(usernameTest && testEmail && testPhoneNumber && testPassword && (password.value === confirmedPassword.value)){
        localStorage.setItem("username",username.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("phone",phoneNumber.value);
        localStorage.setItem("password",password.value);
        clearValidationMessages();
        form.reset();
        window.location.href = "home.html";
    }
    else{
        let error = document.querySelector(".signup-validation-message");
        error.innerHTML = "";
        error.innerHTML = `<p class = "validation-message"><i class="fa-solid fa-circle-xmark"></i> Please, check that all fields are correct and not empty!!</p>`
    }
});




