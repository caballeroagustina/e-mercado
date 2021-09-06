
var categoriesArray = [];
var minCount;
var maxCount;

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var categoriesArray = [];

function showAutos(array){

    let contenido = "";
    for(let i = 0; i < array.length; i++){
        let auto = array[i];
       
        if (((minCount == undefined) || (minCount != undefined && parseInt(auto.soldCount) >= minCount)) &&
        ((maxCount == undefined) || (maxCount != undefined && parseInt(auto.soldCount) <= maxCount))){

        contenido += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + auto.imgSrc + `" alt="` + auto.description + `" class="img-thumbnail">
                </div>
               
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ auto.name +`</h4>
                        <p class="mb-1">` + auto.description + `</p>
                        <small class="text-muted">` + auto.cost + ` USD</small>
                        <p class="mb-1">` + auto.soldCount + `</p>
                    </div>

                </div>
            </div>
        </div>
        `

        document.getElementById("listado").innerHTML = contenido;
    }
}}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultado){
        if (resultado.status === "ok")
        {
            categoriesArray = resultado.data;
            //Muestro las categorías ordenadas
            showAutos(categoriesArray);
        }
    });
});

document.getElementById("filtrar").addEventListener("click", function(){
  
    minCount = document.getElementById("rango-min").value;
    maxCount = document.getElementById("rango-max").value;

    if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
        minCount = parseInt(minCount);
    }
    else{
        minCount = undefined;
    }

    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
        maxCount = parseInt(maxCount);
    }
    else{
        maxCount = undefined;
    }

    showAutos(array);
});

document.getElementById("limpiar").addEventListener("click", function ()
{
  document.getElementById("rango-min").value = "";
  document.getElementById("rango-max").value = "";
  var minCount = undefined;
  var maxCount = undefined;
  showAutos(autos)
});
