let boton = document.getElementById("saludar");

boton.addEventListener("click",function(){
    let nombre = document.getElementById("nombre").value;

    if(nombre.trim() ===""){
        document.getElementById("resultado").textContent =
        "porfavor, escribe tu nombre";

    } else {
        document.getElementById("resultado").textContent = "hola " + nombre + ", bienvenido a la programación.";
    }
});