const username = document.querySelector('#user-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const form = document.querySelector('form');


function showError(input, message) {
    const parent = input.parentElement;
    const small = parent.querySelector('small');
    
    parent.classList.add('error');
    parent.classList.remove('success');
    small.innerHTML = message;
}

function showSucess(input) {
    const parent = input.parentElement;
    const small = parent.querySelector('small');
    
    parent.classList.remove('error');
    parent.classList.add('success');

    small.innerHTML = 'Success';
}

function checkLength(input) {
    if (input.value.length < 6) {
        showError(input, 'Username too short');
    } else if (input.value.length > 10) {
        showError(input, 'Username too long');
    } else {
        showSucess(input);
    }
}


function checkEmail(input) {
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regexEmail.test(input.value)) {
        showSucess(input);
    } else {
        showError(input, `Please include an '@' in the email address`);
    }
}

function checkPassword(input) {
    if (password.value != confirmPassword.value) {
        showError(input, 'Password do not match');
    } else {
        showSucess();
    }
}

function checkPasswordLength(input) {
    if (input.value.length < 6) {
        showError(input, 'Password must be at least 6 characters');
    } else {
        showSucess(input);
    }
}

function checkEmpty(inputList) {
    inputList.forEach(input => {
        if (input.value == '') {
            showError(input,'Form cannot be left blank');
        } else {
            showSucess(input);
        }
    });
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkEmpty([username, email, password, confirmPassword]);
    checkEmail(email);
    checkLength(username);
    checkPassword(confirmPassword);
    checkPasswordLength(password);
});

