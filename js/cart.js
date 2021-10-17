//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var array=[];

function calculoTot(){
    let total = 0;
    let subs = document.getElementsByClassName("subtotal");
    for (let i = 0; i < subs.length; i++){
        total += parseInt(subs[i].innerHTML);
    }
  
  
}

function calculoSub( prod, i) {
    let cantidad = parseInt(document.getElementById(`cantidad${i}`).value);
    subtotal = (cantidad*prod);
    document.getElementById(`autoSub${i}`);
    document.getElementById("subtotal").innerHTML = subtotal;
    calculoTot()
}



function carritoAutos(array) {

    let carrito = "";
    for (let i = 0; i < array.length; i++) {
        let cart = array[i];

           
                    carrito += `
                    <div class="list-group-item list-group-item-action">
                        <div class="row">
                            <div class="col-3">
                            <img src="` + cart.src + `" alt="` + cart.description + `" class="img-thumbnail">
                            </div>
                           
                            <div class="col">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">  `+ cart.name +` </h5> 
                                    Cantidad: <br>
                                    <input type="number" onchange="calculoSub(${cart.unitCost},${i})" class="mb-1" style="width:60px;" id="cantidad${i}" value=${cart.count} min="1" ></input>
                                   Costo por unidad:
                                    <p class="text" <br> `+ cart.unitCost +`  `+ cart.currency +` </p>
                                    
                                 
                           
                                 
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
    });
})
