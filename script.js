function solicitarYCambiarNombre (){
 const nombre = prompt("Ingresa tu nombre");
 /*uso de la api DOM para cambiar el texto de un elemento*/
 document.getElementById("texto-saludo").innerText = "Hola " + nombre;

}