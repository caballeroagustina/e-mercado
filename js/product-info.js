//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var autos = [];
var comentarios = [];
var estrellas=[];


function showAuto (car){
let info = "";
let imgs = "";
let comments;


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
  comentarios.forEach(function(comment) {
   
    comments +=` <strong class="mb-1">`+ comment.user +`</strong><br>`
    comments +=`<p class="mb-1">` + comment.description + `</p><br>`
    comments +=` <small class="mb-1">` + comment.dateTime + ` </small><br>`
    comments +=` <strong> calificación:  `  + comment.score + `</strong><br>
    <br><hr><br>
     `;
  });

document.getElementById("comentarios").innerHTML=comments;
document.getElementById("contenido").innerHTML= info;
document.getElementById("imagenes").innerHTML= imgs;
document.getElementsByClassName("rating__star")

}

    document.addEventListener("DOMContentLoaded", function(e) { 
         
 getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
    if (resultObj.status === "ok") {
       
      comentarios = resultObj.data;
        
        getJSONData(PRODUCT_INFO_URL).then(function(result) {
            if (result.status === "ok") { 
        
                autos = result.data;
                showAuto(autos,comentarios);
             }});
                }
              }); 
               
 });
 
