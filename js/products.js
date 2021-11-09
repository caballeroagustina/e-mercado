var categoriesArray;
var minCosto;
var maxCosto;
var buscar;
function sortAuto(criterio, array) {
    let result = [];

    if (criterio === 1) {
        result = array.sort(function (a, b) { 
            if (a.cost < b.cost) { return -1; } 
            if (a.cost > b.cost) { return 1; } 
            return 0;
        });

    } else if (criterio === 2) {
        result = array.sort(function (a, b) {
            if (a.cost > b.cost) { return -1; }
            if (a.cost < b.cost) { return 1; }
            return 0;
        });

    } else if (criterio === 3) {
        result = array.sort(function (a, b) {
            if (a.soldCount > b.soldCount) { return -1; }
            if (a.soldCount < b.soldCount) { return 1; }
            return 0;
        });
    }

    return result;
}
function verMas (name) { localStorage.setItem(`auto ` , JSON.stringify({autoname:name}));
     window.location = "product-info.html"; }

function showAutos(categoriesArray) {

    let contenido = "";
    for (let i = 0; i < categoriesArray.length; i++) {
        let auto = categoriesArray[i];

                if (buscar == undefined || auto.name.toLowerCase().indexOf(buscar) != -1){
                    if ((minCosto == undefined || (parseInt(auto.cost)  > minCosto)) &&
                    (maxCosto == undefined ||   (parseInt(auto.cost) < maxCosto))) {  
                    contenido += `
                   
                   
                      <div class="col-md-6">
                     
                   
                
                    <div id="fullContent" class="list-group-item list-group-item-action">

                    <div class="row">
                 
                            
                                <img src="` + auto.imgSrc + `" alt="` + auto.description + `" class="img-thumbnail">
                                </div>
                                <div class="col-md-6">
            
                                    <h4 class="mb-1">`+ auto.name +`</h4>
                                    <p class="mb-1">` + auto.description + `</p>
                                    <small class="text-muted">` + auto.cost + ` `+ auto.currency +`</small>
                                    <p class="mb-1">` + auto.soldCount + `</p>
                            
                                </div>
                                
                       
                    </div>
                </div>  `
                contenido += `  <button  type="button" class="btn btn-primary" style=""float: inline-end;";" onclick="verMas(name)"> Ver más</button> <br><br></br> `
               
                   
                

                }
        }
        document.getElementById("listado").innerHTML = contenido;
    }
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            categoriesArray = resultObj.data;

            
            categoriesArray = sortAuto(1, categoriesArray);
            


            showAutos(categoriesArray);
        }
    });
    document.getElementById("filtrar").addEventListener("click", function () {


        minCosto = document.getElementById("rango-min").value;
        maxCosto = document.getElementById("rango-max").value;
    
        if ((minCosto != undefined) && (minCosto != "") && (parseInt(minCosto)) >= 0) {
            minCosto = parseInt(minCosto);
        }
        else {
            minCosto = undefined;
        }
    
        if ((maxCosto != undefined) && (maxCosto != "") && (parseInt(maxCosto)) >= 0) {
            maxCosto = parseInt(maxCosto);
        }
        else {
            maxCosto = undefined;
        }
    
        
        showAutos(categoriesArray);
    });
    
    document.getElementById("sortCostAsc").addEventListener("click", function () {

        
        categoriesArray = sortAuto(1, categoriesArray);

        showAutos(categoriesArray);
    });

    document.getElementById("sortCostDesc").addEventListener("click", function () {

        
        categoriesArray = sortAuto(2, categoriesArray);

        showAutos(categoriesArray);
    });

    document.getElementById("sortIdDesc").addEventListener("click", function () {

        
        categoriesArray = sortAuto(3, categoriesArray);

        
        showAutos(categoriesArray);
    });
    


    document.getElementById("limpiar").addEventListener("click", function () {
        document.getElementById("rango-min").value = "";
        document.getElementById("rango-max").value = "";

        minCosto = undefined;
        maxCosto = undefined;

        
        showAutos(categoriesArray);
    });;

    document.getElementById("buscador").addEventListener('input', function(){

        buscar = document.getElementById("buscador").value.toLowerCase();

        showAutos(categoriesArray);

    });

    document.getElementById("limpBusc").addEventListener("click", function () {
        document.getElementById("buscador").value = "";

        buscar = undefined;
        
        showAutos(categoriesArray);
    });


});

