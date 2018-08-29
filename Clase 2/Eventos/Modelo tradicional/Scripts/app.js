/*
window.onload = function (){
    document.getElementById("titulo").onclick = saludar;
}

        function saludar(){
            alert("Estoy dentro de la funcion cambiar");
            titulo.innerHTML = "Hola mundo";            //ESTA MAL EN NINGUN MOMENTO SE DECLARA LA VARIABLE TITULO
        }
*/
//FORMA RECOMENDADA 

window.onload = function(){
    this.document.getElementById("titulo").addEventListener("click", saludar, false);
    this.document.getElementById("titulo").addEventListener("click", cambiarColor, false);
}

function saludar(){
    alert("hola");
    document.getElementById("titulo").removeEventListener("click", saludar);
}

function cambiarColor(){
    document.getElementById("titulo").style.color = "red";
}