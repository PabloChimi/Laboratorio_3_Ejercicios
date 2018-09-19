window.addEventListener('load', inicializarEventos, false);

function inicializarEventos(){
    document.getElementById('btnCargar').addEventListener('click', cargarPersona, false);

}

function cargarPersona(){

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){   //this hace referencia a la funcion o al objeto del cual la funcion pertenece
        if(this.readyState == 4 && this.status == 200){

            document.getElementById('info').innerHTML = this.responseText;

        }
    }

    var data = leerDatos();
    xhr.open('GET', 'pagina1.php' + data, true); //operaciones que no van a modificar la base de datos GET. Host si modifica
    xhr.send();


}

function leerDatos(){

    var cadena = '';
    var nombre = document.getElementById('txtNombre').value;
    var edad = document.getElementById('txtEdad').value;
    cadena += "?nombre=" + nombre + "&edad=" + edad; 
    return cadena;
}