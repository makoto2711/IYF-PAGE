/*let enviar = document.getElementById("enviar")

enviar.addEventListener("click", sabe)

function sabe() {
    let nombre = document.getElementById("tesla").value
    console.log(nombre)
}*/

let BoxModal = document.getElementById("box-modal")
let body_u = document.body

let abrir = document.querySelector(".b-play")
abrir.addEventListener("click", () => 
{
   //Manera Correcta de "Agregar y Remover" Clases CSS
    BoxModal.classList.remove("d-none")
    BoxModal.classList.add("d-flex")  
    body_u.style.overflow = "hidden"

});


let cerrar = document.getElementById("cerrar")
cerrar.addEventListener("click", () => 
{
    BoxModal.classList.add("d-none")
    BoxModal.classList.remove("d-flex") 
    body_u.style.overflow = "visible"
});


let year = document.getElementById("year")
var a_year = new Date().getFullYear();
year.innerText = a_year



var width = document.body.clientWidth;


document.addEventListener("width", function() {
    console.log(width)
  });

