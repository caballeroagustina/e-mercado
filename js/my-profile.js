//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded",
    
function recuperarPerfil() {

  let mi_perfil_json = localStorage.getItem("mi_perfil");

  let mi_perfil = JSON.parse(mi_perfil_json);
document.getElementById("inputEmail1").value = mi_perfil.Email 

document.getElementById("nombre").value = mi_perfil.Nombre 

document.getElementById("apellido").value = mi_perfil.Apellido 

document.getElementById("tel").value = mi_perfil.Teléfono 

document.getElementById("edad").value = mi_perfil.Edad 


  

});

function guardarPerfil() {

  let mi_perfil = {
    Email: document.getElementById("inputEmail1").value,
    Nombre: document.getElementById("nombre").value,
    Apellido: document.getElementById("apellido").value,
    Teléfono: document.getElementById("tel").value,
    Edad: document.getElementById("edad").value,

    
  };


let mi_perfil_json = JSON.stringify(mi_perfil);

localStorage.setItem("mi_perfil", mi_perfil_json);
 }
 
 document.addEventListener("DOMContentLoaded", function (e) {
});
