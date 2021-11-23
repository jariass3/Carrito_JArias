function itemSeleccionado()
{
    /* Para obtener el texto */
    let combo = document.getElementById("cat");
    let selec = combo.options[combo.selectedIndex].text;
    
    // Configurar la petición
    if(selec == "Camisetas"){
        cargarContenido1();
    }
    else if(selec == "Jeans"){
        cargarContenido2();  
    }
    else if(selec== "Joyeria"){
        cargarContenido3();
    }
    else{
        document.getElementById("add").innerHTML = ""
        
    }   

}

function cargarContenido1() {
    // Obtener la instancia del objeto XMLHttpRequest
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // Asignación de la función callback
    peticion_http.onreadystatechange = muestraContenido;
    // Configurar la petición
    peticion_http.open('GET', 'camisetas.html', true);
    // Enviar la petición al servidor
    peticion_http.send(null);
    // Defincioón del función callback
    function muestraContenido() {
        if (peticion_http.readyState == 4) {
            if (peticion_http.status == 200) {
                var mi_contenedor = document.getElementById("add");
                mi_contenedor.innerHTML = peticion_http.responseText;
            }
        }
    }
}

function cargarContenido2() {
    // Obtener la instancia del objeto XMLHttpRequest
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // Asignación de la función callback
    peticion_http.onreadystatechange = muestraContenido;
    // Configurar la petición
    peticion_http.open('GET', 'jeans.html', true);
    // Enviar la petición al servidor
    peticion_http.send(null);
    // Defincioón del función callback
    function muestraContenido() {
        if (peticion_http.readyState == 4) {
            if (peticion_http.status == 200) {
                var mi_contenedor = document.getElementById("add");
                mi_contenedor.innerHTML = peticion_http.responseText;
            }
        }
    }
}

function cargarContenido3() {
    // Obtener la instancia del objeto XMLHttpRequest
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // Asignación de la función callback
    peticion_http.onreadystatechange = muestraContenido;
    // Configurar la petición
    peticion_http.open('GET', 'joyeria.html', true);
    // Enviar la petición al servidor
    peticion_http.send(null);
    // Defincioón del función callback
    function muestraContenido() {
        if (peticion_http.readyState == 4) {
            if (peticion_http.status == 200) {
                var mi_contenedor = document.getElementById("add");
                mi_contenedor.innerHTML = peticion_http.responseText;
            }
        }
    }
}

function agregar(producto, precio) {

  var body = document.getElementsByClassName("addT")[0];

  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Crea las celdas
  for (var i = 1; i < 2; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    for (var j = 0; j < 1; j++) {
  
      var celda1 = document.createElement("td");
      var celda2 = document.createElement("td");
      var textoCelda1 = document.createTextNode(producto);
      var textoCelda2 = document.createTextNode(precio);
      celda1.appendChild(textoCelda1);
      celda2.appendChild(textoCelda2);
      hilera.appendChild(celda1);
      hilera.appendChild(celda2);
    }

    tblBody.appendChild(hilera);
  }

  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute("class", "table");
}