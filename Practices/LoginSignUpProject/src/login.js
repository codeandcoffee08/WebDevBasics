// show error function
function showError(input, message) {
    const formControls = input.parentElement;
    formControls.className = 'form-controls error';
    const small = formControls.querySelector('small');
    small.innerText = message;
}

// show success function
function showSuccess(input) {
    formControls = input.parentElement;
    formControls.className = 'form-controls success';
}

function isValidEmail(email) {
    const re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}
// check required function
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is Required`);
        } else {
            showSuccess(input);
        }
    });
}

//check input length
function checkLength(input, min, max) {
    if(input.value.length == 0) {
        showError(input, `${getFieldName(input)} is Required`);
    } else if(input.value.length < min) {
       showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

//check passwords match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Password do not match');
    }
}

//get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}





//login sign up swap
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginForm, "error", "Invalid Usernname/Password combination");
    });
}); 


const createAccount = document.getElementById('createAccount');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmation = document.getElementById('confirmation');





// Event listeners
createAccount.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, confirmation]);
    checkLength(username, 5, 13);
    checkLength(password, 8, 20);
    checkPasswordsMatch(password, confirmation);
});