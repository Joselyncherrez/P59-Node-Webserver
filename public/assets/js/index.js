let productos = [];

function on_lstCategorias_change(valor) {
    // instancia de xhr
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // Asignación de la función callback
    peticion_http.onreadystatechange = mostrarProductos;
    // Configurar la petición
    url = '';
    switch (valor) {
        case '1':
            url = "http://localhost/site05/data/arduino.html";
            break;
        case '2':
            url = "http://localhost/site05/data/raspberry.html";
            break;
        case '3':
            url = "http://localhost/site05/data/stm32.html";
            break;
    }
    peticion_http.open('GET', url, true);
    // Enviar la petición al servidor
    peticion_http.send(null);
}

// Defincioón del función callback
function mostrarProductos() {
    var mi_contenedor = document.getElementById("productos");
    if (peticion_http.readyState == 4) {
        if (peticion_http.status == 200) {
            mi_contenedor.innerHTML = peticion_http.responseText;
        }
    }
}

// Agregar productos a la cesta
function agregar(sku, nombre, precio) {
    // Crear un objeto
    producto = {
        sku: sku,
        nombre: nombre,
        precio
    };
    // Agregar producto a lista
    productos.push(producto);
    // Crear la tabla
    let html = '<table border="1">'
    for (var i = 0; i < productos.length; i++) {
        html += "<tr>"
        html += "<td>" + productos[i].sku + "</td>"
        html += "<td>" + productos[i].nombre + "</td>"
        html += "<td>" + productos[i].precio + "</td>"
        html += "</tr>"
    }
    html += "</table>";
    // Mostrar la tabla en html
    var mi_contenedor = document.getElementById("canasta");
    mi_contenedor.innerHTML = html;
}

function start() {
    // eventos
    document.getElementById("lstCategorias").onchange = function() {
        on_lstCategorias_change(this.value);
    }

}



window.onload = start;