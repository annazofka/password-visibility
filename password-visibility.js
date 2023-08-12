const password = document.querySelector("#password");
console.log(password)
const togglePassword = document.querySelector("#toggle-password");
console.log(togglePassword)

togglePassword.addEventListener("click" , () => {
    if(togglePassword.checked) {
        password.type = "text";
    } else {
        password.type = "password"
    }
});