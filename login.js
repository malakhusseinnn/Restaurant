

// ---------------------------------  Login Logic  -------------------------------------------------


let loginForm = document.querySelector(".login-form");

let loginEmail = document.querySelector(".email-login");

let loginPassword = document.querySelector(".password-login")

let eye = document.querySelector(".eye i");

eye.addEventListener("click", () => {

    if (loginPassword.value.trim() === "") return;

    if (loginPassword.type === "password") {
        loginPassword.type = "text";
        eye.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        loginPassword.type = "password";
        eye.classList.replace("fa-eye-slash", "fa-eye");
    }
});


function clearMessage() {
    let validation = document.querySelector(".login-validation-message");
    validation.innerHTML = "";
}


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (loginEmail.value === localStorage.getItem("email") && loginPassword.value === localStorage.getItem("password")) {
        clearMessage();
        loginForm.reset();
        window.location.href = "home.html";
    }
    else {
        let error = document.querySelector(".login-validation-message");
        error.innerHTML = "";
        error.innerHTML = `<p class = "validation-message">The email and password don't EXIST !! </p>`;
    }
});


