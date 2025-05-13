
const form=(document.getElementById("formIS"));
var email=(document.getElementById("mail"));
var password=(document.getElementById("password"));
form.addEventListener("submit", ingresar);
e.preventDefault();

function ingresar(){
    if(email.value=="santi@gmail.com" && password.value=="santi12345"){
        alert("Inicio correcto");
    }
    else{
        alert("Revise el correo o la contraseña");
    }
}


