/*let enviar = document.getElementById("enviar")

enviar.addEventListener("click", sabe)

function sabe() {
    let nombre = document.getElementById("tesla").value
    console.log(nombre)
}

var popup = document.getElementById("popupForms")
var closep = document.getElementById("closePopUp")
var closeImg = document.getElementById("closeImg")

document.addEventListener("DOMContentLoaded", () => {
        popup.style.zIndex = 9999
        body_u.style.overflow = "hidden"
})

closep.addEventListener("click", () => {
        popup.style.zIndex = -1
        popup.style.opacity = 0
        body_u.style.overflow = "visible"
        closeImg.style.display = "none"

})
*/



var naver = document.querySelector("nav")
var BoxModal = document.getElementById("box-modal");
var body_u = document.body;

var presto = document.querySelectorAll("li")

presto.forEach(function(boton) {
        boton.addEventListener("click", () => {
            document.getElementById("navbarNav").classList.remove("show")
        })
})






var abrir = document.querySelector(".b-play")
abrir.addEventListener("click", () => 
{
   //Manera Correcta de "Agregar y Remover" Clases CSS
    BoxModal.classList.remove("d-none")
    BoxModal.classList.add("d-flex")  
   // body_u.style.overflow = "hidden"

});


var cerrar = document.getElementById("cerrar")
cerrar.addEventListener("click", () => 
{
    BoxModal.classList.add("d-none")
    BoxModal.classList.remove("d-flex") 
  //  body_u.style.overflow = "visible"
});



const year = document.getElementById("year")
const a_year = new Date().getFullYear();
year.innerText = a_year



window.addEventListener("scroll", () => {
    var sw = window.scrollY
    var redondeo  = Math.ceil(sw) 
    
    if (redondeo > 100 ) {
        naver.classList.add("bg-naver")
        naver.classList.remove("bg-naver2")
    }
    else
    {
        naver.classList.remove("bg-naver")
        naver.classList.add("bg-naver2")
    }

})


