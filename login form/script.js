const head = document.getElementById("title")
const nameInput = document.getElementById("inputName")
const btnSignup = document.getElementById("signupBtn")
const btnSignin = document.getElementById("signinBtn")
const underline = document.getElementById("underline")
const text = document.getElementById("text")

btnSignin.addEventListener("click", function(){
    head.innerHTML = "Sign In"
    nameInput.style.maxHeight = "0px"
    btnSignup.classList.add("disable")
    btnSignin.classList.remove("disable")
    text.innerHTML = "Forgot Password? "
    underline.style.transform = "translateX(30px)"
})
btnSignup.addEventListener("click", function(){
    head.innerHTML= "Sign Up"
    nameInput.style.maxHeight = "60px"
    btnSignup.classList.remove("disable")
    btnSignin.classList.add("disable")
    text.innerHTML = "Password Suggestions ?"
    underline.style.transform = "translateX(0px)"
})