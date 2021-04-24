const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
let names=document.getElementById("name");
let pwds=document.getElementById("pwd");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function validate(callback){
    if(names.value !="admin" || pwds.value !="12345")
    {
alert("Invalid Login credentials");
    }
    else{
callback();
    }
}
function news(){
    setTimeout(function() {window.location = "main.html" })};