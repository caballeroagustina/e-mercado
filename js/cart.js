//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var array=[];
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
  
  var getJSONData = function(url){
      var result = {};
      return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }else{
          throw Error(response.statusText);
        }
      })
      .then(function(response) {
            result.status = 'ok';
            result.data = response;
            return result;
      })
      .catch(function(error) {
          result.status = 'error';
          result.data = error;
          return result;
      });
  }

function calculoTot(){
    let total = 0;
    let subs = document.getElementsByClassName("subtotal");
    for (let i = 0; i < subs.length; i++){
        total += parseInt(subs[i].innerHTML);
        
    }
  
  document.getElementById("total").innerHTML= total;
  calcEnvio()
}

function calculoSub( prod, i) {
    let cantidad = parseInt(document.getElementById(`cantidad${i}`).value);
    subtotal = (cantidad*prod);
    document.getElementById(`autoSub${i}`);
    document.getElementById("subtotal").innerHTML = subtotal;
    calculoTot()
}

function calcEnvio() {
    let total = parseInt(document.getElementById("total").innerHTML);
    let envio = 0;

    let elements = document.getElementsByName("envio");
    for(var i = 0; i< elements.length; i++ ) {
        if (elements[i].checked){
            envio = parseInt (elements[i].value)
        }
    
    let totalconEnvio = ((envio/100)*total)+ total;
    document.getElementById("totalconEnvio").innerHTML= totalconEnvio;
}
document.getElementById("envio").innerHTML = envio;
let elements = document.getElementsByClassName("envio");
for(var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("change", function(){
        calcEnvio()
    })
}
}
 


function carritoAutos(array) {

    let carrito = "";
    for (let i = 0; i < array.length; i++) {
        let cart = array[i];

           
                  
            carrito += `
            
            <div class="row">
          
            <div class="col"></div>
            <strong class="col">Nombre</strong>
            <div class="col"></div>
            <div class="col"></div>
            <strong class="col">Precio por unidad</strong>
            <strong class="col">Cantidad</strong>
            <strong class="col">Subtotal</strong>
           </div>
                   <div class="list-group-item list-group-item-action">
                       <div class="row">
                           <div class="col-3">
                           <img src="` + cart.src + `" alt="` + cart.description + `" class="img-thumbnail">
                           </div>
                          
                           <div class="col">
                               <div class="d-flex w-100 justify-content-between">
                                   <h5 class="mb-1">  `+ cart.name +` </h5> 
                                
                                   <input type="number" onchange="calculoSub(${cart.unitCost},${i})" class="mb-1" style="width:60px;" id="cantidad${i}" value=${cart.count} min="1" ></input>
                                  
                                   <p class="text" <br> `+ cart.unitCost +`  `+ cart.currency +` </p>
                                   <p class="text" <br> `+ cart.unitCost*2 +`  `+ cart.currency +` </p>
                                  
                                 
                          
                                
                               </div>
                               
                           </div>
                       
                       </div>
                     
                   </div>
                 

                 
                    
                  
                   
               

                  
                  
                  
                   `
                
          
               
       
       document.getElementById("listadoCart").innerHTML = carrito;
    }
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            array = resultObj.data.articles;
            
            carritoAutos(array);
             }
          })
         })




 
  
    