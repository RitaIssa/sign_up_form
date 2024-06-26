const error = document.querySelector("#error");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

password.addEventListener("keyup", e => {
    if(password.value !== confirmPassword.value){
        error.style.display = "inline-block";
        error.innerHTML = "* Passwords do not match";
    }
})

confirmPassword.addEventListener("keyup", e => {
    if(password.value == confirmPassword.value){
        error.style.display = "none";
        document.querySelector('input[type="password"]:focus').style.outlineColor = "green";
    }
})

const clear = document.querySelector("button");
const first = document.querySelector("#first_name");
const last = document.querySelector("#last_name");
const email = document.querySelector("#mail");
const number = document.querySelector("#phone_number");
const pass = document.querySelector("#password");
const confirmP = document.querySelector("#confirm_password");

clear.addEventListener("click", () => {
  if (first.value != "" && last.value != "" && email.value != "" && number.value != "" && pass.value != "" &&   confirmP.value != "" && pass.value == confirmP.value){
        first.value = "";
        last.value = "";
        email.value = "";
        number.value = "";
        pass.value = "";
        confirmP.value = "";
  }
});