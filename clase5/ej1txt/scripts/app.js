window.addEventListener('load', inicializarEventos, false);

function inicializarEventos(){
    document.getElementById('btnCargar').addEventListener('click', traerTexto, false);

}

function traerTexto(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){   //this hace referencia a la funcion o al objeto del cual la funcion pertenece
        if(this.readyState == 4 && this.status == 200){

            document.getElementById('info').innerHTML = this.responseText;

        }
    }

    xhr.open('GET', 'archivo.txt', true);
    xhr.send();


}