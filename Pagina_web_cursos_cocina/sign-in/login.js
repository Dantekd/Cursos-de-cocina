console.log("archivo login.js cargado");
function registrarUsuario(event){
console.log("funcion registro funcionando");

event.preventDefault();

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

usuarios.push({
email: email,
contrasena: password
});

localStorage.setItem("usuarios", JSON.stringify(usuarios));

alert("Usuario registrado");

window.location.href = "index.html"; // vuelve al login
}


function loginUsuario(event){

event.preventDefault();

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuarioValido = usuarios.find(u =>
u.email === email && u.contrasena === password
);

if(usuarioValido){
alert("Login correcto");
window.location.href = "Desafío Final Encina-corregido-final/carousel-rtl/home.html";
}else{
alert("Email o contraseña incorrectos");
}

}