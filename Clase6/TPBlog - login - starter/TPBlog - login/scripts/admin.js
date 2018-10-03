window.onload = function(){
    this.document.getElementById("btnLogOff").onclick = function(){
        localStorage.removeItem("token");
        window.location.replace("http://localhost:3000");
        
    }
}