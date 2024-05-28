document.addEventListener("DOMContentLoaded", function(){

    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirm_password").value;

    let error = document.querySelector("#error");

    if(password == "" && confirmPassword == ""){
        error.innerHTML = "* Passwords do not match";
    }
    else if(password === confirmPassword){
        error.innerHTML = "";
    }
})