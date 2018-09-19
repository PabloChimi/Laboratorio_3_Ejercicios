window.addEventListener('load', inicializarEventos, false);

function inicializarEventos(){
    document.getElementById('btnCrear').addEventListener('click', crearObjeto, false);

}

function crearObjeto(){
    var cadena = '{"nombre":"Juan", "edad":"23"}';
    console.log(cadena);

    var persona = JSON.parse(cadena);
    console.log(persona);

    document.getElementById('info').innerHTML = persona.nombre;
    document.getElementById('info').innerHTML += " ";
    document.getElementById('info').innerHTML += persona.edad;
    
}