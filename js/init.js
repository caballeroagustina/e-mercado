const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_DESAFIO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json "
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
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
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}


//Función que se ejecuta una vez que se haya lanzado el evento de,
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
  
  document.addEventListener("DOMContentLoaded",
    
    function recuperarDatos() {
    
      let mis_datos_json = localStorage.getItem("mis_datos");

      let mis_datos = JSON.parse(mis_datos_json);
    document.getElementById("usuario").innerHTML = 
     mis_datos.usuario + "<br>";
    
     
      
  
    });

    function guardarDatos() {

      let mis_datos = {
        usuario: document.getElementById("inputEmail").value
      };
  

    let mis_datos_json = JSON.stringify(mis_datos);

    localStorage.setItem("mis_datos", mis_datos_json);
     }
     
     document.addEventListener("DOMContentLoaded", function (e) {
 });
   

   

   

    