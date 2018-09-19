window.addEventListener('load', inicializarEventos, false);

function inicializarEventos(){
    document.getElementById('btnCargar').addEventListener('click', cargarPersona, false);

}

function cargarPersona(){

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){   //this hace referencia a la funcion o al objeto del cual la funcion pertenece
        if(this.readyState == 4 && this.status == 200){

            var autos = JSON.parse(this.responseText);
            console.log(autos);
            //document.getElementById('info').innerHTML = "Nombre: " + unaPersona.nombre + "Edad: " + unaPersona.edad;

        }
    }

    xhr.open('GET', 'pagina1.php', true); //operaciones que no van a modificar la base de datos GET. Host si modifica
    xhr.send();


}

