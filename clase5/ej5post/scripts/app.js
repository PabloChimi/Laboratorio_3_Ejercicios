window.addEventListener('load', inicializarEventos, false);

function inicializarEventos(){
    document.getElementById('frmPersona').addEventListener('submit', manejarSubmit, false);

}

function manejarSubmit(e){
    e.preventDefault();
    cargarPersona();
}

function cargarPersona(){

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){   //this hace referencia a la funcion o al objeto del cual la funcion pertenece
        document.getElementById('info').innerHTML = '<img src = "./images/reloader.gif"';
        if(this.readyState == 4){
            if(this.status == 200){

            document.getElementById('info').innerHTML = this.responseText;

        }else{
                document.getElementById('info').innerHTML = 'Error: ' + this.status + ' ' + this.statusText;
             }
        }
    }
    var frm = document.getElementById('frmPersona');
    var data = new FormData(frm);
    var data = leerDatos();   //debe tenerlo el navegador
    xhr.open('POST', 'pagina1.php', true); //operaciones que no van a modificar la base de datos GET. Host si modifica
    xhr.setRequestHeader('X-Requested-With', 'XMLHTTPRequest');
    xhr.send(data);

}

function leerDatos(){

    var cadena = '';
    var nombre = document.getElementById('txtNombre').value;
    var edad = document.getElementById('txtEdad').value;
    cadena += "nombre=" + encodeURIComponent(nombre) + "&edad="+ encodeURIComponent(edad); 
    return cadena;
}
