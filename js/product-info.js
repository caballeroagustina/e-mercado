//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var autos;
function comentarios (reseña) { localStorage.setItem(`auto ` , JSON.stringify({comentarios:reseña}));
     window.location = "comentarios.html"; }

function showAuto (car){
let info = "";
let imgs = "";

info +=`
<h1 class="mb-1">`+ car.name +`</h1>
<h5 class="mb-1">` + car.description + `</h5>
<h4 class="mb-1">` + car.cost + ` USD</h4>
<h4> Vendidos:  `  + car.soldCount + `</h4>
 `;

 imgs+= `
 <img src="img/prod1_1.jpg" width="200" height="150" alt="">
 <img src="img/prod1_2.jpg"  width="200" height="150"alt="">
 <img src="img/prod1_3.jpg" width="200" height="150"alt="">
 <img src="img/prod1_4.jpg"  width="200" height="150" alt="">

 `;
info+= `<button style="float: right;" onclick="verMas(name)"> Haz una reseña</button> <br><br>`
document.getElementById("contenido").innerHTML= info;
document.getElementById("imagenes").innerHTML= imgs;
 }

    document.addEventListener("DOMContentLoaded", function(e) {
        getJSONData(PRODUCT_INFO_URL).then(function(result) {
            if (result.status === "ok") { 
        
                autos = result.data;
                showAuto(autos);
            }
        });
     });
    
