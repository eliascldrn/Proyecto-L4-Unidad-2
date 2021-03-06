
function fregistrar(event) {
    event.preventDefault(); // Se utiliza para evitar el comportamiento por defecto del navegador
    var registro = "";

    //obtiene los datos del form registro
    const x = document.forms["formReg"];
    for (let i = 0; i < x.length; i++) {
        registro += x.elements[i].value + "~"; // se utiliza para separar los datos mientras se concatena
        x.elements[i].value = ''; 
    }

    //si no hay nada guardado al inicio entonces guarda un arreglo vacio
    if (localStorage.getItem('data')==null) {
        localStorage.setItem('data','[]');
    }
    //obtiene los datos viejos y los junto con los datos nuevos
    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(registro.trim());

    //guarda los datos viejos + nuevos en local storage
    localStorage.setItem ('data', JSON.stringify(old_data));
}

function fmostrar() {
    document.getElementById('table').style.display='block'; // Muestra la sección div

    var table = document.getElementById("myTable");

    if (localStorage.getItem('data') != null) {
        var registro = JSON.parse(localStorage.getItem('data'));
        var totaltablaFila = '';
        for (let i = 0; i < registro.length; i++) {
            var data = registro[i].split('~'); // Extrae los datos y hace un array
            if(data.length !=0) {
                /*
                Creación de una fila de la tabla para cada registro 
                */
                var tablaFila = "<tr><td>" + data[0] + "</td><td>" + data[1] + "</td><td>" + data[2] + "</td></tr>";
                totaltablaFila += tablaFila;
            }                    
        }
        //Sustitución de los datos dentro de tablebody
        document.getElementById("tableBody").innerHTML = totaltablaFila;
    }
    else {
        document.getElementById("tableBody").innerHTML = "<tr><td colspan='3' style='text-align:center'>No hay registros que mostrar!</td></tr>";
    }
}

function limpiar () {
    localStorage.clear();
}