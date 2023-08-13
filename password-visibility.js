// Password visibility for more than one password field:

const passwords = document.querySelectorAll('[type="password"]');
console.log(password)
const togglePassword = document.querySelector('#toggle-password');
console.log(togglePassword)

for (let password of passwords) {
    togglePassword.addEventListener('click' , () => {
        if(togglePassword.checked) {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    });
}

// Password visibility for just one password field:

/* const password = document.querySelector('#password');
console.log(password)
const togglePassword = document.querySelector('#toggle-password');
console.log(togglePassword)

togglePassword.addEventListener('click' , () => {
    if(togglePassword.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}); */