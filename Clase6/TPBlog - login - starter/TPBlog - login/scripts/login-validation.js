//en la pagina admin debo validar tambie, parecido a login

if(localStorage){
    if(localStorage.token){
        validateUser(localStorage.token);
    }
}



window.onload = function(){ //Para agarrar el evento
    $("#btnLogIn").click(function(e){
        login();
    });
    //this.document.getElementById("btnLogIn").addEventListener()
}
function validateUser(token){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                if(xhr.responseText == "OK"){
                    window.location.replace("http://localhost:3000/admin.html");
                }
            }
            else{
                alert("No tiene permisos suficientes");
                window.location.replace("http://localhost:3000/accessdenied.html");
            }
        }
    }
    xhr.open("POST", "http://localhost:3000/validate", false);
    xhr.setRequestHeader("authorization", token);
    xhr.send("");
}
var xhr;  //Las declaraciones se "suben" o sea scope global (Asignaciones no)
function login(){
    var data = {
        "usuario": document.getElementById("name").value,
        "password":document.getElementById("pass").value
    }
    var senddata = {"collection":"users",
                    "data":data};
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){   //cada vez que mcambia el estado se va a ejecutar la funcion asociada al evento
        if(this.readyState ==4){
            if(this.status == 200){
                localStorage.token = JSON.parse(xhr.responseText).token;  //deberia validar el localstorage -- genera un objeto a traves de un stirng
                window.location.replace(xhr.getResponseHeader('redirect'));  //redirecciono a la pagina    
            }
            if(this.status == 403){
                window.location.replace("http://localhost:3000/accessdenied.html");
            }
        }
    };

    xhr.open("POST", "http://localhost:3000/login",true); //estoy pidiendo un servicio de mi servidor
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(senddata)); //Necesito mandar ese objeto con esa estructura, o sea el senddata
}